'use client'

import { useEffect, useState } from 'react'

type Props = {
  video: string
  title: string
  onClose: () => void
}

export default function VideoModal({ video, title, onClose }: Props) {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const handleKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handleKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKey)
    }
  }, [onClose])

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(0, 0, 0, 0.9)',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
      }}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{
          width: '100%',
          maxWidth: '640px',
          background: '#191919',
          borderRadius: '16px',
          overflow: 'hidden',
          border: '1px solid #333',
        }}
      >
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '16px 24px',
          borderBottom: '1px solid #222',
        }}>
          <h3 style={{ fontSize: '1rem', fontWeight: 600 }}>{title} - Demo</h3>
          <button
            onClick={onClose}
            style={{
              background: 'none',
              border: 'none',
              color: '#a0a0a0',
              fontSize: '20px',
              cursor: 'pointer',
              lineHeight: 1,
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.color = '#fff'}
            onMouseLeave={e => e.currentTarget.style.color = '#a0a0a0'}
          >
            ✕
          </button>
        </div>

        <div style={{ position: 'relative', background: '#000' }}>
          {!loaded && (
            <div style={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: '#000',
              minHeight: '100px',
            }}>
              <div style={{ position: 'relative', width: '44px', height: '44px' }}>
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  borderRadius: '50%',
                  border: '3px solid #222',
                }} />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  borderRadius: '50%',
                  border: '3px solid transparent',
                  borderTop: '3px solid #0062E3',
                  borderRight: '3px solid #D10000',
                  animation: 'spin 0.8s linear infinite',
                }} />
              </div>
            </div>
          )}
          <video
            src={video}
            controls
            autoPlay
            preload="auto"
            onCanPlay={() => setLoaded(true)}
            style={{
              width: '100%',
              display: 'block',
              maxHeight: '70vh',
              background: '#000',
              opacity: loaded ? 1 : 0,
              transition: 'opacity 0.3s ease',
            }}
          />
        </div>
      </div>

      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  )
}