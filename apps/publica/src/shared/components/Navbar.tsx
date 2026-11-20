import { useState } from 'react'
import { Link } from 'react-router'

type NavbarProps = {
    theme:string,
    toggleTheme: ()=>void
}

export default function Navbar({ theme, toggleTheme }:NavbarProps){
  const [isOpen, setIsOpen] = useState(false)

  return(
    <nav className="navbar navbar-expand-md navbar-dark fixed-top py-1 bg-dark bg-gradient">
      <div className="container-fluid">
        <img src="/favicon.png" alt="logo" style={{ maxWidth: '70px' }}/>
        <Link className="navbar-brand ms-1" to='/'>Antorrg</Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-controls="navbarCollapse"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarCollapse">
          <ul className="navbar-nav me-auto mb-2 mb-md-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/acerca" onClick={() => setIsOpen(false)}>
                Acerca de
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/contacto" onClick={() => setIsOpen(false)}>
                Contacto
              </Link>
            </li>
          </ul>
          <div style={{ alignItems: 'center' }}>
            <button
              onClick={toggleTheme}
              className="btn btn-sm btn-outline-secondary me-3"
            >
              {theme === 'light' ? '🌙 ' : '☀️'}
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
