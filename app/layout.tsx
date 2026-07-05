import type { Metadata } from "next";
import { siteConfig } from "@/data/portfolio";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://shreevikas-portfolio.vercel.app"),
  title: siteConfig.title,
  description: siteConfig.description,
  keywords: [
    "Shreevikas Jagadish",
    "Data Scientist",
    "AI ML Professional",
    "Machine Learning",
    "Predictive Modeling",
    "Statistical Learning",
    "Decision Intelligence",
    "MLOps",
    "Demand Forecasting",
    "Time Series Forecasting",
    "Manufacturing Quality Prediction",
    "Model Monitoring",
    "MLflow",
    "FastAPI",
    "XGBoost",
    "Scikit-learn",
    "RAG",
    "Hugging Face",
    "AWS",
    "PySpark",
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

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <body>
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
