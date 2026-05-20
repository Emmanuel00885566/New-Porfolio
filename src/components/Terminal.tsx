import { useEffect, useState } from 'react'

const lines = [
  { type: 'cmd', text: 'Who Am I' },
  { type: 'output', text: 'Adeboye-Emmanuel  →  Full Stack Engineer' },
  { type: 'cmd', text: 'cat skills.txt' },
  { type: 'output', text: 'React · Node.js · Express · MongoDB · TypeScript' },
  { type: 'cmd', text: 'ls projects/' },
  { type: 'output', text: 'e-commerce-app/   create-your-shop/   awake-emporium/' },
  { type: 'cmd', text: 'echo $STATUS' },
  { type: 'output', text: '✔ Available for new opportunities' },
]

export default function Terminal() {
  const [visibleLines, setVisibleLines] = useState<typeof lines>([])
  const [currentChar, setCurrentChar] = useState(0)
  const [lineIndex, setLineIndex] = useState(0)
  const [phase, setPhase] = useState<'typing' | 'waiting' | 'done'>('typing')

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>

    // Done typing all lines
    if (lineIndex >= lines.length) {
      timeout = setTimeout(() => {
        setPhase('done')
      }, 0)

      return () => clearTimeout(timeout)
    }

    const line = lines[lineIndex]

    // Typing characters
    if (phase === 'typing') {
      if (currentChar < line.text.length) {
        const speed = line.type === 'cmd' ? 55 : 18

        timeout = setTimeout(() => {
          setCurrentChar(prev => prev + 1)
        }, speed)
      } else {
        timeout = setTimeout(() => {
          setPhase('waiting')
        }, 200)
      }
    }

    // Waiting before next line
    if (phase === 'waiting') {
      const pause = line.type === 'cmd' ? 400 : 120

      timeout = setTimeout(() => {
        setVisibleLines(prev => [
          ...prev,
          { ...line, text: line.text },
        ])

        setCurrentChar(0)
        setLineIndex(prev => prev + 1)
        setPhase('typing')
      }, pause)
    }

    return () => clearTimeout(timeout)
  }, [lineIndex, currentChar, phase])

  const currentLine = lineIndex < lines.length
    ? lines[lineIndex]
    : null

  const partialText = currentLine
    ? currentLine.text.slice(0, currentChar)
    : ''

  return (
    <div
      style={{
        background: '#0a0f1a',
        border: '1px solid var(--border2)',
        borderRadius: 12,
        overflow: 'hidden',
        fontFamily: 'Fira Code, monospace',
        fontSize: '.82rem',
        lineHeight: 1.7,
        boxShadow: '0 0 40px rgba(59,130,246,0.08)',
      }}
    >
      {/* Terminal top bar */}
      <div
        style={{
          padding: '.7rem 1rem',
          background: '#0d1320',
          borderBottom: '1px solid var(--border)',
          display: 'flex',
          alignItems: 'center',
          gap: '1.5rem',
        }}
      >
        <div style={{ display: 'flex', gap: '.45rem' }}>
          {['#ff5f57', '#febc2e', '#28c840'].map(color => (
            <div
              key={color}
              style={{
                width: 12,
                height: 12,
                borderRadius: '50%',
                background: color,
              }}
            />
          ))}
        </div>

        <span
          style={{
            fontFamily: 'Fira Code, monospace',
            fontSize: '.75rem',
            color: 'var(--text3)',
            letterSpacing: '.05em',
          }}
        >
          emmanuel@portfolio ~ bash
        </span>
      </div>

      {/* Terminal body */}
      <div style={{ padding: '1.25rem 1.5rem', minHeight: 260 }}>
        {visibleLines.map((line, i) => (
          <div key={i} style={{ marginBottom: '.2rem' }}>
            {line.type === 'cmd' ? (
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '.5rem',
                }}
              >
                <span style={{ color: 'var(--green)' }}>❯</span>

                <span style={{ color: 'var(--text)' }}>
                  {line.text}
                </span>
              </div>
            ) : (
              <div
                style={{
                  color: 'var(--text2)',
                  paddingLeft: '1.2rem',
                }}
              >
                {line.text}
              </div>
            )}
          </div>
        ))}

        {/* Currently typing line */}
        {currentLine && phase === 'typing' && (
          <div style={{ marginBottom: '.2rem' }}>
            {currentLine.type === 'cmd' ? (
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '.5rem',
                }}
              >
                <span style={{ color: 'var(--green)' }}>❯</span>

                <span style={{ color: 'var(--text)' }}>
                  {partialText}

                  <span
                    style={{
                      display: 'inline-block',
                      width: 8,
                      height: '1em',
                      background: 'var(--accent)',
                      marginLeft: 2,
                      verticalAlign: 'middle',
                      animation: 'tblink 1s step-end infinite',
                    }}
                  />
                </span>
              </div>
            ) : (
              <div
                style={{
                  color: 'var(--text2)',
                  paddingLeft: '1.2rem',
                }}
              >
                {partialText}

                <span
                  style={{
                    display: 'inline-block',
                    width: 8,
                    height: '1em',
                    background: 'var(--text3)',
                    marginLeft: 2,
                    verticalAlign: 'middle',
                    animation: 'tblink 1s step-end infinite',
                  }}
                />
              </div>
            )}
          </div>
        )}

        {/* Idle cursor when done */}
        {phase === 'done' && (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '.5rem',
            }}
          >
            <span style={{ color: 'var(--green)' }}>❯</span>

            <span
              style={{
                display: 'inline-block',
                width: 8,
                height: '1em',
                background: 'var(--accent)',
                verticalAlign: 'middle',
                animation: 'tblink 1s step-end infinite',
              }}
            />
          </div>
        )}
      </div>

      <style>{`
        @keyframes tblink {
          0%,100% { opacity:1 }
          50% { opacity:0 }
        }
      `}</style>
    </div>
  )
}