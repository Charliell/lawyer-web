import React from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About, Services, Contact, Footer } from './components/ContentSections';
import { LegalAssistant } from './components/LegalAssistant';

function App() {
  return (
    <div className="min-h-screen flex flex-col scroll-smooth">
      <Navigation />
      <main className="flex-grow">
        <Hero />
        <About />
        <Services />
        <LegalAssistant />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;