import React from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2301&auto=format&fit=crop"
          alt="Law Office"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary-900/80 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-900 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left w-full">
        <div className="sm:w-2/3 lg:w-1/2 space-y-8 animate-fade-in-up">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-accent-500 text-sm font-semibold">
            <ShieldCheck className="w-4 h-4" />
            <span>拥有15年执业经验的资深法律顾问</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight">
            以法为盾，<br />
            <span className="text-accent-500">捍卫您的合法权益</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
            李明哲律师团队，专注于公司商务、争议解决及知识产权领域。我们致力于为每一位客户提供具有商业洞察力的法律解决方案。
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-accent-600 hover:bg-accent-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              立即预约
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