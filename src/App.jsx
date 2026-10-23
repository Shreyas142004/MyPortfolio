import React from 'react';
import { MusicProvider } from './context/MusicContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Introduction from './components/Introduction';
import About from './components/About';
import Services from './components/Services';
import Skills from './components/Skills';
import Work from './components/Work';
import Journey from './components/Journey';
import Achievement from './components/Achievement';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

export default function App() {
  return (
    <MusicProvider>
      <div className="portfolio-app-root">
        {/* Desktop Custom Cursor */}
        <CustomCursor />

        {/* Fixed Sticky Minimalist Navigation */}
        <Navbar />

      {/* Main Editorial Content Sections */}
      <main>
        {/* Full-Screen Dramatic Hero */}
        <Hero />

        {/* Philosophy & Introduction Statement */}
        <Introduction />

        {/* 01 — Editorial About & Specs */}
        <About />

        {/* 02 — What I Can Do / Services Editorial Rows */}
        <Services />

        {/* Minimal Tech Stack Grid */}
        <Skills />

        {/* 03 — Major Selected Work Showcases */}
        <Work />

        {/* 04 — Chronology & Journey */}
        <Journey />

        {/* Prominent Award Achievement - AJ Astrix 2026 */}
        <Achievement />

        {/* 05 — Grand Finale Contact CTA */}
        <Contact />
      </main>

      {/* Minimal Footer */}
      <Footer />
    </div>
  </MusicProvider>
  );
}
