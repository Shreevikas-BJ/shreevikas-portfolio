# Shreevikas Portfolio

Recruiter-friendly portfolio for Shreevikas Jagadish, focused on Data Engineering, AI Data Engineering, Data Infrastructure, Analytics Engineering, and RAG/AI Infrastructure roles.

## Overview

This portfolio highlights production RAG systems, real-time data pipelines, agentic workflows, cloud data platforms, analytics-ready datasets, and AI agent evaluation work from the latest resume.

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
- Recruiter-friendly hero, about, skills, experience, projects, certifications, education, and contact sections
- Featured projects for AI infrastructure, RAG, and data engineering
- AgentShield featured as the lead project
- Request Resume flow without public resume PDF exposure
- Bottom-right AI assistant gated by visitor email
- Server-side Groq API integration using `GROQ_API_KEY`

## Featured Projects

- [AgentShield](https://github.com/Shreevikas-BJ/agentshield): multi-LLM QA and red-team platform for AI agent security, safety, compliance, and launch-readiness evaluation.
- [AI/ML Knowledge RAG Assistant](https://github.com/Shreevikas-BJ/ml-course-document-rag): production-ready RAG system using Next.js, Supabase pgvector, Jina embeddings, and Groq.
- [Databricks Lakeflow Medallion Pipeline](https://github.com/Shreevikas-BJ/databricks-lakeflow-medallion-pipeline): S3-to-Databricks Medallion pipeline with Lakeflow Jobs, PySpark, Unity Catalog, and Delta tables.

## Resume Availability

This site does not expose a public resume download. For my latest resume, please contact me at [shreevikasjagadish7@gmail.com](mailto:shreevikasjagadish7@gmail.com).

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

Shreevikas Jagadish  
Chicago, IL  
Email: [shreevikasjagadish7@gmail.com](mailto:shreevikasjagadish7@gmail.com)  
GitHub: [Shreevikas-BJ](https://github.com/Shreevikas-BJ)  
LinkedIn: [shreevikasbj](https://www.linkedin.com/in/shreevikasbj/)
