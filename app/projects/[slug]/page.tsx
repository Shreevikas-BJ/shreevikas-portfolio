import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { allWork, findWork } from "@/data/selectedWork";
import { siteConfig } from "@/data/portfolio";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return allWork.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const work = findWork(slug);
  if (!work) notFound();
  const url = `${siteConfig.portfolio}projects/${slug}`;
  return {
    title: `${work.project.title} - Case Study`,
    description: work.description,
    alternates: { canonical: url },
    openGraph: {
      title: `${work.project.title} | ${siteConfig.name}`,
      description: work.description,
      url,
      type: "article",
      images: [{ url: "/images/data-flow.webp", width: 1536, height: 1024, alt: "Precision data-flow illustration" }]
    },
    twitter: {
      card: "summary_large_image",
      title: `${work.project.title} | ${siteConfig.name}`,
      description: work.description,
      images: ["/images/data-flow.webp"]
    }
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const work = findWork(slug);
  if (!work) notFound();
  const { project, discipline, description, flow, outcome } = work;

  return (
    <>
      <a href="#main-content" className="skip-link">Skip to content</a>
      <Navbar />
      <main id="main-content" className="editorial-shell case-study" tabIndex={-1}>
        <Link href="/#projects" className="text-link back-link"><ArrowLeft size={16} aria-hidden="true" /> All projects</Link>
        <header className="case-heading">
          <p className="technical-label">{discipline}</p>
          <h1>{project.title}</h1>
          <p className="case-description">{description}</p>
          <ul className="technology-list" aria-label="Technology stack">
            {project.tech.map((technology) => <li key={technology}>{technology}</li>)}
          </ul>
        </header>
        <section className="case-section" aria-labelledby="problem-title">
          <h2 id="problem-title"><span aria-hidden="true">01</span> Problem</h2>
          <p>{project.problem || description}</p>
        </section>
        <section className="case-section" aria-labelledby="approach-title">
          <h2 id="approach-title"><span aria-hidden="true">02</span> Approach</h2>
          <div className="case-section-body">
            <p>{project.architecture}</p>
            {flow.length ? <ol className="architecture-flow" aria-label="Architecture flow">
              {flow.map((step, index) => (
                <li key={step}>
                  {index > 0 ? <ArrowRight size={14} aria-hidden="true" /> : null}
                  <span>{step}</span>
                </li>
              ))}
            </ol> : null}
            {outcome ? <ul className="engineering-decisions">
              {project.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
            </ul> : null}
          </div>
        </section>
        <section className="case-section" aria-labelledby="outcome-title">
          <h2 id="outcome-title"><span aria-hidden="true">03</span> Outcome</h2>
          {outcome ? <p>{outcome}</p> : (
            <ul className="engineering-decisions">
              {project.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
            </ul>
          )}
        </section>
        <section className="case-section case-links-section" aria-labelledby="links-title">
          <h2 id="links-title"><span aria-hidden="true">04</span> Links</h2>
          <div className="case-links">
            {project.repoUrl ? <a className="text-link" href={project.repoUrl} target="_blank" rel="noopener noreferrer">GitHub repository <ArrowUpRight size={17} aria-hidden="true" /></a> : null}
            {project.liveUrl ? <a className="text-link" href={project.liveUrl} target="_blank" rel="noopener noreferrer">Live demo <ArrowUpRight size={17} aria-hidden="true" /></a> : null}
            {!project.repoUrl && !project.liveUrl ? (
              <a className="text-link" href={`mailto:${siteConfig.email}`}>Contact me about this project <ArrowUpRight size={17} aria-hidden="true" /></a>
            ) : null}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
