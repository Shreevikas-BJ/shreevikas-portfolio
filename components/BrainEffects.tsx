"use client";

import { Bloom, EffectComposer } from "@react-three/postprocessing";

export default function BrainEffects() {
  return <EffectComposer multisampling={4}><Bloom intensity={0.18} luminanceThreshold={1} mipmapBlur /></EffectComposer>;
}
