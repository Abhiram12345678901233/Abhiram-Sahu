
import React from 'react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="order-2 md:order-1 relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="h-40 bg-indigo-50 rounded-3xl p-6 flex flex-col justify-end">
                  <span className="text-2xl font-bold text-indigo-600">Active</span>
                  <span className="text-sm text-indigo-800 font-medium">Listener</span>
                </div>
                <div className="h-56 bg-emerald-50 rounded-3xl p-6 flex flex-col justify-end">
                  <span className="text-2xl font-bold text-emerald-600">Team</span>
                  <span className="text-sm text-emerald-800 font-medium">Player</span>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="h-56 bg-amber-50 rounded-3xl p-6 flex flex-col justify-end">
                  <span className="text-2xl font-bold text-amber-600">Problem</span>
                  <span className="text-sm text-amber-800 font-medium">Solver</span>
                </div>
                <div className="h-40 bg-slate-50 rounded-3xl p-6 flex flex-col justify-end">
                  <span className="text-2xl font-bold text-slate-600">Data</span>
                  <span className="text-sm text-slate-800 font-medium">Driven</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2 space-y-8">
            <div className="space-y-4">
              <h3 className="text-4xl font-bold text-gray-900 leading-tight">
                About Me
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Data Analyst with hands-on experience in SQL, Python (Pandas, NumPy), Power BI, and Excel. Skilled in collecting, cleaning, and transforming data to deliver actionable insights.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Experienced in building dashboards, performing EDA, and conducting statistical analysis including hypothesis testing. Certified in Google Data Analytics with a strong foundation in SQL, statistics, and visualization tools. Passionate about solving business problems through data-driven decision-making.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
