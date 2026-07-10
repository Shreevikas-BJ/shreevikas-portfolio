import type { Metadata } from "next";
import { siteConfig } from "@/data/portfolio";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://shreevikas-portfolio.vercel.app"),
  title: siteConfig.title,
  description: siteConfig.description,
  keywords: [
    "Shreevikas Jagadish",
    "AI Engineer",
    "Data Scientist",
    "Data Engineer",
    "AI-ML Engineer",
    "AI Data Professional",
    "Applied AI Engineer",
    "Agent Engineer",
    "Forward Deployed AI Engineer",
    "Machine Learning",
    "Production Machine Learning",
    "Data Engineering",
    "Data Engineering Portfolio",
    "Agentic AI",
    "OpenAI Agents SDK",
    "AI Agents",
    "LLM Evaluation",
    "AI Guardrails",
    "MLOps",
    "RAG",
    "RAG Systems",
    "LangChain",
    "Vector Search",
    "Cloud Data Pipelines",
    "AWS Certified Data Engineer",
    "AWS",
    "AWS Lambda",
    "AWS S3",
    "SageMaker",
    "CloudWatch",
    "Snowflake",
    "dbt",
    "Databricks",
    "Unity Catalog",
    "PySpark",
    "Spark SQL",
    "FastAPI",
    "MLflow",
    "Scikit-Learn",
    "XGBoost",
    "Power BI",
    "Tableau"
  ],
  authors: [{ name: siteConfig.name }],
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: "https://shreevikas-portfolio.vercel.app",
    siteName: "Shreevikas Portfolio",
    images: [
      {
        url: siteConfig.profileImage,
        width: 1200,
        height: 1200,
        alt: "Professional portrait of Shreevikas Jagadish"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.profileImage]
  },
  robots: {
    index: true,
    follow: true
  }
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.name,
  url: siteConfig.portfolio,
  image: `${siteConfig.portfolio}${siteConfig.profileImage.replace(/^\//, "")}`,
  email: siteConfig.email,
  telephone: siteConfig.phone,
  jobTitle: "AI Engineer, Data Scientist, Data Engineer",
  sameAs: [siteConfig.github, siteConfig.linkedin],
  knowsAbout: [
    "AI Engineering",
    "Machine Learning",
    "RAG Systems",
    "Agentic AI",
    "Data Engineering",
    "MLOps",
    "Cloud Data Platforms",
    "Snowflake",
    "Databricks",
    "AWS",
    "PySpark"
  ],
  alumniOf: [
    {
      "@type": "CollegeOrUniversity",
      name: "Illinois Institute of Technology"
    },
    {
      "@type": "CollegeOrUniversity",
      name: "Visvesvaraya Technological University"
    }
  ]
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData)
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                var theme = localStorage.getItem("theme");
                if (theme === "light") document.documentElement.classList.remove("dark");
                if (theme === "dark") document.documentElement.classList.add("dark");
              } catch (_) {}
            `
          }}
        />
        {children}
      </body>
    </html>
  );
}
