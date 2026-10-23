import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { education, journeyTimeline } from '../data/projects';
import { GraduationCap, Milestone, ArrowUpRight, FileText, Award, Calendar, MapPin } from 'lucide-react';

export default function Journey() {
  const [activeTab, setActiveTab] = useState('ALL');

  return (
    <section id="journey" className="section-wrapper" style={{ backgroundColor: '#050505' }}>
      <div className="container">
        {/* Section Header Meta */}
        <div
          className="section-meta-header"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            flexWrap: 'wrap',
            gap: '1.75rem',
          }}
        >
          <div>
            <div className="section-label">04 — EDUCATION & JOURNEY</div>
            <h2 className="section-title">ACADEMIC & PATHWAY</h2>
          </div>

          {/* Action Row: Tabs + Resume Link */}
          <div
            className="journey-header-actions"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              flexWrap: 'wrap',
            }}
          >
            {/* Filter Tabs */}
            <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
              {[
                { label: 'ALL', id: 'ALL' },
                { label: `ACADEMICS (${education.length.toString().padStart(2, '0')})`, id: 'ACADEMICS' },
                { label: `MILESTONES (${journeyTimeline.length.toString().padStart(2, '0')})`, id: 'MILESTONES' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    letterSpacing: '0.1em',
                    padding: '7px 14px',
                    border: '1px solid',
                    borderColor: activeTab === tab.id ? 'var(--accent-lime)' : 'var(--border-subtle)',
                    backgroundColor: activeTab === tab.id ? 'rgba(183, 255, 0, 0.1)' : 'transparent',
                    color: activeTab === tab.id ? 'var(--accent-lime)' : 'var(--text-muted)',
                    textTransform: 'uppercase',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Direct Resume PDF Action */}
            <a
              href="/resume/Shreyas.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-editorial-lime"
              style={{
                padding: '0.65rem 1.25rem',
                fontSize: '0.78rem',
              }}
            >
              <FileText size={15} />
              <span>DOWNLOAD RESUME</span>
              <ArrowUpRight size={13} />
            </a>
          </div>
        </div>

        {/* Content Section Container */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
          {/* 1. Academic Credentials Grid */}
          {(activeTab === 'ALL' || activeTab === 'ACADEMICS') && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  marginBottom: '2rem',
                }}
              >
                <GraduationCap size={18} color="var(--accent-lime)" />
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.8rem',
                    color: 'var(--accent-lime)',
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                  }}
                >
                  // ACADEMIC QUALIFICATIONS
                </span>
              </div>

              {/* 2-Column Responsive Education Grid */}
              <div
                className="education-grid-wrapper"
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr',
                  gap: '1.5rem',
                  width: '100%',
                  maxWidth: '100%',
                  boxSizing: 'border-box',
                }}
              >
                {education.map((edu, idx) => (
                  <motion.div
                    key={edu.id}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5, delay: idx * 0.08 }}
                    className="education-card"
                    style={{
                      backgroundColor: 'var(--bg-secondary)',
                      border: '1px solid var(--border-medium)',
                      padding: 'clamp(1.5rem, 3vw, 2.25rem)',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      gap: '1.5rem',
                      position: 'relative',
                      transition: 'border-color 0.25s ease, transform 0.25s ease',
                    }}
                  >
                    {/* Header Row: Degree Badge & Period */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem', flexWrap: 'wrap' }}>
                      <span
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.7rem',
                          fontWeight: 700,
                          letterSpacing: '0.12em',
                          color: 'var(--accent-lime)',
                          padding: '3px 10px',
                          border: '1px solid rgba(183, 255, 0, 0.3)',
                          backgroundColor: 'rgba(183, 255, 0, 0.05)',
                          textTransform: 'uppercase',
                        }}
                      >
                        {edu.badge}
                      </span>

                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-muted)' }}>
                        <Calendar size={13} />
                        <span
                          style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.75rem',
                            letterSpacing: '0.08em',
                          }}
                        >
                          {edu.year}
                        </span>
                      </div>
                    </div>

                    {/* Degree Title & Institution */}
                    <div>
                      <h3
                        style={{
                          fontFamily: 'var(--font-heading)',
                          fontSize: 'clamp(1.2rem, 2vw, 1.55rem)',
                          fontWeight: 800,
                          color: '#ffffff',
                          letterSpacing: '-0.02em',
                          marginBottom: '0.65rem',
                          lineHeight: 1.25,
                        }}
                      >
                        {edu.degree}
                      </h3>

                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '6px',
                          color: 'var(--text-secondary)',
                          fontSize: '0.92rem',
                          lineHeight: 1.5,
                        }}
                      >
                        <MapPin size={15} style={{ flexShrink: 0, marginTop: '3px', color: 'var(--text-muted)' }} />
                        <span>{edu.institution}</span>
                      </div>
                    </div>

                    {/* Bottom Score & Status Highlight */}
                    <div
                      style={{
                        paddingTop: '1rem',
                        borderTop: '1px solid var(--border-subtle)',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'baseline',
                        flexWrap: 'wrap',
                        gap: '0.75rem',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
                        <span
                          style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.7rem',
                            color: 'var(--text-muted)',
                            letterSpacing: '0.15em',
                            textTransform: 'uppercase',
                          }}
                        >
                          PERFORMANCE //
                        </span>
                        <span
                          style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: '1.15rem',
                            fontWeight: 800,
                            color: 'var(--accent-lime)',
                            letterSpacing: '0.02em',
                          }}
                        >
                          {edu.score}
                        </span>
                      </div>

                      <span
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.7rem',
                          letterSpacing: '0.12em',
                          color: edu.status === 'Pursuing' ? 'var(--accent-lime)' : 'var(--text-muted)',
                          textTransform: 'uppercase',
                        }}
                      >
                        ● {edu.status}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* 2. Chronological Milestones Timeline */}
          {(activeTab === 'ALL' || activeTab === 'MILESTONES') && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  marginBottom: '2.5rem',
                }}
              >
                <Milestone size={18} color="var(--accent-lime)" />
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.8rem',
                    color: 'var(--accent-lime)',
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                  }}
                >
                  // CAREER & TECH MILESTONES
                </span>
              </div>

              {/* Vertical Timeline */}
              <div
                style={{
                  position: 'relative',
                  maxWidth: '1000px',
                  paddingLeft: 'clamp(1rem, 3vw, 2.5rem)',
                }}
              >
                {/* Vertical Spine Line */}
                <div
                  style={{
                    position: 'absolute',
                    top: '10px',
                    bottom: '10px',
                    left: 0,
                    width: '1px',
                    backgroundColor: 'var(--border-medium)',
                  }}
                />

                <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                  {journeyTimeline.map((item, index) => (
                    <motion.div
                      key={item.year + item.role}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: 0.6, delay: index * 0.08 }}
                      style={{
                        position: 'relative',
                        paddingLeft: 'clamp(1.5rem, 3vw, 2.5rem)',
                      }}
                    >
                      {/* Node Dot on Spine */}
                      <div
                        style={{
                          position: 'absolute',
                          top: '8px',
                          left: '-4px',
                          width: '9px',
                          height: '9px',
                          borderRadius: '50%',
                          backgroundColor:
                            item.badge === 'Award' || index === 0
                              ? 'var(--accent-lime)'
                              : '#ffffff',
                          boxShadow:
                            item.badge === 'Award' || index === 0
                              ? '0 0 10px var(--accent-lime)'
                              : 'none',
                        }}
                      />

                      {/* Timeline Content */}
                      <div
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '0.65rem',
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                          <span
                            style={{
                              fontFamily: 'var(--font-mono)',
                              fontSize: '0.85rem',
                              fontWeight: 700,
                              color: 'var(--accent-lime)',
                              letterSpacing: '0.1em',
                            }}
                          >
                            {item.year}
                          </span>
                          <span
                            style={{
                              fontFamily: 'var(--font-mono)',
                              fontSize: '0.7rem',
                              letterSpacing: '0.12em',
                              padding: '3px 10px',
                              border: '1px solid var(--border-subtle)',
                              color: 'var(--text-muted)',
                              textTransform: 'uppercase',
                            }}
                          >
                            {item.badge}
                          </span>
                        </div>

                        <h3
                          style={{
                            fontFamily: 'var(--font-heading)',
                            fontSize: 'clamp(1.2rem, 2.2vw, 1.75rem)',
                            fontWeight: 800,
                            color: '#ffffff',
                            letterSpacing: '-0.02em',
                            textTransform: 'uppercase',
                          }}
                        >
                          {item.role}
                        </h3>

                        <div
                          style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.85rem',
                            color: 'var(--text-secondary)',
                          }}
                        >
                          // {item.organization}
                        </div>

                        <p
                          style={{
                            fontSize: '0.98rem',
                            color: 'var(--text-secondary)',
                            lineHeight: 1.65,
                            maxWidth: '720px',
                            textAlign: 'justify',
                            textJustify: 'inter-word',
                          }}
                        >
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>

      <style>{`
        .education-card:hover {
          border-color: var(--accent-lime) !important;
          transform: translateY(-3px);
        }

        @media (min-width: 840px) {
          .education-grid-wrapper {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }

        @media (max-width: 600px) {
          .journey-header-actions {
            width: 100% !important;
            flex-direction: column !important;
            align-items: stretch !important;
          }
          .journey-header-actions a {
            justify-content: center !important;
            text-align: center !important;
          }
        }
      `}</style>
    </section>
  );
}
