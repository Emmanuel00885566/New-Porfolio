const projects = [
  {
    number: '01',
    featured: true,
    title: 'Full Stack E Commerce Application',
    description:
      'A complete e commerce platform built from frontend to backend. Features user authentication, product management, cart and checkout flow, with a responsive React UI and a robust Node.js/Express API handling all business logic.',
    stack: ['React', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB'],
    impact:
      '🛒 End to end platform — auth, products, cart & checkout fully implemented',
    metric: {
      value: '100%',
      label: 'full stack delivery',
    },
    link: 'https://github.com/Emmanuel00885566',
  },
  {
    number: '02',
    featured: false,
    title: 'Create Your Shop',
    description:
      'A backend focused shop management system with structured APIs for shop creation, order workflows, and inventory. Built with scalable architecture, centralized validation logic, and clean structured responses throughout.',
    stack: ['Node.js', 'Express', 'MongoDB'],
    impact:
      '⚡ Scalable backend architecture with full order workflow management',
    metric: null,
    link: 'https://github.com/Emmanuel00885566',
  },
  {
    number: '03',
    featured: false,
    title: 'Awake Emporium Fabric Store',
    description:
      'A responsive e commerce frontend for a fabric store. Features dynamic product rendering, reusable React components, cart functionality, and a clean UI focused on performance and smooth user experience.',
    stack: ['React', 'JavaScript', 'CSS'],
    impact:
      '🎨 Responsive UI with dynamic cart, reusable components & clean performance',
    metric: null,
    link: 'https://github.com/Emmanuel00885566',
  },
]

export default function Projects() {
  return (
    <section
      id="projects"
      style={{
        padding: '7rem 0',
        background: 'var(--bg2)',
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: '0 auto',
          padding: '0 2rem',
        }}
      >
        <p
          className="font-mono"
          style={{
            fontSize: '.75rem',
            letterSpacing: '.15em',
            color: 'var(--accent)',
            marginBottom: '.75rem',
          }}
        >
          // work
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
          Projects that ship.
        </h2>

        <div
          style={{
            width: 40,
            height: 2,
            background: 'var(--accent)',
            marginBottom: '3rem',
          }}
        />

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
          }}
        >
          {projects.map(project => (
            <div
              key={project.number}
              className="project-card"
              style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: 16,
                padding: '2rem',
                transition: 'all .3s',
                position: 'relative',
                overflow: 'hidden',
                display: project.featured ? 'grid' : 'block',
                gridTemplateColumns: project.featured
                  ? '1fr 1fr'
                  : undefined,
                gap: project.featured ? '2rem' : undefined,
                alignItems: project.featured ? 'center' : undefined,
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'var(--border2)'
                e.currentTarget.style.transform = 'translateY(-4px)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'var(--border)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              <div
                className="card-glow-line"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 1,
                  background:
                    'linear-gradient(90deg, transparent, var(--accent), transparent)',
                  opacity: 0,
                  transition: 'opacity .3s',
                }}
              />

              <div>
                <p
                  className="font-mono"
                  style={{
                    fontSize: '.75rem',
                    color: 'var(--text3)',
                    letterSpacing: '.1em',
                    marginBottom: '1rem',
                  }}
                >
                  {project.number}
                  {project.featured ? ' — FEATURED' : ''}
                </p>

                <h3
                  style={{
                    fontSize: '1.2rem',
                    fontWeight: 700,
                    letterSpacing: '-.03em',
                    marginBottom: '.75rem',
                  }}
                >
                  {project.title}
                </h3>

                <p
                  style={{
                    color: 'var(--text2)',
                    fontSize: '.88rem',
                    lineHeight: 1.75,
                    marginBottom: '1.25rem',
                  }}
                >
                  {project.description}
                </p>

                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '.4rem',
                    marginBottom: '1.25rem',
                  }}
                >
                  {project.stack.map(tech => (
                    <span
                      key={tech}
                      style={{
                        padding: '.25rem .6rem',
                        borderRadius: 4,
                        fontSize: '.72rem',
                        fontFamily: 'DM Mono, monospace',
                        background: 'rgba(59,130,246,0.08)',
                        border: '1px solid rgba(59,130,246,0.15)',
                        color: '#93c5fd',
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div
                  style={{
                    padding: '.75rem 1rem',
                    background: 'rgba(16,185,129,0.07)',
                    border: '1px solid rgba(16,185,129,0.15)',
                    borderRadius: 8,
                    fontSize: '.8rem',
                    fontFamily: 'DM Mono, monospace',
                    color: '#34d399',
                    marginBottom: '1.25rem',
                  }}
                >
                  {project.impact}
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '.4rem',
                    fontSize: '.82rem',
                    color: 'var(--accent)',
                    fontFamily: 'DM Mono, monospace',
                    textDecoration: 'none',
                    transition: 'gap .2s',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.gap = '.7rem'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.gap = '.4rem'
                  }}
                >
                  View on GitHub →
                </a>
              </div>

              {project.featured && project.metric && (
                <div
                  style={{
                    background: 'var(--bg)',
                    border: '1px solid var(--border)',
                    borderRadius: 12,
                    height: 180,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    gap: '.5rem',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background:
                        'radial-gradient(circle at 50% 50%, rgba(59,130,246,0.06), transparent 70%)',
                    }}
                  />

                  <div
                    style={{
                      fontSize: '3.5rem',
                      fontWeight: 800,
                      color: 'var(--accent)',
                      letterSpacing: '-.05em',
                      lineHeight: 1,
                      position: 'relative',
                      zIndex: 1,
                    }}
                  >
                    {project.metric.value}
                  </div>

                  <div
                    className="font-mono"
                    style={{
                      fontSize: '.7rem',
                      color: 'var(--text3)',
                      letterSpacing: '.1em',
                      position: 'relative',
                      zIndex: 1,
                    }}
                  >
                    {project.metric.label}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .project-card:hover .card-glow-line {
          opacity: 1 !important;
        }

        @media (max-width: 768px) {
          .project-card {
            display: block !important;
          }
        }
      `}</style>
    </section>
  )
}