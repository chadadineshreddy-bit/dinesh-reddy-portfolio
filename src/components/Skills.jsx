import React, { useState } from 'react';
import { 
  Code2, 
  BarChart3, 
  BrainCircuit, 
  DatabaseZap, 
  Wrench, 
  Sparkles,
  Terminal,
  Database,
  FileCode,
  Palette,
  FileJson,
  Sheet,
  PieChart,
  AreaChart,
  TrendingUp,
  Search,
  Layers,
  Cpu,
  Network,
  Brain,
  Filter,
  Binary,
  Server,
  HardDrive,
  Laptop,
  BookOpen,
  GitBranch,
  Github,
  Files
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';

// Map icon strings to Lucide components
const iconComponentMap = {
  Code2, BarChart3, BrainCircuit, DatabaseZap, Wrench,
  Terminal, Database, FileCode, Palette, FileJson,
  Sheet, PieChart, AreaChart, TrendingUp, Search, Sparkles,
  Layers, Cpu, Network, Brain, Filter, Binary,
  Server, Code: Code2, HardDrive,
  Laptop, BookOpen, GitBranch, Github, Files
};

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", ...skillsData.map(c => c.category)];

  const filteredCategories = selectedCategory === "All" 
    ? skillsData 
    : skillsData.filter(c => c.category === selectedCategory);

  return (
    <section id="skills" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-slate-900 dark:text-white">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
            Categorized overview of programming languages, analytical tools, machine learning libraries, and database systems I use to solve problems.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-primary-600 to-cyan-600 text-white shadow-glow-cyan scale-105'
                  : 'bg-slate-200/70 dark:bg-navy-900/70 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-300 dark:hover:bg-navy-800 border border-slate-300/50 dark:border-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Category Grid */}
        <div className="space-y-10">
          {filteredCategories.map((group, groupIdx) => {
            const GroupIcon = iconComponentMap[group.icon] || Code2;
            return (
              <div
                key={groupIdx}
                className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-200/70 dark:border-white/10 relative overflow-hidden"
              >
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-slate-200/60 dark:border-white/10 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 text-cyan-400 border border-cyan-500/30">
                      <GroupIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold font-heading text-slate-900 dark:text-white">
                        {group.category}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                        {group.description}
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-mono font-medium px-3 py-1 rounded-full bg-slate-100 dark:bg-navy-800 text-slate-600 dark:text-slate-400 self-start sm:self-auto border border-slate-200 dark:border-white/5">
                    {group.skills.length} competencies
                  </span>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {group.skills.map((skill, skillIdx) => {
                    const SkillIcon = iconComponentMap[skill.icon] || Code2;
                    return (
                      <div
                        key={skillIdx}
                        className="glass-card p-4 rounded-2xl flex items-start gap-3.5 group hover:-translate-y-1 transition-all duration-300 border border-slate-200/60 dark:border-white/5 hover:border-cyan-500/40"
                      >
                        <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-navy-800 text-cyan-500 dark:text-cyan-400 group-hover:bg-gradient-to-br group-hover:from-cyan-500 group-hover:to-purple-600 group-hover:text-white transition-all duration-300 shrink-0">
                          <SkillIcon className="w-4 h-4" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center justify-between gap-2">
                            <h4 className="font-semibold text-sm text-slate-900 dark:text-white truncate group-hover:text-cyan-400 transition-colors">
                              {skill.name}
                            </h4>
                            <span className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20 shrink-0">
                              {skill.level}
                            </span>
                          </div>
                          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-snug">
                            {skill.note}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
