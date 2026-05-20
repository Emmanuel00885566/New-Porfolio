import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Terminal from '../components/Terminal'

const headlines = [
  'Scalable Web Apps.',
  'Secure REST APIs.',
  'Full Stack Solutions.',
  'Clean Architecture.',
]

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const current = headlines[currentIndex]
    let timeout: ReturnType<typeof setTimeout>
    if (!isDeleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60)
    } else if (!isDeleting && displayed.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1800)
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35)
    } else {
      timeout = setTimeout(() => {
      setIsDeleting(false)
      setCurrentIndex((prev) => (prev + 1) % headlines.length)
    }, 200)
    }
    return () => clearTimeout(timeout)
  }, [displayed, isDeleting, currentIndex])

  return (
    <section id="hero" style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center',
      position: 'relative', overflow: 'hidden', padding: '6rem 0 4rem',
    }}>

      {/* Grid background */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)',
        backgroundSize: '60px 60px', opacity: 0.25,
        maskImage: 'radial-gradient(ellipse 80% 60% at 50% 50%, black 40%, transparent 100%)',
        WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 50%, black 40%, transparent 100%)',
      }} />

      {/* Blue glow */}
      <div style={{
        position: 'absolute', top: '-10%', left: '30%',
        width: 600, height: 600,
        background: 'radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 2rem',
        position: 'relative', zIndex: 2, width: '100%' }}>

        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr',
          gap: '4rem', alignItems: 'center',
        }} className="hero-grid">

          {/* Left side */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '.5rem',
                padding: '.4rem .9rem',
                background: 'rgba(59,130,246,0.1)',
                border: '1px solid rgba(59,130,246,0.25)',
                borderRadius: 100, marginBottom: '1.75rem',
              }}
            >
              <span style={{
                width: 7, height: 7, borderRadius: '50%',
                background: 'var(--green)', boxShadow: '0 0 6px var(--green)',
                animation: 'pulse 2s infinite',
              }} />
              <span className="font-mono" style={{ fontSize: '.78rem', color: 'var(--accent2)', letterSpacing: '.04em' }}>
                Available for new projects
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              style={{
                fontSize: 'clamp(2.4rem, 5vw, 4rem)', fontWeight: 800,
                lineHeight: 1.08, letterSpacing: '-.04em', marginBottom: '.4rem',
              }}
            >
              Hi, I'm Emmanuel.
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{
                fontSize: 'clamp(1.6rem, 3.5vw, 2.8rem)', fontWeight: 700,
                lineHeight: 1.1, letterSpacing: '-.03em', marginBottom: '1.5rem',
                color: 'var(--text2)',
              }}
            >
              I Build{' '}
              <span style={{ color: 'var(--accent)', whiteSpace: 'nowrap' }}>
                {displayed}
                <span style={{
                  display: 'inline-block', width: 3, height: '0.85em',
                  background: 'var(--accent)', marginLeft: 3,
                  animation: 'blink 1s step-end infinite',
                  verticalAlign: 'middle',
                }} />
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              style={{
                fontSize: '1rem', color: 'var(--text2)',
                maxWidth: 460, lineHeight: 1.85,
                marginBottom: '2.5rem', fontWeight: 400,
              }}
            >
              Full Stack Engineer based in <strong style={{ color: 'var(--text)' }}>Lagos, Nigeria</strong>.
              I build complete web applications — from pixel-perfect UIs to
              production-grade APIs — and ship them.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}
            >
              <a href="#projects" style={{
                padding: '.85rem 2rem', background: 'var(--accent)',
                color: '#fff', borderRadius: 8, textDecoration: 'none',
                fontWeight: 600, fontSize: '.95rem', transition: 'all .2s',
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'var(--accent2)'
                  e.currentTarget.style.transform = 'translateY(-2px)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'var(--accent)'
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
              >
                View Projects
              </a>
              <a href="#contact" style={{
                padding: '.85rem 2rem', background: 'transparent',
                color: 'var(--text)', border: '1px solid var(--border2)',
                borderRadius: 8, textDecoration: 'none',
                fontWeight: 500, fontSize: '.95rem', transition: 'all .2s',
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'var(--accent)'
                  e.currentTarget.style.color = 'var(--accent)'
                  e.currentTarget.style.transform = 'translateY(-2px)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'var(--border2)'
                  e.currentTarget.style.color = 'var(--text)'
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
              >
                Let's Talk →
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              style={{
                display: 'flex', gap: '2.5rem', marginTop: '3.5rem',
                paddingTop: '2.5rem', borderTop: '1px solid var(--border)',
                flexWrap: 'wrap',
              }}
            >
              {[
                { num: '4+', label: 'Years experience' },
                { num: '3+', label: 'Projects shipped' },
                { num: '100%', label: 'End-to-end' },
              ].map(({ num, label }) => (
                <div key={label}>
                  <div style={{ fontSize: '1.9rem', fontWeight: 800, letterSpacing: '-.04em' }}>
                    {num.replace(/[+%]/, '')}
                    <span style={{ color: 'var(--accent)' }}>{num.match(/[+%]/)?.[0]}</span>
                  </div>
                  <div className="font-mono" style={{
                    fontSize: '.75rem', color: 'var(--text3)',
                    letterSpacing: '.06em', marginTop: '.2rem',
                  }}>
                    {label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right side — Terminal */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Terminal />
          </motion.div>

        </div>
      </div>

      <style>{`
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:.3} }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        .hidden-mobile { display: flex !important; }
        .show-mobile { display: none !important; }
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hidden-mobile { display: none !important; }
          .show-mobile { display: block !important; }
        }
      `}</style>
    </section>
  )
}