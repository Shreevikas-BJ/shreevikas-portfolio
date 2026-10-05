"use client";

import { Bloom, EffectComposer } from "@react-three/postprocessing";

export default function BrainEffects() {
  return <EffectComposer multisampling={0}><Bloom intensity={0.28} luminanceThreshold={0.8} mipmapBlur /></EffectComposer>;
}
