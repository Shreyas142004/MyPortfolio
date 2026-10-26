import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowDown } from 'lucide-react';

export default function Hero() {
  const [imgError, setImgError] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        width: '100%',
        height: '100svh',
        minHeight: 'min(100svh, 650px)',
        backgroundColor: '#050505',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingTop: 'var(--nav-height)',
        paddingBottom: 'clamp(1.25rem, 3vh, 2.5rem)',
        borderBottom: '1px solid var(--border-subtle)',
      }}
    >
      {/* Subtle Grid Pattern Overlay */}
      <div className="bg-grid-overlay" />

      {/* Radial Dark Gradient Behind Character */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '70vw',
          height: '70vh',
          background: 'radial-gradient(circle, rgba(255, 255, 255, 0.03) 0%, rgba(5, 5, 5, 0) 70%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      {/* Main Hero Center Stage */}
      <div
        style={{
          position: 'relative',
          flex: 1,
          width: '100%',
          overflow: 'hidden',
          zIndex: 1,
        }}
      >
        {/* HUGE PORTFOLIO TEXT (Responsive & Bold with Reduced Side Gaps) */}
        <div
          className="hero-title-container"
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1,
            pointerEvents: 'none',
            padding: '0 clamp(1rem, 2.5vw, 2.25rem)',
          }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 25, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 1.0,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="hero-giant-title"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.5rem, 9.2vw, 9.5rem)',
              fontWeight: 900,
              textTransform: 'uppercase',
              letterSpacing: '-0.04em',
              lineHeight: 1,
              margin: 0,
              textAlign: 'center',
              width: '100%',
              background: 'linear-gradient(180deg, #FFFFFF 0%, #E4E4E7 40%, #A1A1AA 85%, #71717A 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              userSelect: 'none',
              whiteSpace: 'nowrap',
            }}
          >
            PORTFOLIO
          </motion.h1>
        </div>

        {/* DEVELOPER PORTRAIT (Guaranteed True Center + Bottom-to-Up Fade-In) */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-end',
            zIndex: 2,
            pointerEvents: 'none',
          }}
        >
          <motion.div
            initial={{ y: 160, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 1.1,
              delay: 0.15,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="hero-image-wrapper"
            style={{
              height: 'clamp(54vh, 76vh, 800px)',
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'center',
              pointerEvents: 'auto',
              position: 'relative',
            }}
          >
            {!imgError ? (
              <picture style={{ display: 'contents' }}>
                <source srcSet="/hero-cutout.webp" type="image/webp" />
                <img
                  src="/hero-cutout.webp"
                  alt="Shreyas R A — Software Developer"
                  fetchPriority="high"
                  loading="eager"
                  decoding="async"
                  onLoad={() => setImgLoaded(true)}
                  onError={() => setImgError(true)}
                  style={{
                    height: '100%',
                    width: 'auto',
                    maxWidth: '90vw',
                    objectFit: 'contain',
                    objectPosition: 'bottom center',
                    display: 'block',
                    filter: 'drop-shadow(0 20px 40px rgba(0, 0, 0, 0.95)) contrast(104%)',
                    userSelect: 'none',
                    opacity: imgLoaded ? 1 : 0.85,
                    transition: 'opacity 0.35s ease-out',
                  }}
                />
              </picture>
            ) : (
              <picture style={{ display: 'contents' }}>
                <source srcSet="/Hero-Image.webp" type="image/webp" />
                <img
                  src="/Hero-Image.jpeg"
                  alt="Shreyas R A"
                  fetchPriority="high"
                  loading="eager"
                  decoding="async"
                  style={{
                    height: '100%',
                    width: 'auto',
                    objectFit: 'contain',
                    objectPosition: 'bottom center',
                    display: 'block',
                  }}
                />
              </picture>
            )}

            {/* Bottom subtle fade to blend smoothly into page floor */}
            <div
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: '70px',
                background: 'linear-gradient(to top, #050505 0%, rgba(5,5,5,0) 100%)',
                pointerEvents: 'none',
              }}
            />
          </motion.div>
        </div>
      </div>

      {/* Hero Bottom Bar: 'Software Developer' on left, 'Contact' on right, scroll hint */}
      <div
        className="hero-bottom-bar container"
        style={{
          position: 'relative',
          zIndex: 10,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          width: '100%',
          flexWrap: 'wrap',
          gap: '1rem',
        }}
      >
        {/* Bottom Left: Role Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <div
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(1.45rem, 3.8vw, 3rem)',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              color: '#ffffff',
              lineHeight: 1.1,
              textTransform: 'none',
            }}
          >
            Software Developer
          </div>
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.8rem',
              color: 'var(--accent-lime)',
              letterSpacing: '0.15em',
              marginTop: '0.5rem',
              textTransform: 'uppercase',
            }}
          >
            // FULL STACK & AI/ML
          </div>
        </motion.div>

        {/* Center: Scroll Down Indicator */}
        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="hero-scroll-prompt"
          style={{
            display: 'none',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '6px',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.72rem',
            letterSpacing: '0.2em',
            color: 'var(--text-muted)',
            textTransform: 'uppercase',
            transition: 'color 0.2s ease',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-lime)')}
          onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
        >
          <span>SCROLL</span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          >
            <ArrowDown size={14} color="var(--accent-lime)" />
          </motion.div>
        </motion.a>

        {/* Bottom Right: Contact Pill Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <a
            href="#contact"
            className="hero-contact-pill interactive-item"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '12px 26px',
              borderRadius: '999px',
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.16)',
              color: '#ffffff',
              fontFamily: 'var(--font-heading)',
              fontSize: '1rem',
              fontWeight: 600,
              letterSpacing: '0.02em',
              transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.5)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--accent-lime)';
              e.currentTarget.style.backgroundColor = 'var(--accent-lime)';
              e.currentTarget.style.color = '#000000';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.16)';
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
              e.currentTarget.style.color = '#ffffff';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <div
              style={{
                width: '24px',
                height: '24px',
                borderRadius: '50%',
                backgroundColor: 'rgba(255, 255, 255, 0.12)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <ArrowUpRight size={14} />
            </div>
            <span>Contact</span>
          </a>
        </motion.div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .hero-scroll-prompt {
            display: flex !important;
          }
        }
        /* Mobile Landscape & Short Screen Optimization */
        @media (max-height: 560px), (orientation: landscape) and (max-height: 600px) {
          #hero {
            height: 100svh !important;
            min-height: 0 !important;
            max-height: 100svh !important;
            padding-top: calc(var(--nav-height) + 0.15rem) !important;
            padding-bottom: 0.35rem !important;
            overflow: hidden !important;
          }
          .hero-title-container {
            top: 8% !important;
            bottom: auto !important;
            height: auto !important;
            align-items: center !important;
            justify-content: center !important;
            padding: 0 1rem !important;
            box-sizing: border-box !important;
            width: 100% !important;
          }
          .hero-giant-title {
            font-size: clamp(1.65rem, 7vw, 3rem) !important;
            letter-spacing: -0.02em !important;
            line-height: 1 !important;
            white-space: nowrap !important;
            max-width: 98vw !important;
          }
          .hero-image-wrapper {
            height: 80vh !important;
            max-height: calc(100svh - var(--nav-height) - 6px) !important;
          }
          .hero-image-wrapper img {
            max-width: 75vw !important;
            max-height: 100% !important;
            object-fit: contain !important;
          }
          .hero-bottom-bar {
            gap: 0.4rem !important;
            align-items: flex-end !important;
            padding-bottom: 0.25rem !important;
          }
          .hero-bottom-bar > div:first-child > div:first-child {
            font-size: clamp(0.95rem, 2vw, 1.25rem) !important;
          }
          .hero-bottom-bar > div:first-child > div:last-child {
            font-size: 0.65rem !important;
            margin-top: 1px !important;
          }
          .hero-contact-pill {
            padding: 6px 14px !important;
            font-size: 0.8rem !important;
          }
          .hero-scroll-prompt {
            display: none !important;
          }
        }

        /* Mobile Portrait Optimization */
        @media (max-width: 600px) and (min-height: 561px) {
          #hero {
            height: 100svh !important;
            min-height: 0 !important;
            padding-top: calc(var(--nav-height) + 0.25rem) !important;
            padding-bottom: 1rem !important;
          }
          .hero-title-container {
            top: 22% !important;
            bottom: auto !important;
            height: auto !important;
            align-items: center !important;
            justify-content: center !important;
            padding: 0 8px !important;
            box-sizing: border-box !important;
            width: 100% !important;
          }
          .hero-giant-title {
            font-size: clamp(1.9rem, 9vw, 3.9rem) !important;
            letter-spacing: -0.02em !important;
            line-height: 1 !important;
            white-space: nowrap !important;
            max-width: 98vw !important;
          }
          .hero-image-wrapper {
            height: 70vh !important;
            max-height: 540px !important;
          }
          .hero-image-wrapper img {
            max-width: 92vw !important;
          }
          .hero-bottom-bar {
            gap: 0.5rem !important;
            align-items: center !important;
          }
          .hero-contact-pill {
            padding: 10px 20px !important;
            font-size: 0.9rem !important;
          }
        }
      `}</style>
    </section>
  );
}
