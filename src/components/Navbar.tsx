import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'About', href: '#about', number: '01' },
  { label: 'Skills', href: '#skills', number: '02' },
  { label: 'Projects', href: '#projects', number: '03' },
  { label: 'Experience', href: '#experience', number: '04' },
  { label: 'Contact', href: '#contact', number: '05' },
]

const socials = [
  { label: 'GitHub', href: 'https://github.com/Emmanuel00885566' },
  { label: 'LinkedIn', href: 'https://linkedin.com' },
  { label: 'Email', href: 'mailto:emmanuelniyi1997@gmail.com' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [progress, setProgress] = useState(0)
  const [active, setActive] = useState('about')

  const navRef = useRef<HTMLDivElement | null>(null)
  const linkRefs = useRef<Record<string, HTMLButtonElement | null>>({})

  const sections = ['about', 'skills', 'projects', 'experience', 'contact']

  /* ================= SCROLL ================= */
  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight

      setScrolled(scrollTop > 20)
      setProgress(docHeight > 0 ? scrollTop / docHeight : 0)

      /* Scroll spy */
      let current = 'about'
      for (const id of sections) {
        const el = document.getElementById(id)
        if (!el) continue
        const offset = el.offsetTop - 120
        if (scrollTop >= offset) current = id
      }
      setActive(current)
    }

    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* ================= BODY LOCK ================= */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  /* ================= NAV CLICK ================= */
  const handleNavClick = (href: string) => {
    setMenuOpen(false)

    setTimeout(() => {
      const id = href.replace('#', '')
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }, 500)
  }

  /* ================= MAGNETIC ================= */
  const handleMagnet = (e: React.MouseEvent<HTMLButtonElement>) => {
    const el = e.currentTarget
    const rect = el.getBoundingClientRect()

    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2

    el.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`
  }

  const resetMagnet = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.transform = 'translate(0px, 0px)'
  }

  return (
    <>
      {/* Scroll progress */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          height: 2,
          width: `${progress * 100}%`,
          background: 'var(--accent)',
          zIndex: 999,
        }}
      />

      {/* NAVBAR */}
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 200,
          padding: '1.2rem 2.5rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',

          background: scrolled
            ? 'rgba(8,12,18,0.55)'
            : 'transparent',

          backdropFilter: scrolled ? 'blur(22px)' : 'none',
          borderBottom: scrolled
            ? '1px solid rgba(255,255,255,0.08)'
            : '1px solid transparent',

          transition: 'all 0.35s ease',
        }}
      >
        {/* Logo */}
        <a
          href="#"
          onClick={() => setMenuOpen(false)}
          style={{
            fontSize: '1.2rem',
            fontWeight: 800,
            textDecoration: 'none',
            color: 'var(--text)',
          }}
        >
          E<span style={{ color: 'var(--accent)' }}>-</span>Made
        </a>

        {/* MENU BUTTON */}
        <button
          onMouseMove={handleMagnet}
          onMouseLeave={resetMagnet}
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.6rem',
            padding: '0.55rem 1rem',
            borderRadius: 12,
            border: '1px solid var(--border)',
            background: 'rgba(255,255,255,0.02)',
            cursor: 'pointer',
            transition: 'transform 0.2s ease',
          }}
        >
          <div style={{ width: 18 }}>
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0 }}
              style={{ display: 'block', height: 2, background: 'var(--text)' }}
            />
            <motion.span
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              style={{ display: 'block', height: 2, margin: '4px 0', background: 'var(--text)' }}
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0 }}
              style={{ display: 'block', height: 2, background: 'var(--text)' }}
            />
          </div>

          <span style={{ fontSize: 12, color: 'var(--text2)' }}>
            {menuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </nav>

      {/* OVERLAY MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45 }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 150,
              background: 'rgba(8,12,18,0.9)',
              backdropFilter: 'blur(28px)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              padding: '2rem',
            }}
          >
            <div style={{ maxWidth: 900, margin: '0 auto' }}>
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.label}
                  initial={{ opacity: 0, x: -25 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                  onClick={() => handleNavClick(link.href)}
                  style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    padding: '1rem 0',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    borderBottom: '1px solid rgba(255,255,255,0.08)',
                  }}
                >
                  <span style={{ color: 'var(--text3)' }}>{link.number}</span>
                  <span
                    style={{
                      fontSize: '2rem',
                      fontWeight: 800,
                      color:
                        active === link.href.replace('#', '')
                          ? 'var(--accent)'
                          : 'var(--text)',
                      transition: 'color 0.3s',
                    }}
                  >
                    {link.label}
                  </span>
                  <span>→</span>
                </motion.button>
              ))}
            </div>

            {/* bottom bar */}
            <div
              style={{
                position: 'absolute',
                bottom: 30,
                left: 30,
                right: 30,
                display: 'flex',
                justifyContent: 'space-between',
                fontSize: 12,
                color: 'var(--text3)',
              }}
            >
              <span>Full Stack Engineer — Lagos</span>

              <div style={{ display: 'flex', gap: 18 }}>
                {socials.map(s => (
                  <a
                    key={s.label}
                    href={s.href}
                    style={{
                      color: 'inherit',
                      textDecoration: 'none',
                    }}
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}