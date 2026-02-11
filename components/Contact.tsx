
import React from 'react';

export const Contact: React.FC = () => {
  const socialLinks = [
    { label: 'In', href: 'https://www.linkedin.com/in/abhiram-sahu-5242a6244/' },
    { label: 'Gh', href: 'https://github.com/Abhiram12345678901233' }
  ];

  return (
    <section id="contact" className="py-24 px-6 bg-slate-900 rounded-[4rem] mx-4 md:mx-8 my-12 text-white overflow-hidden relative">
      <div className="max-w-5xl mx-auto relative z-10 text-center space-y-12">
        <div className="space-y-4">
          <h2 className="text-sm font-semibold text-emerald-400 uppercase tracking-widest">Get In Touch</h2>
        </div>
        
        <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Data Analyst fresher seeking opportunities where I can apply my skills in SQL, Python, Power BI, and statistics to solve real-world problems. If you have a project in mind or just want to say hi, my inbox is always open.
        </p>

        <div className="flex flex-col items-center justify-center gap-6 pt-8">
          <div className="flex flex-col items-center gap-4">
            <a 
              href="tel:6305497684" 
              className="text-3xl md:text-4xl font-bold text-white hover:text-emerald-400 transition-colors flex items-center gap-3"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              6305497684
            </a>
            <a 
              href="mailto:sahuabhiram832@gmail.com" 
              className="bg-white text-slate-900 px-10 py-5 rounded-full text-xl font-bold hover:bg-slate-100 transition-all shadow-xl hover:scale-105"
            >
              sahuabhiram832@gmail.com
            </a>
          </div>
          
          <div className="flex space-x-6 pt-4">
            {socialLinks.map(social => (
              <a 
                key={social.label} 
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white hover:border-white transition-all font-bold text-sm"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>
    </section>
  );
};
