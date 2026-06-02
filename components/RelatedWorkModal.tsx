'use client'

import { useEffect } from 'react'
import { RelatedWorkItem } from '@/data/projects'

type Props = {
  items: RelatedWorkItem[]
  title: string
  onClose: () => void
}

export default function RelatedWorkModal({ items, title, onClose }: Props) {
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
          maxWidth: '500px',
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
          <h3 style={{ fontSize: '1rem', fontWeight: 600 }}>{title} - Related Work</h3>
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

        <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {items.map((item, i) => (
            <div
              key={i}
              style={{
                padding: '1px',
                borderRadius: '12px',
                background: '#333',
                transition: 'background 0.3s ease',
              }}
              onMouseEnter={e => e.currentTarget.style.background = 'var(--gradient)'}
              onMouseLeave={e => e.currentTarget.style.background = '#333'}
            >
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '16px 20px',
                  background: '#222',
                  borderRadius: '11px',
                  textDecoration: 'none',
                  color: '#fff',
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  transition: 'background 0.3s',
                }}
                onMouseEnter={e => e.currentTarget.style.background = '#252525'}
                onMouseLeave={e => e.currentTarget.style.background = '#222'}
              >
                {item.label}
                <span style={{ color: '#a0a0a0', fontSize: '0.7rem', fontWeight: 400 }}>PDF</span>
              </a>
            </div>
          ))}
          
          {/* Hint text */}
          <p style={{ 
            textAlign: 'center', 
            color: '#666', 
            fontSize: '0.7rem', 
            marginTop: '8px',
            fontStyle: 'italic' 
          }}>
            Please click to view (opens in new tab)
          </p>
        </div>
      </div>
    </div>
  )
}