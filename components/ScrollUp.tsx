'use client'

import { useEffect, useState } from 'react'

export default function ScrollUp() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      style={{
        position: 'fixed',
        bottom: '30px',
        right: '30px',
        width: '45px',
        height: '45px',
        borderRadius: '50%',
        background: 'var(--gradient)',
        border: 'none',
        color: '#fff',
        fontSize: '20px',
        cursor: 'pointer',
        zIndex: 999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(20px)',
        transition: 'opacity 0.3s ease, transform 0.3s ease',
        pointerEvents: visible ? 'auto' : 'none',
      }}
      onMouseEnter={e => {
        if (visible) e.currentTarget.style.transform = 'translateY(-3px)'
      }}
      onMouseLeave={e => {
        if (visible) e.currentTarget.style.transform = 'translateY(0)'
      }}
    >
      ↑
    </button>
  )
}