"use client";

import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import { RoundedBox } from "@react-three/drei/core/RoundedBox";
import { Line } from "@react-three/drei/core/Line";
import { Component, Suspense, useEffect, useMemo, useRef, type ReactNode } from "react";
import * as THREE from "three";

type SceneProps = { animate: boolean; onReady: () => void; onError: () => void };
const waves = Array.from({ length: 8 }, (_, row) => Array.from({ length: 65 }, (_, index) => {
  const x = index / 64 * 5 - 2.5;
  return new THREE.Vector3(x, -1.22 + row * 0.085 + Math.sin(x * 2.2 + row * 0.38) * 0.18, -0.6);
}));
const pins = Array.from({ length: 7 }, (_, index) => (index - 3) * 0.32);

function PhysicsProcessor({ animate, onReady }: SceneProps) {
  const device = useRef<THREE.Group>(null);
  const firstFrame = useRef(true);
  const elapsed = useRef(0);
  const source = useLoader(THREE.TextureLoader, "/images/nvidia-logo.svg");
  const logo = useMemo(() => {
    // SVGs without intrinsic dimensions cannot be uploaded reliably to WebGL.
    const canvas = document.createElement("canvas");
    canvas.width = 512;
    canvas.height = 288;
    const context = canvas.getContext("2d");
    if (!context) throw new Error("Unable to prepare the research texture.");
    context.drawImage(source.image, 0, 0, 512, 288);
    const texture = new THREE.CanvasTexture(canvas);
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.anisotropy = 4;
    texture.needsUpdate = true;
    return texture;
  }, [source]);
  const { invalidate } = useThree();

  useEffect(() => () => logo.dispose(), [logo]);
  useEffect(() => {
    if (!animate) { invalidate(); return; }
    const interval = window.setInterval(invalidate, 1000 / 24);
    return () => window.clearInterval(interval);
  }, [animate, invalidate]);

  useFrame((_, delta) => {
    if (animate) elapsed.current += Math.min(delta, 0.1);
    if (device.current) {
      device.current.rotation.y = -0.24 + Math.sin(elapsed.current * 0.35) * 0.08;
      device.current.rotation.x = 0.16 + Math.cos(elapsed.current * 0.3) * 0.035;
    }
    if (firstFrame.current) { firstFrame.current = false; onReady(); }
  });

  return (
    <>
      {waves.map((points, index) => <Line key={index} points={points} lineWidth={0.7} color="#719297" transparent opacity={0.28} />)}
      <group ref={device} position={[0, 0.08, 0]} rotation={[0.16, -0.24, 0]}>
        <RoundedBox args={[2.95, 1.95, 0.28]} radius={0.1} smoothness={4}>
          <meshStandardMaterial color="#3c4651" metalness={0.8} roughness={0.32} />
        </RoundedBox>
        <RoundedBox args={[2.7, 1.7, 0.08]} radius={0.025} smoothness={4} position={[0, 0, 0.17]}>
          <meshStandardMaterial color="#f5f5f0" metalness={0.1} roughness={0.55} />
        </RoundedBox>
        <mesh position={[0, 0, 0.216]}>
          <planeGeometry args={[2.64, 1.485]} />
          <meshBasicMaterial map={logo} transparent toneMapped={false} />
        </mesh>
        {[-1, 1].flatMap((side) => pins.map((offset, index) => (
          <mesh key={`${side}-${index}`} position={[offset, side * 1.08, 0]}>
            <boxGeometry args={[0.11, 0.22, 0.1]} /><meshStandardMaterial color="#b6c1ca" metalness={0.9} roughness={0.28} />
          </mesh>
        )))}
        {[-1, 1].flatMap((side) => pins.slice(1, 6).map((offset, index) => (
          <mesh key={`edge-${side}-${index}`} position={[side * 1.58, offset, 0]}>
            <boxGeometry args={[0.22, 0.11, 0.1]} /><meshStandardMaterial color="#b6c1ca" metalness={0.9} roughness={0.28} />
          </mesh>
        )))}
      </group>
    </>
  );
}

class ResearchBoundary extends Component<{ children: ReactNode; onError: () => void }, { failed: boolean }> {
  state = { failed: false };
  static getDerivedStateFromError() { return { failed: true }; }
  componentDidCatch() { this.props.onError(); }
  render() { return this.state.failed ? null : this.props.children; }
}

export default function ResearchScene(props: SceneProps) {
  return (
    <ResearchBoundary onError={props.onError}>
      <div className="research-scene" aria-hidden="true">
        <Canvas orthographic camera={{ position: [0, 0, 8], zoom: 64, near: 0.1, far: 30 }} dpr={[1, 1.5]} frameloop="demand" gl={{ alpha: true, antialias: true, powerPreference: "low-power", preserveDrawingBuffer: true }}>
          <ambientLight intensity={2} />
          <directionalLight position={[1, 3, 5]} intensity={3} />
          <directionalLight position={[-3, -1, 2]} intensity={1} color="#91b0d0" />
          <Suspense fallback={null}><PhysicsProcessor {...props} /></Suspense>
        </Canvas>
      </div>
    </ResearchBoundary>
  );
}
