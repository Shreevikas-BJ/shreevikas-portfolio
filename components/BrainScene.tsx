"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Line } from "@react-three/drei/core/Line";
import { Component, lazy, Suspense, useEffect, useLayoutEffect, useMemo, useRef, type ReactNode } from "react";
import * as THREE from "three";

type SceneProps = { animate: boolean; onReady: () => void; onError: () => void };
const DesktopEffects = lazy(() => import("@/components/BrainEffects"));

function cortexPoint(theta: number, phi: number, side: number) {
  const x = Math.sin(phi) * Math.cos(theta);
  const y = Math.cos(phi);
  const z = Math.sin(phi) * Math.sin(theta);
  const fold = 1 + 0.065 * Math.sin(x * 13 + z * 3) * Math.sin(y * 13 + x * 3) + 0.03 * Math.cos(z * 16 + y * 4);
  return new THREE.Vector3(side * 0.97 + x * fold * 1.13, y * fold * 1.38, z * fold);
}

function makeCortex(side: number) {
  const geometry = new THREE.SphereGeometry(1, 40, 26);
  const positions = geometry.attributes.position;
  for (let index = 0; index < positions.count; index++) {
    const unit = new THREE.Vector3().fromBufferAttribute(positions, index).normalize();
    const point = cortexPoint(Math.atan2(unit.z, unit.x), Math.acos(Math.max(-1, Math.min(1, unit.y))), side);
    positions.setXYZ(index, point.x, point.y, point.z);
  }
  geometry.computeVertexNormals();
  return geometry;
}

const cells = Array.from({ length: 36 }, (_, index) => ({ row: Math.floor(index / 6), column: index % 6 }));
const inputs = Array.from({ length: 6 }, (_, index) => new THREE.Vector3(-1.75, 0.85 - index * 0.34, 0.35));
const models = Array.from({ length: 5 }, (_, index) => new THREE.Vector3(0.8, 0.7 - index * 0.35, index % 2 ? 0.35 : -0.1));
const outputs = Array.from({ length: 4 }, (_, index) => new THREE.Vector3(1.7, 0.54 - index * 0.36, 0.28));
const routes = [
  ...inputs.map((point, index) => [point, new THREE.Vector3(-0.68, 0.5 - index * 0.2, 0.25)]),
  ...models.map((point, index) => [new THREE.Vector3(0.38, 0.42 - index * 0.2, 0.3), point]),
  ...models.flatMap((point, index) => [0, 1].map((offset) => [point, outputs[(index + offset) % outputs.length]]))
].map(([start, end], index) => new THREE.CatmullRomCurve3([
  start,
  start.clone().lerp(end, 0.4).add(new THREE.Vector3(0, Math.sin(index * 2) * 0.12, 0.25)),
  end
]));
const cortexLines = [-1, 1].flatMap((side) => Array.from({ length: 7 }, (_, row) =>
  Array.from({ length: 49 }, (_, index) => cortexPoint(index / 48 * Math.PI * 2, (row + 1) / 8 * Math.PI, side))
));

