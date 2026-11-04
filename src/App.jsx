import React, { useState } from 'react';
import Navbar from './components/Navbar';
import ScrollProgress from './components/ScrollProgress';
import BackgroundEffect from './components/BackgroundEffect';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';

export default function App() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  return (
    <div className="min-h-screen relative bg-slate-50 dark:bg-navy-950 text-slate-800 dark:text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200 transition-colors duration-300">
      {/* Top Reading Progress Bar */}
      <ScrollProgress />

      {/* Cyber Grid & Ambient Glowing Background */}
      <BackgroundEffect />

      {/* Sticky Navigation */}
      <Navbar />

      {/* Main Sections */}
      <main className="relative z-10 flex flex-col">
        <Hero onOpenResumeModal={() => setIsResumeModalOpen(true)} />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Certifications />
        <Resume onOpenModal={() => setIsResumeModalOpen(true)} />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Full Interactive Resume Preview Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </div>
  );
}
