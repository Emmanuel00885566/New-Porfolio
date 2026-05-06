import { useState } from 'react'

const contactLinks = [
  {
    label: 'hello@devworks.io',
    href: 'mailto:hello@devworks.io',
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: 'GitHub',
    href: 'https://github.com',
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com',
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [sent, setSent] = useState(false)

  const handleSubmit = e => {
    e.preventDefault()

    if (!formData.name || !formData.email || !formData.message) return

    // Future integration point
    setSent(true)

    setTimeout(() => {
      setSent(false)
    }, 4000)

    setFormData({
      name: '',
      email: '',
      message: '',
    })
  }

  return (
    <section
      id="contact"
      style={{
        padding: '7rem 0',
        background: 'var(--bg2)',
      }}
    >
      <div
        style={{
          maxWidth: 720,
          margin: '0 auto',
          padding: '0 2rem',
          textAlign: 'center',
        }}
      >

        {/* Header */}
        <p
          className="font-mono"
          style={{
            fontSize: '.75rem',
            letterSpacing: '.15em',
            color: 'var(--accent)',
            marginBottom: '.75rem',
            textTransform: 'uppercase',
          }}
        >
          // contact
        </p>

        <h2
          style={{
            fontSize: 'clamp(2rem, 4vw, 2.8rem)',
            fontWeight: 800,
            letterSpacing: '-.04em',
            lineHeight: 1.1,
            marginBottom: '1rem',
          }}
        >
          Let&apos;s build something.
        </h2>

        <div
          style={{
            width: 50,
            height: 3,
            background: 'var(--accent)',
            margin: '0 auto 1.5rem',
            borderRadius: 999,
          }}
        />

        <p
          style={{
            color: 'var(--text2)',
            fontSize: '.98rem',
            lineHeight: 1.8,
            marginBottom: '2.8rem',
          }}
        >
          Have a project idea, a backend system to scale, or just want to
          connect? I&apos;m currently open to freelance, contract, and full time
          opportunities.
        </p>

        {/* Contact Links */}
        <div className="contact-links">
          {contactLinks.map((link, index) => (
            <a
              key={`${link.label}-${index}`}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="contact-link"
            >
              {link.icon}
              {link.label}
            </a>
          ))}
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="contact-form"
        >

          {/* Top Glow */}
          <div className="form-glow-line" />

          {/* Row */}
          <div className="form-row">

            {/* Name */}
            <div>
              <label className="input-label font-mono">
                name
              </label>

              <input
                type="text"
                placeholder="Your name"
                value={formData.name}
                onChange={e =>
                  setFormData({
                    ...formData,
                    name: e.target.value,
                  })
                }
                className="form-input"
              />
            </div>

            {/* Email */}
            <div>
              <label className="input-label font-mono">
                email
              </label>

              <input
                type="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={e =>
                  setFormData({
                    ...formData,
                    email: e.target.value,
                  })
                }
                className="form-input"
              />
            </div>
          </div>

          {/* Message */}
          <div className="message-group">
            <label className="input-label font-mono">
              message
            </label>

            <textarea
              placeholder="Tell me about your project..."
              rows={6}
              value={formData.message}
              onChange={e =>
                setFormData({
                  ...formData,
                  message: e.target.value,
                })
              }
              className="form-textarea"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className={`submit-button ${sent ? 'sent' : ''}`}
          >
            {sent ? '✓ Message sent!' : 'Send message →'}
          </button>
        </form>
      </div>

      <style>{`
        .contact-links {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 3rem;
          flex-wrap: wrap;
        }

        .contact-link {
          display: flex;
          align-items: center;
          gap: .6rem;
          padding: .9rem 1.4rem;
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 12px;
          color: var(--text2);
          text-decoration: none;
          font-family: 'DM Mono', monospace;
          font-size: .82rem;
          letter-spacing: .05em;
          transition: all .25s ease;
        }

        .contact-link:hover {
          border-color: var(--accent);
          color: var(--accent);
          transform: translateY(-3px);
          background: rgba(59,130,246,0.05);
        }

        .contact-form {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 22px;
          padding: 2.5rem;
          text-align: left;
          position: relative;
          overflow: hidden;
          transition: border-color .3s ease;
        }

        .contact-form:hover {
          border-color: var(--border2);
        }

        .contact-form::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(
            135deg,
            rgba(59,130,246,0.04),
            transparent
          );
          opacity: 0;
          transition: opacity .3s ease;
          pointer-events: none;
        }

        .contact-form:hover::before {
          opacity: 1;
        }

        .form-glow-line {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent,
            var(--accent),
            transparent
          );
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .message-group {
          margin-bottom: 1.5rem;
        }

        .input-label {
          display: block;
          font-size: .72rem;
          letter-spacing: .08em;
          color: var(--text3);
          margin-bottom: .5rem;
          text-transform: uppercase;
        }

        .form-input,
        .form-textarea {
          width: 100%;
          padding: .9rem 1rem;
          background: var(--bg);
          border: 1px solid var(--border);
          border-radius: 10px;
          color: var(--text);
          font-family: 'Syne', sans-serif;
          font-size: .92rem;
          outline: none;
          transition: all .25s ease;
        }

        .form-input:focus,
        .form-textarea:focus {
          border-color: var(--accent);
          background: rgba(59,130,246,0.02);
        }

        .form-textarea {
          resize: vertical;
          min-height: 140px;
        }

        .submit-button {
          width: 100%;
          padding: 1rem;
          background: var(--accent);
          color: #fff;
          border: none;
          border-radius: 10px;
          font-family: 'Syne', sans-serif;
          font-size: .95rem;
          font-weight: 600;
          cursor: pointer;
          transition: all .3s ease;
          letter-spacing: -.01em;
        }

        .submit-button:hover {
          background: var(--accent2);
          transform: translateY(-2px);
        }

        .submit-button.sent {
          background: var(--green);
        }

        .submit-button.sent:hover {
          transform: none;
        }

        @media (max-width: 768px) {
          #contact {
            padding: 5rem 0;
          }

          .form-row {
            grid-template-columns: 1fr;
          }

          .contact-form {
            padding: 1.6rem;
          }

          .contact-link {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  )
}