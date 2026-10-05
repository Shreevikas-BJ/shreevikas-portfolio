# Shreevikas Jagadish Portfolio

A portfolio for Shreevikas Jagadish, an AI/ML Engineer building production ML, agentic AI, RAG, predictive models, and cloud data systems. Professional experience follows the latest resume: NeuralSeek (AI Engineer Intern, July-November 2025) and Whiterock (Data Scientist AI/ML, February 2022-July 2024).

**Live site:** [shreevikas-portfolio.vercel.app](https://shreevikas-portfolio.vercel.app/)

## Design

- Dark-only editorial design: near-black, off-white, and one blue accent
- Inter body typography and Space Grotesk headings, self-hosted through `next/font`
- Full-width hero with optimized bitmap artwork and generous whitespace
- A full-bleed 3D brain with folded hemispheres, attention cells, and travelling signals, built with React Three Fiber. This unlabelled, stylized visualization is not live model inference.
- A stationary bottom-right robot holds the clickable "I'm Shreevikas's assistant" board. It never follows scrolling or covers the page with moving effects.
- The scene is lazy-loaded, uses smooth cortical contours and instanced signals, and runs at a capped 30 frames/second on desktop or 20 on phones, only while visible. Phones, touch devices, and data-saving connections start with the lightweight animated SVG and upgrade to WebGL after interaction. Antialiased desktop rendering, reduced-motion support, and a static fallback keep the experience usable without WebGL. There is no pause button beside the assistant.
- Distinct project schematics illustrate orchestration, evaluation, retrieval, procurement, cost intelligence, and medallion processing without fabricated metrics or screenshots.
- A lazy-loaded 3D processor beside the research displays NVIDIA's unchanged official logo, with restrained scientific wave contours. Rendering stops offscreen and in hidden tabs; reduced-motion and WebGL fallback visitors see a static image.
- Six selected projects presented as open, full-width rows rather than a card grid
- Sixteen additional projects in keyboard-accessible category disclosures: Data Science / ML / MLOps, GenAI / RAG / Agents, Data Engineering, and Analytics / Dashboards
- Resume-based work experience, scientific-AI research, education with official university logos, and clean certification rows
- AWS and Google credential links; Anthropic AI Fluency is shown without a link until one is supplied
- Statically generated `/projects/[slug]` case studies: Problem, Approach, Outcome, Links
- Two short, one-time scroll reveals that respect reduced-motion preferences
- Semantic content, keyboard focus states, and a working skip link
- Mobile-first layouts with a 1200px maximum content width
- Project metadata, canonical URLs, Open Graph, robots, and sitemap
- GitHub, LinkedIn, and email links in a minimal footer

## Flagship Work

- ArchPilot: a multi-agent architecture copilot with FastAPI, PydanticAI, JEV System One routing, PostgreSQL, and local 27B quantized inference through llama.cpp. No public repository or live link is available yet.
- [AgentShield](https://github.com/Shreevikas-BJ/agentshield): AI-agent QA, red-team evaluation, and launch-readiness analysis.
- [AI/ML Knowledge Assistant](https://github.com/Shreevikas-BJ/ml-course-document-rag): production RAG with pgvector, Jina, Groq, clickable citations, refusal handling, three caching layers, and latency observability.
- [Accord Procurement AI](https://github.com/Shreevikas-BJ/accord-procurement-ai): a local procurement prototype with document extraction, supplier comparison, deterministic calculations, human approval, and audit trails. Independent extraction holdouts still show generalization limits; the prototype is not ready for a buyer pilot.
- [AI FinOps Copilot](https://github.com/Shreevikas-BJ/ai-finops-copilot): action-oriented AWS cost intelligence and remediation planning.
- [Databricks Lakeflow Medallion Pipeline](https://github.com/Shreevikas-BJ/databricks-lakeflow-medallion-pipeline): governed Bronze, Silver, and Gold data processing.

The complete project catalog, skills, experience, research, education, and certification records remain in `data/portfolio.ts`. The homepage highlights six projects and groups the other sixteen by discipline. All twenty-two projects have static detail pages. Work and research experience follow the latest resume; no unsupported role dates or project links are added.

All existing skill entries are retained, with the latest resume's programming, retrieval infrastructure, backend, frontend, and testing skills added. Research highlights focus on Physics-Informed Neural Networks for power-system dynamics. Credentials include AWS Certified Data Engineer - Associate, Anthropic AI Fluency, and Google Data Analytics.

The "I'm Shreevikas's assistant" tag opens a lazy-loaded, keyboard-accessible chat panel on the homepage and project pages. Visitors can ask portfolio questions without sharing an email. Professional questions use semantic retrieval, not fixed FAQ answers: a pinned, quantized MiniLM model generates normalized 384-dimensional embeddings; native FAISS inner-product search retrieves up to five relevant fact chunks; Groq generates a streamed answer of at most two sentences and 180 tokens. Exact employer/project names receive additional weighting. Only greetings, identity, safety refusals, and resume-contact instructions are deterministic. Unknown, private, unrelated, and resume requests point to Shreevikas's email. No emails are sent and conversations stay in page memory only.

Supabase stores portfolio facts and embeddings when configured. The server caches its FAISS index for five minutes and falls back to the current build's local index if Supabase is unavailable or out of date. This is real FAISS retrieval, not pgvector relabeled as FAISS. No chat transcripts or visitor contact details are written to Supabase. Embedding weights and knowledge files are server-only, outside `public/`, and are prepared automatically before development/build.

## Stack

- Next.js 16 App Router, Turbopack, and React Server Components
- React 19 and TypeScript
- Tailwind CSS 4 design tokens
- React Three Fiber 9, Drei 10, Three.js 0.185, and React Three Postprocessing
- Framer Motion
- Lucide React
- Groq chat completions through a server-only API route
- Transformers.js MiniLM embeddings, native FAISS, and optional Supabase persistence
- Vercel deployment

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment

Create `.env.local` from `.env.example`:

```bash
GROQ_API_KEY=your_groq_api_key_here
GROQ_MODEL=llama-3.1-8b-instant
SUPABASE_URL=
SUPABASE_SERVICE_ROLE_KEY=
```

`GROQ_API_KEY` is read only by `app/api/chat/route.ts`. It is never sent to the browser or committed to the repository.
It is optional for the static portfolio and case-study pages.

The default model remains `llama-3.1-8b-instant` to preserve the existing configuration. The current account returns `model_not_found` for it. Set `GROQ_MODEL` to an approved model available to the account to activate generated answers; no alternate model/provider is silently selected. Provider configuration failures now return an accurate error instead of pretending that a contact fallback is a successful AI answer. Greetings and contact/refusal instructions remain available without Groq.

### Supabase Setup

1. Apply `supabase/migrations/202610040001_portfolio_knowledge.sql` in your Supabase SQL editor. The table enables RLS and grants access only to `service_role`, not anonymous or signed-in browser users.
2. Set `SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` in `.env.local`. A Supabase server secret (`sb_secret_...`) or legacy service-role key is supported. Never use a `NEXT_PUBLIC_` prefix for a secret.
3. Run `npm run knowledge:prepare`, then `npm run knowledge:sync` to upsert the current portfolio facts and vectors. Repeat synchronization after changing `data/portfolio.ts`.
4. Add the same server-only variables in Vercel and redeploy. Use an isolated Supabase project for previews if needed.

The first build downloads approximately 23 MB of pinned public ONNX weights. Warm question embeddings run locally on CPU; no embedding API key or per-question model download is required. The local FAISS index also works without Supabase credentials.

## Quality Checks

```bash
npm run lint
npm test
npm run build
```

Responsive verification covers 320px, 390px, 768px, 1440px, and 1920px layouts, project navigation, keyboard navigation, reduced motion, and navigation without JavaScript. Run Lighthouse against a production build, not the development server; the performance target is 95+.

`npm test` verifies real embedding/FAISS retrieval for paraphrased questions, route grounding, streaming, no fixed professional answer bypass, validation, private/unrelated refusals, model failures, and rate limiting. Rate limiting is bounded per function instance; use Vercel WAF or a shared limiter for stronger distributed abuse protection.

## Artwork

`public/images/nvidia-logo.svg` is the unchanged full NVIDIA logo from [NVIDIA's official logo and brand-usage page](https://www.nvidia.com/en-us/about-nvidia/legal-info/logo-brand-usage/). It identifies the NVIDIA PhysicsNeMo technology used in research, not a partnership or endorsement. NVIDIA and its logo are trademarks of NVIDIA Corporation.

Certification issuer marks are hosted locally under `public/images/certifications/`, preserve their original artwork and proportions, and identify credential issuers only:

- AWS: [official white header logo](https://a0.awsstatic.com/libra-css/images/logos/aws_smile-header-desktop-en-white_59x35.png)
- Anthropic: ivory Anthropic symbol from the [official press kit](https://anthropic.com/press-kit)
- Google: [official color wordmark](https://www.gstatic.com/images/branding/googlelogo/svg/googlelogo_clr_74x24px.svg)

These marks remain trademarks of their respective owners and do not imply endorsement or partnership.

University marks are hosted locally under `public/images/education/`: [Illinois Tech's official header wordmark](https://www.iit.edu/themes/iit/assets/img/illinois-tech-red.svg) and the [official VTU emblem](https://vtu.ac.in/wp-content/uploads/2019/03/vtulogo.png). The VTU asset is resized to WebP without changing its artwork. They identify the institutions attended and do not imply endorsement.

`public/images/data-flow.webp` is a 90 KB optimized bitmap generated with the built-in image-generation tool. It is an editorial illustration, not a project screenshot or a performance claim.

Generation prompt:

> Use case: stylized-concept. Asset type: ultra-wide editorial background bitmap for a sparse AI/ML engineer portfolio. A precision technical visualization of layered data entering an inference system: a thin, restrained field of silver-white parallel paths and small rectangular data marks on a perfectly near-black #0a0a0a backdrop, with one small section of electric blue #3b82f6 signal paths. Fine structured lines progress from noisy input to ordered output. Elegant scientific-computing publication artwork, flat orthographic composition, not a UI mockup or a screenshot. Primary structure occupies the right third and lower-right corner of a wide landscape frame; left two thirds remain predominantly empty solid near-black for large editorial text. Crisp, subtle, quiet, high contrast where visible. No text, lettering, logos, panels, cards, objects, people, bokeh, orbs, gradients, purple, glass, 3D spheres, or glow clouds. Keep restrained and genuinely sparse. Wide landscape 3:2 or wider image.

## Deploy To Vercel

1. Import `Shreevikas-BJ/shreevikas-portfolio` in Vercel.
2. Keep the Next.js framework preset.
3. Add `GROQ_API_KEY`, an approved `GROQ_MODEL`, and optional server-only Supabase variables under Project Settings > Environment Variables.
4. Deploy the `main` branch.

## Author

**Shreevikas Jagadish**<br>
United States<br>
[Email](mailto:shreevikasjagadish7@gmail.com) | [GitHub](https://github.com/Shreevikas-BJ) | [LinkedIn](https://www.linkedin.com/in/shreevikasbj/)
