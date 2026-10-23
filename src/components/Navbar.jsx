import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import BackgroundMusic from './BackgroundMusic';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { name: 'ABOUT', href: '#about', id: 'about' },
    { name: 'SERVICES', href: '#services', id: 'services' },
    { name: 'WORK', href: '#work', id: 'work' },
    { name: 'JOURNEY', href: '#journey', id: 'journey' },
    { name: 'CONTACT', href: '#contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ['about', 'services', 'work', 'journey', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
          backgroundColor: scrolled ? 'rgba(5, 5, 5, 0.88)' : 'transparent',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid transparent',
        }}
      >
        <div
          className="container navbar-inner-container"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: 'var(--nav-height)',
          }}
        >
          {/* Left: Brand Identity */}
          <a
            href="#hero"
            onClick={(e) => scrollTo(e, '#hero')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              fontFamily: 'var(--font-heading)',
              fontSize: '1.2rem',
              fontWeight: 800,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: 'var(--text-primary)',
            }}
          >
            <span
              style={{
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                backgroundColor: 'var(--accent-lime)',
                boxShadow: '0 0 12px var(--accent-lime)',
                display: 'inline-block',
              }}
            />
            <span>SHREYAS R A</span>
          </a>

          {/* Desktop Right Links */}
          <nav
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '1.75rem',
            }}
            className="desktop-nav"
          >
            <ul
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '2rem',
                listStyle: 'none',
              }}
            >
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={(e) => scrollTo(e, link.href)}
                      style={{
                        position: 'relative',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.95rem',
                        fontWeight: 600,
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                        color: isActive ? 'var(--accent-lime)' : 'var(--text-secondary)',
                        transition: 'color 0.25s ease',
                        padding: '6px 0',
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-lime)')}
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color = isActive
                          ? 'var(--accent-lime)'
                          : 'var(--text-secondary)')
                      }
                    >
                      {link.name}
                      {isActive && (
                        <motion.span
                          layoutId="activeNavIndicator"
                          style={{
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            right: 0,
                            height: '2px',
                            backgroundColor: 'var(--accent-lime)',
                          }}
                          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        />
                      )}
                    </a>
                  </li>
                );
              })}
            </ul>

            {/* Background Music Toggle */}
            <BackgroundMusic />

            {/* Resume Action */}
            <a
              href="/resume/Shreyas.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px',
                padding: '8px 18px',
                borderRadius: '999px',
                border: '1px solid var(--border-medium)',
                backgroundColor: 'rgba(255, 255, 255, 0.03)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.88rem',
                fontWeight: 600,
                letterSpacing: '0.1em',
                color: 'var(--text-secondary)',
                transition: 'all 0.25s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--accent-lime)';
                e.currentTarget.style.color = 'var(--accent-lime)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-medium)';
                e.currentTarget.style.color = 'var(--text-secondary)';
              }}
            >
              <span>RESUME</span>
              <ArrowUpRight size={13} />
            </a>

            {/* Circular CTA indicator */}
            <a
              href="#contact"
              onClick={(e) => scrollTo(e, '#contact')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '6px',
                padding: '9px 20px',
                borderRadius: '999px',
                border: '1px solid rgba(183, 255, 0, 0.4)',
                backgroundColor: 'rgba(183, 255, 0, 0.06)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.88rem',
                fontWeight: 600,
                letterSpacing: '0.12em',
                color: 'var(--accent-lime)',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--accent-lime)';
                e.currentTarget.style.color = '#000000';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(183, 255, 0, 0.06)';
                e.currentTarget.style.color = 'var(--accent-lime)';
              }}
            >
              <span>CONNECT</span>
              <ArrowUpRight size={14} />
            </a>
          </nav>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-menu-btn"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '44px',
              height: '44px',
              border: '1px solid var(--border-medium)',
              color: 'var(--text-primary)',
              borderRadius: '6px',
              background: 'rgba(255, 255, 255, 0.03)',
            }}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* Full Screen Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: '#050505',
              zIndex: 999,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              padding: '5.5rem 1.75rem 2.5rem',
              overflowY: 'auto',
              WebkitOverflowScrolling: 'touch',
              borderBottom: '1px solid var(--border-subtle)',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.8rem',
                  letterSpacing: '0.2em',
                  color: 'var(--accent-lime)',
                }}
              >
                // NAVIGATION
              </span>

              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {navLinks.map((link, idx) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.07 + 0.1 }}
                  >
                    <a
                      href={link.href}
                      onClick={(e) => scrollTo(e, link.href)}
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '2.25rem',
                        fontWeight: 800,
                        letterSpacing: '-0.02em',
                        color: activeSection === link.id ? 'var(--accent-lime)' : '#ffffff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                      }}
                    >
                      <span>{link.name}</span>
                      <ArrowUpRight size={24} color="var(--accent-lime)" />
                    </a>
                  </motion.li>
                ))}

                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navLinks.length * 0.07 + 0.1 }}
                >
                  <a
                    href="/resume/Shreyas.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileMenuOpen(false)}
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.75rem',
                      fontWeight: 800,
                      letterSpacing: '-0.02em',
                      color: 'var(--accent-lime)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '8px 0',
                    }}
                  >
                    <span>RESUME (PDF)</span>
                    <ArrowUpRight size={22} color="var(--accent-lime)" />
                  </a>
                </motion.li>

                {/* Background Music Toggle for Mobile */}
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: (navLinks.length + 1) * 0.07 + 0.1 }}
                >
                  <div style={{ paddingTop: '0.5rem' }}>
                    <BackgroundMusic mobile />
                  </div>
                </motion.li>
              </ul>

              <div
                style={{
                  marginTop: '2rem',
                  paddingTop: '2rem',
                  borderTop: '1px solid var(--border-subtle)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span
                    style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--accent-lime)',
                    }}
                  />
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: '#a0a0a0' }}>
                    OPEN FOR OPPORTUNITIES
                  </span>
                </div>
                <a
                  href="mailto:shreyasra7@gmail.com"
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    color: 'var(--accent-lime)',
                    textDecoration: 'underline',
                  }}
                >
                  CONTACT DIRECTLY
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (min-width: 900px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-menu-btn {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
}
