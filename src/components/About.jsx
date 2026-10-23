import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, CheckCircle2, User, GraduationCap, Code2, Camera, Sparkles, FileText } from 'lucide-react';
import { projects } from '../data/projects';

export default function About() {
  const specs = [
    { label: 'NAME', value: 'Shreyas R A', icon: User },
    { label: 'ROLE', value: 'Full Stack Developer', icon: Code2 },
    { label: 'EDUCATION', value: 'MCA (Pursuing · CGPA 8.6) · VCET Puttur', icon: GraduationCap },
    { label: 'INTERESTS', value: 'AI/ML · Web Dev · Videography & Photography', icon: Camera },
    { label: 'LOCATION', value: 'Bangalore, India', icon: CheckCircle2 },
    { label: 'STATUS', value: 'Available for Roles & Collaborations', highlight: true },
  ];

  return (
    <section id="about" className="section-wrapper" style={{ backgroundColor: '#050505' }}>
      <div className="container">
        {/* Section Header Meta */}
        <div className="section-meta-header">
          <div className="section-label">01 — ABOUT</div>
          <h2 className="section-title">ABOUT ME</h2>
        </div>

        {/* Two-Column Editorial Layout */}
        <div
          className="about-grid-layout"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: 'clamp(2rem, 5vw, 5rem)',
            alignItems: 'start',
            width: '100%',
            boxSizing: 'border-box',
          }}
        >
          {/* Left Column: Statement & Bio Narrative */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{
              gridColumn: 'span 12',
              display: 'flex',
              flexDirection: 'column',
              gap: '2rem',
            }}
            className="about-left-col"
          >
            <h3
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(1.75rem, 4vw, 3.25rem)',
                fontWeight: 800,
                letterSpacing: '-0.035em',
                lineHeight: 1.15,
                color: '#ffffff',
                textTransform: 'uppercase',
                wordBreak: 'break-word',
                overflowWrap: 'break-word',
              }}
            >
              I'M A DEVELOPER <br className="desktop-break" />
              WHO BUILDS <span style={{ color: 'var(--accent-lime)' }}>USEFUL</span>{' '}
              <br className="desktop-break" />
              DIGITAL PRODUCTS.
            </h3>

            <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.75, textAlign: 'justify', textJustify: 'inter-word' }}>
              I am Shreyas R A, a dedicated Full Stack Developer and MCA student driven by creating software that pairs rigorous engineering principles with refined human experience. From dynamic web platforms to AI-driven predictive intelligence, I specialize in crafting robust, maintainable, and aesthetically compelling technology.
            </p>

            <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.75, textAlign: 'justify', textJustify: 'inter-word' }}>
              Beyond software engineering, I am passionate about <span style={{ color: '#ffffff', fontWeight: 600 }}>videography and photography</span>—capturing visual stories through creative framing, cinematic pacing, and lighting. This creative lens directly shapes how I build digital products: with sharp visual instincts, clean aesthetics, and deliberate attention to detail.
            </p>

            {/* Quick Metrics Banner */}
            <div
              className="about-metrics-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: 'clamp(0.65rem, 2vw, 1.5rem)',
                paddingTop: '1.5rem',
                borderTop: '1px solid var(--border-subtle)',
                width: '100%',
                boxSizing: 'border-box',
              }}
            >
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.75rem, 5vw, 2.5rem)', fontWeight: 900, color: 'var(--accent-lime)', lineHeight: 1.1 }}>
                  {projects.length.toString().padStart(2, '0')}
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'clamp(0.62rem, 1.6vw, 0.75rem)', color: 'var(--text-muted)', letterSpacing: '0.08em', marginTop: '4px' }}>
                  FEATURED PROJECTS
                </div>
              </div>

              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.75rem, 5vw, 2.5rem)', fontWeight: 900, color: '#ffffff', lineHeight: 1.1 }}>
                  02<span style={{ color: 'var(--accent-lime)' }}>ND</span>
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'clamp(0.62rem, 1.6vw, 0.75rem)', color: 'var(--text-muted)', letterSpacing: '0.08em', marginTop: '4px' }}>
                  VIDEOGRAPHY AWARD
                </div>
              </div>

              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.75rem, 5vw, 2.5rem)', fontWeight: 900, color: '#ffffff', lineHeight: 1.1 }}>
                  100%
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'clamp(0.62rem, 1.6vw, 0.75rem)', color: 'var(--text-muted)', letterSpacing: '0.08em', marginTop: '4px' }}>
                  DEDICATED CODE CRAFT
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Spec Sheet & Profile Details */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            style={{
              gridColumn: 'span 12',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
            }}
            className="about-right-col"
          >
            <div
              style={{
                border: '1px solid var(--border-medium)',
                backgroundColor: 'var(--bg-secondary)',
                padding: 'clamp(1.5rem, 3vw, 2.5rem)',
                position: 'relative',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingBottom: '1.25rem',
                  borderBottom: '1px solid var(--border-subtle)',
                  marginBottom: '1.5rem',
                }}
              >
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--accent-lime)', letterSpacing: '0.15em' }}>
                  // PROFILE SPEC SHEET
                </span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                  ID: SRA-2026
                </span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {specs.map((item) => (
                  <div
                    key={item.label}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.35rem',
                      paddingBottom: '1rem',
                      borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        letterSpacing: '0.15em',
                        color: 'var(--text-muted)',
                        textTransform: 'uppercase',
                      }}
                    >
                      {item.label}
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: '1.05rem',
                        fontWeight: 600,
                        color: item.highlight ? 'var(--accent-lime)' : '#ffffff',
                      }}
                    >
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>

              <div className="about-spec-actions" style={{ marginTop: '2rem', display: 'flex', gap: '0.85rem', flexWrap: 'wrap' }}>
                <a
                  href="#contact"
                  className="btn-editorial-lime"
                  style={{ flex: '1 1 180px', textAlign: 'center', padding: '0.9rem 1.25rem', fontSize: '0.825rem' }}
                >
                  <span>START CONVERSATION</span>
                  <ArrowUpRight size={16} />
                </a>

                <a
                  href="/resume/Shreyas.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-editorial-outline"
                  style={{ flex: '1 1 160px', textAlign: 'center', padding: '0.9rem 1.25rem', fontSize: '0.825rem' }}
                >
                  <FileText size={16} />
                  <span>VIEW RESUME</span>
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (min-width: 992px) {
          .about-grid-layout {
            grid-template-columns: repeat(12, 1fr) !important;
          }
          .about-left-col {
            grid-column: span 7 !important;
          }
          .about-right-col {
            grid-column: span 5 !important;
          }
        }
        @media (max-width: 480px) {
          .about-spec-actions {
            flex-direction: column !important;
          }
          .about-spec-actions a {
            width: 100% !important;
            flex: 1 1 auto !important;
          }
        }
      `}</style>
    </section>
  );
}
