import { useState, useEffect } from 'react'

const navLinks = ['About', 'Skills', 'Projects', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: '1.25rem 0',
        background: scrolled ? 'rgba(8,12,18,0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled
          ? '1px solid var(--border)'
          : '1px solid transparent',
        transition: 'all 0.3s ease',
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
        }}
      >
        {/* Logo */}
        <a
          href="#"
          style={{
            fontSize: '1.1rem',
            fontWeight: 700,
            color: 'var(--text)',
            textDecoration: 'none',
            letterSpacing: '-.02em',
          }}
        >
          dev<span style={{ color: 'var(--accent)' }}>.</span>works
        </a>

        {/* Desktop links */}
        <ul
          className="hidden-mobile"
          style={{
            display: 'flex',
            gap: '2rem',
            listStyle: 'none',
          }}
        >
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="font-mono"
                style={{
                  color: 'var(--text2)',
                  textDecoration: 'none',
                  fontSize: '.85rem',
                  letterSpacing: '.05em',
                  transition: 'color .2s',
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = 'var(--accent2)')
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = 'var(--text2)')
                }
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <a
          href="#contact"
          className="font-mono hidden-mobile"
          style={{
            padding: '.5rem 1.25rem',
            border: '1px solid var(--accent)',
            borderRadius: 6,
            color: 'var(--accent)',
            fontSize: '.8rem',
            textDecoration: 'none',
            letterSpacing: '.05em',
            transition: 'all .2s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'var(--accent)'
            e.currentTarget.style.color = '#fff'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'transparent'
            e.currentTarget.style.color = 'var(--accent)'
          }}
        >
          hire me
        </a>

        {/* Mobile burger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="show-mobile"
          aria-label="Toggle menu"
          style={{
            background: 'none',
            border: 'none',
            color: 'var(--text)',
            fontSize: '1.5rem',
            cursor: 'pointer',
          }}
        >
          <span>{menuOpen ? 'X' : '\u2630'}</span>
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div
          style={{
            padding: '1rem 2rem',
            background: 'rgba(8,12,18,0.97)',
            borderTop: '1px solid var(--border)',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="font-mono"
              style={{
                color: 'var(--text2)',
                textDecoration: 'none',
                fontSize: '.9rem',
              }}
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}