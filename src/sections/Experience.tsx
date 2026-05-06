const values = [
  {
    number: '01',
    title: 'Systems thinking',
    description:
      'I think in data flows, failure modes, and scale. Every decision accounts for what happens when traffic doubles overnight.',
  },
  {
    number: '02',
    title: 'Obsessive about DX',
    description:
      'Clean APIs, readable code, and thorough documentation. I build software that teams genuinely enjoy working with long term.',
  },
  {
    number: '03',
    title: 'Ship fast, right',
    description:
      'Speed without sloppiness. I move quickly while keeping architecture maintainable and technical debt under control.',
  },
]

const stats = [
  { value: '3+', label: 'Years building production systems' },
  { value: '20+', label: 'Projects shipped end to end' },
  { value: '99%', label: 'Average API uptime across projects' },
  { value: '10x', label: 'Average performance improvements' },
]

export default function Experience() {
  return (
    <section
      id="experience"
      style={{
        padding: '7rem 0',
        background: 'var(--bg)',
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: '0 auto',
          padding: '0 2rem',
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
          // why work with me
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
          What makes the difference.
        </h2>

        <p
          style={{
            maxWidth: 700,
            color: 'var(--text2)',
            lineHeight: 1.7,
            marginBottom: '2rem',
            fontSize: '.98rem',
          }}
        >
          Beyond writing code, I focus on building scalable systems,
          maintainable architecture, and developer friendly solutions that
          continue performing as products grow.
        </p>

        <div
          style={{
            width: 50,
            height: 3,
            background: 'var(--accent)',
            marginBottom: '3rem',
            borderRadius: 999,
          }}
        />

        {/* Value Cards */}
        <div className="value-grid">
          {values.map((item, index) => (
            <div
              key={`${item.number}-${index}`}
              className="value-card"
            >

              {/* Accent line */}
              <div className="top-line" />

              <p className="value-number font-mono">
                {item.number} /
              </p>

              <h3 className="value-title">
                {item.title}
              </h3>

              <p className="value-description">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div
              key={`${stat.label}-${index}`}
              className="stat-card"
            >
              <div className="stat-value">
                {stat.value}
              </div>

              <div className="stat-label font-mono">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .value-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 1.5rem;
          margin-bottom: 5rem;
        }

        .value-card {
          padding: 2rem 1.75rem;
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 18px;
          transition: all .35s ease;
          position: relative;
          overflow: hidden;
        }

        .value-card:hover {
          border-color: var(--accent);
          transform: translateY(-5px);
        }

        .value-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(
            135deg,
            rgba(59,130,246,0.05),
            transparent
          );
          opacity: 0;
          transition: opacity .3s ease;
          pointer-events: none;
        }

        .value-card:hover::before {
          opacity: 1;
        }

        .top-line {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: var(--accent);
          border-radius: 18px 18px 0 0;
          opacity: 0;
          transition: opacity .3s ease;
        }

        .value-card:hover .top-line {
          opacity: 1;
        }

        .value-number {
          font-size: .75rem;
          color: var(--accent);
          letter-spacing: .1em;
          margin-bottom: 1rem;
        }

        .value-title {
          font-size: 1.05rem;
          font-weight: 700;
          letter-spacing: -.02em;
          margin-bottom: .7rem;
          line-height: 1.3;
        }

        .value-description {
          font-size: .9rem;
          color: var(--text2);
          line-height: 1.8;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 1px;
          background: var(--border);
          border: 1px solid var(--border);
          border-radius: 18px;
          overflow: hidden;
        }

        .stat-card {
          padding: 2rem 1.5rem;
          background: var(--surface);
          text-align: center;
          transition: all .3s ease;
          position: relative;
          overflow: hidden;
        }

        .stat-card:hover {
          background: var(--surface2);
        }

        .stat-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(
            circle at top,
            rgba(59,130,246,0.05),
            transparent 70%
          );
          opacity: 0;
          transition: opacity .3s ease;
        }

        .stat-card:hover::before {
          opacity: 1;
        }

        .stat-value {
          font-size: clamp(2rem, 5vw, 2.8rem);
          font-weight: 800;
          letter-spacing: -.05em;
          color: var(--accent);
          margin-bottom: .5rem;
          line-height: 1;
          position: relative;
          z-index: 1;
        }

        .stat-label {
          font-size: .75rem;
          color: var(--text3);
          letter-spacing: .08em;
          line-height: 1.6;
          position: relative;
          z-index: 1;
          text-transform: uppercase;
        }

        @media (max-width: 768px) {
          #experience {
            padding: 5rem 0;
          }

          .value-grid {
            margin-bottom: 3rem;
          }

          .value-card {
            padding: 1.6rem;
          }

          .stat-card {
            padding: 1.6rem 1rem;
          }
        }
      `}</style>
    </section>
  )
}