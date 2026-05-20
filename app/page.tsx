import { About } from "@/components/About";
import { Certifications } from "@/components/Certifications";
import { Chatbot } from "@/components/Chatbot";
import { Contact } from "@/components/Contact";
import { Education } from "@/components/Education";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Projects } from "@/components/Projects";
import { Research } from "@/components/Research";
import { Skills } from "@/components/Skills";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <ExperienceTimeline />
        <Projects />
        <Research />
        <Certifications />
        <Education />
        <Contact />
      </main>
      <Footer />
      <Chatbot />
    </>
  );
}
