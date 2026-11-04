import React from 'react';
import { X, Github, ExternalLink, CheckCircle2, Cpu, Calendar, Tag } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-950/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-2xl bg-slate-900 dark:bg-navy-900 border border-slate-700/80 dark:border-white/15 rounded-3xl shadow-2xl p-6 sm:p-8 z-10 overflow-hidden my-8 animate-fadeIn">
        
        {/* Glow accent */}
        <div className="absolute top-0 right-0 w-60 h-60 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-white/10 text-slate-300 hover:text-white hover:bg-white/20 transition-colors"
          aria-label="Close project modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="space-y-2 pr-8">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
              {project.category}
            </span>
            <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30 flex items-center gap-1">
              <Tag className="w-3 h-3" /> {project.badge}
            </span>
            <span className="text-xs text-slate-400 flex items-center gap-1">
              <Calendar className="w-3 h-3" /> {project.date}
            </span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-bold font-heading text-white">
            {project.title}
          </h3>
          <p className="text-sm text-cyan-300 font-mono">
            {project.tagline}
          </p>
        </div>

        {/* Body Content */}
        <div className="mt-6 space-y-6">
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
              Overview & Objectives
            </h4>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {project.description}
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
              Key Technical Features
            </h4>
            <ul className="grid grid-cols-1 gap-2.5">
              {project.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
              Technologies & Libraries
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg text-xs font-medium bg-slate-800 text-cyan-300 border border-white/10"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer / Action Buttons */}
        <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs text-slate-400 italic">
            * Repository & demo links are editable placeholders in <code className="text-cyan-300">portfolioData.js</code>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-white/15 transition-all"
            >
              <Github className="w-4 h-4" />
              <span>GitHub Repo</span>
            </a>

            <button
              onClick={() => alert(`Project Demo Link: ${project.title}\n\nYou can connect this to your live demo URL in src/data/portfolioData.js!`)}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-purple-600 shadow-glow-primary hover:opacity-95 transition-all"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Launch Demo</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
