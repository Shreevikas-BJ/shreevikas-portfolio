import * as THREE from "three";

export const BRAIN_ARTWORK = "/images/brain-circuit-hero.webp";
export const BRAIN_FRAME = { width: 6, height: 4 } as const;
export type NeuralPath = { points: THREE.Vector3[]; speed: number; offset: number };

// A shallow relief preserves the art direction while giving the brain and chip real parallax.
export function brainDepth(u: number, v: number) {
  const radius = Math.hypot((u - 0.5) / 0.225, (v - 0.385) / 0.235);
  const cortex = 1 - THREE.MathUtils.smoothstep(radius, 0.25, 1.05);
  const chip = (1 - THREE.MathUtils.smoothstep(Math.abs(u - 0.5), 0.14, 0.25))
    * (1 - THREE.MathUtils.smoothstep(Math.abs(v - 0.64), 0.025, 0.11));
  return cortex * 0.4 + chip * 0.06;
}

export function artworkPoint(u: number, v: number, lift = 0) {
  return new THREE.Vector3((u - 0.5) * BRAIN_FRAME.width, (0.5 - v) * BRAIN_FRAME.height, brainDepth(u, v) + lift);
}

export function createBrainRelief() {
  const geometry = new THREE.PlaneGeometry(BRAIN_FRAME.width, BRAIN_FRAME.height, 128, 86);
  const positions = geometry.getAttribute("position");
  const uv = geometry.getAttribute("uv");
  for (let index = 0; index < positions.count; index++) {
    positions.setZ(index, brainDepth(uv.getX(index), 1 - uv.getY(index)));
  }
  geometry.computeVertexNormals();
  geometry.computeBoundingSphere();
  return geometry;
}

// Image-space anchors follow the illuminated folds, processor pins, and motherboard traces.
const signalRoutes: [number, number][][] = [
  [[0.535, 0.198], [0.552, 0.235], [0.58, 0.28], [0.569, 0.345], [0.581, 0.395]],
  [[0.577, 0.314], [0.577, 0.38], [0.567, 0.423], [0.553, 0.475], [0.535, 0.528]],
  [[0.616, 0.223], [0.644, 0.278], [0.645, 0.351], [0.665, 0.398], [0.655, 0.464]],
  [[0.673, 0.363], [0.681, 0.43], [0.658, 0.49], [0.627, 0.527], [0.608, 0.564]],
  [[0.37, 0.477], [0.4, 0.503], [0.437, 0.493], [0.465, 0.521], [0.5, 0.528]],
  [[0.46, 0.518], [0.469, 0.566], [0.47, 0.614], [0.472, 0.67]],
  [[0.523, 0.543], [0.526, 0.589], [0.527, 0.624], [0.53, 0.683]],
  [[0.633, 0.502], [0.643, 0.552], [0.645, 0.603], [0.648, 0.639]],
  [[0.316, 0.598], [0.269, 0.627], [0.243, 0.624], [0.221, 0.658], [0.12, 0.734]],
  [[0.329, 0.614], [0.288, 0.65], [0.262, 0.651], [0.242, 0.679], [0.062, 0.802]],
  [[0.351, 0.644], [0.304, 0.686], [0.294, 0.712], [0.244, 0.748], [0.204, 0.834]],
  [[0.389, 0.68], [0.367, 0.72], [0.34, 0.749], [0.319, 0.803], [0.285, 0.856]],
  [[0.446, 0.719], [0.434, 0.766], [0.392, 0.798], [0.373, 0.856], [0.35, 0.926]],
  [[0.479, 0.736], [0.472, 0.78], [0.455, 0.806], [0.434, 0.878], [0.409, 0.951]],
  [[0.51, 0.753], [0.529, 0.784], [0.549, 0.788], [0.57, 0.827], [0.608, 0.917]],
  [[0.562, 0.718], [0.584, 0.752], [0.619, 0.769], [0.647, 0.81], [0.688, 0.918]],
  [[0.606, 0.691], [0.647, 0.718], [0.67, 0.718], [0.72, 0.758], [0.828, 0.839]],
  [[0.648, 0.665], [0.686, 0.684], [0.723, 0.688], [0.772, 0.73], [0.9, 0.79]],
  [[0.691, 0.627], [0.718, 0.641], [0.766, 0.638], [0.808, 0.663], [0.936, 0.693]],
  [[0.72, 0.589], [0.776, 0.564], [0.793, 0.526], [0.856, 0.507], [0.913, 0.483]],
  [[0.675, 0.551], [0.74, 0.526], [0.763, 0.48], [0.83, 0.46]],
  [[0.337, 0.546], [0.287, 0.531], [0.271, 0.493], [0.194, 0.461], [0.08, 0.418]],
  [[0.301, 0.57], [0.228, 0.552], [0.206, 0.518], [0.149, 0.492], [0.045, 0.459]],
  [[0.35, 0.583], [0.304, 0.565], [0.262, 0.571], [0.207, 0.604], [0.09, 0.648]],
];

export function createCircuitSignals() {
  const paths: NeuralPath[] = signalRoutes.map((route, index) => {
    const curve = new THREE.CatmullRomCurve3(route.map(([u, v]) => artworkPoint(u, v, 0.02)), false, "centripetal");
    return { points: curve.getPoints(48), speed: 0.1 + (index % 5) * 0.015, offset: (index * 0.173) % 1 };
  });
  const positions = new Float32Array(paths.flatMap((path) => path.points.slice(1)
    .flatMap((point, index) => [...path.points[index].toArray(), ...point.toArray()])));
  const connectionsGeometry = new THREE.BufferGeometry();
  connectionsGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  connectionsGeometry.computeBoundingSphere();
  return { paths, connectionsGeometry };
}
