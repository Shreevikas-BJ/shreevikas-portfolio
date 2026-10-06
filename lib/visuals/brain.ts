import * as THREE from "three";

type Neuron = { unit: THREE.Vector3; side: number; position: THREE.Vector3 };
export type NeuralPath = { points: THREE.Vector3[]; speed: number; offset: number };

const goldenAngle = Math.PI * (3 - Math.sqrt(5));

// An illustrative cortex: folded ellipsoids, a medial fissure, and a temporal taper.
export function cortexPosition(unit: THREE.Vector3, side: number, lift = 0) {
  const { x, y, z } = unit;
  const theta = Math.atan2(z, x);
  const phi = Math.acos(THREE.MathUtils.clamp(y, -1, 1));
  const phase = phi * 19 + 3 * Math.sin(theta * 2 + phi * 2) + 1.3 * Math.sin(theta * 5 - phi * 3);
  const groove = Math.pow(0.5 + 0.5 * Math.cos(phase), 5);
  const folds = 1 - Math.sin(phi) * (0.075 * groove + 0.008 * Math.sin(theta * 11 + phi * 13));
  const taper = 1 - 0.16 * Math.max(0, -y) - 0.07 * Math.max(0, -z);
  const radius = folds + lift;
  const across = x < 0 ? (x + 1) * 0.06 : 0.06 + x * 1.48;
  return new THREE.Vector3(
    side * (0.04 + across * taper * radius),
    y * 1.04 * radius + z * 0.13,
    z * 1.3 * radius + 0.08 * (1 - y * y)
  );
}

export function createCortex(side: number) {
  const geometry = new THREE.SphereGeometry(1, 112, 80);
  const positions = geometry.attributes.position;
  const unit = new THREE.Vector3();
  for (let index = 0; index < positions.count; index++) {
    unit.fromBufferAttribute(positions, index).normalize();
    const point = cortexPosition(unit, side);
    positions.setXYZ(index, point.x, point.y, point.z);
  }
  // Mirroring a hemisphere must also reverse triangle winding for correct lighting.
  if (side < 0 && geometry.index) {
    const indices = geometry.index;
    for (let index = 0; index < indices.count; index += 3) {
      const first = indices.getX(index);
      indices.setX(index, indices.getX(index + 2));
      indices.setX(index + 2, first);
    }
  }
  geometry.computeVertexNormals();
  geometry.computeBoundingSphere();
  return geometry;
}

export function createNeuralNetwork() {
  const neurons: Neuron[] = [-1, 1].flatMap((side) => Array.from({ length: 64 }, (_, index) => {
    const y = 1 - 2 * (index + 0.5) / 64;
    const radius = Math.sqrt(1 - y * y);
    const theta = index * goldenAngle;
    const unit = new THREE.Vector3(Math.cos(theta) * radius, y, Math.sin(theta) * radius);
    return { unit, side, position: cortexPosition(unit, side, 0.045) };
  }));
  const paths: NeuralPath[] = [];
  const connections = new Set<string>();
  neurons.forEach((neuron, index) => {
    const neighbors = neurons.map((other, otherIndex) => ({ index: otherIndex, distance: neuron.unit.distanceToSquared(other.unit), side: other.side }))
      .filter((other) => other.index !== index && other.side === neuron.side)
      .sort((a, b) => a.distance - b.distance).slice(0, 2);
    neighbors.forEach((neighbor) => {
      const key = [index, neighbor.index].sort((a, b) => a - b).join("-");
      if (connections.has(key)) return;
      connections.add(key);
      const target = neurons[neighbor.index];
      const points = Array.from({ length: 25 }, (_, step) => cortexPosition(neuron.unit.clone().lerp(target.unit, step / 24).normalize(), neuron.side, 0.05));
      paths.push({ points, speed: 0.08 + (index % 4) * 0.013, offset: index * 0.137 });
    });
  });
  const front = neurons.filter((neuron) => neuron.side === -1 && neuron.unit.z > 0.35 && Math.abs(neuron.position.x) < 0.65).slice(0, 6);
  front.forEach((neuron, index) => {
    const target = neuron.position.clone();
    target.x *= -1;
    const curve = new THREE.CatmullRomCurve3([neuron.position, new THREE.Vector3(0, neuron.position.y * 0.8, 1.32), target]);
    paths.push({ points: curve.getPoints(32), speed: 0.1, offset: index * 0.21 });
  });
  const positions = new Float32Array(paths.flatMap((path) => path.points.slice(1).flatMap((point, index) => [...path.points[index].toArray(), ...point.toArray()])));
  const connectionsGeometry = new THREE.BufferGeometry();
  connectionsGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  connectionsGeometry.computeBoundingSphere();
  return { neurons, paths, connectionsGeometry };
}
