import assert from "node:assert/strict";
import { BRAIN_ARTWORK, BRAIN_FRAME, brainDepth, createBrainRelief, createCircuitSignals } from "../lib/visuals/brainCircuit";
import { statSync } from "node:fs";

const geometry = createBrainRelief();
for (const name of ["position", "normal", "uv"]) {
  assert.ok(Array.from(geometry.getAttribute(name).array).every(Number.isFinite), `${name} must be finite`);
}
geometry.computeBoundingBox();
const bounds = geometry.boundingBox!;
assert.equal(bounds.max.x - bounds.min.x, BRAIN_FRAME.width);
assert.equal(bounds.max.y - bounds.min.y, BRAIN_FRAME.height);
assert.ok(bounds.min.z >= 0 && bounds.max.z < 0.5, "Relief should remain shallow to preserve the composition");
assert.ok(brainDepth(0.5, 0.385) > brainDepth(0.1, 0.1), "Brain should sit in front of the motherboard");
assert.ok(brainDepth(0.5, 0.64) > brainDepth(0.1, 0.64), "Processor should be raised above surrounding traces");
const normals = geometry.getAttribute("normal");
for (let index = 0; index < normals.count; index++) assert.ok(normals.getZ(index) > 0, "Relief normals must face the camera");
assert.ok(statSync(`public${BRAIN_ARTWORK}`).size < 200_000, "Hero artwork should stay below 200 KB");

const signals = createCircuitSignals();
assert.equal(signals.paths.length, 24);
assert.ok(signals.paths.every((path) => path.points.length === 49 && path.speed > 0 && path.offset >= 0 && path.offset < 1));
assert.ok(signals.paths.every((path) => path.points.every((point) => point.toArray().every(Number.isFinite)
  && Math.abs(point.x) < 3 && Math.abs(point.y) < 2 && point.z > 0 && point.z < 0.5)));
assert.ok(Array.from(signals.connectionsGeometry.getAttribute("position").array).every(Number.isFinite));
geometry.dispose();
signals.connectionsGeometry.dispose();
console.log("Brain visual passed: shallow 3D relief, 24 bounded circuit/neural signal routes, finite outward normals, and artwork under 200 KB.");
