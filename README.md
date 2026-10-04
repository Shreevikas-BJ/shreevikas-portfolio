# Shreevikas Jagadish Portfolio

A portfolio for Shreevikas Jagadish, an AI/ML Engineer building production ML, agentic AI, RAG, predictive models, and cloud data systems. Professional experience follows the latest resume: NeuralSeek (AI Engineer Intern, July-November 2025) and Whiterock (Data Scientist AI/ML, February 2022-July 2024).

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

- ArchPilot: a multi-agent architecture copilot with FastAPI, PydanticAI, JEV System One routing, PostgreSQL, and local 27B quantized inference through llama.cpp. No public repository or live link is available yet.
- [AgentShield](https://github.com/Shreevikas-BJ/agentshield): AI-agent QA, red-team evaluation, and launch-readiness analysis.
- [AI/ML Knowledge Assistant](https://github.com/Shreevikas-BJ/ml-course-document-rag): production RAG with pgvector, Jina, Groq, clickable citations, refusal handling, three caching layers, and latency observability.
- [Accord Procurement AI](https://github.com/Shreevikas-BJ/accord-procurement-ai): a local procurement prototype with document extraction, supplier comparison, deterministic calculations, human approval, and audit trails. Independent extraction holdouts still show generalization limits; the prototype is not ready for a buyer pilot.
- [AI FinOps Copilot](https://github.com/Shreevikas-BJ/ai-finops-copilot): action-oriented AWS cost intelligence and remediation planning.
- [Databricks Lakeflow Medallion Pipeline](https://github.com/Shreevikas-BJ/databricks-lakeflow-medallion-pipeline): governed Bronze, Silver, and Gold data processing.

The supporting project explorer retains additional work across forecasting, data engineering, streaming, NLP, computer vision, analytics, and dashboards.

All existing skill entries are retained, with the latest resume's programming, retrieval infrastructure, backend, frontend, and testing skills added. Research highlights focus on Physics-Informed Neural Networks for power-system dynamics. Credentials include AWS Certified Data Engineer - Associate, Anthropic AI Fluency, and Google Data Analytics.

Chatbot grounding is generated from the same structured portfolio data, keeping work history, skills, projects, education, and certifications aligned.

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
