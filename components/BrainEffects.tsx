"use client";

import { Bloom, EffectComposer } from "@react-three/postprocessing";

export default function BrainEffects() {
  return <EffectComposer multisampling={2}><Bloom intensity={0.18} luminanceThreshold={1.2} mipmapBlur /></EffectComposer>;
}
