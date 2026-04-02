import React from 'react'

const Footer = () => {
  return (
    <footer 
      style={{ 
        position: 'sticky', 
        bottom: 0, 
        height: '60vh', 
        width: '100%', 
        backgroundColor: '#050505', 
        zIndex: 0,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }}
    >
      <div className="container" style={{ width: '100%' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <div>
            <h1 style={{ fontSize: 'clamp(3rem, 10vw, 12rem)', fontFamily: 'var(--font-super)', lineHeight: 0.8, margin: 0 }}>
              LET'S TALK
            </h1>
            <p style={{ marginTop: '2rem', color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '400px' }}>
              Headquarters: Jl. Lumbu Tengah 2F No. 126, Bekasi, Jawa Barat.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', textAlign: 'right' }}>
            <a href="#" className="hover-target" style={{ color: '#fff', textDecoration: 'none', fontSize: '1.5rem', fontFamily: 'var(--font-heading)' }}>WHATSAPP</a>
            <a href="#" className="hover-target" style={{ color: '#fff', textDecoration: 'none', fontSize: '1.5rem', fontFamily: 'var(--font-heading)' }}>EMAIL US</a>
            <a href="#" className="hover-target" style={{ color: '#fff', textDecoration: 'none', fontSize: '1.5rem', fontFamily: 'var(--font-heading)' }}>LINKEDIN</a>
          </div>
        </div>
        
        <div style={{ marginTop: '10vh', paddingTop: '2rem', borderTop: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
          <p>© 2026 PT. Pratama Sinarindo Teknik. All Rights Reserved.</p>
          <p>Designed with Antigravity</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
