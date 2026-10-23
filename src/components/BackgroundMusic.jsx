import React from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { useMusic } from '../context/MusicContext';

/**
 * ==============================================================================
 * BACKGROUND MUSIC CONTROL COMPONENT
 *
 * Displays:
 * [ ♪ SOUND OFF ] when audio is stopped
 * [ ♪ SOUND ON ]  when audio is actively playing
 *
 * Matches the existing editorial luxury aesthetic (#050505, #B7FF00, Space Grotesk).
 * Keyboard accessible, respects prefers-reduced-motion, and handles errors gracefully.
 * ==============================================================================
 */
export default function BackgroundMusic({ mobile = false }) {
  const { isPlaying, isAvailable, toggleMusic } = useMusic();

  // If audio file is missing or unsupported, hide gracefully without errors
  if (!isAvailable) {
    return null;
  }

  return (
    <>
      <button
        type="button"
        onClick={toggleMusic}
        aria-label={isPlaying ? 'Disable background music' : 'Enable background music'}
        aria-pressed={isPlaying}
        className={`music-nav-btn ${isPlaying ? 'is-active' : ''} ${mobile ? 'is-mobile' : ''}`}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: mobile ? 'space-between' : 'center',
          gap: '8px',
          padding: mobile ? '10px 18px' : '8px 16px',
          width: mobile ? '100%' : 'auto',
          borderRadius: '999px',
          border: isPlaying ? '1px solid rgba(183, 255, 0, 0.45)' : '1px solid var(--border-medium)',
          backgroundColor: isPlaying ? 'rgba(183, 255, 0, 0.08)' : 'rgba(255, 255, 255, 0.03)',
          fontFamily: 'var(--font-mono)',
          fontSize: mobile ? '0.9rem' : '0.88rem',
          fontWeight: 600,
          letterSpacing: '0.1em',
          color: isPlaying ? 'var(--accent-lime)' : 'var(--text-secondary)',
          cursor: 'pointer',
          transition: 'all 0.25s ease',
          outline: 'none',
          boxShadow: isPlaying ? '0 0 12px rgba(183, 255, 0, 0.18)' : 'none',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = 'var(--accent-lime)';
          e.currentTarget.style.color = 'var(--accent-lime)';
          const iconEl = e.currentTarget.querySelector('.music-icon-indicator');
          if (iconEl) iconEl.style.transform = 'translateY(-1px)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = isPlaying
            ? 'rgba(183, 255, 0, 0.45)'
            : 'var(--border-medium)';
          e.currentTarget.style.color = isPlaying ? 'var(--accent-lime)' : 'var(--text-secondary)';
          const iconEl = e.currentTarget.querySelector('.music-icon-indicator');
          if (iconEl) iconEl.style.transform = 'translateY(0)';
        }}
      >
        <span
          className="music-icon-indicator"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'transform 0.2s ease',
          }}
        >
          {isPlaying ? (
            <Volume2
              size={mobile ? 16 : 13}
              className="music-icon-animated"
              style={{ color: 'var(--accent-lime)' }}
            />
          ) : (
            <VolumeX
              size={mobile ? 16 : 13}
              style={{ color: 'var(--text-muted)' }}
            />
          )}
        </span>

        <span style={{ whiteSpace: 'nowrap' }}>
          ♪ {isPlaying ? 'SOUND ON' : 'SOUND OFF'}
        </span>

        {mobile && (
          <span
            style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              backgroundColor: isPlaying ? 'var(--accent-lime)' : 'var(--text-muted)',
              boxShadow: isPlaying ? '0 0 8px var(--accent-lime)' : 'none',
            }}
          />
        )}
      </button>

      <style>{`
        .music-nav-btn:focus-visible {
          outline: 2px solid var(--accent-lime) !important;
          outline-offset: 2px !important;
        }

        @keyframes musicPulseSubtle {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.15);
            opacity: 0.85;
          }
        }

        .music-icon-animated {
          animation: musicPulseSubtle 2s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .music-icon-animated {
            animation: none !important;
          }
          .music-nav-btn {
            transition: none !important;
          }
        }
      `}</style>
    </>
  );
}
