# Shreevikas Jagadish Portfolio

A production-grade engineering portfolio for an AI Engineer, Machine Learning Engineer, Data Scientist, and Data Engineer working across computer vision, RAG, agentic AI, scientific AI, MLOps, and cloud data systems.

**Live site:** [shreevikas-portfolio.vercel.app](https://shreevikas-portfolio.vercel.app/)

## Experience

- Apple-inspired dark-first visual system with a fully designed light theme
- Premium opening sequence and restrained motion system
- Responsive portrait-led hero with no empty image space
- Scroll-aware navigation and progress indicator
- Quantified experience outcomes and one-time credibility metrics
- Dedicated scientific machine-learning research story
- Six flagship project case studies with distinct architecture visuals
- Searchable and filterable supporting project explorer
- Interactive capability matrix for AI, ML, data, cloud, and scientific computing
- Accessible project drawer, mobile navigation, theme controls, and keyboard states
- Portfolio-grounded AI assistant with streaming, cached answers, timeouts, and rate limiting
- Responsive layouts for mobile, tablet, desktop, and large screens
- Next.js metadata, Open Graph, robots, sitemap, and structured data

## Flagship Work

- Autonomous Industrial Quality Assurance & Defect Intelligence System: 500+ FPS computer vision inspection with PyTorch, OpenCV, CUDA, Docker, and AWS SageMaker.
- [AgentShield](https://github.com/Shreevikas-BJ/agentshield): AI-agent QA, red-team evaluation, and launch-readiness analysis.
- [AI/ML Knowledge RAG Assistant](https://github.com/Shreevikas-BJ/ml-course-document-rag): citation-grounded retrieval with gating, caching, refusal handling, and evaluation.
- [AI FinOps Copilot](https://github.com/Shreevikas-BJ/ai-finops-copilot): action-oriented AWS cost intelligence and remediation planning.
- [Databricks Lakeflow Medallion Pipeline](https://github.com/Shreevikas-BJ/databricks-lakeflow-medallion-pipeline): governed Bronze, Silver, and Gold data processing.
- Manufacturing Process Quality Intelligence System: OCR, field extraction, semantic document Q&A, and contract intelligence with PaddleOCR, PyMuPDF, LangChain, and ChromaDB.

The supporting project explorer retains additional work across forecasting, data engineering, streaming, NLP, computer vision, analytics, and dashboards.

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

## Quality Checks

```bash
npm run lint
npm run build
```

## Deploy To Vercel

1. Import `Shreevikas-BJ/shreevikas-portfolio` in Vercel.
2. Keep the Next.js framework preset.
3. Add `GROQ_API_KEY` under Project Settings > Environment Variables.
4. Deploy the `main` branch.

## Author

**Shreevikas Jagadish**<br>
United States<br>
[Email](mailto:shreevikasjagadish7@gmail.com) | [GitHub](https://github.com/Shreevikas-BJ) | [LinkedIn](https://www.linkedin.com/in/shreevikasbj/)
