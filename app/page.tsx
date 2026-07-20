import { About } from "@/components/About";
import { AmbientBackground } from "@/components/AmbientBackground";
import { Chatbot } from "@/components/Chatbot";
import { Contact } from "@/components/Contact";
import { Credentials } from "@/components/Credentials";
import { CredibilityStrip } from "@/components/CredibilityStrip";
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
      <a
        href="#main-content"
        className="focus-ring fixed left-4 top-3 z-[100] -translate-y-20 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition focus:translate-y-0"
      >
        Skip to content
      </a>
      <AmbientBackground />
      <Navbar />
      <main id="main-content">
        <Hero />
        <CredibilityStrip />
        <About />
        <ExperienceTimeline />
        <Research />
        <Projects />
        <Skills />
        <Credentials />
        <Contact />
      </main>
      <Footer />
      <Chatbot />
    </>
  );
}
