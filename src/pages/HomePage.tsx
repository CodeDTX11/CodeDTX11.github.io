import { useRef } from 'react';
import { useBodyVisibility } from '../hooks/useBodyVisibility';
import { Navbar } from '../components/layout/Navbar';
import { ScrollToTopButton } from '../components/layout/ScrollToTopButton';
import { HeroSection } from '../components/sections/HeroSection';
import { AboutMeSection } from '../components/sections/AboutMeSection';
import { AIChatbotSection } from '../components/sections/AIChatbotSection';
import { EducationSection } from '../components/sections/EducationSection';
import { ExperienceSection } from '../components/sections/ExperienceSection';
import { ProjectsSection } from '../components/sections/ProjectsSection';
import { SkillsSection } from '../components/sections/SkillsSection';
import { ContactSection } from '../components/sections/ContactSection';
import { Footer } from '../components/layout/Footer';
import { EndBanner } from '../components/layout/EndBanner';

export function HomePage() {
  useBodyVisibility('/assets/images/Tsunami_by_hokusai.jpg');

  const navbarRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const chatbotRef = useRef<HTMLElement>(null);
  const educationRef = useRef<HTMLElement>(null);
  const experienceRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);
  const skillsRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  const sectionRefs: Record<string, React.RefObject<HTMLElement | null>> = {
    navbar: navbarRef,
    'about-me': aboutRef,
    'ai-career-chatbot': chatbotRef,
    education: educationRef,
    experience: experienceRef,
    projects: projectsRef,
    skills: skillsRef,
    'contact-me': contactRef,
  };

  function scrollToSection(id: string) {
    const ref = sectionRefs[id];
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <>
      <main className="gradient-background">
        <ScrollToTopButton scrollToSection={scrollToSection} />
        <Navbar ref={navbarRef} scrollToSection={scrollToSection} />
        <HeroSection />
        <AboutMeSection ref={aboutRef} />
        <AIChatbotSection ref={chatbotRef} />
        <ExperienceSection ref={experienceRef} />
        <ProjectsSection ref={projectsRef} />
        <EducationSection ref={educationRef} />
        <SkillsSection ref={skillsRef} />
        <ContactSection ref={contactRef} />
        <Footer scrollToSection={scrollToSection} />
      </main>
      <EndBanner />
    </>
  );
}
