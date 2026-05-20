const highlights = [
  {
    icon: '⚡',
    title: 'End-to-end delivery',
    sub: 'Frontend to backend, fully shipped',
  },
  {
    icon: '🔐',
    title: 'Auth & security',
    sub: 'JWT, validation & safe API patterns',
  },
  {
    icon: '📐',
    title: 'Clean architecture',
    sub: 'Modular, scalable, maintainable code',
  },
  {
    icon: '🚀',
    title: 'Production-ready',
    sub: 'Deployed apps on Vercel & cloud platforms',
  },
]

export default function About() {
  return (
    <section
      id="about"
      style={{
        padding: '7rem 0',
        background: 'var(--bg2)',
      }}
    >
      <div
        className="about-grid"
        style={{
          maxWidth: 1100,
          margin: '0 auto',
          padding: '0 2rem',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '5rem',
          alignItems: 'center',
        }}
      >
        <div>
          <p
            className="font-mono"
            style={{
              fontSize: '.75rem',
              letterSpacing: '.15em',
              color: 'var(--accent)',
              marginBottom: '.75rem',
            }}
          >
            // about me
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
            Engineer at heart,
            <br />
            builder by nature.
          </h2>

          <div
            style={{
              width: 40,
              height: 2,
              background: 'var(--accent)',
              marginBottom: '2rem',
            }}
          />

          <p
            style={{
              color: 'var(--text2)',
              lineHeight: 1.9,
              marginBottom: '1.2rem',
              fontSize: '.98rem',
            }}
          >
            I&apos;m{' '}
            <strong style={{ color: 'var(--text)' }}>
              Adeboye Oluwatosin Emmanuel
            </strong>
            , a Full Stack Software Engineer based in Lagos, Nigeria. I got into
            software development driven by a genuine curiosity for how things
            work — and that curiosity never left.
          </p>

          <p
            style={{
              color: 'var(--text2)',
              lineHeight: 1.9,
              marginBottom: '1.2rem',
              fontSize: '.98rem',
            }}
          >
            I specialize in building complete web applications — from designing
            responsive interfaces with React and Tailwind CSS to developing{' '}
            <strong style={{ color: 'var(--text)' }}>
              secure REST APIs
            </strong>{' '}
            and managing database architecture with MongoDB. I&apos;ve built
            e commerce platforms, shop management systems, and production ready
            APIs from scratch.
          </p>

          <p
            style={{
              color: 'var(--text2)',
              lineHeight: 1.9,
              fontSize: '.98rem',
            }}
          >
            I care about{' '}
            <strong style={{ color: 'var(--text)' }}>
              clean architecture
            </strong>
            , writing code that scales, and delivering solutions that actually
            work in production — not just on localhost.
          </p>
        </div>

        <div
          style={{
            background: 'var(--surface)',
            border: '1px solid var(--border)',
            borderRadius: 16,
            padding: '2rem',
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

          {highlights.map((item, i) => (
            <div
              key={item.title}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '1rem',
                padding: '1rem 0',
                borderBottom:
                  i < highlights.length - 1
                    ? '1px solid var(--border)'
                    : 'none',
              }}
            >
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 8,
                  flexShrink: 0,
                  background: 'rgba(59,130,246,0.1)',
                  border: '1px solid rgba(59,130,246,0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1rem',
                }}
              >
                {item.icon}
              </div>

              <div>
                <h4
                  style={{
                    fontSize: '.9rem',
                    fontWeight: 600,
                    marginBottom: '.2rem',
                  }}
                >
                  {item.title}
                </h4>

                <p
                  className="font-mono"
                  style={{
                    fontSize: '.8rem',
                    color: 'var(--text2)',
                  }}
                >
                  {item.sub}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
        }
      `}</style>
    </section>
  )
}