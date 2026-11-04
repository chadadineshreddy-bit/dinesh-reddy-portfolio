import React from 'react';
import { 
  User, 
  GraduationCap, 
  Building2, 
  Award, 
  MapPin, 
  Compass, 
  Target, 
  Sparkles,
  CheckCircle2,
  BrainCircuit,
  Database,
  BarChart2
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  const iconMap = {
    GraduationCap,
    Building2,
    Award,
    MapPin,
    LineChart: BarChart2,
    CheckCircle2
  };

  const keyCards = [
    {
      label: "Full Name",
      value: personalInfo.name,
      subtext: "Ready for entry-level roles",
      icon: User,
      color: "from-cyan-500/20 to-blue-500/10",
      textColor: "text-cyan-400"
    },
    {
      label: "Degree",
      value: "B.Tech – CSE (Data Science)",
      subtext: "Computer Science & Data Science",
      icon: GraduationCap,
      color: "from-purple-500/20 to-indigo-500/10",
      textColor: "text-purple-400"
    },
    {
      label: "College",
      value: "CMR Technical Campus",
      subtext: "Hyderabad, Telangana",
      icon: Building2,
      color: "from-blue-500/20 to-cyan-500/10",
      textColor: "text-blue-400"
    },
    {
      label: "Academic Score",
      value: "CGPA: 7.85 / 10",
      subtext: "Consistent academic performance",
      icon: Award,
      color: "from-emerald-500/20 to-teal-500/10",
      textColor: "text-emerald-400"
    },
    {
      label: "Current Location",
      value: "Hyderabad, India",
      subtext: "Open to local & remote opportunities",
      icon: MapPin,
      color: "from-amber-500/20 to-orange-500/10",
      textColor: "text-amber-400"
    },
    {
      label: "Career Interest",
      value: "Data Analytics & Data Science",
      subtext: "Python, SQL, EDA, Machine Learning",
      icon: Compass,
      color: "from-pink-500/20 to-purple-500/10",
      textColor: "text-pink-400"
    }
  ];

  return (
    <section id="about" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Discover My Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-slate-900 dark:text-white">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
            Get to know my academic foundation, technical passions, and drive to turn complex datasets into actionable business value.
          </p>
        </div>

        {/* Top Split: Professional Story & Visual Badge */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch mb-14">
          
          {/* Detailed Narrative */}
          <div className="lg:col-span-7 space-y-5 flex flex-col justify-between">
            <div className="glass-card p-6 sm:p-8 rounded-3xl relative overflow-hidden space-y-4">
              <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono font-semibold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-cyan-400" />
                <span>Professional Background</span>
              </div>
              
              {personalInfo.aboutDetailed.map((paragraph, idx) => (
                <p key={idx} className="text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                  {paragraph}
                </p>
              ))}

              <div className="pt-2 flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  <BarChart2 className="w-3.5 h-3.5" /> Data Analytics
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium bg-purple-500/10 text-purple-400 border border-purple-500/20">
                  <BrainCircuit className="w-3.5 h-3.5" /> Machine Learning
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  <Database className="w-3.5 h-3.5" /> SQL & Data Cleaning
                </span>
              </div>
            </div>
          </div>

          {/* Career Objective Subsection */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="glass-card p-6 sm:p-8 rounded-3xl relative overflow-hidden h-full flex flex-col justify-between bg-gradient-to-br from-primary-900/40 via-navy-900/60 to-purple-900/40 border border-primary-500/30">
              
              {/* Decorative background glow */}
              <div className="absolute top-0 right-0 w-44 h-44 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-primary-500/20 border border-primary-500/40 text-primary-300 text-xs font-semibold">
                  <Target className="w-4 h-4 text-cyan-400" />
                  <span>Career Objective</span>
                </div>

                <h3 className="font-heading text-xl sm:text-2xl font-bold text-white">
                  Ready to Deliver High-Impact Insights
                </h3>

                <blockquote className="border-l-4 border-cyan-400 pl-4 italic text-slate-300 text-sm sm:text-base leading-relaxed">
                  "{personalInfo.careerObjective}"
                </blockquote>
              </div>

              <div className="relative z-10 pt-6 mt-6 border-t border-white/10 flex items-center justify-between text-xs text-slate-300">
                <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                  <CheckCircle2 className="w-4 h-4" /> Immediate Joiner
                </span>
                <span className="text-slate-400">Hyderabad / Relocation Ready</span>
              </div>

            </div>
          </div>

        </div>

        {/* 6 Key Information Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {keyCards.map((card, idx) => {
            const IconComponent = card.icon;
            return (
              <div
                key={idx}
                className="glass-card p-5 sm:p-6 rounded-2xl group hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
              >
                {/* Background subtle color flash */}
                <div className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`} />

                <div className="relative z-10 flex items-start gap-4">
                  <div className={`p-3 rounded-xl bg-slate-200/80 dark:bg-navy-800 border border-slate-300/60 dark:border-white/10 ${card.textColor} group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div className="space-y-1 flex-1">
                    <span className="text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      {card.label}
                    </span>
                    <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white group-hover:text-cyan-400 transition-colors">
                      {card.value}
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400">
                      {card.subtext}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
