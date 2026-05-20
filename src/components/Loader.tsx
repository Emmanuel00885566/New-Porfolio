import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Props {
  onDone: () => void
}

export default function Loader({ onDone }: Props) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Progress bar fills over 2.2 seconds
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(onDone, 300)
          return 100
        }
        return prev + 1.5
      })
    }, 33)
    return () => clearInterval(interval)
  }, [onDone])

  return (
    <AnimatePresence>
      <motion.div
        key="loader"
        initial={{ y: 0 }}
        exit={{ y: '-100%' }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        style={{
          position: 'fixed', inset: 0, zIndex: 9999,
          background: 'var(--bg)',
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center', gap: '2rem',
        }}
      >
        {/* Gear */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
          style={{ position: 'relative' }}
        >
          <svg
            width="80" height="80"
            viewBox="0 0 80 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M40 26a14 14 0 1 0 0 28 14 14 0 0 0 0-28zm0 22a8 8 0 1 1 0-16 8 8 0 0 1 0 16z"
              fill="#3b82f6"
            />
            <path
              d="M68.3 43.6l-4.1-.7a25 25 0 0 0-1.5-3.6l2.4-3.4a2 2 0 0 0-.2-2.6l-4.2-4.2a2 2 0 0 0-2.6-.2l-3.4 2.4a25 25 0 0 0-3.6-1.5l-.7-4.1A2 2 0 0 0 48.4 24h-5.9a2 2 0 0 0-2 1.7l-.7 4.1a25 25 0 0 0-3.6 1.5l-3.4-2.4a2 2 0 0 0-2.6.2l-4.2 4.2a2 2 0 0 0-.2 2.6l2.4 3.4a25 25 0 0 0-1.5 3.6l-4.1.7a2 2 0 0 0-1.6 2v5.9a2 2 0 0 0 1.6 2l4.1.7a25 25 0 0 0 1.5 3.6l-2.4 3.4a2 2 0 0 0 .2 2.6l4.2 4.2a2 2 0 0 0 2.6.2l3.4-2.4a25 25 0 0 0 3.6 1.5l.7 4.1a2 2 0 0 0 2 1.6h5.9a2 2 0 0 0 2-1.6l.7-4.1a25 25 0 0 0 3.6-1.5l3.4 2.4a2 2 0 0 0 2.6-.2l4.2-4.2a2 2 0 0 0 .2-2.6l-2.4-3.4a25 25 0 0 0 1.5-3.6l4.1-.7a2 2 0 0 0 1.6-2v-5.9a2 2 0 0 0-1.6-2z"
              fill="#1e2d42"
              stroke="#3b82f6"
              strokeWidth="1"
            />
          </svg>

          {/* Inner glow */}
          <div style={{
            position: 'absolute', inset: -10,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)',
            pointerEvents: 'none',
          }} />
        </motion.div>

        {/* Name */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          style={{ textAlign: 'center' }}
        >
          <div style={{
            fontFamily: 'Plus Jakarta Sans, sans-serif',
            fontSize: '1.4rem', fontWeight: 800,
            letterSpacing: '-.03em', color: 'var(--text)',
          }}>
            Emmanuel<span style={{ color: 'var(--accent)' }}>.</span>dev
          </div>
          <div style={{
            fontFamily: 'Fira Code, monospace',
            fontSize: '.75rem', color: 'var(--text3)',
            letterSpacing: '.1em', marginTop: '.4rem',
          }}>
            initializing portfolio...
          </div>
        </motion.div>

        {/* Progress bar */}
        <div style={{
          width: 200, height: 2,
          background: 'var(--border)',
          borderRadius: 10, overflow: 'hidden',
        }}>
          <motion.div
            style={{
              height: '100%',
              background: 'var(--accent)',
              borderRadius: 10,
              width: `${progress}%`,
              boxShadow: '0 0 8px rgba(59,130,246,0.6)',
            }}
          />
        </div>

        {/* Percentage */}
        <div style={{
          fontFamily: 'Fira Code, monospace',
          fontSize: '.72rem', color: 'var(--text3)',
          letterSpacing: '.1em',
          marginTop: '-1.2rem',
        }}>
          {Math.min(Math.round(progress), 100)}%
        </div>

      </motion.div>
    </AnimatePresence>
  )
}