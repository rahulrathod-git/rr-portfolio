'use client'

import { useEffect, useState } from 'react'

export default function Hero() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden',
      padding: '0 20px',
    }}>
      <div style={{
        position: 'absolute',
        inset: 0,
        zIndex: 0,
        overflow: 'hidden',
      }}>
        {[...Array(6)].map((_, i) => (
          <div key={i} style={{
            position: 'absolute',
            borderRadius: '50%',
            opacity: 0.06,
            background: 'var(--gradient)',
            width: `${150 + i * 80}px`,
            height: `${150 + i * 80}px`,
            top: `${10 + i * 12}%`,
            left: `${5 + i * 15}%`,
            animation: `float ${4 + i}s ease-in-out infinite`,
            animationDelay: `${i * 0.5}s`,
          }} />
        ))}
      </div>

      <div style={{
        textAlign: 'center',
        zIndex: 1,
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(30px)',
        transition: 'opacity 0.8s ease, transform 0.8s ease',
      }}>
        <p style={{
          fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
          color: '#a0a0a0',
          marginBottom: '16px',
          letterSpacing: '2px',
          textTransform: 'uppercase',
        }}>
          Hello, I&apos;m
        </p>

        <h1 style={{
          fontSize: 'clamp(2.5rem, 7vw, 6rem)',
          fontWeight: 800,
          lineHeight: 1.1,
          marginBottom: '16px',
          background: 'var(--gradient)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}>
          Rahul Rathod
        </h1>

        <h2 style={{
          fontSize: 'clamp(1rem, 3vw, 1.8rem)',
          fontWeight: 400,
          color: '#a0a0a0',
          marginBottom: '40px',
        }}>
          Creative Computing Graduate & Software Developer
        </h2>
        <a
          href="#projects"
          onClick={e => {
            e.preventDefault()
            document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
          }}
          style={{
            padding: '14px 32px',
            background: 'var(--gradient)',
            color: '#fff',
            textDecoration: 'none',
            borderRadius: '50px',
            fontWeight: 600,
            fontSize: '1rem',
            transition: 'opacity 0.3s, transform 0.3s',
            display: 'inline-block',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.transform = 'scale(1.05)'
            e.currentTarget.style.opacity = '0.9'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform = 'scale(1)'
            e.currentTarget.style.opacity = '1'
          }}
        >
          View My Projects
        </a>
      </div>
    </section>
  )
}