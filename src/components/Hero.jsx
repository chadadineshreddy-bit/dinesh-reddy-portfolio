import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Download, 
  Github, 
  Linkedin, 
  Mail, 
  Database, 
  Terminal, 
  TrendingUp, 
  Award,
  Sparkles,
  CheckCircle2,
  ChevronDown
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero({ onOpenResumeModal }) {
  // Animated text typing effect
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(120);

  const titles = personalInfo.animatedTitles;

  useEffect(() => {
    const currentWord = titles[currentTextIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        setDisplayedText(currentWord.substring(0, displayedText.length + 1));
        setTypingSpeed(90);

        if (displayedText.length + 1 === currentWord.length) {
          // Pause before deleting
          setTypingSpeed(1800);
          setIsDeleting(true);
        }
      } else {
        // Deleting
        setDisplayedText(currentWord.substring(0, displayedText.length - 1));
        setTypingSpeed(45);

        if (displayedText.length === 0) {
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % titles.length);
          setTypingSpeed(400);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentTextIndex, typingSpeed, titles]);

  return (
    <section id="home" className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & Content */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            {/* Top Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs sm:text-sm font-medium backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Open to Immediate Data Analyst & Software Roles</span>
            </div>

            {/* Main Greeting & Name */}
            <div className="space-y-2">
              <p className="text-sm sm:text-base font-semibold tracking-wider uppercase text-slate-500 dark:text-slate-400">
                Hello, I'm
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight font-heading">
                <span className="text-slate-900 dark:text-white">
                  {personalInfo.name}
                </span>
              </h1>
            </div>

            {/* Dynamic Animated Role */}
            <div className="h-10 sm:h-12 flex items-center justify-center lg:justify-start">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold">
                <span className="text-slate-600 dark:text-slate-300">I am a </span>
                <span className="gradient-text font-mono">
                  {displayedText}
                </span>
                <span className="inline-block w-[3px] h-6 sm:h-7 bg-cyan-400 ml-1 animate-pulse align-middle" />
              </div>
            </div>

            {/* Sub-heading / Headline */}
            <p className="text-base sm:text-lg font-medium text-slate-700 dark:text-slate-300">
              {personalInfo.title}
            </p>

            {/* Bio Introduction */}
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {personalInfo.bioIntro}
            </p>

            {/* Quick Tech Highlights Badge Strip */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-2">
              <span className="px-3 py-1 rounded-lg text-xs font-medium bg-slate-200/70 dark:bg-navy-900/80 text-slate-700 dark:text-slate-300 border border-slate-300/60 dark:border-white/10 flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-cyan-400" /> Python
              </span>
              <span className="px-3 py-1 rounded-lg text-xs font-medium bg-slate-200/70 dark:bg-navy-900/80 text-slate-700 dark:text-slate-300 border border-slate-300/60 dark:border-white/10 flex items-center gap-1.5">
                <Database className="w-3.5 h-3.5 text-purple-400" /> SQL & MySQL
              </span>
              <span className="px-3 py-1 rounded-lg text-xs font-medium bg-slate-200/70 dark:bg-navy-900/80 text-slate-700 dark:text-slate-300 border border-slate-300/60 dark:border-white/10 flex items-center gap-1.5">
                <TrendingUp className="w-3.5 h-3.5 text-blue-400" /> Data Analytics & BI
              </span>
              <span className="px-3 py-1 rounded-lg text-xs font-medium bg-slate-200/70 dark:bg-navy-900/80 text-slate-700 dark:text-slate-300 border border-slate-300/60 dark:border-white/10 flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-emerald-400" /> 7.85 CGPA
              </span>
            </div>

            {/* Call-to-Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-cyan-500 via-primary-600 to-purple-600 shadow-glow-primary hover:scale-[1.02] active:scale-[0.98] transition-all group"
              >
                <span>Explore My Projects</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <button
                type="button"
                onClick={onOpenResumeModal}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-800 dark:text-white bg-white/80 dark:bg-navy-900/80 border border-slate-300/80 dark:border-white/15 hover:border-cyan-500/50 hover:bg-slate-100 dark:hover:bg-navy-800/90 shadow-sm hover:shadow-glow-cyan transition-all group"
              >
                <Download className="w-4 h-4 text-cyan-500 dark:text-cyan-400 transition-transform group-hover:-translate-y-0.5" />
                <span>Download My Resume</span>
              </button>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center lg:justify-start gap-4 pt-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Connect:
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={personalInfo.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl border border-slate-300/80 dark:border-white/10 bg-white/60 dark:bg-navy-900/60 text-slate-700 dark:text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 hover:scale-110 transition-all shadow-sm"
                  aria-label="Dinesh Reddy Chada LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>

                <a
                  href={personalInfo.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl border border-slate-300/80 dark:border-white/10 bg-white/60 dark:bg-navy-900/60 text-slate-700 dark:text-slate-300 hover:text-purple-400 hover:border-purple-500/40 hover:scale-110 transition-all shadow-sm"
                  aria-label="Dinesh Reddy Chada GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>

                <a
                  href={`mailto:${personalInfo.contact.email}`}
                  className="p-2.5 rounded-xl border border-slate-300/80 dark:border-white/10 bg-white/60 dark:bg-navy-900/60 text-slate-700 dark:text-slate-300 hover:text-primary-400 hover:border-primary-500/40 hover:scale-110 transition-all shadow-sm"
                  aria-label="Email Dinesh Reddy Chada"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Data Telemetry Terminal (NO PERSON PHOTO) */}
          <div className="lg:col-span-5 flex justify-center items-center relative">
            <div className="relative w-full max-w-md rounded-2xl overflow-hidden border border-slate-700/80 bg-slate-900/90 shadow-2xl backdrop-blur-md">
              
              {/* Window Header */}
              <div className="px-4 py-3 bg-slate-950/90 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                </div>
                <span className="font-mono text-xs text-slate-400">dinesh_telemetry.py</span>
                <span className="inline-flex items-center gap-1 font-mono text-[11px] text-emerald-400 font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> LIVE
                </span>
              </div>

              {/* Terminal Body */}
              <div className="p-5 space-y-4 font-mono text-xs">
                
                {/* Code Query Block */}
                <div className="p-3 rounded-lg bg-black/40 border border-white/5 text-cyan-300 leading-relaxed text-[11px]">
                  <span className="text-pink-400 font-semibold">SELECT</span> model, accuracy, latency<br/>
                  <span className="text-pink-400 font-semibold">FROM</span> production_pipelines<br/>
                  <span className="text-pink-400 font-semibold">WHERE</span> status = <span className="text-emerald-300">'Optimized'</span>;
                </div>

                {/* 3 Metric Gauges */}
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="p-2.5 rounded-lg bg-white/5 border border-white/5">
                    <div className="font-bold text-white text-base">99.8%</div>
                    <div className="text-[10px] text-slate-400 uppercase tracking-wider mt-0.5">Accuracy</div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-white/5 border border-white/5">
                    <div className="font-bold text-white text-base">12ms</div>
                    <div className="text-[10px] text-slate-400 uppercase tracking-wider mt-0.5">Latency</div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-white/5 border border-white/5">
                    <div className="font-bold text-white text-base">0.94</div>
                    <div className="text-[10px] text-slate-400 uppercase tracking-wider mt-0.5">Model R²</div>
                  </div>
                </div>

                {/* Sparkline Visual Simulation */}
                <div className="p-3 rounded-lg bg-black/30 border border-white/5 space-y-2">
                  <div className="flex justify-between text-[10px] text-slate-400">
                    <span>TELEMETRY STREAM</span>
                    <span className="text-emerald-400">18,420 RECS/S</span>
                  </div>
                  <div className="h-10 w-full flex items-end gap-1.5 pt-1">
                    <div className="w-full bg-cyan-500/30 rounded-t h-[40%]" />
                    <div className="w-full bg-cyan-500/50 rounded-t h-[65%]" />
                    <div className="w-full bg-cyan-500/40 rounded-t h-[55%]" />
                    <div className="w-full bg-cyan-500/70 rounded-t h-[80%]" />
                    <div className="w-full bg-teal-400/80 rounded-t h-[95%]" />
                    <div className="w-full bg-teal-400 rounded-t h-[100%]" />
                  </div>
                </div>

                {/* Live Console Output */}
                <div className="p-2.5 rounded bg-black/60 text-[10px] text-emerald-300/90 space-y-1">
                  <div>> [OK] Crop Yield Random Forest regressor loaded.</div>
                  <div>> [OK] NLP SentenceTransformers semantic embedding ready.</div>
                </div>

              </div>

            </div>
          </div>

        </div>

        {/* Scroll Indicator at bottom */}
        <div className="mt-12 text-center flex justify-center">
          <a
            href="#about"
            className="inline-flex flex-col items-center text-xs font-medium text-slate-400 hover:text-cyan-400 transition-colors animate-bounce"
            aria-label="Scroll to About section"
          >
            <span>Explore More</span>
            <ChevronDown className="w-4 h-4 mt-1" />
          </a>
        </div>

      </div>
    </section>
  );
}
