'use client'

import { useEffect, useRef, useState } from 'react'

const skills = [
  'TypeScript', 'JavaScript', 'React', 'Next.js',
  'Figma', 'HTML', 'CSS', 'React Native', 'Python', 'C#',
  'Unity', 'Supabase', 'MySQL', 'Git',
]

export default function About() {
  const [visible, setVisible] = useState(false)
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null)
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
    <section id="about" ref={ref} style={{ padding: '100px 0' }}>
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
            About Me
          </h2>
          <div style={{
            height: '4px',
            background: 'var(--gradient)',
            borderRadius: '2px',
            width: '100%',
          }} />
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '60px',
          alignItems: 'start',
        }}>
          <div>
            <p style={{ color: '#a0a0a0', lineHeight: 1.8, marginBottom: '20px', fontSize: '1rem' }}>
              I&apos;m a hard-working Creative Computing graduate from the University of Leicester with a strong interest
              in building impactful applications. I enjoy combining my creative and technical
              skills to create experiences that are functional, visually engaging and user-friendly.
            </p>
            <p style={{ color: '#a0a0a0', lineHeight: 1.8, marginBottom: '20px', fontSize: '1rem' }}>
              I&apos;ve had the opportunity to work across a variety of creative projects. From building an interactive game
              for the National Space Centre, to designing the front-end of a mobile app during my internship and
              deploying a full-stack web platform as part of my final-year university project.
            </p>
            <p style={{ color: '#a0a0a0', lineHeight: 1.8, fontSize: '1rem' }}>
              I&apos;m currently seeking work opportunities where I can continue to grow as a designer/developer,
              and contribute to meaningful projects.
            </p>
          </div>

          <div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '24px' }}>
              Technologies I work with:
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
              {skills.map((skill, i) => (
                <div
                  key={i}
                  style={{
                    padding: '1px',
                    borderRadius: '50px',
                    background: hoveredSkill === i ? 'var(--gradient)' : '#333',
                    transition: 'background 0.3s',
                    cursor: 'default',
                  }}
                  onMouseEnter={() => setHoveredSkill(i)}
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  <span style={{
                    display: 'block',
                    padding: '7px 17px',
                    background: '#0a0a0a',
                    borderRadius: '50px',
                    fontSize: '0.85rem',
                    color: hoveredSkill === i ? '#fff' : '#a0a0a0',
                    transition: 'color 0.3s',
                  }}>
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}