import React, { useState } from 'react';
import { 
  Award, 
  ExternalLink, 
  Cloud, 
  Network, 
  BarChart4, 
  Brain, 
  Sparkles, 
  CheckCircle2,
  ShieldCheck,
  Eye
} from 'lucide-react';
import { certificationsData } from '../data/portfolioData';
import CertificateModal from './CertificateModal';

const iconMap = {
  Cloud,
  Network,
  BarChart4,
  Brain
};

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="certifications" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Verified Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-slate-900 dark:text-white">
            Professional <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
            Continuous industry upskilling and foundational credentials in Cloud, Computer Networks, Data Visualization, and Artificial Intelligence.
          </p>
        </div>

        {/* Certifications 4-Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificationsData.map((cert) => {
            const IconComponent = iconMap[cert.icon] || Award;
            return (
              <div
                key={cert.id}
                className="glass-panel p-6 rounded-3xl border border-slate-200/80 dark:border-white/10 hover:border-cyan-500/40 flex flex-col justify-between group hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 relative overflow-hidden"
              >
                {/* Background accent flash */}
                <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`} />

                <div className="relative z-10 space-y-4">
                  {/* Top Badge & Icon */}
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-2xl bg-slate-100 dark:bg-navy-800 border border-slate-200 dark:border-white/10 text-cyan-500 dark:text-cyan-400 group-hover:bg-gradient-to-br group-hover:from-cyan-500 group-hover:to-purple-600 group-hover:text-white transition-all duration-300 shadow-sm">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-semibold px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
                      {cert.badge}
                    </span>
                  </div>

                  {/* Title & Organization */}
                  <div>
                    <h3 className="font-heading font-bold text-base sm:text-lg text-slate-900 dark:text-white group-hover:text-cyan-400 transition-colors leading-snug">
                      {cert.title}
                    </h3>
                    <p className="text-xs font-semibold text-purple-600 dark:text-purple-400 mt-1">
                      {cert.issuer}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3">
                    {cert.description}
                  </p>
                </div>

                {/* Footer Action */}
                <div className="relative z-10 pt-5 mt-5 border-t border-slate-200/60 dark:border-white/10 flex items-center justify-between">
                  <span className="text-[11px] font-medium text-emerald-500 dark:text-emerald-400 flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" /> Verified
                  </span>

                  <button
                    onClick={() => setSelectedCert(cert)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold text-slate-700 dark:text-white bg-slate-100 dark:bg-navy-800 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-purple-600 hover:text-white border border-slate-200 dark:border-white/10 transition-all shadow-sm"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>View</span>
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Certificate Modal */}
      <CertificateModal
        certificate={selectedCert}
        onClose={() => setSelectedCert(null)}
      />
    </section>
  );
}
