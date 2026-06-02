'use client'

import { useEffect, useState } from 'react'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeLink, setActiveLink] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      const sections = document.querySelectorAll('section')
      sections.forEach(section => {
        const top = section.offsetTop - 100
        const bottom = top + section.offsetHeight
        if (window.scrollY >= top && window.scrollY < bottom) {
          setActiveLink(`#${section.id}`)
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const section = document.querySelector(href)
    if (section) {
      window.scrollTo({ top: (section as HTMLElement).offsetTop - 15, behavior: 'smooth' })
    }
    setActiveLink(href)
    setMobileOpen(false)
  }

  return (
    <>
      <nav style={{
        position: 'fixed',
        top: 0, left: 0,
        width: '100%',
        padding: scrolled ? '15px 0' : '20px 0',
        zIndex: 1000,
        background: scrolled ? 'rgba(10, 10, 10, 0.9)' : 'rgba(10, 10, 10, 1)',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        boxShadow: scrolled ? '0 5px 15px rgba(0,0,0,0.3)' : 'none',
        transition: 'all 0.3s ease',
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '90%',
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 20px',
        }}>
          <span style={{
            fontWeight: 700,
            fontSize: '24px',
            background: 'var(--gradient)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            RR
          </span>

          <div style={{ display: 'flex', gap: '30px' }} className="desktop-nav">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={e => handleNavClick(e, link.href)}
                style={{
                  color: '#fff',
                  textDecoration: 'none',
                  fontWeight: 500,
                  fontSize: '1rem',
                  position: 'relative',
                  paddingBottom: '4px',
                }}
                className={`nav-link ${activeLink === link.href ? 'nav-link-active' : ''}`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <button
            onClick={() => setMobileOpen(prev => !prev)}
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              color: '#fff',
              fontSize: '24px',
              cursor: 'pointer',
            }}
            className="mobile-toggle"
          >
            {mobileOpen ? '✕' : '☰'}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div style={{
          position: 'fixed',
          top: 0, right: 0,
          height: '100vh',
          width: '250px',
          background: '#0a0a0a',
          zIndex: 999,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '30px',
        }}>
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={e => handleNavClick(e, link.href)}
              style={{
                color: '#fff',
                textDecoration: 'none',
                fontWeight: 500,
                fontSize: '1.2rem',
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}

      <style>{`
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -1px;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--gradient);
          transition: width 0.3s;
        }
        .nav-link:hover::after,
        .nav-link-active::after {
          width: 100%;
        }
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}</style>
    </>
  )
}