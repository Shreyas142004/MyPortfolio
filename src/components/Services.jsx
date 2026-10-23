import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Plus, Minus } from 'lucide-react';
import { services } from '../data/projects';

export default function Services() {
  const [activeRow, setActiveRow] = useState(null);

  const toggleRow = (id) => {
    setActiveRow(activeRow === id ? null : id);
  };

  return (
    <section id="services" className="section-wrapper" style={{ backgroundColor: '#050505' }}>
      <div className="container">
        {/* Section Header Meta */}
        <div className="section-meta-header">
          <div className="section-label">02 — WHAT I CAN DO</div>
          <h2 className="section-title">SERVICES & EXPERTISE</h2>
        </div>

        {/* Large Horizontal Editorial Service Rows */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            borderTop: '1px solid var(--border-medium)',
          }}
        >
          {services.map((service, index) => {
            const isExpanded = activeRow === service.id;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                onClick={() => toggleRow(service.id)}
                className="service-row interactive-item"
                style={{
                  position: 'relative',
                  borderBottom: '1px solid var(--border-medium)',
                  padding: 'clamp(1.5rem, 3.5vw, 2.75rem) 0',
                  cursor: 'pointer',
                  transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                  userSelect: 'none',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '1.5rem',
                    flexWrap: 'wrap',
                  }}
                >
                  {/* Left: Number and Title */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'baseline',
                      gap: 'clamp(1rem, 3vw, 2.5rem)',
                      flex: 1,
                      minWidth: 'min(100%, 220px)',
                    }}
                  >
                    <span
                      className="service-number"
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: 'clamp(0.9rem, 1.5vw, 1.15rem)',
                        fontWeight: 700,
                        color: 'var(--text-muted)',
                        letterSpacing: '0.1em',
                        transition: 'color 0.3s ease',
                      }}
                    >
                      {service.number}
                    </span>

                    <h3
                      className="service-title-text"
                      style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: 'clamp(1.25rem, 3.5vw, 3rem)',
                        fontWeight: 800,
                        textTransform: 'uppercase',
                        letterSpacing: '-0.035em',
                        color: '#ffffff',
                        margin: 0,
                        wordBreak: 'break-word',
                        overflowWrap: 'break-word',
                        transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                      }}
                    >
                      {service.title}
                    </h3>
                  </div>

                  {/* Right: Technical Tags & Arrow Icon */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 'clamp(1rem, 2vw, 2rem)',
                    }}
                  >
                    <div
                      className="service-tags-preview"
                      style={{
                        display: 'none',
                        alignItems: 'center',
                        gap: '0.5rem',
                      }}
                    >
                      {service.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.75rem',
                            letterSpacing: '0.08em',
                            padding: '4px 10px',
                            border: '1px solid var(--border-subtle)',
                            color: 'var(--text-muted)',
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div
                      className="service-arrow-box"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '48px',
                        height: '48px',
                        borderRadius: '50%',
                        border: '1px solid var(--border-medium)',
                        color: '#ffffff',
                        transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                      }}
                    >
                      <ArrowUpRight className="service-arrow-icon" size={22} />
                    </div>
                  </div>
                </div>

                {/* Expandable Editorial Details */}
                <div
                  style={{
                    maxHeight: isExpanded ? '200px' : '0px',
                    opacity: isExpanded ? 1 : 0,
                    overflow: 'hidden',
                    transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                    marginTop: isExpanded ? '1.5rem' : '0',
                    paddingLeft: 'clamp(0.5rem, 4vw, 4.5rem)',
                  }}
                >
                  <p
                    style={{
                      fontSize: '1.05rem',
                      color: 'var(--text-secondary)',
                      maxWidth: '780px',
                      marginBottom: '1rem',
                      lineHeight: 1.7,
                      textAlign: 'justify',
                      textJustify: 'inter-word',
                    }}
                  >
                    {service.description}
                  </p>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.75rem',
                          color: 'var(--accent-lime)',
                          padding: '4px 10px',
                          backgroundColor: 'rgba(183, 255, 0, 0.08)',
                          border: '1px solid rgba(183, 255, 0, 0.25)',
                        }}
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <style>{`
        .service-row:hover {
          background-color: rgba(255, 255, 255, 0.015);
          padding-left: 1rem !important;
          padding-right: 1rem !important;
        }
        .service-row:hover .service-number {
          color: var(--accent-lime) !important;
        }
        .service-row:hover .service-title-text {
          color: var(--accent-lime) !important;
          transform: translateX(8px);
        }
        .service-row:hover .service-arrow-box {
          border-color: var(--accent-lime) !important;
          background-color: var(--accent-lime) !important;
          color: #000000 !important;
          transform: rotate(45deg);
        }
        @media (min-width: 768px) {
          .service-tags-preview {
            display: flex !important;
          }
        }
      `}</style>
    </section>
  );
}
