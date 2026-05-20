import { useState } from 'react'
import FadeIn from '../components/FadeIn'

const contactLinks = [
  {
    label: 'emmanuelniyi1997@gmail.com',
    href: 'mailto:emmanuelniyi1997@gmail.com',
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
    href: 'https://github.com/Emmanuel00885566',
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

  const handleSubmit = () => {
    if (!formData.name || !formData.email || !formData.message) return

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
          maxWidth: 680,
          margin: '0 auto',
          padding: '0 2rem',
          textAlign: 'center',
        }}
      >
        <FadeIn>
          <p
            className="font-mono"
            style={{
              fontSize: '.75rem',
              letterSpacing: '.15em',
              color: 'var(--accent)',
              marginBottom: '.75rem',
            }}
          >
            // contact
          </p>

          <h2
            style={{
              fontSize: 'clamp(2rem, 4vw, 2.6rem)',
              fontWeight: 800,
              letterSpacing: '-.04em',
              lineHeight: 1.1,
              marginBottom: '1rem',
            }}
          >
            Let's build something.
          </h2>

          <div
            style={{
              width: 40,
              height: 2,
              background: 'var(--accent)',
              margin: '0 auto 1.5rem',
            }}
          />

          <p
            style={{
              color: 'var(--text2)',
              fontSize: '.98rem',
              lineHeight: 1.8,
              marginBottom: '2.5rem',
            }}
          >
            Have a project in mind, a problem to solve, or just want to
            connect? I'm currently open to freelance, contract, and full-time
            opportunities.
          </p>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '1rem',
              marginBottom: '3rem',
              flexWrap: 'wrap',
            }}
          >
            {contactLinks.map(link => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '.6rem',
                  padding: '.85rem 1.5rem',
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  borderRadius: 10,
                  color: 'var(--text2)',
                  textDecoration: 'none',
                  fontFamily: 'Fira Code, monospace',
                  fontSize: '.82rem',
                  letterSpacing: '.05em',
                  transition: 'all .2s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'var(--accent)'
                  e.currentTarget.style.color = 'var(--accent)'
                  e.currentTarget.style.transform = 'translateY(-2px)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'var(--border)'
                  e.currentTarget.style.color = 'var(--text2)'
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
              >
                {link.icon}
                {link.label}
              </a>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div
            style={{
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: 16,
              padding: '2.5rem',
              textAlign: 'left',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: 1,
                background:
                  'linear-gradient(90deg, transparent, var(--accent), transparent)',
              }}
            />

            <div
              className="form-row"
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '1rem',
                marginBottom: '1rem',
              }}
            >
              {[
                {
                  key: 'name',
                  label: 'name',
                  type: 'text',
                  placeholder: 'Your name',
                },
                {
                  key: 'email',
                  label: 'email',
                  type: 'email',
                  placeholder: 'your@email.com',
                },
              ].map(field => (
                <div key={field.key}>
                  <label
                    className="font-mono"
                    style={{
                      display: 'block',
                      fontSize: '.72rem',
                      letterSpacing: '.08em',
                      color: 'var(--text3)',
                      marginBottom: '.5rem',
                    }}
                  >
                    {field.label}
                  </label>

                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    value={formData[field.key as keyof typeof formData]}
                    onChange={e =>
                      setFormData({
                        ...formData,
                        [field.key]: e.target.value,
                      })
                    }
                    style={{
                      width: '100%',
                      padding: '.75rem 1rem',
                      background: 'var(--bg)',
                      border: '1px solid var(--border)',
                      borderRadius: 8,
                      color: 'var(--text)',
                      fontFamily: 'Plus Jakarta Sans, sans-serif',
                      fontSize: '.9rem',
                      outline: 'none',
                      transition: 'border-color .2s',
                    }}
                    onFocus={e => {
                      e.currentTarget.style.borderColor = 'var(--accent)'
                    }}
                    onBlur={e => {
                      e.currentTarget.style.borderColor = 'var(--border)'
                    }}
                  />
                </div>
              ))}
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <label
                className="font-mono"
                style={{
                  display: 'block',
                  fontSize: '.72rem',
                  letterSpacing: '.08em',
                  color: 'var(--text3)',
                  marginBottom: '.5rem',
                }}
              >
                message
              </label>

              <textarea
                placeholder="Tell me about your project..."
                value={formData.message}
                onChange={e =>
                  setFormData({
                    ...formData,
                    message: e.target.value,
                  })
                }
                rows={5}
                style={{
                  width: '100%',
                  padding: '.75rem 1rem',
                  background: 'var(--bg)',
                  border: '1px solid var(--border)',
                  borderRadius: 8,
                  color: 'var(--text)',
                  fontFamily: 'Plus Jakarta Sans, sans-serif',
                  fontSize: '.9rem',
                  outline: 'none',
                  transition: 'border-color .2s',
                  resize: 'none',
                }}
                onFocus={e => {
                  e.currentTarget.style.borderColor = 'var(--accent)'
                }}
                onBlur={e => {
                  e.currentTarget.style.borderColor = 'var(--border)'
                }}
              />
            </div>

            <button
              onClick={handleSubmit}
              style={{
                width: '100%',
                padding: '.95rem',
                background: sent ? 'var(--green)' : 'var(--accent)',
                color: '#fff',
                border: 'none',
                borderRadius: 8,
                fontFamily: 'Plus Jakarta Sans, sans-serif',
                fontSize: '.95rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all .3s',
              }}
              onMouseEnter={e => {
                if (!sent) {
                  e.currentTarget.style.background = 'var(--accent2)'
                }

                e.currentTarget.style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={e => {
                if (!sent) {
                  e.currentTarget.style.background = 'var(--accent)'
                }

                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              {sent ? '✓ Message sent!' : 'Send message →'}
            </button>
          </div>
        </FadeIn>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .form-row {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}