# Shreevikas Portfolio

Recruiter-friendly portfolio for Shreevikas Jagadish, focused on Data Science, Machine Learning, Predictive Modeling, Statistical Learning, Decision Intelligence, MLOps, and cloud-based analytics roles.

## Overview

This portfolio highlights production-ready machine learning systems, demand forecasting, MLOps, data engineering platforms, RAG applications, AI agent evaluation, statistical validation, cloud analytics, and decision-ready dashboards.

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
- Recruiter-friendly hero, about, skills, experience, projects, education, and contact sections
- Rich project filters for Featured, Data Science / ML, Data Engineering, GenAI / RAG / Agents, and Analytics / Dashboards
- GitHub project cards with recruiter-friendly summaries, tech tags, highlights, and repo links
- Request Resume flow without public resume PDF exposure
- Bottom-right AI assistant gated by visitor email
- Server-side Groq API integration using `GROQ_API_KEY`

## Featured Projects

- [Sales Forecasting MLOps Pipeline](https://github.com/Shreevikas-BJ/sales-forecasting-mlops-pipeline): production-style forecasting pipeline using PySpark, Snowflake, XGBoost, monitoring, and Streamlit.
- [Databricks Lakeflow Medallion Pipeline](https://github.com/Shreevikas-BJ/databricks-lakeflow-medallion-pipeline): governed lakehouse pipeline with AWS S3, Lakeflow, Unity Catalog, and gold-layer analytics.
- [Airbnb Snowflake dbt Pipeline](https://github.com/Shreevikas-BJ/airbnb-snowflake-dbt-pipeline): Snowflake and dbt ELT pipeline with incremental models and SCD Type 2 snapshots.
- [AI FinOps Copilot](https://github.com/Shreevikas-BJ/ai-finops-copilot): AI-powered FinOps copilot for cloud cost analysis, waste detection, and reporting.
- [ML Course Document RAG](https://github.com/Shreevikas-BJ/ml-course-document-rag): trust-first RAG system with citation grounding, similarity gating, refusal handling, and judge fallback.
- [Subscription Value Brain](https://github.com/Shreevikas-BJ/subscription-value-brain): customer value engine combining churn prediction, CLV, and uplift modeling.

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

Shreevikas Jagadish<br>
United States<br>
Email: [shreevikasjagadish7@gmail.com](mailto:shreevikasjagadish7@gmail.com)<br>
GitHub: [Shreevikas-BJ](https://github.com/Shreevikas-BJ)<br>
LinkedIn: [shreevikasbj](https://www.linkedin.com/in/shreevikasbj/)
