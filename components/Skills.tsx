
import React from 'react';

export const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Programming",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      skills: ["Python (Pandas, NumPy)", "SQL", "NoSQL", "R Programming"],
      color: "bg-indigo-50",
      textColor: "text-indigo-600",
      accent: "text-indigo-800"
    },
    {
      title: "Visualization",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      skills: ["Power BI", "Tableau", "Excel (Advanced)", "Matplotlib / Seaborn"],
      color: "bg-emerald-50",
      textColor: "text-emerald-600",
      accent: "text-emerald-800"
    },
    {
      title: "Analysis",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      skills: ["EDA", "Hypothesis Testing", "Statistical Analysis", "A/B Testing"],
      color: "bg-amber-50",
      textColor: "text-amber-600",
      accent: "text-amber-800"
    },
    {
      title: "Methodology",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      skills: ["Data Cleaning", "Transformation", "Machine Learning", "Reporting"],
      color: "bg-slate-50",
      textColor: "text-slate-600",
      accent: "text-slate-800"
    }
  ];

  return (
    <section id="skills" className="py-24 px-6 bg-[#fcfcfc]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 space-y-6 md:space-y-0">
          <div className="space-y-4">
            <h2 className="text-sm font-semibold text-emerald-600 uppercase tracking-widest">Toolkit</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">Skills & Expertise</h3>
          </div>
          <p className="text-gray-500 max-w-sm leading-relaxed">
            A comprehensive set of technical skills acquired through certifications and real-world project experience.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, idx) => (
            <div 
              key={idx} 
              className={`${category.color} p-8 rounded-[2rem] transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group`}
            >
              <div className={`${category.textColor} mb-6`}>
                {category.icon}
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-6">{category.title}</h4>
              <ul className="space-y-3">
                {category.skills.map((skill, sIdx) => (
                  <li key={sIdx} className="flex items-center space-x-2">
                    <div className={`w-1.5 h-1.5 rounded-full ${category.textColor} opacity-40`}></div>
                    <span className="text-gray-600 font-medium text-sm">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
