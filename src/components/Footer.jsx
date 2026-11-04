import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Heart, Sparkles } from 'lucide-react';
import { personalInfo, navLinks } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative z-10 border-t border-slate-200/60 dark:border-white/10 bg-slate-100/80 dark:bg-navy-950/90 pt-16 pb-12 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-200/60 dark:border-white/10">
          
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 via-primary-600 to-purple-600 p-[2px] shadow-glow-primary">
                <div className="w-full h-full bg-slate-900 rounded-[10px] flex items-center justify-center">
                  <span className="font-heading font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 text-lg">
                    {personalInfo.initials}
                  </span>
                </div>
              </div>
              <div>
                <h3 className="font-heading font-bold text-lg text-slate-900 dark:text-white">
                  {personalInfo.name}
                </h3>
                <p className="text-xs text-cyan-500 dark:text-cyan-400 font-medium">
                  Aspiring Data Analyst | Data Science Enthusiast
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-sm leading-relaxed">
              Empowering data-driven business decisions through predictive analytics, Python pipelines, machine learning, and clean visual storytelling.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={personalInfo.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl border border-slate-300 dark:border-white/10 bg-white dark:bg-navy-900 text-slate-600 dark:text-slate-300 hover:text-cyan-400 hover:scale-110 transition-all shadow-sm"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl border border-slate-300 dark:border-white/10 bg-white dark:bg-navy-900 text-slate-600 dark:text-slate-300 hover:text-purple-400 hover:scale-110 transition-all shadow-sm"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${personalInfo.contact.email}`}
                className="p-2.5 rounded-xl border border-slate-300 dark:border-white/10 bg-white dark:bg-navy-900 text-slate-600 dark:text-slate-300 hover:text-primary-400 hover:scale-110 transition-all shadow-sm"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-900 dark:text-white">
              Quick Navigation
            </h4>
            <ul className="grid grid-cols-2 gap-2 text-xs sm:text-sm">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-slate-600 dark:text-slate-400 hover:text-cyan-400 transition-colors inline-block py-1"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Location & Back To Top */}
          <div className="md:col-span-3 flex flex-col justify-between items-start md:items-end">
            <div className="space-y-1 text-left md:text-right">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Location
              </span>
              <div className="text-sm font-semibold text-slate-900 dark:text-white">
                Hyderabad, India
              </div>
              <div className="text-xs text-emerald-400 font-medium">
                Open for Remote & Onsite
              </div>
            </div>

            <button
              onClick={scrollToTop}
              className="mt-6 md:mt-0 inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-navy-900 border border-slate-300 dark:border-white/10 hover:border-cyan-500/50 hover:text-cyan-400 shadow-sm transition-all group"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <p>© 2026 Dinesh Reddy Chada. All Rights Reserved.</p>
          <p className="flex items-center gap-1.5">
            Crafted for recruiter impact with React & Tailwind CSS
          </p>
        </div>

      </div>
    </footer>
  );
}
