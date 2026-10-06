import assert from "node:assert/strict";
import { createCortex, createNeuralNetwork } from "../lib/visuals/brain";

for (const side of [-1, 1]) {
  const geometry = createCortex(side);
  for (const name of ["position", "normal"]) {
    const values = geometry.getAttribute(name).array;
    assert.ok(Array.from(values).every(Number.isFinite), `${name} must be finite`);
  }
  geometry.computeBoundingBox();
  const bounds = geometry.boundingBox!;
  assert.ok(bounds.max.x - bounds.min.x > 1.3);
  assert.ok(bounds.max.y - bounds.min.y > 1.9);
  assert.ok(bounds.max.z - bounds.min.z > 2.3);
  assert.ok(side === 1 ? bounds.min.x > 0 : bounds.max.x < 0, "Hemispheres must preserve the central fissure");
  const positions = geometry.getAttribute("position");
  const normals = geometry.getAttribute("normal");
  let outward = 0;
  for (let index = 0; index < positions.count; index++) {
    outward += (positions.getX(index) - side * 0.8) * normals.getX(index) + positions.getY(index) * normals.getY(index) + positions.getZ(index) * normals.getZ(index);
  }
  assert.ok(outward > 0, "Mirrored hemisphere normals must face outward");
  geometry.dispose();
}
const network = createNeuralNetwork();
assert.equal(network.neurons.length, 128);
assert.ok(network.paths.length > 100 && network.paths.length < 200);
assert.ok(network.paths.every((path) => path.points.every((point) => point.toArray().every(Number.isFinite))));
assert.ok(network.neurons.every((neuron) => Math.abs(neuron.position.x) < 1.8 && Math.abs(neuron.position.y) < 1.3 && Math.abs(neuron.position.z) < 1.5));
assert.ok(Array.from(network.connectionsGeometry.getAttribute("position").array).every(Number.isFinite));
network.connectionsGeometry.dispose();
console.log(`Brain geometry passed: two folded hemispheres, 128 neurons, ${network.paths.length} curved neural paths, finite bounds and outward normals.`);
