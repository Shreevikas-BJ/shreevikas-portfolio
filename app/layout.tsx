import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { siteConfig } from "@/data/portfolio";
import { MotionPreferencesProvider } from "@/components/MotionPreferences";
import { AssistantDock } from "@/components/AssistantDock";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-body", weight: ["400", "500", "600"] });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], display: "swap", variable: "--font-heading", weight: ["500", "600"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://shreevikas-portfolio.vercel.app"),
  title: { default: siteConfig.title, template: "%s | Shreevikas Jagadish" },
  alternates: { canonical: "/" },
  description: siteConfig.description,
  keywords: [
    "Shreevikas Jagadish",
    "ArchPilot",
    "Accord Procurement AI",
    "PydanticAI",
    "pgvector",
    "vLLM",
    "llama.cpp",
    "Local LLM Inference",
    "Data Scientist",
    "AI-ML Engineer",
    "AI Engineer",
    "Artificial Intelligence Engineer",
    "Machine Learning Engineer",
    "Data Engineer",
    "Computer Vision",
    "Industrial AI",
    "Agentic AI",
    "Document AI",
    "OCR",
    "LLM Fine-Tuning",
    "QLoRA",
    "PEFT",
    "LlamaIndex",
    "FAISS",
    "Machine Learning",
    "Production Machine Learning",
    "Predictive Modeling",
    "Statistical Learning",
    "Decision Intelligence",
    "Demand Forecasting",
    "Time Series Forecasting",
    "MLOps",
    "RAG",
    "Enterprise Knowledge Search",
    "LangChain",
    "Hugging Face",
    "Vector Search",
    "AWS",
    "AWS S3",
    "SageMaker",
    "Apache Spark",
    "MLflow",
    "FastAPI",
    "Docker",
    "Snowflake",
    "Databricks",
    "BigQuery",
    "Azure",
    "PySpark",
    "Scikit-Learn",
    "XGBoost",
    "TensorFlow",
    "PyTorch",
    "Scientific Machine Learning",
    "Physics-Informed AI",
    "NVIDIA PhysicsNeMo",
    "Fourier Neural Operators",
    "CUDA",
    "TensorRT",
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
        url: "/images/data-flow.webp",
        width: 1536,
        height: 1024,
        alt: "Precision data-flow illustration"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: ["/images/data-flow.webp"]
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
  email: siteConfig.email,
  telephone: siteConfig.phone,
  jobTitle: "AI/ML Engineer, Data Scientist, Data Engineer",
  sameAs: [siteConfig.github, siteConfig.linkedin],
  knowsAbout: [
    "Data Science",
    "Machine Learning",
    "Computer Vision",
    "Agentic AI",
    "LLM Serving",
    "System Architecture",
    "Document AI",
    "LLM Fine-Tuning",
    "Predictive Modeling",
    "Statistical Learning",
    "Decision Intelligence",
    "Demand Forecasting",
    "RAG",
    "MLOps",
    "Agentic AI",
    "LLM Evaluation",
    "Scientific Machine Learning",
    "Physics-Informed AI",
    "Cloud Data Platforms",
    "AWS",
    "PySpark",
    "MLflow"
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
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`dark ${inter.variable} ${spaceGrotesk.variable}`}
    >
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData)
          }}
        />
        <MotionPreferencesProvider>
          {children}
          <AssistantDock />
        </MotionPreferencesProvider>
      </body>
    </html>
  );
}
