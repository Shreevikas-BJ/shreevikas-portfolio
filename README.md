# Shreevikas Portfolio

Premium recruiter-friendly portfolio for Shreevikas Jagadish, focused on data engineering, analytics engineering, AI data engineering, RAG systems, cloud data platforms, and production-ready ML/AI systems.

## Tech Stack

- Next.js
- TypeScript
- Tailwind CSS
- Framer Motion
- shadcn/ui-inspired reusable components
- lucide-react icons
- Groq-backed chatbot API route
- Vercel-ready deployment

## Features

- Responsive light and dark theme
- Recruiter-friendly hero, about, skills, experience, projects, research, certifications, education, and contact sections
- Filterable project gallery with details modal and GitHub links
- Featured projects for data engineering, AI/RAG, and ML/analytics
- AIOps research paper publication card with download link
- Resume download
- Bottom-right AI assistant gated by recruiter email
- Server-side Groq API integration using `GROQ_API_KEY`

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

The API key is only used in `app/api/chat/route.ts` and is never exposed to the frontend.
Do not commit `.env.local` or paste the actual key into source code.
The chatbot email gate posts visitor emails to a server route that notifies `CHATBOT_NOTIFICATION_EMAIL`.

## Deploy To Vercel

1. Push this repository to GitHub.
2. Import the repository in Vercel.
3. Select the Next.js framework preset.
4. Add `GROQ_API_KEY` in Vercel Project Settings > Environment Variables.
5. Add `CHATBOT_NOTIFICATION_EMAIL` with the address that should receive chatbot access notifications.
6. For reliable email delivery, add `RESEND_API_KEY` and `RESEND_FROM_EMAIL`. Without Resend, the app attempts a FormSubmit fallback.
7. Redeploy after saving the environment variables so the chatbot API can read them at runtime.
8. Deploy.

## Screenshots

Screenshots can be added after the first Vercel deployment.

## Author

Shreevikas Jagadish  
Chicago, IL  
Email: shreevikasjagadish7@gmail.com  
GitHub: https://github.com/Shreevikas-BJ  
LinkedIn: https://www.linkedin.com/in/shreevikasbj/
