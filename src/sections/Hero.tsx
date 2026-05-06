import { useEffect, useState } from 'react'

const headlines = [
  'Scalable Backend Systems.',
  'Secure REST APIs.',
  'Efficient Web Apps.',
  'Clean Architecture.',
]

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  // Typewriter effect
  useEffect(() => {
    const current = headlines[currentIndex]
    let timeout

    if (!isDeleting && displayed.length < current.length) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, displayed.length + 1))
      }, 60)
    } else if (!isDeleting && displayed.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1800)
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => {
        setDisplayed(displayed.slice(0, -1))
      }, 35)
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false)
      setCurrentIndex((prev) => (prev + 1) % headlines.length)
    }

    return () => clearTimeout(timeout)
  }, [displayed, isDeleting, currentIndex])

  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        padding: '6rem 0 4rem',
      }}
    >
      {/* Animated grid background */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          opacity: 0.3,
          maskImage:
            'radial-gradient(ellipse 80% 60% at 50% 50%, black 40%, transparent 100%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 80% 60% at 50% 50%, black 40%, transparent 100%)',
        }}
      />

      {/* Glow */}
      <div
        style={{
          position: 'absolute',
          top: '-20%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: 700,
          height: 700,
          background:
            'radial-gradient(circle, rgba(59,130,246,0.13) 0%, transparent 65%)',
          pointerEvents: 'none',
        }}
      />

      {/* Content */}
      <div
        style={{
          maxWidth: 1100,
          margin: '0 auto',
          padding: '0 2rem',
          position: 'relative',
          zIndex: 2,
        }}
      >
        {/* Status badge */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '.5rem',
            padding: '.4rem .9rem',
            background: 'rgba(59,130,246,0.1)',
            border: '1px solid rgba(59,130,246,0.25)',
            borderRadius: 100,
            marginBottom: '2rem',
          }}
        >
          <span
            style={{
              width: 7,
              height: 7,
              borderRadius: '50%',
              background: 'var(--green)',
              boxShadow: '0 0 6px var(--green)',
              animation: 'pulse 2s infinite',
            }}
          />
          <span
            className="font-mono"
            style={{
              fontSize: '.78rem',
              color: 'var(--accent2)',
              letterSpacing: '.05em',
            }}
          >
            Available for new projects
          </span>
        </div>

        {/* Headline */}
        <h1
          style={{
            fontSize: 'clamp(2.8rem, 6vw, 5rem)',
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: '-.04em',
            marginBottom: '1.5rem',
          }}
        >
          I Build
          <br />
          <span
            style={{
              color: 'var(--accent)',
              display: 'block',
              minHeight: '1.1em',
            }}
          >
            {displayed}
            <span
              style={{
                display: 'inline-block',
                width: 3,
                height: '0.85em',
                background: 'var(--accent)',
                marginLeft: 4,
                animation: 'blink 1s step-end infinite',
                verticalAlign: 'middle',
              }}
            />
          </span>
        </h1>

        {/* Subtext */}
        <p
          style={{
            fontSize: '1.1rem',
            color: 'var(--text2)',
            maxWidth: 520,
            lineHeight: 1.8,
            marginBottom: '2.5rem',
          }}
        >
          Full Stack Developer specializing in high performance APIs,
          distributed architectures, and solid web applications.
          <strong style={{ color: 'var(--text)' }}>
            {' '}
            Clean code. Real impact.
          </strong>
        </p>

        {/* CTA */}
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <a
            href="#projects"
            style={{
              padding: '.85rem 2rem',
              background: 'var(--accent)',
              color: '#fff',
              borderRadius: 8,
              textDecoration: 'none',
              fontWeight: 600,
              fontSize: '.95rem',
            }}
          >
            View Projects
          </a>

          <a
            href="#contact"
            style={{
              padding: '.85rem 2rem',
              background: 'transparent',
              color: 'var(--text)',
              border: '1px solid var(--border2)',
              borderRadius: 8,
              textDecoration: 'none',
              fontWeight: 500,
              fontSize: '.95rem',
            }}
          >
            Let's Talk →
          </a>
        </div>

        {/* Stats */}
        <div
          style={{
            display: 'flex',
            gap: '3rem',
            marginTop: '4rem',
            paddingTop: '3rem',
            borderTop: '1px solid var(--border)',
            flexWrap: 'wrap',
          }}
        >
          {[
            { num: '3+', label: 'Years experience' },
            { num: '20+', label: 'Projects shipped' },
            { num: '99%', label: 'Uptime average' },
          ].map(({ num, label }) => (
            <div key={label}>
              <div
                style={{
                  fontSize: '2rem',
                  fontWeight: 800,
                  letterSpacing: '-.04em',
                }}
              >
                {num.replace(/[+%]/, '')}
                <span style={{ color: 'var(--accent)' }}>
                  {num.match(/[+%]/)?.[0]}
                </span>
              </div>
              <div
                className="font-mono"
                style={{
                  fontSize: '.78rem',
                  color: 'var(--text3)',
                  marginTop: '.2rem',
                }}
              >
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:.3} }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
      `}</style>
    </section>
  )
}