
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-6 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center text-white font-bold">A</div>
          <span className="font-bold text-gray-900">Abhiram Sahu</span>
        </div>
        
        <p className="text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Abhiram Sahu. Made with passion & AI.
        </p>
        
        <div className="flex space-x-8">
          <a href="#" className="text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-black">Privacy</a>
          <a href="#" className="text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-black">Terms</a>
        </div>
      </div>
    </footer>
  );
};
