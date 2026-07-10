# Shreevikas Portfolio

Recruiter-friendly portfolio for Shreevikas Jagadish, positioned around AI Engineering, Data Science, Machine Learning, Agentic AI, RAG systems, Data Engineering, MLOps, Cloud Data Platforms, and Decision Intelligence.

## Overview

This portfolio highlights production-ready AI, ML, RAG, agentic AI, cloud data engineering, Snowflake/dbt, Databricks/PySpark, AWS, MLOps, and analytics systems.

## Tech Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Framer Motion
- shadcn/ui-inspired reusable components
- lucide-react icons
- Groq-backed chatbot API route
- Vercel-ready deployment

## Features

- Responsive light and dark theme
- Premium recruiter-friendly hero, about, experience, projects, skills, education, certifications, and contact sections
- Five primary featured projects across AI agents, FinOps AI, RAG, Databricks, and Snowflake/dbt
- Filtered project cards for AI Agents, RAG & GenAI, Data Science & ML, Data Engineering, MLOps, and Analytics
- Latest resume view/download using `public/Shreevikas_Jagadish_Resume.pdf`
- Bottom-right AI assistant gated by visitor email
- Server-side Groq API integration using `GROQ_API_KEY`

## Featured Projects

- [AgentShield](https://github.com/Shreevikas-BJ/agentshield): multi-LLM agent QA platform for prompt injection, privacy leakage, unsafe tool use, hallucination, policy risk, and regression reporting.
- [AI FinOps Copilot](https://github.com/Shreevikas-BJ/ai-finops-copilot): read-only AI FinOps copilot for cloud cost analysis, savings findings, cost spikes, executive summaries, and ticket-ready recommendations.
- [AI/ML Knowledge RAG Assistant](https://github.com/Shreevikas-BJ/ml-course-document-rag): cloud-native RAG assistant with Top-3 retrieval, similarity gating, clickable citations, refusal handling, and cache layers.
- [Databricks Lakeflow Medallion Pipeline](https://github.com/Shreevikas-BJ/databricks-lakeflow-medallion-pipeline): AWS S3 to Databricks pipeline with Lakeflow Jobs, Unity Catalog, PySpark, Spark SQL, and medallion architecture.
- [Airbnb Snowflake dbt Pipeline](https://github.com/Shreevikas-BJ/airbnb-snowflake-dbt-pipeline): Snowflake/dbt ELT pipeline with incremental models, SCD Type 2 snapshots, tests, macros, lineage docs, fact tables, and BI-ready models.

## Resume

The latest resume is available from the portfolio through:

- View Resume
- Download Resume

The deployed file path is:

```text
/Shreevikas_Jagadish_Resume.pdf
```

## Local Setup

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Environment Variables

Create `.env.local`:

```bash
GROQ_API_KEY=your_groq_api_key_here
CHATBOT_NOTIFICATION_EMAIL=shreevikasj@gmail.com

# Optional: use Resend for reliable chatbot-access email notifications.
RESEND_API_KEY=
RESEND_FROM_EMAIL=Portfolio Assistant <onboarding@resend.dev>
```

The Groq API key is only used in `app/api/chat/route.ts` and is never exposed to the frontend. Do not commit `.env.local` or paste actual keys into source code.

## Deploy To Vercel

1. Push this repository to GitHub.
2. Import or keep the repository connected in Vercel.
3. Select the Next.js framework preset.
4. Add `GROQ_API_KEY` in Vercel Project Settings > Environment Variables.
5. Add `CHATBOT_NOTIFICATION_EMAIL` with the address that should receive chatbot access notifications.
6. For reliable email delivery, add `RESEND_API_KEY` and `RESEND_FROM_EMAIL`. Without Resend, the app attempts a FormSubmit fallback.
7. Redeploy after saving environment variables.

## Author

Shreevikas Jagadish<br>
United States<br>
Email: [shreevikasjagadish7@gmail.com](mailto:shreevikasjagadish7@gmail.com)<br>
GitHub: [Shreevikas-BJ](https://github.com/Shreevikas-BJ)<br>
LinkedIn: [shreevikasbj](https://www.linkedin.com/in/shreevikasbj/)
