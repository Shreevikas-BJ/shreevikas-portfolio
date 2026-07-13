import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { siteConfig } from "@/data/portfolio";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  display: "swap",
  variable: "--font-roboto"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://shreevikas-portfolio.vercel.app"),
  title: siteConfig.title,
  description: siteConfig.description,
  keywords: [
    "Shreevikas Jagadish",
    "Data Scientist",
    "AI-ML Engineer",
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
  jobTitle: "Data Scientist, AI-ML Professional",
  sameAs: [siteConfig.github, siteConfig.linkedin],
  knowsAbout: [
    "Data Science",
    "Machine Learning",
    "Predictive Modeling",
    "Statistical Learning",
    "Decision Intelligence",
    "Demand Forecasting",
    "RAG",
    "MLOps",
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
      className={`${roboto.variable} ${roboto.className} dark scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="antialiased">
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
