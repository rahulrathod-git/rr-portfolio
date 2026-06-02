'use client'

import { useState } from 'react'
import { Project } from '@/data/projects'
import VideoModal from '@/components/VideoModal'
import RelatedWorkModal from '@/components/RelatedWorkModal'

type Props = {
  project: Project
  index: number
  visible: boolean
}

export default function ProjectCard({ project, index, visible }: Props) {
  const [videoOpen, setVideoOpen] = useState(false)
  const [relatedOpen, setRelatedOpen] = useState(false)
  const [hovered, setHovered] = useState(false)
  const [hoveredBtn, setHoveredBtn] = useState<string | null>(null)

  return (
    <>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          padding: '1px',
          borderRadius: '16px',
          background: hovered ? 'var(--gradient)' : '#222',
          transition: 'background 0.3s ease, transform 0.3s ease, opacity 0.6s ease',
          transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
          opacity: visible ? 1 : 0,
          transitionDelay: `${index * 0.1}s`,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <div style={{
          background: '#191919',
          borderRadius: '15px',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
        }}>
          <div style={{
            width: '100%',
            height: '200px',
            background: '#222',
            overflow: 'hidden',
            position: 'relative',
          }}>
            <img
              src={project.image}
              alt={project.title}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transition: 'transform 0.4s ease',
                transform: hovered ? 'scale(1.02)' : 'scale(1)',
              }}
            />
          </div>

          <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flex: 1 }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '14px' }}>
              {project.tags.map((tag, i) => (
                <span key={i} style={{
                  padding: '4px 12px',
                  background: '#222',
                  borderRadius: '50px',
                  fontSize: '0.75rem',
                  color: '#a0a0a0',
                }}>
                  {tag}
                </span>
              ))}
            </div>

            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '10px' }}>
              {project.title}
            </h3>

            <p
              style={{ fontSize: '0.9rem', color: '#a0a0a0', lineHeight: 1.7, marginBottom: '24px', flex: 1 }}
              dangerouslySetInnerHTML={{ __html: project.brief }}
            />

            {project.note && (
              <p style={{ fontSize: '0.8rem', color: '#555', marginBottom: '16px', fontStyle: 'italic' }}>
                {project.note}
              </p>
            )}

            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              {project.video && (
                <button
                  onClick={() => setVideoOpen(true)}
                  style={{
                    padding: '10px 20px',
                    background: 'var(--gradient)',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '50px',
                    fontWeight: 600,
                    fontSize: '0.85rem',
                    cursor: 'pointer',
                    transition: 'opacity 0.3s, transform 0.3s',
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
                  Demo
                </button>
              )}

              {project.siteUrl && (
                <a
                  href={project.siteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    padding: '10px 20px',
                    background: 'var(--gradient)',
                    color: '#fff',
                    textDecoration: 'none',
                    borderRadius: '50px',
                    fontWeight: 600,
                    fontSize: '0.85rem',
                    transition: 'opacity 0.3s',
                  }}
                  onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
                  onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                >
                  Live Site
                </a>
              )}

              {project.repoUrl && (
                <div style={{
                  padding: '1px',
                  borderRadius: '50px',
                  background: hoveredBtn === 'repo' ? 'var(--gradient)' : '#333',
                  transition: 'background 0.3s',
                }}>
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseEnter={() => setHoveredBtn('repo')}
                    onMouseLeave={() => setHoveredBtn(null)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '9px 19px',
                      background: '#191919',
                      color: '#fff',
                      textDecoration: 'none',
                      borderRadius: '50px',
                      fontWeight: 600,
                      fontSize: '0.85rem',
                    }}
                  >
                    <svg height="16" width="16" viewBox="0 0 16 16" fill="currentColor">
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
                    </svg>
                    GitHub
                  </a>
                </div>
              )}

              {project.relatedWork && project.relatedWork.length > 0 && (
                <div style={{
                  padding: '1px',
                  borderRadius: '50px',
                  background: hoveredBtn === 'related' ? 'var(--gradient)' : '#333',
                  transition: 'background 0.3s',
                }}>
                  <button
                    onClick={() => setRelatedOpen(true)}
                    onMouseEnter={() => setHoveredBtn('related')}
                    onMouseLeave={() => setHoveredBtn(null)}
                    style={{
                      display: 'block',
                      padding: '9px 19px',
                      background: '#191919',
                      color: '#fff',
                      border: 'none',
                      borderRadius: '50px',
                      fontWeight: 600,
                      fontSize: '0.85rem',
                      cursor: 'pointer',
                    }}
                  >
                    Related Work
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {videoOpen && project.video && (
        <VideoModal video={project.video} title={project.title} onClose={() => setVideoOpen(false)} />
      )}
      {relatedOpen && project.relatedWork && (
        <RelatedWorkModal items={project.relatedWork} title={project.title} onClose={() => setRelatedOpen(false)} />
      )}
    </>
  )
}