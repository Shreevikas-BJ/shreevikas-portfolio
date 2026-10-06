# Visual Assets

The work-experience logos are unmodified 200px company marks from the public LinkedIn pages supplied by Shreevikas, downloaded on October 5, 2026 and served locally.

- [NeuralSeek](https://www.linkedin.com/company/neuralseek/posts/?feedView=all): `public/images/experience/neuralseek.jpg`.
- [Whiterock](https://www.linkedin.com/company/whiterocktechnologies/): `public/images/experience/whiterock.jpg`.

Company names and marks belong to their respective owners. Their use identifies professional experience; it does not imply endorsement.

The hero uses `public/images/brain-circuit-hero.webp`, an original AI-generated concept render inspired by the reference supplied on October 5, 2026. It is served locally as a 1280px WebP under 150 KB. This is an illustrative AI/processor metaphor, not an anatomical scan, measured neural activity, or a research result.

The animated version maps the artwork onto a shallow Three.js relief surface: the cortex and processor project forward slightly, while 24 pooled amber signals follow neural folds and circuit traces. The artwork remains identical in the reduced-motion, loading, and no-WebGL fallback. Rendering uses a demand loop, bounded device pixel ratio, mobile-specific frame rates, no shadows, and desktop-only subtle bloom. The scene stops while outside the viewport or in a hidden tab. This is not a volumetric anatomical reconstruction.

The hero uses screen compositing against the page's near-black background and a shared feathered mask for both WebGL and still-image modes. Circuit traces dissolve into the page without a rectangular image boundary. The obsolete decorative data-flow backdrop is no longer loaded. An amber hero link connects the artwork to the otherwise neutral/blue editorial interface.

Generated with the built-in image generation tool. Prompt: "An original photorealistic 3D render of a dark graphite human brain with intricate irregular organic cortical folds, perched on a square black silicon chip on a refined motherboard. Fine copper and amber-gold circuits illuminate selected seams and run across the board. Three-quarter view, restrained amber glow, cooler graphite highlights, landscape 3:2 composition, near-black edges. No text, labels, logos, bokeh blobs, particles, sparks, or lens flares. A conceptual AI engineering visual, not a medical scan."

Run `npm run test:visuals` to check relief bounds, camera-facing normals, finite circuit paths, and the artwork size budget. Browser verification also covers image loading, moving/nonblank canvas pixels, and overflow at phone/tablet/desktop widths.
