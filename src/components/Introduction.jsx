import React from 'react';
import { motion } from 'framer-motion';

export default function Introduction() {
  return (
    <section
      id="introduction"
      className="section-wrapper"
      style={{
        position: 'relative',
        backgroundColor: '#050505',
        overflow: 'hidden',
      }}
    >
      <div className="bg-grid-overlay" />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 'clamp(2rem, 4vw, 3.5rem)',
            maxWidth: '1400px',
          }}
        >
          {/* Subtle Monospace Category Marker */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.8rem',
                letterSpacing: '0.25em',
                color: 'var(--accent-lime)',
                textTransform: 'uppercase',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <span style={{ width: '6px', height: '6px', backgroundColor: 'var(--accent-lime)', borderRadius: '50%' }} />
              PHILOSOPHY // MANIFESTO
            </span>
            <div style={{ flex: 1, height: '1px', backgroundColor: 'var(--border-subtle)' }} />
          </div>

          {/* Large Typography Statement with Neon Lime Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2
              className="manifesto-heading"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2rem, 4.2vw, 4.75rem)',
                fontWeight: 900,
                textTransform: 'uppercase',
                letterSpacing: '-0.035em',
                lineHeight: 1.15,
                color: '#ffffff',
                wordBreak: 'normal',
                overflowWrap: 'break-word',
                maxWidth: '100%',
              }}
            >
              <span style={{ display: 'inline-block' }}>I BUILD</span>{' '}
              <span style={{ color: 'var(--accent-lime)', display: 'inline-block' }}>DIGITAL</span>{' '}
              <br className="desktop-break" />
              <span style={{ color: 'var(--accent-lime)', display: 'inline-block' }}>EXPERIENCES</span>{' '}
              <span style={{ display: 'inline-block' }}>THAT SOLVE</span>{' '}
              <br className="desktop-break" />
              <span
                style={{
                  display: 'inline-block',
                  textDecoration: 'underline',
                  textDecorationColor: 'var(--accent-lime)',
                  textUnderlineOffset: '8px',
                }}
              >
                REAL PROBLEMS
              </span>
              .
            </h2>
          </motion.div>

          {/* Supporting Text & Three Pillar Blocks */}
          <div
            className="manifesto-pillars-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))',
              gap: '2rem',
              marginTop: '1.5rem',
              paddingTop: '2.5rem',
              borderTop: '1px solid var(--border-subtle)',
              width: '100%',
              boxSizing: 'border-box',
            }}
          >
            <div style={{ minWidth: 0 }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--accent-lime)', letterSpacing: '0.15em' }}>
                // ACADEMIC RIGOR
              </span>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.35rem', fontWeight: 700, margin: '0.5rem 0', color: '#ffffff' }}>
                MCA Student
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', textAlign: 'justify', textJustify: 'inter-word' }}>
                Grounding cutting-edge application engineering in computer science fundamentals, algorithm efficiency, and architecture design.
              </p>
            </div>

            <div style={{ minWidth: 0 }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--accent-lime)', letterSpacing: '0.15em' }}>
                // ENGINEERING SPECIALTY
              </span>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.35rem', fontWeight: 700, margin: '0.5rem 0', color: '#ffffff' }}>
                Full Stack Developer
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', textAlign: 'justify', textJustify: 'inter-word' }}>
                Constructing performant web products with React, Node.js, Express, and distributed database ecosystems with security and scalability.
              </p>
            </div>

            <div style={{ minWidth: 0 }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--accent-lime)', letterSpacing: '0.15em' }}>
                // ADVANCED EXPLORATION
              </span>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.35rem', fontWeight: 700, margin: '0.5rem 0', color: '#ffffff' }}>
                AI/ML Enthusiast
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', textAlign: 'justify', textJustify: 'inter-word' }}>
                Architecting deep learning models, spatiotemporal meteorological nowcasting systems, and intelligent predictive algorithms.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 540px) {
          .manifesto-heading {
            font-size: clamp(1.35rem, 6.2vw, 2.15rem) !important;
            line-height: 1.25 !important;
            letter-spacing: -0.025em !important;
          }
        }
      `}</style>
    </section>
  );
}
