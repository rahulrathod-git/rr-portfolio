'use client'

import { useEffect, useRef, useState } from 'react'

const contactLinks = [
  {
    label: 'Email',
    value: 'Rahul.Rathodd@outlook.com',
    href: 'mailto:Rahul.Rathodd@outlook.com',
  },
]

export default function Contact() {
  const [visible, setVisible] = useState(false)
  const [hoveredContact, setHoveredContact] = useState<number | null>(null)
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="contact" ref={ref} style={{ padding: '100px 0' }}>
      <div style={{
        width: '90%',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(40px)',
        transition: 'opacity 0.8s ease, transform 0.8s ease',
      }}>
        <div style={{ display: 'inline-block', marginBottom: '24px' }}>
          <h2 style={{
            fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
            fontWeight: 700,
            marginBottom: '1px',
          }}>
            Contact Me
          </h2>
          <div style={{
            height: '4px',
            background: 'var(--gradient)',
            borderRadius: '2px',
            width: '100%',
          }} />
        </div>

        <p style={{
          color: '#a0a0a0',
          fontSize: '1rem',
          lineHeight: 1.8,
          maxWidth: '600px',
          marginBottom: '50px',
        }}>
          I&apos;m currently open to work opportunities. Whether you have a role in mind,
          a project to collaborate on, or just want to connect, please feel free to reach out.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {contactLinks.map((link, i) => (
            <div
              key={i}
              onMouseEnter={() => setHoveredContact(i)}
              onMouseLeave={() => setHoveredContact(null)}
              style={{
                padding: '1px',
                borderRadius: '16px',
                background: hoveredContact === i ? 'var(--gradient)' : '#222',
                transition: 'background 0.3s ease, transform 0.3s ease',
                transform: hoveredContact === i ? 'translateY(-6px)' : 'translateY(0)',
                maxWidth: '500px',
              }}
            >
              <a
                href={link.href}
                target={link.label !== 'Email' ? '_blank' : undefined}
                rel={link.label !== 'Email' ? 'noopener noreferrer' : undefined}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '20px',
                  padding: '20px 24px',
                  background: '#191919',
                  borderRadius: '15px',
                  textDecoration: 'none',
                }}
              >
                <div>
                  <p style={{ fontSize: '0.75rem', color: '#a0a0a0', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                    {link.label}
                  </p>
                  <p style={{ fontSize: '0.95rem', color: '#fff', fontWeight: 500 }}>
                    {link.value}
                  </p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}