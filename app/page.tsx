import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Projects } from "@/components/Projects";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { Research } from "@/components/Research";
import { Credentials } from "@/components/Credentials";
import { Education } from "@/components/Education";

export default function Home() {
  return (
    <>
      <a href="#main-content" className="skip-link">Skip to content</a>
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <Projects />
        <ExperienceTimeline />
        <Research />
        <Education />
        <Credentials />
      </main>
      <Footer />
    </>
  );
}
