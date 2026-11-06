import React, { useState } from 'react';
import { 
  Github, 
  ExternalLink, 
  Sparkles, 
  CheckCircle2, 
  Layers, 
  ArrowUpRight,
  Sprout,
  UserCheck,
  FileSearch,
  ShoppingCart
} from 'lucide-react';
import { projectsData, projectFilterCategories } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All Projects");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = activeFilter === "All Projects"
    ? projectsData
    : projectsData.filter(p => p.category === activeFilter);

  // Decorative icon mapping for project visual headers
  const projectIllustrationMap = {
    1: Sprout,
    2: UserCheck,
    3: FileSearch,
    4: ShoppingCart
  };

  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Featured Portfolio Works</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-slate-900 dark:text-white">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
            Hands-on machine learning systems, data analytics pipelines, and interactive web applications developed with modern toolchains.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-14">
          {projectFilterCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
                activeFilter === category
                  ? 'bg-gradient-to-r from-primary-600 via-primary-500 to-cyan-500 text-white shadow-glow-primary scale-105'
                  : 'bg-slate-200/70 dark:bg-navy-900/70 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-300/80 dark:hover:bg-navy-800 border border-slate-300/50 dark:border-white/5'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {filteredProjects.map((project) => {
            const ProjectIcon = projectIllustrationMap[project.id] || Layers;
            return (
              <div
                key={project.id}
                className="group glass-panel rounded-3xl overflow-hidden border border-slate-200/80 dark:border-white/10 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:border-cyan-500/40 relative"
              >
                {/* Visual Header / Graphic Banner or Real Project Photo */}
                <div className={`relative h-52 w-full ${project.image && project.image.startsWith('/') ? 'bg-slate-900' : `bg-gradient-to-br ${project.accentColor}`} overflow-hidden border-b border-slate-200/60 dark:border-white/10`}>
                  {project.image && project.image.startsWith('/') ? (
                    <>
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                    </>
                  ) : (
                    <>
                      <div className="absolute inset-0 bg-grid-pattern opacity-40" />
                      <div className="relative z-10 flex items-center justify-center my-auto h-full">
                        <div className="p-4 rounded-2xl bg-slate-900/80 dark:bg-navy-950/80 border border-white/15 text-cyan-400 group-hover:scale-110 group-hover:text-cyan-300 transition-all duration-300 shadow-lg">
                          <ProjectIcon className="w-8 h-8" />
                        </div>
                      </div>
                    </>
                  )}

                  {/* Top Category Badges */}
                  <div className="absolute top-4 left-4 right-4 z-10 flex items-center justify-between">
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-900/80 dark:bg-navy-950/80 text-cyan-400 border border-cyan-500/30 backdrop-blur-md">
                      {project.category}
                    </span>
                    <span className="text-xs font-medium px-3 py-1 rounded-full bg-slate-900/80 dark:bg-navy-950/80 text-purple-300 border border-purple-500/30 backdrop-blur-md">
                      {project.badge}
                    </span>
                  </div>

                  {/* Bottom tagline */}
                  <div className="absolute bottom-3 left-4 right-4 z-10 text-xs font-mono text-white/90 font-semibold truncate drop-shadow">
                    {project.tagline}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-6">
                  
                  {/* Title & Description */}
                  <div className="space-y-3">
                    <h3 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-white group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  {/* Key Features Preview (First 3) */}
                  <div className="space-y-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Core Capabilities:
                    </span>
                    <ul className="space-y-1.5">
                      {project.features.slice(0, 3).map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies Tags */}
                  <div>
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.slice(0, 5).map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 rounded-lg text-[11px] font-medium bg-slate-100 dark:bg-navy-800 text-slate-700 dark:text-cyan-300 border border-slate-200 dark:border-white/5"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 5 && (
                        <span className="px-2 py-1 rounded-lg text-[11px] font-medium bg-slate-100 dark:bg-navy-800 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-white/5">
                          +{project.technologies.length - 5} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Card Actions */}
                  <div className="pt-4 border-t border-slate-200/60 dark:border-white/10 flex items-center justify-between gap-3">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary-600 dark:text-cyan-400 hover:text-cyan-500 transition-colors group/btn"
                    >
                      <span>View Details</span>
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    </button>

                    <div className="flex items-center gap-2">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-xl bg-slate-100 dark:bg-navy-800 text-slate-700 dark:text-slate-300 hover:text-white hover:bg-slate-800 dark:hover:bg-slate-700 border border-slate-200 dark:border-white/10 transition-all"
                        aria-label={`GitHub repo for ${project.title}`}
                      >
                        <Github className="w-4 h-4" />
                      </a>

                      <button
                        onClick={() => setSelectedProject(project)}
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-purple-600 shadow-sm hover:shadow-glow-cyan hover:scale-105 active:scale-95 transition-all"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>View Project</span>
                      </button>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
