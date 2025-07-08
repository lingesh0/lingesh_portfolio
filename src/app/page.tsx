import Navbar from '@/components/Navbar';
import HomeSection from '@/components/HomeSection';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Certifications from '@/components/Certifications';
import Contact from '@/components/Contact';
import Resume from '@/components/Resume';
import { AuroraBackground } from '@/components/AuroraBackground';

export default function MainPage() {
  return (
    <AuroraBackground>
      <Navbar />
      <div className="w-full flex flex-col items-center justify-center mx-auto">
        <HomeSection />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Certifications />
        <Contact />
        <Resume />
      </div>
    </AuroraBackground>
  );
}
