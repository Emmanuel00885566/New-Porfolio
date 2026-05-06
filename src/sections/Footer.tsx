const footerLinks = [
  { label: 'GitHub', href: 'https://github.com' },
  { label: 'LinkedIn', href: 'https://linkedin.com' },
  { label: 'Twitter', href: 'https://twitter.com' },
]

export default function Footer() {
  return (
    <footer
      style={{
        padding: '2.8rem 0',
        borderTop: '1px solid var(--border)',
        background: 'var(--bg)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >

      {/* Subtle glow */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(180deg, rgba(59,130,246,0.03), transparent)',
          pointerEvents: 'none',
        }}
      />

      <div className="footer-container">

        {/* Left */}
        <div>
          <p className="footer-text font-mono">
            © 2026 dev.works — built with Node.js &amp; ☕
          </p>

          <p className="footer-subtext">
            Backend focused full stack engineer building scalable digital
            experiences.
          </p>
        </div>

        {/* Right */}
        <div className="footer-links">
          {footerLinks.map((link, index) => (
            <a
              key={`${link.label}-${index}`}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="footer-link font-mono"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      <style>{`
        .footer-container {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 2rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1.5rem;
          position: relative;
          z-index: 1;
        }

        .footer-text {
          font-size: .78rem;
          color: var(--text3);
          letter-spacing: .05em;
          margin-bottom: .35rem;
        }

        .footer-subtext {
          font-size: .88rem;
          color: var(--text2);
          line-height: 1.6;
        }

        .footer-links {
          display: flex;
          align-items: center;
          gap: 1.4rem;
          flex-wrap: wrap;
        }

        .footer-link {
          font-size: .78rem;
          color: var(--text3);
          text-decoration: none;
          letter-spacing: .05em;
          transition: all .25s ease;
          position: relative;
        }

        .footer-link::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -4px;
          width: 0;
          height: 1px;
          background: var(--accent);
          transition: width .25s ease;
        }

        .footer-link:hover {
          color: var(--accent);
        }

        .footer-link:hover::after {
          width: 100%;
        }

        @media (max-width: 768px) {
          .footer-container {
            flex-direction: column;
            align-items: flex-start;
          }

          .footer-links {
            gap: 1rem;
          }
        }
      `}</style>
    </footer>
  )
}