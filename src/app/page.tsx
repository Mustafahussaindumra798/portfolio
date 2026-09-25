import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import CloudExifyFeature from '@/components/CloudExifyFeature';
import Certificates from '@/components/Certificates';
import Roadmap from '@/components/Roadmap';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <CloudExifyFeature />
      <Certificates />
      <Roadmap />
      <Contact />
    </>
  );
}
