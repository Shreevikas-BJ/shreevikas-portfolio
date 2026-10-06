"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Component, lazy, Suspense, useEffect, useLayoutEffect, useMemo, useRef, type ReactNode } from "react";
import * as THREE from "three";
import { createCortex, createNeuralNetwork } from "@/lib/visuals/brain";

type SceneProps = { animate: boolean; onReady: () => void; onError: () => void };
const DesktopEffects = lazy(() => import("@/components/BrainEffects"));

function NeuralBrain({ animate, onReady, onError }: SceneProps) {
  const group = useRef<THREE.Group>(null);
  const packets = useRef<THREE.InstancedMesh>(null);
  const nodes = useRef<THREE.InstancedMesh>(null);
  const ready = useRef(false);
  const contextAvailable = useRef(true);
  const time = useRef(0);
  const pointer = useRef({ x: 0, y: 0 });
  const transform = useMemo(() => new THREE.Object3D(), []);
  const color = useMemo(() => new THREE.Color(), []);
  const left = useMemo(() => createCortex(-1), []);
  const right = useMemo(() => createCortex(1), []);
  const network = useMemo(() => createNeuralNetwork(), []);
  const { viewport, size, invalidate, gl } = useThree();
  const compact = size.width < 420;
  const scale = Math.min(viewport.width / 4.2, viewport.height / 3.5);

  useEffect(() => () => { left.dispose(); right.dispose(); network.connectionsGeometry.dispose(); }, [left, right, network]);
  useEffect(() => {
    const canvas = gl.domElement;
    const lost = () => { contextAvailable.current = false; onError(); };
    const restored = () => { contextAvailable.current = true; ready.current = false; invalidate(); };
    canvas.addEventListener("webglcontextlost", lost);
    canvas.addEventListener("webglcontextrestored", restored);
    return () => {
      canvas.removeEventListener("webglcontextlost", lost);
      canvas.removeEventListener("webglcontextrestored", restored);
    };
  }, [gl, invalidate, onError]);
  useEffect(() => {
    if (!animate) { invalidate(); return; }
    const interval = window.setInterval(invalidate, 1000 / (compact ? 18 : 24));
    return () => window.clearInterval(interval);
  }, [animate, compact, invalidate]);
  useEffect(() => {
    if (!animate || !matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    const move = (event: PointerEvent) => { pointer.current = { x: event.clientX / innerWidth - 0.5, y: event.clientY / innerHeight - 0.5 }; };
    window.addEventListener("pointermove", move, { passive: true });
    return () => window.removeEventListener("pointermove", move);
  }, [animate]);

  useLayoutEffect(() => {
    network.neurons.forEach((neuron, index) => {
      transform.position.copy(neuron.position);
      transform.scale.setScalar(index % 11 === 0 ? 1.5 : 1);
      transform.updateMatrix();
      nodes.current?.setMatrixAt(index, transform.matrix);
      color.set(index % 11 === 0 ? "#dceeff" : "#6da5dc");
      nodes.current?.setColorAt(index, color);
    });
    if (nodes.current) {
      nodes.current.instanceMatrix.needsUpdate = true;
      if (nodes.current.instanceColor) nodes.current.instanceColor.needsUpdate = true;
    }
    transform.scale.setScalar(1);
  }, [network, transform, color]);

  useFrame((_, delta) => {
    if (!contextAvailable.current) return;
    if (animate) time.current += Math.min(delta, 0.1);
    const elapsed = time.current;
    if (group.current) {
      group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, -0.34 + pointer.current.x * 0.16 + Math.sin(elapsed * 0.14) * 0.08, 0.045);
      group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, 0.36 + pointer.current.y * 0.08, 0.045);
    }
    network.paths.forEach((path, index) => {
      const position = ((elapsed * path.speed + path.offset) % 1) * (path.points.length - 1);
      const segment = Math.floor(position);
      transform.position.copy(path.points[segment]).lerp(path.points[Math.min(segment + 1, path.points.length - 1)], position - segment);
      transform.scale.setScalar(0.75 + 0.25 * Math.sin(elapsed * 1.5 + index));
      transform.updateMatrix();
      packets.current?.setMatrixAt(index, transform.matrix);
    });
    if (packets.current) packets.current.instanceMatrix.needsUpdate = true;
    if (!ready.current) { ready.current = true; onReady(); }
  });

  return (
    <group ref={group} scale={scale} rotation={[0.36, -0.34, -0.055]}>
      {[left, right].map((geometry, index) => (
        <mesh key={index} geometry={geometry}>
          <meshStandardMaterial color="#718596" metalness={0.18} roughness={0.6} transparent opacity={0.88} emissive="#102333" emissiveIntensity={0.18} />
        </mesh>
      ))}
      <lineSegments geometry={network.connectionsGeometry}>
        <lineBasicMaterial color="#7baedd" transparent opacity={0.24} depthWrite={false} />
      </lineSegments>
      <instancedMesh ref={nodes} args={[undefined, undefined, network.neurons.length]}>
        <sphereGeometry args={[0.017, 10, 8]} /><meshBasicMaterial toneMapped={false} />
      </instancedMesh>
      <instancedMesh ref={packets} args={[undefined, undefined, network.paths.length]}>
        <sphereGeometry args={[0.018, 8, 6]} /><meshBasicMaterial color={[0.65, 1.15, 1.8]} toneMapped={false} />
      </instancedMesh>
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
  const setDpr = useThree((state) => state.setDpr);
  useEffect(() => setDpr(Math.min(window.devicePixelRatio, width < 420 ? 1.25 : 1.5)), [width, setDpr]);
  if (width < 420) return null;
  return <Suspense fallback={null}><DesktopEffects /></Suspense>;
}

export default function BrainScene(props: SceneProps) {
  return (
    <SceneBoundary onError={props.onError}>
      <div className="brain-scene" aria-hidden="true">
        <Canvas orthographic camera={{ position: [0, 0, 8], zoom: 105, near: 0.1, far: 50 }} dpr={[1, 1.25]} frameloop="demand" gl={{ alpha: true, antialias: true, powerPreference: "low-power" }} fallback={null}>
          <ambientLight intensity={0.7} />
          <directionalLight position={[-3, 5, 5]} intensity={3.5} color="#e7f1ff" />
          <directionalLight position={[4, 0, -2]} intensity={3} color="#629bd0" />
          <directionalLight position={[0, -3, 4]} intensity={0.6} color="#c6d2de" />
          <NeuralBrain {...props} />
          <SceneEffects />
        </Canvas>
      </div>
    </SceneBoundary>
  );
}
