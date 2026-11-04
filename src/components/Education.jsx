import React from 'react';
import { 
  GraduationCap, 
  Building2, 
  Award, 
  MapPin, 
  Calendar, 
  CheckCircle2, 
  BookOpen, 
  Sparkles,
  Binary
} from 'lucide-react';
import { educationData } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Academic Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-slate-900 dark:text-white">
            Education <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
            Formal technical foundation combining rigorous computer science core disciplines with specialized data science and machine learning coursework.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="max-w-4xl mx-auto">
          {educationData.map((edu, idx) => (
            <div key={idx} className="relative pl-8 sm:pl-12 border-l-2 border-cyan-500/30 dark:border-primary-500/30 space-y-6">
              
              {/* Timeline Marker Pulse */}
              <div className="absolute -left-[17px] top-0 w-8 h-8 rounded-full bg-slate-900 border-2 border-cyan-400 flex items-center justify-center shadow-glow-cyan">
                <GraduationCap className="w-4 h-4 text-cyan-400" />
              </div>

              {/* Education Main Card */}
              <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-200/80 dark:border-white/10 hover:border-cyan-500/40 transition-all duration-300 shadow-xl space-y-6">
                
                {/* Header row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <span className="text-xs font-mono font-semibold uppercase tracking-wider text-cyan-500 dark:text-cyan-400">
                      Undergraduate Degree
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-white mt-1">
                      {edu.degree}
                    </h3>
                    <p className="text-sm sm:text-base font-semibold text-purple-600 dark:text-purple-400">
                      {edu.field}
                    </p>
                  </div>

                  {/* CGPA Badge */}
                  <div className="self-start sm:self-auto px-4 py-2 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-teal-500/10 border border-emerald-500/40 text-emerald-400 flex items-center gap-2">
                    <Award className="w-4 h-4 text-emerald-400" />
                    <div>
                      <div className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">Academic Merit</div>
                      <div className="text-sm font-bold text-emerald-400 font-mono">{edu.score}</div>
                    </div>
                  </div>
                </div>

                {/* College & Location Meta Strip */}
                <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-600 dark:text-slate-300 pt-2 border-t border-slate-200/60 dark:border-white/10">
                  <span className="flex items-center gap-1.5 font-medium">
                    <Building2 className="w-4 h-4 text-cyan-400" />
                    {edu.institution}
                  </span>
                  <span className="text-slate-400">•</span>
                  <span className="flex items-center gap-1.5 font-medium">
                    <MapPin className="w-4 h-4 text-purple-400" />
                    {edu.location}
                  </span>
                  <span className="text-slate-400">•</span>
                  <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
                    <CheckCircle2 className="w-4 h-4" />
                    {edu.status}
                  </span>
                </div>

                {/* Narrative Overview */}
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {edu.description}
                </p>

                {/* Coursework & Highlights Grid */}
                <div className="space-y-3 pt-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-cyan-400" /> Key Program Highlights:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {edu.highlights.map((item, hIdx) => (
                      <div
                        key={hIdx}
                        className="p-3 rounded-xl bg-slate-100/80 dark:bg-navy-900/80 border border-slate-200/70 dark:border-white/5 flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300"
                      >
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
