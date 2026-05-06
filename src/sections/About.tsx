const highlights = [
  { icon: '⚡', title: 'Performance-first', sub: 'Optimizing for speed at every layer' },
  { icon: '🔐', title: 'Security by default', sub: 'Auth, validation & safe patterns' },
  { icon: '📐', title: 'Clean architecture', sub: 'Modular, testable, maintainable code' },
  { icon: '🔄', title: 'Reliability', sub: 'Built for uptime, designed to recover' },
]

export default function About() {
  return (
    <section id="about" style={{ padding: '7rem 0', background: 'var(--bg2)' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 2rem',
        display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}
        className="about-grid">

        {/* Left: Story */}
        <div>
          <p className="font-mono" style={{ fontSize: '.75rem', letterSpacing: '.15em',
            color: 'var(--accent)', marginBottom: '.75rem' }}>
            // about me
          </p>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.6rem)', fontWeight: 800,
            letterSpacing: '-.04em', lineHeight: 1.1, marginBottom: '1rem' }}>
            Engineer at heart,<br />builder by nature.
          </h2>
          <div style={{ width: 40, height: 2, background: 'var(--accent)', marginBottom: '2rem' }} />
          <p style={{ color: 'var(--text2)', lineHeight: 1.9, marginBottom: '1.2rem', fontSize: '.98rem' }}>
            I started building web apps out of pure curiosity — tearing apart projects to
            understand how they actually work under the hood. That obsession with the{' '}
            <strong style={{ color: 'var(--text)' }}>"why"</strong> never left.
          </p>
          <p style={{ color: 'var(--text2)', lineHeight: 1.9, marginBottom: '1.2rem', fontSize: '.98rem' }}>
            Today I specialize in designing systems that don't just work — they{' '}
            <strong style={{ color: 'var(--text)' }}>scale</strong>, stay fast under load,
            and recover gracefully when things go wrong. Backend architecture is where I do my best thinking.
          </p>
          <p style={{ color: 'var(--text2)', lineHeight: 1.9, fontSize: '.98rem' }}>
            I care deeply about <strong style={{ color: 'var(--text)' }}>clean API design</strong>,
            meaningful abstractions, and shipping code that future-me (and teammates) won't regret.
          </p>
        </div>

        {/* Right: Card */}
        <div style={{
          background: 'var(--surface)', border: '1px solid var(--border)',
          borderRadius: 16, padding: '2rem', position: 'relative', overflow: 'hidden',
        }}>
          {/* Top glow line */}
          <div style={{
            position: 'absolute', top: 0, left: 0, right: 0, height: 1,
            background: 'linear-gradient(90deg, transparent, var(--accent), transparent)',
          }} />

          {highlights.map((item, i) => (
            <div key={item.title} style={{
              display: 'flex', alignItems: 'flex-start', gap: '1rem',
              padding: '1rem 0',
              borderBottom: i < highlights.length - 1 ? '1px solid var(--border)' : 'none',
            }}>
              <div style={{
                width: 36, height: 36, borderRadius: 8, flexShrink: 0,
                background: 'rgba(59,130,246,0.1)',
                border: '1px solid rgba(59,130,246,0.2)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1rem',
              }}>
                {item.icon}
              </div>
              <div>
                <h4 style={{ fontSize: '.9rem', fontWeight: 600, marginBottom: '.2rem', letterSpacing: '-.01em' }}>
                  {item.title}
                </h4>
                <p className="font-mono" style={{ fontSize: '.8rem', color: 'var(--text2)' }}>
                  {item.sub}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
      `}</style>
    </section>
  )
}