import type { Metadata } from "next";
import { siteConfig } from "@/data/portfolio";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://shreevikas-portfolio.vercel.app"),
  title: siteConfig.title,
  description: siteConfig.description,
  keywords: [
    "Shreevikas Bangalore Jagadish",
    "Data Engineer",
    "AI Data Engineer",
    "Analytics Engineer",
    "RAG",
    "AIOps",
    "Databricks",
    "Snowflake",
    "AWS",
    "PySpark"
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
        alt: "Professional portrait of Shreevikas Bangalore Jagadish"
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
