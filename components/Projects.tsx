'use client'

import { useEffect, useRef, useState } from 'react'
import { projects } from '@/data/projects'
import ProjectCard from '@/components/ProjectCard'

export default function Projects() {
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" ref={ref} style={{ padding: '100px 0' }}>
      <div style={{
        width: '90%',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px',
      }}>
        <div style={{
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
              My Projects
            </h2>
            <div style={{
              height: '4px',
              background: 'var(--gradient)',
              borderRadius: '2px',
              width: '100%',
            }} />
          </div>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '30px',
        }}>
          {projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              visible={visible}
            />
          ))}
        </div>
      </div>
    </section>
  )
}