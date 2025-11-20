import React from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=2000&auto=format&fit=crop"
          alt="Modern Law Office City View"
          className="w-full h-full object-cover"
        />
        {/* Darker overlay for better text readability against the window light */}
        <div className="absolute inset-0 bg-primary-900/60 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/95 via-primary-900/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left w-full">
        <div className="sm:w-2/3 lg:w-1/2 space-y-8 animate-fade-in-up">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-accent-100 text-sm font-semibold">
            <ShieldCheck className="w-4 h-4" />
            <span>专注商事争议解决与企业合规</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight">
            刚柔并济，<br />
            <span className="text-accent-500">为您构建坚实的法律防线</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-200 leading-relaxed font-light">
            李明哲律师团队，以细腻的商业洞察力与严谨的法律逻辑，为企业及个人客户提供有温度、有深度的法律解决方案。
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-accent-600 hover:bg-accent-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              预约咨询
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center px-8 py-3 border border-white/30 text-base font-medium rounded-md text-white hover:bg-white/10 backdrop-blur-sm transition-all"
            >
              了解更多
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};