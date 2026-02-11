
import React, { useState } from 'react';
import { Project, InsightResponse } from '../types';
import { getAnalyticalInsight } from '../services/geminiService';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [insight, setInsight] = useState<InsightResponse | null>(null);
  const [loading, setLoading] = useState(false);

  const handleGetInsight = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (insight) return;
    setLoading(true);
    const result = await getAnalyticalInsight(project.title, project.description);
    setInsight(result);
    setLoading(false);
  };

  return (
    <div className={`group relative rounded-[2.5rem] overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${project.color} ${project.dark ? 'text-white' : 'text-gray-900'}`}>
      <div className="p-8 md:p-12">
        <div className="flex justify-between items-start mb-12">
          <div>
            <span className={`text-xs font-bold uppercase tracking-widest ${project.dark ? 'opacity-60' : 'text-emerald-600'}`}>
              {project.category}
            </span>
            <h3 className="text-3xl font-bold mt-2">{project.title}</h3>
            <p className={`mt-4 text-lg max-w-xs ${project.dark ? 'opacity-80' : 'text-gray-600'}`}>
              {project.description}
            </p>
          </div>
          <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${project.dark ? 'bg-white/10 hover:bg-white/20' : 'bg-black/5 hover:bg-black/10'}`}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>

        {/* AI Analytical Insight Section */}
        <div className="mb-12">
          {!insight ? (
            <button 
              onClick={handleGetInsight}
              disabled={loading}
              className={`flex items-center space-x-2 px-4 py-2 rounded-full border transition-all text-sm font-medium ${
                project.dark 
                ? 'border-white/20 hover:bg-white hover:text-indigo-900' 
                : 'border-black/10 hover:bg-black hover:text-white'
              }`}
            >
              {loading ? (
                <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
              ) : (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              )}
              <span>{loading ? 'Analyzing Methodology...' : 'View Methodology Insight'}</span>
            </button>
          ) : (
            <div className={`p-5 rounded-3xl animate-fade-in ${project.dark ? 'bg-white/10' : 'bg-black/5'}`}>
              <p className="text-sm italic mb-4 leading-relaxed">"{insight.insight}"</p>
              <div className="flex flex-wrap gap-2">
                {insight.principles.map(p => (
                  <span key={p} className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-tighter ${project.dark ? 'bg-white/20 text-white' : 'bg-black/10 text-black'}`}>
                    {p}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="relative mt-8 group-hover:scale-105 transition-transform duration-700">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-48 md:h-64 rounded-3xl shadow-xl object-cover"
          />
        </div>
      </div>
    </div>
  );
};
