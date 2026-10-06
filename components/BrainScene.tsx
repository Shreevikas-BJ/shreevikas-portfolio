"use client";

import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import { Component, lazy, Suspense, useEffect, useMemo, useRef, type ReactNode } from "react";
import * as THREE from "three";
import { BRAIN_ARTWORK, BRAIN_FRAME, createBrainRelief, createCircuitSignals } from "@/lib/visuals/brainCircuit";

type SceneProps = { animate: boolean; onReady: () => void; onError: () => void };
const DesktopEffects = lazy(() => import("@/components/BrainEffects"));

function NeuralBrain({ animate, onReady, onError }: SceneProps) {
  const group = useRef<THREE.Group>(null);
  const packets = useRef<THREE.InstancedMesh>(null);
  const ready = useRef(false);
  const contextAvailable = useRef(true);
  const time = useRef(0);
  const pointer = useRef({ x: 0, y: 0 });
  const transform = useMemo(() => new THREE.Object3D(), []);
  const relief = useMemo(() => createBrainRelief(), []);
  const network = useMemo(() => createCircuitSignals(), []);
  const artwork = useLoader(THREE.TextureLoader, BRAIN_ARTWORK);
  const { viewport, size, invalidate, gl } = useThree();
  const texture = useMemo(() => {
    const copy = artwork.clone();
    copy.colorSpace = THREE.SRGBColorSpace;
    copy.anisotropy = Math.min(4, gl.capabilities.getMaxAnisotropy());
    copy.needsUpdate = true;
    return copy;
  }, [artwork, gl]);
  const compact = size.width < 420;
  const scale = Math.min(viewport.width / BRAIN_FRAME.width, viewport.height / BRAIN_FRAME.height) * 0.98;

  useEffect(() => {
    invalidate();
    return () => texture.dispose();
  }, [texture, invalidate]);
  useEffect(() => () => { relief.dispose(); network.connectionsGeometry.dispose(); }, [relief, network]);
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

  useFrame((_, delta) => {
    if (!contextAvailable.current) return;
    if (animate) time.current += Math.min(delta, 0.1);
    const elapsed = time.current;
    if (group.current) {
      group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, pointer.current.x * 0.055 + Math.sin(elapsed * 0.16) * 0.008, 0.06);
      group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, pointer.current.y * 0.035, 0.06);
    }
    network.paths.forEach((path, index) => {
      const position = ((elapsed * path.speed + path.offset) % 1) * (path.points.length - 1);
      const segment = Math.floor(position);
      transform.position.copy(path.points[segment]).lerp(path.points[Math.min(segment + 1, path.points.length - 1)], position - segment);
      const progress = position / (path.points.length - 1);
      transform.scale.setScalar(Math.sin(progress * Math.PI) * (0.7 + 0.2 * Math.sin(elapsed * 2 + index)));
      transform.updateMatrix();
      packets.current?.setMatrixAt(index, transform.matrix);
    });
    if (packets.current) packets.current.instanceMatrix.needsUpdate = true;
    if (!ready.current) { ready.current = true; onReady(); }
  });

  return (
    <group ref={group} scale={scale}>
      <mesh geometry={relief}>
        <meshBasicMaterial map={texture} toneMapped={false} />
      </mesh>
      <lineSegments geometry={network.connectionsGeometry}>
        <lineBasicMaterial color="#ffa82e" transparent opacity={0.075} depthWrite={false} toneMapped={false} />
      </lineSegments>
      <instancedMesh ref={packets} args={[undefined, undefined, network.paths.length]}>
        <sphereGeometry args={[0.023, 8, 6]} /><meshBasicMaterial color={[2.5, 1.3, 0.15]} toneMapped={false} transparent opacity={0.8} depthWrite={false} />
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
          <Suspense fallback={null}><NeuralBrain {...props} /></Suspense>
          <SceneEffects />
        </Canvas>
      </div>
    </SceneBoundary>
  );
}
