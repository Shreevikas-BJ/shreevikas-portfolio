# Shreevikas Jagadish Portfolio

A portfolio for Shreevikas Jagadish, an AI/ML Engineer building production ML, agentic AI, RAG, predictive models, and cloud data systems. Professional experience follows the latest resume: NeuralSeek (AI Engineer Intern, July-November 2025) and Whiterock (Data Scientist AI/ML, February 2022-July 2024).

**Live site:** [shreevikas-portfolio.vercel.app](https://shreevikas-portfolio.vercel.app/)

## Design

- Dark-only editorial design: near-black, off-white, and one blue accent
- Inter body typography and Space Grotesk headings, self-hosted through `next/font`
- Full-width hero with optimized bitmap artwork and generous whitespace
- Unlabelled transformer flow inside a brain-shaped outline. This is a stylized visualization, not live model inference.
- A small page-edge robot follows scrolling at fixed walking and running paces (72 and 144 viewport pixels/second). Fast scrolling triggers a catch-up run followed by a breathing pause. Internal shortcuts trigger neuron repair and a cosmetic heading-cleaning sweep; other page clicks trigger a wave. Content is never edited by these effects.
- A shared pause control stops the brain and robot. Motion respects reduced-motion preferences and hidden tabs; the robot's position loop sleeps when idle.
- Six selected projects presented as open, full-width rows rather than a card grid
- Sixteen additional projects in keyboard-accessible category disclosures: Data Science / ML / MLOps, GenAI / RAG / Agents, Data Engineering, and Analytics / Dashboards
- Resume-based work experience, scientific-AI research, and clean certification rows
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

The existing server-side chatbot route and its grounded context are retained, with the Groq model unchanged. The floating assistant is not rendered in the sparse homepage design.

## Stack

- Next.js App Router and React Server Components
- React 19 and TypeScript
- Tailwind CSS design tokens
- Framer Motion
- Lucide React
- Groq chat completions through a server-only API route
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
```

`GROQ_API_KEY` is read only by `app/api/chat/route.ts`. It is never sent to the browser or committed to the repository.
It is optional for the static portfolio and case-study pages.

## Quality Checks

```bash
npm run lint
npm test
npm run build
```

Responsive verification covers 320px, 390px, 768px, 1440px, and 1920px layouts, project navigation, keyboard navigation, reduced motion, and navigation without JavaScript. Run Lighthouse against a production build, not the development server; the performance target is 95+.

## Artwork

`public/images/data-flow.webp` is a 90 KB optimized bitmap generated with the built-in image-generation tool. It is an editorial illustration, not a project screenshot or a performance claim.

Generation prompt:

> Use case: stylized-concept. Asset type: ultra-wide editorial background bitmap for a sparse AI/ML engineer portfolio. A precision technical visualization of layered data entering an inference system: a thin, restrained field of silver-white parallel paths and small rectangular data marks on a perfectly near-black #0a0a0a backdrop, with one small section of electric blue #3b82f6 signal paths. Fine structured lines progress from noisy input to ordered output. Elegant scientific-computing publication artwork, flat orthographic composition, not a UI mockup or a screenshot. Primary structure occupies the right third and lower-right corner of a wide landscape frame; left two thirds remain predominantly empty solid near-black for large editorial text. Crisp, subtle, quiet, high contrast where visible. No text, lettering, logos, panels, cards, objects, people, bokeh, orbs, gradients, purple, glass, 3D spheres, or glow clouds. Keep restrained and genuinely sparse. Wide landscape 3:2 or wider image.

## Deploy To Vercel

1. Import `Shreevikas-BJ/shreevikas-portfolio` in Vercel.
2. Keep the Next.js framework preset.
3. Add `GROQ_API_KEY` under Project Settings > Environment Variables.
4. Deploy the `main` branch.

## Author

**Shreevikas Jagadish**<br>
United States<br>
[Email](mailto:shreevikasjagadish7@gmail.com) | [GitHub](https://github.com/Shreevikas-BJ) | [LinkedIn](https://www.linkedin.com/in/shreevikasbj/)
