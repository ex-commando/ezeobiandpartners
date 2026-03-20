import { useState, useEffect } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import './Navbar.css'

const navItems = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/practice', label: 'Practice Areas' },
  { path: '/team', label: 'Our Team' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => { setMenuOpen(false) }, [location])

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <header className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <div className="navbar-inner">
          <Link to="/" className="nav-logo-wrap">
            <img src="/logo.jpg" alt="Ezeobi & Partners" className="nav-logo" />
          </Link>

          <nav className="nav-links">
            {navItems.map(item => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === '/'}
                className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
              >
                {item.label}
              </NavLink>
            ))}
            <Link to="/contact" className="nav-link nav-link-cta">Contact Us</Link>
          </nav>

          <button
            className={`hamburger${menuOpen ? ' open' : ''}`}
            onClick={() => setMenuOpen(v => !v)}
            aria-label="Toggle navigation"
          >
            <span /><span /><span />
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        <img src="/logo.jpg" alt="Ezeobi & Partners" className="mobile-menu-logo" />
        <nav className="mobile-nav">
          {navItems.map(item => (
            <Link key={item.path} to={item.path} className="mobile-link"
              onClick={() => setMenuOpen(false)}>
              {item.label}
            </Link>
          ))}
          <Link to="/contact" className="mobile-link mobile-link-cta"
            onClick={() => setMenuOpen(false)}>
            Contact Us
          </Link>
        </nav>
        <div className="mobile-contact">
          <p>+234 (817) 774 4009</p>
          <p>info@ezeobiandpartners.com</p>
        </div>
      </div>
      <div
        className={`overlay${menuOpen ? ' open' : ''}`}
        onClick={() => setMenuOpen(false)}
      />
    </>
  )
}
