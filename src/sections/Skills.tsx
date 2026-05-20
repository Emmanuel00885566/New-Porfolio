import FadeIn from '../components/FadeIn'

const skillGroups = [
  {
    label: '// Frontend',
    skills: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Responsive Design'],
    hot: ['React.js', 'Tailwind CSS', 'JavaScript'],
  },
  {
    label: '// Backend',
    skills: ['Node.js', 'Express.js', 'REST API', 'Authentication', 'Business Logic', 'Error Handling'],
    hot: ['Node.js', 'Express.js', 'REST API'],
  },
  {
    label: '// Database',
    skills: ['MongoDB', 'SQL', 'Data Modelling', 'Mongoose'],
    hot: ['MongoDB'],
  },
  {
    label: '// Tools & Platforms',
    skills: ['Git', 'GitHub', 'Postman', 'VS Code', 'Vercel'],
    hot: ['Git', 'GitHub', 'Vercel'],
  },
]

export default function Skills() {
  return (
    <section id="skills" style={{ padding: '7rem 0', background: 'var(--bg)' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 2rem' }}>

        <FadeIn>
          <p className="font-mono" style={{
            fontSize: '.75rem', letterSpacing: '.15em',
            color: 'var(--accent)', marginBottom: '.75rem',
          }}>
            // tech stack
          </p>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 2.6rem)', fontWeight: 800,
            letterSpacing: '-.04em', lineHeight: 1.1, marginBottom: '1rem',
          }}>
            Tools I build with.
          </h2>
          <div style={{ width: 40, height: 2, background: 'var(--accent)', marginBottom: '3rem' }} />
        </FadeIn>

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem',
        }} className="skills-grid">
          {skillGroups.map((group, i) => (
            <FadeIn key={group.label} delay={i * 0.1}>
              <div
                style={{
                  background: 'var(--surface)', border: '1px solid var(--border)',
                  borderRadius: 12, padding: '1.75rem', transition: 'border-color .3s',
                  height: '100%',
                }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--border2)')}
                onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--border)')}
              >
                <p className="font-mono" style={{
                  fontSize: '.75rem', letterSpacing: '.12em',
                  color: 'var(--accent2)', marginBottom: '1.25rem', textTransform: 'uppercase',
                }}>
                  {group.label}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.5rem' }}>
                  {group.skills.map(skill => {
                    const isHot = group.hot.includes(skill)
                    return (
                      <span
                        key={skill}
                        style={{
                          padding: '.35rem .8rem', borderRadius: 6,
                          fontSize: '.8rem', fontFamily: 'Fira Code, monospace',
                          border: `1px solid ${isHot ? 'rgba(59,130,246,0.35)' : 'var(--border)'}`,
                          color: isHot ? '#93c5fd' : 'var(--text2)',
                          background: isHot ? 'rgba(59,130,246,0.05)' : 'var(--bg)',
                          transition: 'all .2s', cursor: 'default',
                        }}
                        onMouseEnter={e => {
                          e.currentTarget.style.borderColor = 'var(--accent)'
                          e.currentTarget.style.color = 'var(--accent)'
                          e.currentTarget.style.background = 'rgba(59,130,246,0.08)'
                        }}
                        onMouseLeave={e => {
                          e.currentTarget.style.borderColor = isHot ? 'rgba(59,130,246,0.35)' : 'var(--border)'
                          e.currentTarget.style.color = isHot ? '#93c5fd' : 'var(--text2)'
                          e.currentTarget.style.background = isHot ? 'rgba(59,130,246,0.05)' : 'var(--bg)'
                        }}
                      >
                        {skill}
                      </span>
                    )
                  })}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .skills-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}