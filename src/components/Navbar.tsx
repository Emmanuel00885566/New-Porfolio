import { useState, useEffect } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'

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

  const { scrollYProgress } = useScroll()
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const handleNavClick = (href: string) => {
    setMenuOpen(false)

    setTimeout(() => {
      const id = href.replace('#', '')
      const el = document.getElementById(id)

      if (el) {
        el.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        })
      }
    }, 550)
  }

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: 2,
          background: 'var(--accent)',
          transformOrigin: '0%',
          scaleX,
          zIndex: 300,
        }}
      />

      {/* NAVBAR */}
      <motion.nav
        animate={{
          backdropFilter: scrolled ? 'blur(18px)' : 'blur(0px)',
          backgroundColor: scrolled
            ? 'rgba(8,12,18,0.75)'
            : 'transparent',
        }}
        transition={{ duration: 0.3 }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 200,
          padding: '1.2rem 2.2rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottom: scrolled
            ? '1px solid var(--border)'
            : '1px solid transparent',
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
            letterSpacing: '-0.03em',
          }}
        >
          E<span style={{ color: 'var(--accent)' }}>-</span>Made
        </a>

        {/* Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '.6rem',
            padding: '.55rem 1rem',
            borderRadius: 10,
            border: '1px solid var(--border)',
            background: 'transparent',
            cursor: 'pointer',
          }}
        >
          <div style={{ width: 18 }}>
            <motion.span
              animate={
                menuOpen
                  ? { rotate: 45, y: 6 }
                  : { rotate: 0, y: 0 }
              }
              style={{
                display: 'block',
                height: 2,
                background: 'var(--text)',
                marginBottom: 4,
              }}
            />
            <motion.span
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              style={{
                display: 'block',
                height: 2,
                background: 'var(--text)',
                marginBottom: 4,
              }}
            />
            <motion.span
              animate={
                menuOpen
                  ? { rotate: -45, y: -6 }
                  : { rotate: 0, y: 0 }
              }
              style={{
                display: 'block',
                height: 2,
                background: 'var(--text)',
              }}
            />
          </div>

          <span style={{ fontSize: 12, fontFamily: 'monospace' }}>
            {menuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </motion.nav>

      {/* FULL SCREEN MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
            animate={{ opacity: 1, clipPath: 'inset(0 0 0% 0)' }}
            exit={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.6 }}
            style={{
              position: 'fixed',
              inset: 0,
              background: '#080c12',
              zIndex: 150,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              padding: '2rem',
            }}
          >
            <div
              style={{
                maxWidth: 900,
                width: '100%',
                margin: '0 auto',
              }}
            >
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ delay: i * 0.08 }}
                  style={{
                    width: '100%',
                    textAlign: 'left',
                    background: 'none',
                    border: 'none',
                    color: 'var(--text)',
                    padding: '1rem 0',
                    fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
                    fontWeight: 700,
                    cursor: 'pointer',
                    borderBottom: '1px solid var(--border)',
                  }}
                >
                  <span style={{ marginRight: 12, color: 'var(--text3)' }}>
                    {link.number}
                  </span>
                  {link.label}
                </motion.button>
              ))}
            </div>

            {/* Socials */}
            <div
              style={{
                position: 'absolute',
                bottom: 30,
                left: 30,
                display: 'flex',
                gap: 20,
                flexWrap: 'wrap',
              }}
            >
              {socials.map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    fontSize: 12,
                    color: 'var(--text3)',
                    textDecoration: 'none',
                    fontFamily: 'monospace',
                  }}
                >
                  {s.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}