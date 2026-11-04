import React from 'react';
import { X, Award, ExternalLink, ShieldCheck, Calendar, Building } from 'lucide-react';

export default function CertificateModal({ certificate, onClose }) {
  if (!certificate) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-950/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-lg bg-slate-900 dark:bg-navy-900 border border-slate-700/80 dark:border-white/15 rounded-3xl shadow-2xl p-6 sm:p-8 z-10 overflow-hidden my-8 animate-fadeIn">
        
        {/* Glow accent */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-white/10 text-slate-300 hover:text-white hover:bg-white/20 transition-colors"
          aria-label="Close certificate modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Certificate Preview Badge Box */}
        <div className="p-8 rounded-2xl bg-gradient-to-br from-slate-800 to-navy-950 border border-white/10 text-center relative overflow-hidden mb-6">
          <div className="absolute inset-0 bg-grid-pattern opacity-30" />
          <div className="relative z-10 space-y-3">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-cyan-400 to-purple-500 p-0.5 shadow-glow-primary">
              <div className="w-full h-full bg-slate-900 rounded-[14px] flex items-center justify-center text-cyan-400">
                <Award className="w-8 h-8" />
              </div>
            </div>
            <div>
              <span className="text-[11px] font-mono uppercase tracking-widest text-cyan-400">
                Certificate of Completion
              </span>
              <h3 className="text-xl font-bold font-heading text-white mt-1">
                {certificate.title}
              </h3>
              <p className="text-xs text-purple-300 font-medium">
                Issued by {certificate.issuer}
              </p>
            </div>
          </div>
        </div>

        {/* Details List */}
        <div className="space-y-4 text-xs sm:text-sm">
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
              Credential Domain & Skills:
            </span>
            <p className="text-slate-300 mt-1 leading-relaxed">
              {certificate.description}
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-800/80 border border-white/5 space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-400">Credential Status:</span>
              <span className="text-emerald-400 font-semibold flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" /> {certificate.status}
              </span>
            </div>
            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-400">Issuing Organization:</span>
              <span className="text-slate-200 font-medium">{certificate.issuer}</span>
            </div>
            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-400">Credential ID:</span>
              <span className="text-cyan-300 font-mono">{certificate.credentialId}</span>
            </div>
          </div>
        </div>

        {/* Modal Action Buttons */}
        <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-between gap-3">
          <span className="text-[11px] text-slate-400 italic">
            * Link can be updated in <code className="text-cyan-300">portfolioData.js</code>
          </span>

          <button
            onClick={() => alert(`Certificate: ${certificate.title}\nIssuer: ${certificate.issuer}\n\nYou can connect your verified certificate URL in src/data/portfolioData.js!`)}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-purple-600 shadow-glow-primary hover:opacity-90 transition-all"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            <span>Verify Credential</span>
          </button>
        </div>

      </div>
    </div>
  );
}
