const projects = [
  {
    number: '01',
    featured: true,
    title: 'API Gateway & Auth Service',
    description:
      'A production grade authentication and authorization microservice built with Node.js and Express. Supports JWT, OAuth 2.0, rate limiting, and role based access control for multi tenant SaaS applications.',
    stack: ['Node.js', 'Express', 'MongoDB', 'JWT', 'Redis', 'Docker'],
    impact: '↑ Reduced auth latency by 68% vs previous solution',
    metric: { value: '68%', label: 'latency reduction' },
  },
  {
    number: '02',
    featured: false,
    title: 'Real time Analytics Dashboard',
    description:
      'Full stack analytics platform with WebSocket powered live data streaming, SQL aggregations, and a React frontend. Handles 10k+ events per minute without breaking a sweat.',
    stack: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'WebSockets'],
    impact: '⚡ 10,000+ events/min processed in real time',
    metric: null,
  },
  {
    number: '03',
    featured: false,
    title: 'E Commerce Backend API',
    description:
      'RESTful API for a multi vendor marketplace with product catalog, cart, payments, order lifecycle, and inventory management. Built for horizontal scaling from day one.',
    stack: ['Node.js', 'MongoDB', 'Express', 'Stripe', 'AWS S3'],
    impact: '🛒 Supports 500+ concurrent users with 99.9% uptime',
    metric: null,
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

        <p
          style={{
            maxWidth: 700,
            color: 'var(--text2)',
            lineHeight: 1.7,
            marginBottom: '2rem',
            fontSize: '.98rem',
          }}
        >
          A collection of backend focused and full stack applications built with
          scalability, performance, security, and clean architecture in mind.
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

        {/* Project Cards */}
        <div className="projects-list">
          {projects.map((project, index) => (
            <div
              key={`${project.number}-${index}`}
              className={`project-card ${project.featured ? 'featured' : ''}`}
            >

              {/* Glow line */}
              <div className="card-glow-line" />

              {/* Left content */}
              <div>
                <p className="project-meta">
                  {project.number}
                  {project.featured ? ' — FEATURED PROJECT' : ''}
                </p>

                <h3 className="project-title">
                  {project.title}
                </h3>

                <p className="project-description">
                  {project.description}
                </p>

                {/* Stack */}
                <div className="project-stack">
                  {project.stack.map((tech, techIndex) => (
                    <span
                      key={`${tech}-${techIndex}`}
                      className="stack-badge"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Impact */}
                <div className="impact-box">
                  {project.impact}
                </div>
              </div>

              {/* Metric */}
              {project.featured && project.metric && (
                <div className="metric-card">
                  <div className="metric-glow" />

                  <div className="metric-value">
                    {project.metric.value}
                  </div>

                  <div className="metric-label font-mono">
                    {project.metric.label}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .projects-list {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .project-card {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 20px;
          padding: 2rem;
          transition: all .35s ease;
          position: relative;
          overflow: hidden;
        }

        .project-card.featured {
          display: grid;
          grid-template-columns: 1fr 340px;
          gap: 2rem;
          align-items: center;
        }

        .project-card:hover {
          border-color: var(--border2);
          transform: translateY(-5px);
        }

        .project-card::before {
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

        .project-card:hover::before {
          opacity: 1;
        }

        .card-glow-line {
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
          opacity: 0;
          transition: opacity .3s ease;
        }

        .project-card:hover .card-glow-line {
          opacity: 1;
        }

        .project-meta {
          font-size: .75rem;
          color: var(--text3);
          letter-spacing: .1em;
          margin-bottom: 1rem;
          font-family: monospace;
        }

        .project-title {
          font-size: 1.35rem;
          font-weight: 700;
          letter-spacing: -.03em;
          margin-bottom: .85rem;
          line-height: 1.2;
        }

        .project-description {
          color: var(--text2);
          font-size: .92rem;
          line-height: 1.8;
          margin-bottom: 1.4rem;
        }

        .project-stack {
          display: flex;
          flex-wrap: wrap;
          gap: .5rem;
          margin-bottom: 1.4rem;
        }

        .stack-badge {
          padding: .35rem .75rem;
          border-radius: 8px;
          font-size: .72rem;
          font-family: 'DM Mono', monospace;
          background: rgba(59,130,246,0.08);
          border: 1px solid rgba(59,130,246,0.15);
          color: #93c5fd;
          transition: all .25s ease;
          cursor: pointer;
        }

        .stack-badge:hover {
          transform: translateY(-2px);
          border-color: var(--accent);
          color: var(--accent);
          background: rgba(59,130,246,0.12);
        }

        .impact-box {
          padding: .9rem 1rem;
          background: rgba(16,185,129,0.07);
          border: 1px solid rgba(16,185,129,0.15);
          border-radius: 10px;
          font-size: .8rem;
          font-family: 'DM Mono', monospace;
          color: #34d399;
          line-height: 1.6;
        }

        .metric-card {
          background: var(--bg);
          border: 1px solid var(--border);
          border-radius: 18px;
          min-height: 220px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          gap: .5rem;
          position: relative;
          overflow: hidden;
        }

        .metric-glow {
          position: absolute;
          inset: 0;
          background: radial-gradient(
            circle at 50% 50%,
            rgba(59,130,246,0.08),
            transparent 70%
          );
        }

        .metric-value {
          font-size: clamp(3rem, 7vw, 4.5rem);
          font-weight: 800;
          color: var(--accent);
          letter-spacing: -.06em;
          line-height: 1;
          position: relative;
          z-index: 1;
        }

        .metric-label {
          font-size: .72rem;
          color: var(--text3);
          letter-spacing: .12em;
          position: relative;
          z-index: 1;
          text-transform: uppercase;
        }

        @media (max-width: 900px) {
          .project-card.featured {
            grid-template-columns: 1fr;
          }

          .metric-card {
            min-height: 180px;
          }
        }

        @media (max-width: 768px) {
          #projects {
            padding: 5rem 0;
          }

          .project-card {
            padding: 1.5rem;
          }

          .project-title {
            font-size: 1.15rem;
          }
        }
      `}</style>
    </section>
  )
}