import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Copy, Check, Mail, Send, X, FileText } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const emailAddress = 'shreyasra7@gmail.com';
  const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || 'a91961f3-90cc-42a9-9a6c-afb8a03efd97';

  const copyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `New Portfolio Inquiry from ${formData.name}`,
          from_name: 'Shreyas Portfolio Contact Form',
        }),
      });

      const data = await response.json();

      if (data.success) {
        setFormSent(true);
        setTimeout(() => {
          setFormSent(false);
          setModalOpen(false);
          setFormData({ name: '', email: '', message: '' });
        }, 3000);
      } else {
        setErrorMessage(data.message || 'Something went wrong. Please try again or email directly.');
      }
    } catch (err) {
      setErrorMessage('Network error. Please try again or email directly to shreyasra7@gmail.com.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-wrapper" style={{ backgroundColor: '#050505', position: 'relative' }}>
      <div className="bg-grid-overlay" />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Section Header Meta */}
        <div className="section-meta-header">
          <div className="section-label">05 — CONTACT</div>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
            [ INITIATE COLLABORATION ]
          </span>
        </div>

        {/* Large Final CTA Typography */}
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2
              className="contact-giant-title"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.85rem, 4.2vw, 4.5rem)',
                fontWeight: 900,
                textTransform: 'uppercase',
                letterSpacing: '-0.035em',
                lineHeight: 1.1,
                color: '#ffffff',
                marginBottom: 'clamp(1.75rem, 3.5vw, 3rem)',
                wordBreak: 'normal',
                overflowWrap: 'break-word',
                maxWidth: '100%',
              }}
            >
              <span style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>LET'S BUILD</span>{' '}
              <br className="desktop-break" />
              <span style={{ color: 'var(--accent-lime)', display: 'inline-block', whiteSpace: 'nowrap' }}>
                SOMETHING
              </span>{' '}
              <br className="desktop-break" />
              <span style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>TOGETHER.</span>
            </h2>
          </motion.div>

          {/* Interactive CTA Action Bar */}
          <div
            className="contact-actions-row"
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1rem',
              alignItems: 'center',
              marginBottom: 'clamp(2.5rem, 5vw, 4.5rem)',
              width: '100%',
            }}
          >
            <button
              type="button"
              onClick={() => setModalOpen(true)}
              className="btn-editorial-lime contact-action-btn"
              style={{ fontSize: '1rem', padding: '1.05rem 2.25rem' }}
            >
              <span>LET'S TALK</span>
              <span style={{ fontSize: '1.2rem' }}>→</span>
            </button>

            <button
              type="button"
              onClick={copyEmail}
              className="btn-editorial-outline contact-action-btn"
              style={{ padding: '1.05rem 1.85rem' }}
            >
              {copied ? <Check size={18} color="var(--accent-lime)" /> : <Copy size={18} />}
              <span>{copied ? 'EMAIL COPIED' : 'COPY EMAIL'}</span>
            </button>

            <a
              href="/resume/Shreyas.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-editorial-outline contact-action-btn"
              style={{ padding: '1.05rem 1.85rem' }}
            >
              <FileText size={18} />
              <span>RESUME (PDF)</span>
              <ArrowUpRight size={16} />
            </a>
          </div>

          {/* Contact Channels Grid */}
          <div className="contact-channels-grid">
            {/* Email Channel */}
            <a
              href={`mailto:${emailAddress}`}
              className="contact-channel-item"
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--accent-lime)', letterSpacing: '0.15em' }}>
                  01 // DIRECT EMAIL
                </span>
                <ArrowUpRight size={18} color="var(--text-muted)" />
              </div>
              <div className="channel-handle" title={emailAddress}>
                {emailAddress}
              </div>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                Response time usually within 24 hours.
              </p>
            </a>

            {/* GitHub Channel */}
            <a
              href="https://github.com/Shreyas142004"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-channel-item"
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--accent-lime)', letterSpacing: '0.15em' }}>
                  02 // GITHUB
                </span>
                <ArrowUpRight size={18} color="var(--text-muted)" />
              </div>
              <div className="channel-handle" title="github.com/Shreyas142004">
                github.com/Shreyas142004
              </div>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                Inspect open source codebases & repositories.
              </p>
            </a>

            {/* LinkedIn Channel */}
            <a
              href="https://www.linkedin.com/in/shreyas-r-a-6a0567305"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-channel-item"
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--accent-lime)', letterSpacing: '0.15em' }}>
                  03 // LINKEDIN
                </span>
                <ArrowUpRight size={18} color="var(--text-muted)" />
              </div>
              <div className="channel-handle" title="linkedin.com/in/shreyas-r-a-6a0567305">
                linkedin.com/in/shreyas-r-a-6a0567305
              </div>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                Professional network & collegiate updates.
              </p>
            </a>

            {/* LeetCode Channel */}
            <a
              href="https://leetcode.com/u/shreyas142004/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-channel-item"
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--accent-lime)', letterSpacing: '0.15em' }}>
                  04 // LEETCODE
                </span>
                <ArrowUpRight size={18} color="var(--text-muted)" />
              </div>
              <div className="channel-handle" title="leetcode.com/u/shreyas142004">
                leetcode.com/u/shreyas142004
              </div>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                Data structures, algorithms & problem solving.
              </p>
            </a>
          </div>
        </div>
      </div>

      {/* Direct Message Modal */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(5, 5, 5, 0.92)',
              backdropFilter: 'blur(12px)',
              zIndex: 9999,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '1.5rem',
            }}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              style={{
                width: '100%',
                maxWidth: '560px',
                maxHeight: '90vh',
                overflowY: 'auto',
                backgroundColor: '#0a0a0a',
                border: '1px solid var(--accent-lime)',
                padding: 'clamp(1.5rem, 4vw, 2.75rem)',
                position: 'relative',
                boxShadow: '0 25px 60px rgba(0,0,0,0.85)',
              }}
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setModalOpen(false)}
                aria-label="Close modal"
                style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  color: 'var(--text-muted)',
                  border: '1px solid var(--border-subtle)',
                  width: '36px',
                  height: '36px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#ffffff';
                  e.currentTarget.style.borderColor = 'var(--accent-lime)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--text-muted)';
                  e.currentTarget.style.borderColor = 'var(--border-subtle)';
                }}
              >
                <X size={18} />
              </button>

              <div style={{ marginBottom: '1.5rem' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--accent-lime)', letterSpacing: '0.2em' }}>
                  // TRANSMIT DIRECT MESSAGE
                </span>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.75rem', fontWeight: 800, color: '#ffffff', marginTop: '0.25rem' }}>
                  LET'S TALK
                </h3>
              </div>

              {formSent ? (
                <div style={{ padding: '2.5rem 1rem', textAlign: 'center' }}>
                  <Check size={48} color="var(--accent-lime)" style={{ margin: '0 auto 1rem' }} />
                  <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', color: '#ffffff' }}>
                    MESSAGE DISPATCHED
                  </h4>
                  <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem', fontSize: '0.9rem' }}>
                    Thank you! Your message has been transmitted directly to Shreyas at {emailAddress}.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  {errorMessage && (
                    <div
                      style={{
                        padding: '12px 14px',
                        border: '1px solid rgba(255, 75, 75, 0.4)',
                        backgroundColor: 'rgba(255, 75, 75, 0.08)',
                        color: '#ff8888',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.8rem',
                        lineHeight: 1.5,
                      }}
                    >
                      {errorMessage}
                    </div>
                  )}

                  <div>
                    <label style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.4rem', letterSpacing: '0.1em' }}>
                      YOUR NAME *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Smith"
                      style={{
                        width: '100%',
                        backgroundColor: '#050505',
                        border: '1px solid var(--border-medium)',
                        color: '#ffffff',
                        padding: '12px 16px',
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.95rem',
                        outline: 'none',
                        transition: 'border-color 0.2s ease',
                      }}
                      onFocus={(e) => (e.target.style.borderColor = 'var(--accent-lime)')}
                      onBlur={(e) => (e.target.style.borderColor = 'var(--border-medium)')}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.4rem', letterSpacing: '0.1em' }}>
                      EMAIL ADDRESS *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. alex@company.com"
                      style={{
                        width: '100%',
                        backgroundColor: '#050505',
                        border: '1px solid var(--border-medium)',
                        color: '#ffffff',
                        padding: '12px 16px',
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.95rem',
                        outline: 'none',
                        transition: 'border-color 0.2s ease',
                      }}
                      onFocus={(e) => (e.target.style.borderColor = 'var(--accent-lime)')}
                      onBlur={(e) => (e.target.style.borderColor = 'var(--border-medium)')}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.4rem', letterSpacing: '0.1em' }}>
                      PROJECT / OPPORTUNITY BRIEF *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your vision, role opportunity, or project timeline..."
                      style={{
                        width: '100%',
                        backgroundColor: '#050505',
                        border: '1px solid var(--border-medium)',
                        color: '#ffffff',
                        padding: '12px 16px',
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.95rem',
                        outline: 'none',
                        resize: 'vertical',
                        transition: 'border-color 0.2s ease',
                      }}
                      onFocus={(e) => (e.target.style.borderColor = 'var(--accent-lime)')}
                      onBlur={(e) => (e.target.style.borderColor = 'var(--border-medium)')}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-editorial-lime"
                    style={{
                      width: '100%',
                      marginTop: '0.5rem',
                      opacity: isSubmitting ? 0.65 : 1,
                      cursor: isSubmitting ? 'not-allowed' : 'pointer',
                    }}
                  >
                    <span>{isSubmitting ? 'DISPATCHING MESSAGE...' : 'SEND MESSAGE'}</span>
                    <Send size={16} />
                  </button>
                </form>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .contact-channels-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1px;
          background-color: var(--border-subtle);
          border: 1px solid var(--border-subtle);
          width: 100%;
          max-width: 100%;
          box-sizing: border-box;
        }

        .contact-channel-item {
          background-color: #050505;
          padding: 1.75rem 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 0.9rem;
          transition: all 0.25s ease;
          min-width: 0;
          overflow: hidden;
          width: 100%;
          box-sizing: border-box;
        }

        .contact-channel-item:hover {
          background-color: #0c0c0c !important;
          outline: 1px solid var(--accent-lime);
        }

        .channel-handle {
          font-family: var(--font-heading);
          font-size: clamp(0.85rem, 1.02vw, 1rem);
          font-weight: 700;
          color: #ffffff;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          letter-spacing: -0.015em;
          line-height: 1.25;
        }

        @media (max-width: 1024px) {
          .contact-giant-title {
            font-size: clamp(1.85rem, 4.8vw, 3.6rem) !important;
          }
          .contact-channels-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .contact-channel-item {
            padding: 1.75rem 1.5rem !important;
          }
          .channel-handle {
            font-size: 1.05rem !important;
          }
        }

        @media (max-width: 600px) {
          .contact-giant-title {
            font-size: clamp(1.6rem, 7.5vw, 2.6rem) !important;
            line-height: 1.15 !important;
          }
          .contact-actions-row {
            flex-direction: column !important;
            align-items: stretch !important;
            gap: 0.75rem !important;
          }
          .contact-action-btn {
            width: 100% !important;
            justify-content: center !important;
            text-align: center !important;
            box-sizing: border-box !important;
          }
          .contact-channels-grid {
            grid-template-columns: 1fr !important;
          }
          .contact-channel-item {
            padding: 1.5rem 1.25rem !important;
          }
          .channel-handle {
            font-size: 0.95rem !important;
          }
        }
      `}</style>
    </section>
  );
}
