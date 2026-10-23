import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Cpu, 
  Database, 
  GitBranch, 
  Layers, 
  Terminal, 
  Boxes, 
  Sparkles,
  Server,
  Workflow
} from 'lucide-react';
import { techStack } from '../data/projects';

export default function Skills() {
  const [filter, setFilter] = useState('ALL');

  const categories = ['ALL', 'Language', 'Frontend', 'Backend', 'Database', 'AI/ML', 'Tools'];

  const filteredTech = filter === 'ALL' 
    ? techStack 
    : techStack.filter((t) => t.category.toLowerCase() === filter.toLowerCase());

  const getTechIcon = (name, category) => {
    switch (category) {
      case 'Language':
        return <Code2 size={20} />;
      case 'Frontend':
        return <Layers size={20} />;
      case 'Backend':
        return <Server size={20} />;
      case 'Database':
        return <Database size={20} />;
      case 'AI/ML':
        return <Cpu size={20} />;
      case 'Tools':
        return <GitBranch size={20} />;
      default:
        return <Terminal size={20} />;
    }
  };

  return (
    <section id="tech-stack" className="section-wrapper" style={{ backgroundColor: '#050505' }}>
      <div className="container">
        {/* Section Header Meta */}
        <div className="section-meta-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '2rem' }}>
          <div>
            <div className="section-label">// CAPABILITIES & TOOLS</div>
            <h2 className="section-title">TECH STACK</h2>
          </div>

          {/* Filter Pills */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setFilter(cat)}
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  letterSpacing: '0.1em',
                  padding: '6px 14px',
                  border: '1px solid',
                  borderColor: filter === cat ? 'var(--accent-lime)' : 'var(--border-subtle)',
                  backgroundColor: filter === cat ? 'rgba(183, 255, 0, 0.1)' : 'transparent',
                  color: filter === cat ? 'var(--accent-lime)' : 'var(--text-muted)',
                  textTransform: 'uppercase',
                  transition: 'all 0.2s ease',
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Minimal Editorial Tech Grid */}
        <div
          className="skills-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
            gap: '1px',
            backgroundColor: 'var(--border-subtle)',
            border: '1px solid var(--border-subtle)',
            width: '100%',
            maxWidth: '100%',
            boxSizing: 'border-box',
          }}
        >
          {filteredTech.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '100px' }}
              transition={{ duration: 0.35, delay: Math.min(index * 0.02, 0.3) }}
              className="tech-grid-item"
              style={{
                backgroundColor: '#050505',
                padding: 'clamp(1rem, 2.5vw, 1.75rem) clamp(0.85rem, 2vw, 1.5rem)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                minHeight: 'clamp(110px, 14vw, 140px)',
                transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                cursor: 'default',
                position: 'relative',
                minWidth: 0,
                boxSizing: 'border-box',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <span
                  className="tech-icon-wrapper"
                  style={{
                    color: 'var(--text-muted)',
                    transition: 'color 0.25s ease',
                  }}
                >
                  {getTechIcon(tech.name, tech.category)}
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.65rem',
                    color: 'var(--text-muted)',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                  }}
                >
                  {tech.category}
                </span>
              </div>

              <div>
                <h4
                  className="tech-name-text"
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    letterSpacing: '-0.02em',
                    color: '#ffffff',
                    transition: 'color 0.25s ease',
                  }}
                >
                  {tech.name}
                </h4>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Technical Note */}
        <div
          style={{
            marginTop: '2rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.75rem',
            color: 'var(--text-muted)',
          }}
        >
          <span>{techStack.length} VERIFIED SPECIALIZATIONS</span>
          <span style={{ color: 'var(--accent-lime)' }}>// CONTINUOUSLY EVOLVING</span>
        </div>
      </div>

      <style>{`
        .tech-grid-item:hover {
          background-color: #0c0c0c !important;
          z-index: 2;
          outline: 1px solid var(--accent-lime);
        }
        .tech-grid-item:hover .tech-icon-wrapper {
          color: var(--accent-lime) !important;
        }
        .tech-grid-item:hover .tech-name-text {
          color: var(--accent-lime) !important;
        }
        @media (max-width: 480px) {
          .skills-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}
