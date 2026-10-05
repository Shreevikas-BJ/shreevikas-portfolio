import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { certifications } from "@/data/portfolio";

export function Credentials() {
  return (
    <section id="certifications" className="editorial-shell editorial-section" aria-labelledby="certifications-title">
      <div className="work-heading">
        <h2 id="certifications-title">Certifications</h2>
        <span className="technical-label">Credentials</span>
      </div>
      {certifications.map((certification) => (
        <article key={certification.name} className="credential-row">
          <div className="credential-copy">
            <div className="credential-issuer">
              <Image
                src={certification.logo.src}
                width={certification.logo.width}
                height={certification.logo.height}
                alt=""
                className="credential-issuer-logo"
                unoptimized
              />
              <p className="technical-label">{certification.issuer}</p>
            </div>
            <h3>{certification.name}</h3>
          </div>
          {certification.credentialUrl ? (
            <a className="text-link credential-link" href={certification.credentialUrl} target="_blank" rel="noopener noreferrer">
              View credential <ArrowUpRight size={16} aria-hidden="true" />
              <span className="sr-only">: {certification.name}</span>
            </a>
          ) : null}
        </article>
      ))}
    </section>
  );
}
