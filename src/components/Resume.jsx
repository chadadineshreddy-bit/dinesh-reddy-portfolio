import React from 'react';
import { 
  Download, 
  Eye, 
  FileText, 
  CheckCircle2, 
  Award, 
  Sparkles, 
  GraduationCap, 
  Briefcase,
  Layers
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Resume({ onOpenModal }) {
  const handleDirectDownload = () => {
    const link = document.createElement('a');
    link.href = personalInfo.resume.filePath;
    link.download = personalInfo.resume.fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="resume" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Curriculum Vitae</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-slate-900 dark:text-white">
            My <span className="gradient-text">Resume</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
            {personalInfo.resume.summary}
          </p>
        </div>

        {/* Featured Resume Showcase Banner */}
        <div className="max-w-4xl mx-auto glass-panel p-8 sm:p-12 rounded-3xl border border-slate-200/80 dark:border-white/10 relative overflow-hidden shadow-2xl">
          
          {/* Cyber glowing gradients */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-cyan-500/15 via-primary-500/15 to-purple-500/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Visual Document Thumbnail Card */}
            <div className="md:col-span-5 flex justify-center">
              <div 
                onClick={onOpenModal}
                className="w-56 sm:w-64 h-80 rounded-2xl bg-gradient-to-b from-slate-100 to-slate-200 dark:from-navy-800 dark:to-navy-950 border-2 border-slate-300 dark:border-white/15 p-5 shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer group relative overflow-hidden"
              >
                {/* Overlay hover effect */}
                <div className="absolute inset-0 bg-primary-600/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="p-3 rounded-full bg-slate-900/90 text-cyan-400 shadow-lg">
                    <Eye className="w-6 h-6" />
                  </div>
                </div>

                {/* Simulated Resume Document Lines */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center text-white font-bold text-xs">
                      DC
                    </div>
                    <div>
                      <div className="h-3 w-24 bg-slate-400 dark:bg-slate-300 rounded" />
                      <div className="h-2 w-16 bg-cyan-500/50 rounded mt-1" />
                    </div>
                  </div>

                  <div className="h-px bg-slate-300 dark:bg-white/10 my-2" />

                  <div className="space-y-1.5">
                    <div className="h-2 w-12 bg-purple-400 rounded" />
                    <div className="h-2 w-full bg-slate-300 dark:bg-slate-700 rounded" />
                    <div className="h-2 w-4/5 bg-slate-300 dark:bg-slate-700 rounded" />
                  </div>

                  <div className="space-y-1.5 pt-2">
                    <div className="h-2 w-16 bg-cyan-400 rounded" />
                    <div className="h-2 w-full bg-slate-300 dark:bg-slate-700 rounded" />
                    <div className="h-2 w-5/6 bg-slate-300 dark:bg-slate-700 rounded" />
                  </div>

                  <div className="space-y-1.5 pt-2">
                    <div className="h-2 w-14 bg-emerald-400 rounded" />
                    <div className="h-2 w-3/4 bg-slate-300 dark:bg-slate-700 rounded" />
                  </div>
                </div>

                <div className="absolute bottom-3 left-5 right-5 text-[10px] text-center text-slate-500 dark:text-slate-400 font-mono">
                  Click to View & Print
                </div>
              </div>
            </div>

            {/* Content & Action Buttons */}
            <div className="md:col-span-7 space-y-6 text-center md:text-left">
              <div>
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-cyan-500 dark:text-cyan-400">
                  Ready for Immediate Review
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold font-heading text-slate-900 dark:text-white mt-1">
                  Full Technical Profile
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                  Comprehensive document detailing educational background at CMR Technical Campus, predictive analytics projects, database skills, and certifications.
                </p>
              </div>

              {/* Highlights Pill checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-700 dark:text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>B.Tech in CSE-DS (7.85 CGPA)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Python, SQL, ML, & BI Stack</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>4 Proven Technical Projects</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Clean ATS-Friendly Layout</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-3.5 pt-2">
                <button
                  type="button"
                  onClick={handleDirectDownload}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 via-primary-600 to-purple-600 shadow-glow-primary hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Resume PDF</span>
                </button>

                <button
                  type="button"
                  onClick={onOpenModal}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-sm font-semibold text-slate-800 dark:text-white bg-slate-100 dark:bg-navy-800 hover:bg-slate-200 dark:hover:bg-navy-700 border border-slate-300 dark:border-white/10 transition-all"
                >
                  <Eye className="w-4 h-4 text-cyan-400" />
                  <span>View Resume</span>
                </button>
              </div>

              <div className="text-[11px] text-slate-500 dark:text-slate-400">
                Replace with your custom PDF anytime by placing <code className="text-cyan-400">resume.pdf</code> into the <code className="text-cyan-400">public/</code> directory.
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
