# Shreevikas Portfolio

Recruiter-friendly portfolio for Shreevikas Jagadish, positioned around Data Science, AI-ML, Predictive Modeling, Statistical Learning, Decision Intelligence, MLOps, RAG, and Cloud Analytics.

## Overview

This portfolio highlights production-ready predictive systems, demand forecasting, machine learning, statistical validation, RAG, MLOps, cloud analytics, and decision intelligence.

Professional experience includes Data Scientist / AI-ML work at Cloudera, an AI Engineer internship at NeuralSeek, and Data Scientist work at Bosch.

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
- Premium recruiter-friendly hero, about, experience, projects, skills, education, and contact sections
- Three resume-featured projects across forecasting, manufacturing intelligence, and enterprise RAG
- Filtered project cards for AI Agents, RAG & GenAI, Data Science & ML, Data Engineering, MLOps, and Analytics
- Latest resume view/download using `public/Shreevikas_Jagadish_Resume.pdf`
- Bottom-right AI assistant gated by visitor email
- Server-side Groq API integration using `GROQ_API_KEY`

## Resume-Featured Projects

- Intelligent Inventory Demand Forecasting Platform: PySpark and XGBoost forecasting with MLflow tracking, FastAPI deployment, and AWS automation.
- Manufacturing Process Quality Intelligence System: predictive quality monitoring, anomaly detection, statistical validation, PostgreSQL, and Tableau.
- Enterprise Knowledge Search Platform: LangChain and Hugging Face RAG with semantic chunking, vector retrieval, evaluation, and FastAPI serving.

Additional GitHub projects remain available in the filterable project gallery.

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
