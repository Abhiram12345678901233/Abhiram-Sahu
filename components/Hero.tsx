
import React from 'react';

export const Hero: React.FC = () => {
  const socialLinks = [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/abhiram-sahu-5242a6244/' },
    { label: 'GitHub', href: 'https://github.com/Abhiram12345678901233' }
  ];

  const handleScrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToWorks = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const worksSection = document.getElementById('works');
    if (worksSection) {
      worksSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-32 pb-20 md:pt-48 md:pb-32 px-6 gradient-bg">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight text-gray-900">
            Hey, I'm <span className="text-gradient">Abhiram Sahu</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-lg leading-relaxed">
            I'm a Data Analyst focused on extracting meaningful insights that drive business strategy and human-centered decisions.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="#contact"
              onClick={handleScrollToContact}
              className="group flex items-center space-x-2 bg-black text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-800 hover:scale-[1.05] transition-all shadow-lg active:scale-95"
            >
              <span>Get in touch</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
            <a
              href="#works"
              onClick={handleScrollToWorks}
              className="bg-white text-gray-900 px-8 py-4 rounded-full text-lg font-medium border border-gray-200 hover:bg-gray-50 hover:scale-[1.02] transition-all active:scale-95"
            >
              View Projects
            </a>
          </div>
          
          <div className="flex items-center space-x-6 pt-6">
            <span className="text-sm font-medium text-gray-400 uppercase tracking-widest">Connect</span>
            <div className="flex space-x-4">
              {socialLinks.map(social => (
                <a 
                  key={social.label} 
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-black transition-colors font-medium underline decoration-gray-200 underline-offset-4"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="relative flex justify-center md:justify-end animate-scale-in">
          <div className="relative w-full max-w-md aspect-square rounded-[3rem] overflow-hidden shadow-2xl rotate-3 bg-cream-100">
             <img 
               src="https://i.ibb.co/FLfBGsqp/Whats-App-Image-2026-01-28-at-6-49-20-PM.jpg" 
               alt="Abhiram Sahu Portrait" 
               className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-yellow-100 rounded-full blur-3xl opacity-60"></div>
          <div className="absolute -top-10 right-0 w-40 h-40 bg-emerald-100 rounded-full blur-3xl opacity-60"></div>
        </div>
      </div>
    </section>
  );
};
