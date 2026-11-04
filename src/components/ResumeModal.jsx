import React from 'react';
import { 
  X, 
  Download, 
  Printer, 
  Mail, 
  Phone,
  MapPin, 
  Linkedin, 
  Github, 
  Award, 
  GraduationCap, 
  Briefcase, 
  Terminal, 
  CheckCircle2 
} from 'lucide-react';
import { personalInfo, educationData, skillsData, projectsData, certificationsData } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    // Triggers download or falls back to print dialog
    const link = document.createElement('a');
    link.href = personalInfo.resume.filePath;
    link.download = personalInfo.resume.fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-950/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-4xl bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 border border-slate-300 dark:border-white/15 rounded-3xl shadow-2xl p-6 sm:p-10 z-10 my-8 max-h-[90vh] overflow-y-auto animate-fadeIn print:m-0 print:p-0 print:max-w-none print:bg-white print:text-black">
        
        {/* Top Control Bar (Hidden on print) */}
        <div className="flex items-center justify-between pb-6 border-b border-slate-200 dark:border-white/10 mb-6 print:hidden">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-500 dark:text-cyan-400 border border-cyan-500/20">
              Interactive Resume Preview
            </span>
            <span className="text-xs text-slate-500 hidden sm:inline">
              Updated {personalInfo.resume.lastUpdated}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-navy-800 hover:bg-slate-200 dark:hover:bg-navy-700 text-slate-700 dark:text-white border border-slate-200 dark:border-white/10 transition-all"
              title="Print Resume"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print</span>
            </button>

            <button
              onClick={handleDownload}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-primary-600 hover:opacity-95 shadow-sm transition-all"
              title="Download PDF"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-xl bg-slate-100 dark:bg-navy-800 text-slate-500 hover:text-slate-800 dark:hover:text-white transition-colors"
              aria-label="Close resume preview"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Document Format */}
        <div className="space-y-6 text-sm">
          
          {/* Header */}
          <div className="text-center sm:text-left sm:flex sm:items-start sm:justify-between border-b border-slate-200 dark:border-white/10 pb-6">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-900 dark:text-white">
                {personalInfo.name}
              </h2>
              <p className="text-sm sm:text-base font-semibold text-cyan-600 dark:text-cyan-400 mt-1">
                {personalInfo.title}
              </p>
            </div>
            
            <div className="mt-4 sm:mt-0 text-xs text-slate-600 dark:text-slate-300 space-y-1 sm:text-right">
              <div className="flex items-center sm:justify-end gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-cyan-500 shrink-0" />
                <span>{personalInfo.contact.location}</span>
              </div>
              <div className="flex items-center sm:justify-end gap-1.5">
                <Mail className="w-3.5 h-3.5 text-cyan-500 shrink-0" />
                <span>{personalInfo.contact.email}</span>
              </div>
              <div className="flex items-center sm:justify-end gap-1.5">
                <Phone className="w-3.5 h-3.5 text-cyan-500 shrink-0" />
                <span>{personalInfo.contact.phone}</span>
              </div>
              <div className="flex items-center sm:justify-end gap-1.5">
                <Linkedin className="w-3.5 h-3.5 text-cyan-500 shrink-0" />
                <span>{personalInfo.contact.linkedin}</span>
              </div>
            </div>
          </div>

          {/* Career Objective */}
          <div>
            <h3 className="text-xs font-extrabold uppercase tracking-widest text-cyan-600 dark:text-cyan-400 mb-2 border-b border-cyan-500/20 pb-1">
              Career Objective
            </h3>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              {personalInfo.careerObjective}
            </p>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-xs font-extrabold uppercase tracking-widest text-cyan-600 dark:text-cyan-400 mb-2 border-b border-cyan-500/20 pb-1">
              Education
            </h3>
            {educationData.map((edu, idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                  <span>{edu.degree} – {edu.field}</span>
                  <span className="text-emerald-500 font-mono">{edu.score}</span>
                </div>
                <div className="text-xs text-slate-600 dark:text-slate-400">
                  {edu.institution}, {edu.location}
                </div>
              </div>
            ))}
          </div>

          {/* Technical Skills */}
          <div>
            <h3 className="text-xs font-extrabold uppercase tracking-widest text-cyan-600 dark:text-cyan-400 mb-2 border-b border-cyan-500/20 pb-1">
              Technical Skills
            </h3>
            <div className="space-y-2 text-xs">
              {skillsData.map((group, idx) => (
                <div key={idx} className="grid grid-cols-1 sm:grid-cols-4 gap-1">
                  <span className="font-semibold text-slate-800 dark:text-slate-200">
                    {group.category}:
                  </span>
                  <span className="sm:col-span-3 text-slate-600 dark:text-slate-400">
                    {group.skills.map(s => s.name).join(", ")}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Projects */}
          <div>
            <h3 className="text-xs font-extrabold uppercase tracking-widest text-cyan-600 dark:text-cyan-400 mb-2 border-b border-cyan-500/20 pb-1">
              Academic & Technical Projects
            </h3>
            <div className="space-y-4">
              {projectsData.map((p) => (
                <div key={p.id} className="space-y-1.5 text-xs">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                    <span className="font-bold text-slate-900 dark:text-white text-sm">
                      {p.title}
                    </span>
                    <span className="text-slate-500 text-[11px] font-mono">
                      {p.technologies.slice(0, 4).join(" • ")}
                    </span>
                  </div>
                  <p className="text-slate-700 dark:text-slate-300">
                    {p.description}
                  </p>
                  <ul className="list-disc list-inside text-slate-600 dark:text-slate-400 pl-1 space-y-0.5">
                    {p.features.slice(0, 3).map((f, fIdx) => (
                      <li key={fIdx}>{f}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-xs font-extrabold uppercase tracking-widest text-cyan-600 dark:text-cyan-400 mb-2 border-b border-cyan-500/20 pb-1">
              Certifications & Training
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {certificationsData.map((c) => (
                <div key={c.id} className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-500 shrink-0" />
                  <span><strong>{c.title}</strong> – {c.issuer}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Bottom CTA */}
        <div className="mt-8 pt-6 border-t border-slate-200 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 print:hidden">
          <p className="text-xs text-slate-500">
            Need to replace with your customized PDF? Just place your file at <code className="text-cyan-400">public/resume.pdf</code>.
          </p>
          <button
            onClick={handleDownload}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl font-semibold text-xs text-white bg-gradient-to-r from-cyan-500 to-purple-600 shadow-glow-primary hover:opacity-95 transition-all"
          >
            <Download className="w-4 h-4" />
            <span>Download PDF Copy</span>
          </button>
        </div>

      </div>
    </div>
  );
}
