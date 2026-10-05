import Image from "next/image";
import { education } from "@/data/portfolio";

export function Education() {
  return (
    <section id="education" className="editorial-shell editorial-section" aria-labelledby="education-title">
      <div className="work-heading">
        <h2 id="education-title">Education</h2>
        <span className="technical-label">Academic foundation</span>
      </div>
      {education.map((item) => (
        <article key={item.school} className="education-row">
          <div className="education-mark">
            <Image src={item.logo.src} width={item.logo.width} height={item.logo.height} alt="" unoptimized />
          </div>
          <div className="education-copy">
            <p className="technical-label">{item.school}</p>
            <h3>{item.degree}</h3>
            <p className="education-location">{item.location}</p>
          </div>
          <p className="education-date">{item.dates}</p>
        </article>
      ))}
    </section>
  );
}
