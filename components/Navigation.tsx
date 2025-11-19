import React, { useState, useEffect } from 'react';
import { Menu, X, Scale } from 'lucide-react';

const navItems = [
  { label: '首页', href: '#home' },
  { label: '关于我', href: '#about' },
  { label: '专业领域', href: '#services' },
  { label: 'AI 顾问', href: '#ai-assistant' },
  { label: '联系方式', href: '#contact' },
];

export const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-primary-900/95 backdrop-blur-sm shadow-lg py-3' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="p-2 bg-accent-600 rounded-lg">
              <Scale className="h-6 w-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className={`font-serif text-xl font-bold tracking-wide ${scrolled ? 'text-white' : 'text-white'}`}>
                李明哲律师
              </span>
              <span className={`text-xs uppercase tracking-wider ${scrolled ? 'text-gray-300' : 'text-gray-300'}`}>
                Mingzhe Law Firm
              </span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-accent-500 ${
                  scrolled ? 'text-gray-100' : 'text-white'
                }`}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="px-5 py-2 rounded-md bg-accent-600 text-white text-sm font-semibold hover:bg-accent-500 transition-colors shadow-md"
            >
              预约咨询
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-accent-500 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden bg-primary-900 absolute top-full left-0 w-full shadow-xl border-t border-gray-700">
          <div className="px-4 pt-2 pb-8 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-3 text-base font-medium text-gray-100 hover:text-accent-500 hover:bg-primary-800 rounded-md"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};