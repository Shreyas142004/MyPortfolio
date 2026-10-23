import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowUpRight,
  ExternalLink,
  Terminal,
  Layers,
  Cpu,
  Server,
  Smartphone,
  CheckCircle2,
  X,
  Sparkles,
  ShieldCheck,
  Database,
  Calendar,
  FileText,
  BrainCircuit,
  Lock,
} from 'lucide-react';
import { GithubIcon } from './Icons';

function getTierIcon(iconName) {
  switch (iconName?.toLowerCase()) {
    case 'smartphone':
    case 'mobile':
      return Smartphone;
    case 'server':
      return Server;
    case 'cpu':
      return Cpu;
    case 'database':
      return Database;
    case 'shieldcheck':
    case 'shield':
    case 'lock':
      return ShieldCheck;
    case 'terminal':
      return Terminal;
    case 'braincircuit':
    case 'brain':
    case 'ai':
      return BrainCircuit;
    case 'filetext':
    case 'file':
      return FileText;
    case 'calendar':
      return Calendar;
    case 'layers':
    default:
      return Layers;
  }
}

export default function ProjectCard({ project, index, isReversed }) {
  const [imageFailed, setImageFailed] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Lock background scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e) => {
        if (e.key === 'Escape') setIsModalOpen(false);
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = originalOverflow;
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [isModalOpen]);

  const hasExpandedSpecs = Boolean(project.highlights || project.architecture);

  // Normalize architecture tiers from array or legacy 3-tier object
  const tiers = Array.isArray(project.architecture)
    ? project.architecture
    : project.architecture
    ? [
        {
          title: 'Client Tier',
          subtitle: 'FLUTTER • DART • MATERIAL 3 • PROVIDER',
          desc: project.architecture.clientTier,
          icon: 'Smartphone',
          accentColor: 'var(--accent-lime)',
        },
        {
          title: 'API Gateway Tier',
          subtitle: 'NODE.JS • EXPRESS • MONGODB • JWT • GMAIL SMTP',
          desc: project.architecture.gatewayTier,
          icon: 'Server',
          accentColor: '#ffffff',
        },
        {
          title: 'AI / NLP Microservice',
          subtitle: 'FASTAPI • GEMINI API • META FAISS • SENTENCETRANSFORMERS',
          desc: project.architecture.aiTier,
          icon: 'Cpu',
          accentColor: 'var(--accent-lime)',
        },
      ]
    : [];

  return (
    <>
      <motion.article
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
        className="project-showcase-block"
        style={{
          position: 'relative',
          padding: 'clamp(2.5rem, 6vw, 5rem) 0',
          borderBottom: '1px solid var(--border-medium)',
        }}
      >
        <div
          className="project-grid-inner"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: 'clamp(1.5rem, 4vw, 4.5rem)',
            alignItems: 'center',
            width: '100%',
            boxSizing: 'border-box',
          }}
        >
          {/* Project Image Showcase Block */}
          <div
            className={`project-image-column ${isReversed ? 'order-reverse-image' : 'order-normal-image'}`}
            style={{
              gridColumn: 'span 12',
              minWidth: 0,
            }}
          >
            <div
              className="project-image-container"
              onClick={() => {
                if (hasExpandedSpecs) setIsModalOpen(true);
              }}
              role={hasExpandedSpecs ? 'button' : undefined}
              tabIndex={hasExpandedSpecs ? 0 : undefined}
              onKeyDown={(e) => {
                if (hasExpandedSpecs && (e.key === 'Enter' || e.key === ' ')) {
                  e.preventDefault();
                  setIsModalOpen(true);
                }
              }}
              style={{
                position: 'relative',
                width: '100%',
                aspectRatio: '16/9',
                backgroundColor: '#0a0a0a',
                border: '1px solid var(--border-medium)',
                overflow: 'hidden',
                cursor: hasExpandedSpecs ? 'pointer' : 'default',
              }}
            >
              {/* Corner Decorative Crosshairs */}
              <span style={{ position: 'absolute', top: '12px', left: '12px', zIndex: 10, fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--accent-lime)' }}>+</span>
              <span style={{ position: 'absolute', top: '12px', right: '12px', zIndex: 10, fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--accent-lime)' }}>+</span>
              <span style={{ position: 'absolute', bottom: '12px', left: '12px', zIndex: 10, fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--accent-lime)' }}>+</span>
              <span style={{ position: 'absolute', bottom: '12px', right: '12px', zIndex: 10, fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--accent-lime)' }}>+</span>

              {/* Project Image or Elegant Fallback */}
              {!imageFailed ? (
                <img
                  src={project.image}
                  alt={`${project.title} - Showcase preview`}
                  onError={() => setImageFailed(true)}
                  className="showcase-img"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                    transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), filter 0.6s ease',
                    filter: 'grayscale(15%) brightness(0.92)',
                  }}
                />
              ) : (
                /* High-tech fallback placeholder */
                <div
                  style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '2rem',
                    background: 'radial-gradient(circle at center, #141414 0%, #080808 100%)',
                    textAlign: 'center',
                  }}
                >
                  <div
                    style={{
                      width: '60px',
                      height: '60px',
                      borderRadius: '50%',
                      border: '1px solid var(--accent-lime)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--accent-lime)',
                      marginBottom: '1rem',
                    }}
                  >
                    <Terminal size={26} />
                  </div>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.8rem',
                      color: 'var(--accent-lime)',
                      letterSpacing: '0.2em',
                      textTransform: 'uppercase',
                    }}
                  >
                    {project.category}
                  </span>
                  <h4
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
                      fontWeight: 800,
                      color: '#ffffff',
                      margin: '0.5rem 0',
                      letterSpacing: '-0.02em',
                    }}
                  >
                    {project.title}
                  </h4>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.75rem',
                      color: 'var(--text-muted)',
                    }}
                  >
                    // PLACEHOLDER: /public{project.image}
                  </span>
                </div>
              )}

              {/* Click to inspect overlay tag for flagship specs */}
              {hasExpandedSpecs && (
                <div
                  className="interactive-inspect-overlay"
                  style={{
                    position: 'absolute',
                    bottom: '16px',
                    left: '16px',
                    zIndex: 6,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    backgroundColor: 'rgba(5, 5, 5, 0.92)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid var(--border-lime)',
                    padding: '5px 12px',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.7rem',
                    color: 'var(--accent-lime)',
                    letterSpacing: '0.08em',
                  }}
                >
                  <Layers size={13} />
                  <span>CLICK TO VIEW ARCHITECTURE & SPECS ↗</span>
                </div>
              )}

              {/* Top Right Status Indicator Badge */}
              <div
                style={{
                  position: 'absolute',
                  top: '16px',
                  right: '24px',
                  zIndex: 5,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  backgroundColor: 'rgba(5, 5, 5, 0.88)',
                  backdropFilter: 'blur(8px)',
                  padding: '6px 14px',
                  border:
                    project.statusBadge === 'WORK IN PROGRESS'
                      ? '1px solid rgba(255, 184, 0, 0.45)'
                      : project.statusBadge === 'FLAGSHIP AI PLATFORM'
                      ? '1px solid var(--accent-lime)'
                      : '1px solid var(--border-medium)',
                }}
              >
                <span
                  style={{
                    width: '7px',
                    height: '7px',
                    borderRadius: '50%',
                    backgroundColor:
                      project.statusBadge === 'WORK IN PROGRESS'
                        ? '#FFB800'
                        : project.statusBadge === 'FLAGSHIP AI PLATFORM' || project.live
                        ? 'var(--accent-lime)'
                        : '#ffffff',
                    boxShadow:
                      project.statusBadge === 'WORK IN PROGRESS'
                        ? '0 0 8px #FFB800'
                        : project.statusBadge === 'FLAGSHIP AI PLATFORM' || project.live
                        ? '0 0 8px var(--accent-lime)'
                        : 'none',
                  }}
                />
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.7rem',
                    fontWeight: 600,
                    letterSpacing: '0.12em',
                    color:
                      project.statusBadge === 'WORK IN PROGRESS'
                        ? '#FFB800'
                        : project.statusBadge === 'FLAGSHIP AI PLATFORM' || project.live
                        ? 'var(--accent-lime)'
                        : '#ffffff',
                  }}
                >
                  {project.statusBadge || (project.live ? 'LIVE PLATFORM' : 'GITHUB REPOSITORY')}
                </span>
              </div>
            </div>
          </div>

          {/* Project Content Column */}
          <div
            className={`project-content-column ${isReversed ? 'order-reverse-text' : 'order-normal-text'}`}
            style={{
              gridColumn: 'span 12',
              minWidth: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: '1.25rem',
            }}
          >
            {/* Project Number */}
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '1rem' }}>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
                  fontWeight: 900,
                  color: 'var(--accent-lime)',
                  letterSpacing: '-0.02em',
                }}
              >
                {project.number}
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  letterSpacing: '0.2em',
                  color: 'var(--text-muted)',
                  textTransform: 'uppercase',
                }}
              >
                // {project.category}
              </span>
            </div>

            {/* Project Title */}
            <h3
              className="showcase-title"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.45rem, 2.15vw, 2.35rem)',
                fontWeight: 800,
                letterSpacing: '-0.035em',
                lineHeight: 1.15,
                color: '#ffffff',
                textTransform: 'uppercase',
                wordBreak: 'break-word',
                overflowWrap: 'break-word',
                transition: 'color 0.25s ease, transform 0.25s ease',
              }}
            >
              {project.title}
            </h3>

            {/* Tagline / One-Liner (if provided) */}
            {project.tagline && (
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.88rem',
                  color: 'var(--accent-lime)',
                  lineHeight: 1.55,
                  padding: '0.65rem 1rem',
                  backgroundColor: 'rgba(183, 255, 0, 0.04)',
                  borderLeft: '2px solid var(--accent-lime)',
                  borderTop: '1px solid rgba(183, 255, 0, 0.12)',
                  borderRight: '1px solid rgba(183, 255, 0, 0.12)',
                  borderBottom: '1px solid rgba(183, 255, 0, 0.12)',
                  maxWidth: '560px',
                }}
              >
                <span style={{ color: 'var(--text-muted)', marginRight: '6px' }}>// ARCHITECTURE GOAL:</span>
                {project.tagline}
              </div>
            )}

            {/* Description */}
            <p
              style={{
                fontSize: '1.05rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                maxWidth: '560px',
                textAlign: 'justify',
                textJustify: 'inter-word',
              }}
            >
              {project.description}
            </p>

            {/* Tech Stack Pills */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.5rem',
                margin: '0.5rem 0',
              }}
            >
              {project.tech.map((item) => (
                <span
                  key={item}
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    letterSpacing: '0.08em',
                    padding: '5px 12px',
                    border: '1px solid var(--border-subtle)',
                    backgroundColor: 'rgba(255, 255, 255, 0.02)',
                    color: 'var(--text-secondary)',
                    transition: 'all 0.2s ease',
                  }}
                >
                  {item}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.85rem',
                marginTop: '0.75rem',
              }}
            >
              {hasExpandedSpecs && (
                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="btn-editorial-lime"
                  style={{
                    padding: '0.85rem 1.6rem',
                    fontSize: '0.85rem',
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    border: 'none',
                  }}
                >
                  <Layers size={16} />
                  <span>ARCHITECTURE & SPECS</span>
                </button>
              )}

              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={hasExpandedSpecs ? 'btn-editorial-outline' : 'btn-editorial-lime'}
                  style={{ padding: '0.85rem 1.6rem', fontSize: '0.85rem' }}
                >
                  <span>LIVE DEMO</span>
                  <ArrowUpRight size={16} />
                </a>
              )}

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-editorial-outline"
                  style={{ padding: '0.85rem 1.6rem', fontSize: '0.85rem' }}
                >
                  <GithubIcon size={16} />
                  <span>GITHUB REPO</span>
                  <ArrowUpRight size={14} />
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.article>

      {/* Case Study & Architecture Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setIsModalOpen(false)}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 99999,
              backgroundColor: 'rgba(0, 0, 0, 0.88)',
              backdropFilter: 'blur(16px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 'clamp(1rem, 3vw, 2.5rem)',
              boxSizing: 'border-box',
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 35, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 25, scale: 0.98 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '1020px',
                maxHeight: '88vh',
                backgroundColor: '#0a0a0a',
                border: '1px solid var(--border-medium)',
                overflowY: 'auto',
                boxShadow: '0 30px 80px rgba(0, 0, 0, 0.9)',
                padding: 'clamp(1.5rem, 4vw, 3rem)',
                display: 'flex',
                flexDirection: 'column',
                gap: '2.5rem',
              }}
            >
              {/* Modal Top Header */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  borderBottom: '1px solid var(--border-medium)',
                  paddingBottom: '1.5rem',
                  gap: '1.5rem',
                }}
              >
                <div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.8rem',
                      color: 'var(--accent-lime)',
                      letterSpacing: '0.15em',
                      marginBottom: '0.5rem',
                    }}
                  >
                    <span>[{project.number} // ARCHITECTURAL DOSSIER]</span>
                    <span
                      style={{
                        padding: '3px 8px',
                        backgroundColor: 'rgba(183, 255, 0, 0.1)',
                        border: '1px solid var(--border-lime)',
                        fontSize: '0.7rem',
                      }}
                    >
                      {project.statusBadge || 'ENGINEERING SPEC'}
                    </span>
                  </div>

                  <h2
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 'clamp(1.5rem, 3vw, 2.4rem)',
                      fontWeight: 800,
                      color: '#ffffff',
                      lineHeight: 1.15,
                      textTransform: 'uppercase',
                      letterSpacing: '-0.02em',
                      margin: '0.25rem 0',
                    }}
                  >
                    {project.title}
                  </h2>

                  <p
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.9rem',
                      color: 'var(--text-secondary)',
                      marginTop: '0.5rem',
                      lineHeight: 1.5,
                      maxWidth: '820px',
                    }}
                  >
                    {project.tagline || project.description}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid var(--border-medium)',
                    color: '#ffffff',
                    width: '42px',
                    height: '42px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    flexShrink: 0,
                  }}
                  title="Close architectural dossier (Esc)"
                  aria-label="Close"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Dynamic Architecture Tiers Grid */}
              {tiers.length > 0 && (
                <div>
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.8rem',
                      letterSpacing: '0.2em',
                      color: 'var(--accent-lime)',
                      marginBottom: '1rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                    }}
                  >
                    <Layers size={14} />
                    <span>{project.architectureTitle || '01 // THREE-TIER SYSTEM ARCHITECTURE'}</span>
                  </div>

                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                      gap: '1.25rem',
                    }}
                  >
                    {tiers.map((tier, tIdx) => {
                      const IconComponent = getTierIcon(tier.icon);
                      const accent = tier.accentColor || (tIdx % 2 === 0 ? 'var(--accent-lime)' : '#ffffff');
                      return (
                        <div
                          key={tier.title || tIdx}
                          style={{
                            padding: '1.5rem',
                            backgroundColor: '#111111',
                            border: '1px solid var(--border-subtle)',
                            borderTop: `2px solid ${accent}`,
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '0.75rem',
                          }}
                        >
                          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: accent }}>
                            <IconComponent size={20} />
                            <h4
                              style={{
                                fontFamily: 'var(--font-heading)',
                                fontSize: '1rem',
                                fontWeight: 700,
                                letterSpacing: '0.04em',
                                color: '#ffffff',
                                textTransform: 'uppercase',
                              }}
                            >
                              {tier.title}
                            </h4>
                          </div>
                          {tier.subtitle && (
                            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                              {tier.subtitle}
                            </span>
                          )}
                          <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                            {tier.desc}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Core Features & Highlights */}
              {project.highlights && (
                <div>
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.8rem',
                      letterSpacing: '0.2em',
                      color: 'var(--accent-lime)',
                      marginBottom: '1rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                    }}
                  >
                    <Sparkles size={14} />
                    <span>02 // KEY ALGORITHMIC SYSTEMS & HIGHLIGHTS</span>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {project.highlights.map((highlight, hIdx) => (
                      <div
                        key={highlight.title}
                        style={{
                          padding: '1.25rem 1.5rem',
                          backgroundColor: 'rgba(255, 255, 255, 0.02)',
                          border: '1px solid var(--border-subtle)',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '0.5rem',
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                          <span
                            style={{
                              fontFamily: 'var(--font-mono)',
                              fontSize: '0.75rem',
                              color: 'var(--accent-lime)',
                              fontWeight: 700,
                            }}
                          >
                            [0{hIdx + 1}]
                          </span>
                          <h5
                            style={{
                              fontFamily: 'var(--font-heading)',
                              fontSize: '1.05rem',
                              fontWeight: 700,
                              color: '#ffffff',
                              letterSpacing: '0.01em',
                            }}
                          >
                            {highlight.title}
                          </h5>
                        </div>
                        <p
                          style={{
                            fontSize: '0.92rem',
                            color: 'var(--text-secondary)',
                            lineHeight: 1.65,
                            paddingLeft: '2rem',
                          }}
                        >
                          {highlight.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Categorized Tech Stack Badges */}
              {project.techCategories && (
                <div>
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.8rem',
                      letterSpacing: '0.2em',
                      color: 'var(--accent-lime)',
                      marginBottom: '1rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                    }}
                  >
                    <Terminal size={14} />
                    <span>03 // FULL TECHNOLOGY STACK INVENTORY</span>
                  </div>

                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                      gap: '1rem',
                    }}
                  >
                    {Object.entries(project.techCategories).map(([categoryName, badges]) => (
                      <div
                        key={categoryName}
                        style={{
                          padding: '1rem',
                          backgroundColor: '#0d0d0d',
                          border: '1px solid var(--border-subtle)',
                        }}
                      >
                        <div
                          style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.75rem',
                            color: 'var(--accent-lime)',
                            letterSpacing: '0.1em',
                            marginBottom: '0.65rem',
                            textTransform: 'uppercase',
                          }}
                        >
                          // {categoryName}
                        </div>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                          {badges.map((badge) => (
                            <span
                              key={badge}
                              style={{
                                fontFamily: 'var(--font-mono)',
                                fontSize: '0.72rem',
                                padding: '3px 8px',
                                backgroundColor: 'rgba(255, 255, 255, 0.04)',
                                border: '1px solid var(--border-subtle)',
                                color: '#e0e0e0',
                              }}
                            >
                              {badge}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Modal Footer Links */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: '1rem',
                  borderTop: '1px solid var(--border-medium)',
                  paddingTop: '1.5rem',
                }}
              >
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.85rem' }}>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-editorial-lime"
                      style={{ padding: '0.85rem 1.6rem', fontSize: '0.85rem' }}
                    >
                      <span>LAUNCH LIVE PLATFORM</span>
                      <ArrowUpRight size={16} />
                    </a>
                  )}

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-editorial-outline"
                      style={{ padding: '0.85rem 1.6rem', fontSize: '0.85rem' }}
                    >
                      <GithubIcon size={16} />
                      <span>SOURCE CODE (GITHUB)</span>
                      <ArrowUpRight size={14} />
                    </a>
                  )}
                </div>

                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="btn-editorial-outline"
                  style={{
                    padding: '0.85rem 1.6rem',
                    fontSize: '0.85rem',
                    cursor: 'pointer',
                  }}
                >
                  <span>CLOSE DOSSIER [ESC]</span>
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .project-showcase-block:hover .showcase-img {
          transform: scale(1.04);
          filter: grayscale(0%) brightness(1);
        }
        .project-showcase-block:hover .project-image-container {
          border-color: var(--accent-lime);
        }
        .project-showcase-block:hover .showcase-title {
          color: var(--accent-lime);
        }

        @media (min-width: 992px) {
          .project-grid-inner {
            grid-template-columns: repeat(12, 1fr) !important;
          }
          .order-normal-image {
            grid-column: span 7 !important;
            order: 1 !important;
          }
          .order-normal-text {
            grid-column: span 5 !important;
            order: 2 !important;
          }
          .order-reverse-image {
            grid-column: span 7 !important;
            order: 2 !important;
          }
          .order-reverse-text {
            grid-column: span 5 !important;
            order: 1 !important;
          }
        }
      `}</style>
    </>
  );
}
