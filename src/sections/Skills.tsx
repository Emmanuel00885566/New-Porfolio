const skillGroups = [
  {
    label: '// Frontend',
    skills: ['React', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'HTML', 'CSS'],
    hot: ['React', 'TypeScript', 'Tailwind CSS'],
  },
  {
    label: '// Backend',
    skills: ['Node.js', 'Express.js', 'REST API', 'JWT Auth', 'WebSockets', 'Microservices'],
    hot: ['Node.js', 'Express.js'],
  },
  {
    label: '// Database',
    skills: ['MongoDB', 'SQL', 'PostgreSQL', 'Redis', 'Mongoose'],
    hot: ['MongoDB', 'SQL'],
  },
  {
    label: '// Tools & DevOps',
    skills: ['Git', 'Docker', 'CI/CD', 'AWS', 'Postman', 'Linux'],
    hot: ['Git', 'Docker'],
  },
]

export default function Skills() {
  return (
    <section
      id="skills"
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
          // tech stack
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
          Tools I build with.
        </h2>

        <p
          style={{
            maxWidth: 650,
            color: 'var(--text2)',
            lineHeight: 1.7,
            marginBottom: '2rem',
            fontSize: '.98rem',
          }}
        >
          I build scalable and modern web applications using powerful frontend,
          backend, database, and DevOps technologies focused on performance,
          clean architecture, and user experience.
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

        {/* Skills Grid */}
        <div className="skills-grid">
          {skillGroups.map((group, groupIndex) => (
            <div
              key={`${group.label}-${groupIndex}`}
              className="skill-card"
            >
              <p className="skill-label">
                {group.label}
              </p>

              <div className="skills-wrap">
                {group.skills.map((skill, skillIndex) => {
                  const isHot = group.hot.includes(skill)

                  return (
                    <span
                      key={`${skill}-${skillIndex}`}
                      className={`skill-badge ${isHot ? 'hot' : ''}`}
                    >
                      {skill}
                    </span>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 1.5rem;
        }

        .skill-card {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 16px;
          padding: 1.75rem;
          transition: all .3s ease;
          position: relative;
          overflow: hidden;
        }

        .skill-card:hover {
          border-color: var(--border2);
          transform: translateY(-4px);
        }

        .skill-card::before {
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

        .skill-card:hover::before {
          opacity: 1;
        }

        .skill-label {
          font-size: .75rem;
          letter-spacing: .12em;
          color: var(--accent2);
          margin-bottom: 1.25rem;
          text-transform: uppercase;
          font-family: monospace;
        }

        .skills-wrap {
          display: flex;
          flex-wrap: wrap;
          gap: .6rem;
        }

        .skill-badge {
          padding: .45rem .85rem;
          border-radius: 8px;
          font-size: .8rem;
          font-family: 'DM Mono', monospace;
          border: 1px solid var(--border);
          color: var(--text2);
          background: var(--bg);
          transition: all .25s ease;
          cursor: pointer;
          user-select: none;
        }

        .skill-badge:hover {
          border-color: var(--accent);
          color: var(--accent);
          background: rgba(59,130,246,0.08);
          transform: translateY(-2px);
        }

        .skill-badge.hot {
          border-color: rgba(59,130,246,0.35);
          color: var(--accent3, #93c5fd);
          background: rgba(59,130,246,0.05);
        }

        .skill-badge.hot:hover {
          border-color: var(--accent);
          color: var(--accent);
          background: rgba(59,130,246,0.12);
        }

        @media (max-width: 768px) {
          #skills {
            padding: 5rem 0;
          }
        }
      `}</style>
    </section>
  )
}