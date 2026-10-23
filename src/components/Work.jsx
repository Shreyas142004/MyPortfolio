import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';

export default function Work() {
  return (
    <section id="work" className="section-wrapper" style={{ backgroundColor: '#050505' }}>
      <div className="container">
        {/* Section Header Meta */}
        <div className="section-meta-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1.5rem' }}>
          <div>
            <div className="section-label">03 — SELECTED WORK</div>
            <h2 className="section-title">FEATURED PROJECTS</h2>
          </div>

          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
            [ {projects.length.toString().padStart(2, '0')} CURATED CASES ]
          </div>
        </div>

        {/* Project List with Alternating Layouts */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              isReversed={index % 2 !== 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
