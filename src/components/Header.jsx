import React from 'react'

const Header = () => {
  return (
    <header 
      className="header-blur"
      style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        width: '100%', 
        padding: '1.5rem 4vw', 
        zIndex: 9000,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: '1px solid rgba(255,255,255,0.05)'
      }}
    >
      <div 
        className="hover-target magnetic-wrap" 
        style={{ 
          fontFamily: 'var(--font-heading)', 
          fontSize: '1rem', 
          letterSpacing: '0.1em',
          display: 'flex',
          alignItems: 'center',
          gap: '1rem'
        }}
      >
        <div style={{ width: '12px', height: '12px', backgroundColor: 'var(--accent)', borderRadius: '50%' }} />
        <span className="magnetic">P.S. TEKNIK</span>
      </div>

      <nav>
        <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none' }}>
          <li>
            <a href="#" className="hover-target magnetic-wrap" style={{ textDecoration: 'none', color: 'var(--text-primary)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              <span className="magnetic">Work</span>
            </a>
          </li>
          <li>
            <a href="#" className="hover-target magnetic-wrap" style={{ textDecoration: 'none', color: 'var(--text-primary)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              <span className="magnetic">Studio</span>
            </a>
          </li>
          <li>
            <a href="#" className="hover-target magnetic-wrap" style={{ textDecoration: 'none', color: 'var(--text-primary)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              <span className="magnetic">Contact</span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
