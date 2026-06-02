'use client'

import { useEffect, useState } from 'react'

export default function Preloader() {
  const [progress, setProgress] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => setVisible(false), 500)
          return 100
        }
        return prev + 5
      })
    }, 50)

    return () => clearInterval(interval)
  }, [])

  if (!visible) return null

  return (
    <div
      style={{
        position: 'fixed',
        top: 0, left: 0,
        width: '100%', height: '100%',
        background: '#0a0a0a',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 9999,
        opacity: progress >= 100 ? 0 : 1,
        transition: 'opacity 0.5s ease',
      }}
    >
      <div style={{ textAlign: 'center' }}>
        <div style={{
          fontSize: 'clamp(2rem, 3vw, 3.5rem)',
          fontWeight: 700,
          background: 'var(--gradient)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          marginBottom: '20px',
        }}>
          RR
        </div>
        <div style={{
          width: 'clamp(200px, 20vw, 350px)',
          height: '4px',
          background: '#191919',
          borderRadius: '3px',
          overflow: 'hidden',
        }}>
          <div style={{
            height: '100%',
            width: `${progress}%`,
            background: 'var(--gradient)',
            transition: 'width 0.05s linear',
          }} />
        </div>
      </div>
    </div>
  )
}