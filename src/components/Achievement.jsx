import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, Flame, ArrowUpRight } from 'lucide-react';

export default function Achievement() {
  return (
    <section
      id="achievements"
      className="section-wrapper"
      style={{
        backgroundColor: '#050505',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="bg-grid-overlay" />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="achievement-card-inner"
          style={{
            border: '1px solid var(--accent-lime)',
            backgroundColor: 'rgba(183, 255, 0, 0.02)',
            padding: 'clamp(1.25rem, 4vw, 3.5rem)',
            position: 'relative',
            boxShadow: '0 0 40px rgba(183, 255, 0, 0.05)',
            width: '100%',
            boxSizing: 'border-box',
          }}
        >
          {/* Top Label */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingBottom: '1.5rem',
              borderBottom: '1px solid var(--border-medium)',
              marginBottom: '2rem',
              flexWrap: 'wrap',
              gap: '1rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Trophy size={18} color="var(--accent-lime)" />
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  color: 'var(--accent-lime)',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                }}
              >
                // KEY HONORS & RECOGNITION
              </span>
            </div>

            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                color: 'var(--text-muted)',
                letterSpacing: '0.15em',
              }}
            >
              AJ INSTITUTE OF ENGINEERING & TECHNOLOGY
            </span>
          </div>

          {/* Main Statement */}
          <div className="achievement-content-block" style={{ width: '100%', boxSizing: 'border-box' }}>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 'clamp(2rem, 4.5vw, 4.25rem)',
                fontWeight: 900,
                color: 'var(--accent-lime)',
                lineHeight: 1,
                display: 'block',
                marginBottom: '0.75rem',
                wordBreak: 'break-word',
              }}
            >
              2ND PLACE
            </span>

            <h3
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(1.25rem, 3.5vw, 2.5rem)',
                fontWeight: 800,
                textTransform: 'uppercase',
                letterSpacing: '-0.03em',
                color: '#ffffff',
                marginBottom: '1rem',
                lineHeight: 1.15,
                wordBreak: 'break-word',
                overflowWrap: 'break-word',
              }}
            >
              AJ ASTRIX 2026 — CINESAUR REEL MAKING
            </h3>

            <p
              style={{
                fontSize: 'clamp(0.92rem, 2.5vw, 1.1rem)',
                color: 'var(--text-secondary)',
                maxWidth: '780px',
                lineHeight: 1.7,
                textAlign: 'justify',
                textJustify: 'inter-word',
                WebkitHyphens: 'auto',
                hyphens: 'auto',
                wordBreak: 'normal',
                overflowWrap: 'break-word',
                boxSizing: 'border-box',
                width: '100%',
              }}
            >
              Secured II place in Videography at AJ Institute of Engineering &amp; Technology (AJIET) in the prestigious AJ Astrix 2026 — Cinesaur Reel Making competition. Celebrated for creative cinematography, dynamic visual storytelling, sound design integration, and editing precision.
            </p>
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 480px) {
          .achievement-card-inner {
            padding: 1.5rem 1.25rem !important;
            box-sizing: border-box !important;
            width: 100% !important;
            max-width: 100% !important;
          }
          .achievement-content-block {
            width: 100% !important;
            max-width: 100% !important;
            box-sizing: border-box !important;
          }
          .achievement-content-block p {
            max-width: 100% !important;
            box-sizing: border-box !important;
            padding-right: 4px !important;
          }
        }
      `}</style>
    </section>
  );
}
