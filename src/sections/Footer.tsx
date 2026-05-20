const footerLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/Emmanuel00885566',
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com',
  },
  {
    label: 'Email',
    href: 'mailto:emmanuelniyi1997@gmail.com',
  },
]

export default function Footer() {
  return (
    <footer
      style={{
        padding: '2.5rem 0',
        borderTop: '1px solid var(--border)',
        background: 'var(--bg)',
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: '0 auto',
          padding: '0 2rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem',
        }}
      >
        <p
          className="font-mono"
          style={{
            fontSize: '.75rem',
            color: 'var(--text3)',
            letterSpacing: '.05em',
          }}
        >
          © 2025 Emmanuel.dev — Built with React &amp; ☕ from Lagos, Nigeria
        </p>

        <div
          style={{
            display: 'flex',
            gap: '1.5rem',
          }}
        >
          {footerLinks.map(link => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="font-mono"
              style={{
                fontSize: '.75rem',
                color: 'var(--text3)',
                textDecoration: 'none',
                letterSpacing: '.05em',
                transition: 'color .2s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.color = 'var(--accent)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.color = 'var(--text3)'
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}