function NeuralBrain({ animate, onReady }: SceneProps) {
  const group = useRef<THREE.Group>(null);
  const packets = useRef<THREE.InstancedMesh>(null);
  const attention = useRef<THREE.InstancedMesh>(null);
  const ready = useRef(false);
  const pointer = useRef({ x: 0, y: 0 });
  const transform = useMemo(() => new THREE.Object3D(), []);
  const color = useMemo(() => new THREE.Color(), []);
  const left = useMemo(() => makeCortex(-1), []);
  const right = useMemo(() => makeCortex(1), []);
  const { viewport, size, invalidate } = useThree();
  const compact = size.width < 700;
  const scale = compact ? Math.min(viewport.width / 5.4, 0.9) : Math.min(viewport.width / 12, 1.3);

  useEffect(() => () => { left.dispose(); right.dispose(); }, [left, right]);
  useEffect(() => {
    if (!animate) { invalidate(); return; }
    const interval = window.setInterval(invalidate, 1000 / 30);
    return () => window.clearInterval(interval);
  }, [animate, invalidate]);
  useEffect(() => {
    if (!animate || !matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    const move = (event: PointerEvent) => { pointer.current = { x: event.clientX / innerWidth - 0.5, y: event.clientY / innerHeight - 0.5 }; };
    window.addEventListener("pointermove", move, { passive: true });
    return () => window.removeEventListener("pointermove", move);
  }, [animate]);

  useLayoutEffect(() => {
    cells.forEach(({ row, column }, index) => {
      transform.position.set(-0.65 + column * 0.165, 0.47 - row * 0.165, 0.45);
      transform.updateMatrix();
      attention.current?.setMatrixAt(index, transform.matrix);
    });
    if (attention.current) attention.current.instanceMatrix.needsUpdate = true;
  }, [transform]);

  useFrame(({ clock }) => {
    const time = clock.elapsedTime;
    if (group.current && animate) {
      group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, -0.23 + pointer.current.x * 0.12 + Math.sin(time * 0.16) * 0.05, 0.04);
      group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, 0.12 + pointer.current.y * 0.08, 0.04);
    }
    routes.forEach((curve, index) => {
      transform.position.copy(curve.getPointAt((time * 0.12 + index * 0.19) % 1));
      transform.updateMatrix();
      packets.current?.setMatrixAt(index, transform.matrix);
    });
    if (packets.current) packets.current.instanceMatrix.needsUpdate = true;
    cells.forEach(({ row, column }, index) => {
      const weight = column <= row ? 0.35 + (Math.sin(time * 0.7 - index * 0.31) + 1) * 0.22 : 0.06;
      color.setRGB(weight * 0.2, weight * 0.65, weight * 1.3);
      attention.current?.setColorAt(index, color);
    });
    if (attention.current?.instanceColor) attention.current.instanceColor.needsUpdate = true;
    if (!ready.current) { ready.current = true; onReady(); }
  });

  return (
    <group ref={group} position={[compact ? viewport.width * 0.02 : viewport.width * 0.25, -viewport.height * 0.19, 0]} scale={scale} rotation={[0.12, -0.23, 0]}>
      {[left, right].map((geometry, index) => (
        <group key={index}>
          <mesh geometry={geometry}><meshStandardMaterial color="#626a73" metalness={0.6} roughness={0.45} transparent opacity={0.23} depthWrite={false} /></mesh>
          <mesh geometry={geometry}><meshBasicMaterial color="#7a8998" wireframe transparent opacity={0.09} depthWrite={false} /></mesh>
        </group>
      ))}
      {cortexLines.map((points, index) => <Line key={`fold-${index}`} points={points} color="#8a9aaa" lineWidth={0.8} transparent opacity={0.35} />)}
      {routes.map((curve, index) => <Line key={index} points={curve.getPoints(20)} color="#5782a8" lineWidth={0.6} transparent opacity={0.3} />)}
      {[...inputs, ...models, ...outputs].map((point, index) => <mesh key={`neuron-${index}`} position={point}><octahedronGeometry args={[0.055]} /><meshBasicMaterial color="#78a5cf" /></mesh>)}
      <instancedMesh ref={attention} args={[undefined, undefined, 36]}><boxGeometry args={[0.105, 0.105, 0.055]} /><meshBasicMaterial toneMapped={false} /></instancedMesh>
      <instancedMesh ref={packets} args={[undefined, undefined, routes.length]}><sphereGeometry args={[0.026, 8, 6]} /><meshBasicMaterial color={[0.2, 0.75, 2]} toneMapped={false} /></instancedMesh>
    </group>
  );
}

class SceneBoundary extends Component<{ children: ReactNode; onError: () => void }, { failed: boolean }> {
  state = { failed: false };
  static getDerivedStateFromError() { return { failed: true }; }
  componentDidCatch() { this.props.onError(); }
  render() { return this.state.failed ? null : this.props.children; }
}

function SceneEffects() {
  const width = useThree((state) => state.size.width);
  if (width < 900) return null;
  return <Suspense fallback={null}><DesktopEffects /></Suspense>;
}

export default function BrainScene(props: SceneProps) {
  return (
    <SceneBoundary onError={props.onError}>
      <div className="brain-scene" aria-hidden="true">
        <Canvas orthographic camera={{ position: [0, 0, 8], zoom: 105, near: 0.1, far: 50 }} dpr={[1, 1.25]} frameloop="demand" gl={{ alpha: true, antialias: true, powerPreference: "low-power", preserveDrawingBuffer: true }} fallback={null}>
          <ambientLight intensity={1.7} />
          <directionalLight position={[2, 4, 5]} intensity={2.5} color="#f5f5f0" />
          <directionalLight position={[-3, 0, 2]} intensity={0.7} color="#669dce" />
          <NeuralBrain {...props} />
          <SceneEffects />
        </Canvas>
      </div>
    </SceneBoundary>
  );
}
