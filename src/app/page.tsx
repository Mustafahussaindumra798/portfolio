import Hero from '@/components/Hero';
import About from '@/components/About';
import Roadmap from '@/components/Roadmap';
import BeyondCode from '@/components/BeyondCode';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import AILab from '@/components/AILab';
import CloudExifyFeature from '@/components/CloudExifyFeature';
import Experience from '@/components/Experience';
import Certificates from '@/components/Certificates';
import GithubProfile from '@/components/GithubProfile';
import CurrentlyBuilding from '@/components/CurrentlyBuilding';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Roadmap />
      <BeyondCode />
      <Skills />
      <Projects />
      <AILab />
      <CloudExifyFeature />
      <Experience />
      <Certificates />
      <GithubProfile />
      <CurrentlyBuilding />
      <Contact />
    </>
  );
}
