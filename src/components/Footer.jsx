import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <img src="/logo.jpg" alt="Ezeobi & Partners" className="footer-logo-img" />
              <p className="footer-tagline">Exclusive Legal Practice</p>
              <p className="footer-desc">
                A distinguished Nigerian law firm committed to excellence in legal service,
                built on a foundation of trust, expertise, and unwavering ethical standards.
              </p>
            </div>
            <div className="footer-col">
              <h5>Quick Links</h5>
              <ul className="footer-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/practice">Practice Areas</Link></li>
                <li><Link to="/team">Our Team</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
              </ul>
            </div>
            <div className="footer-col">
              <h5>Practice Areas</h5>
              <ul className="footer-links">
                <li><Link to="/practice">General Practice</Link></li>
                <li><Link to="/practice">Business / Commercial Law</Link></li>
                <li><Link to="/practice">Energy &amp; Natural Resources</Link></li>
              </ul>
            </div>
            <div className="footer-col">
              <h5>Contact</h5>
              <ul className="footer-contact-list">
                <li><strong>Tel</strong> <a href="tel:+2348177744009">+234 (817) 774 4009</a></li>
                <li><strong>Email</strong> <a href="mailto:info@ezeobiandpartners.com">info@ezeobiandpartners.com</a></li>
                <li><strong>Abuja&nbsp;</strong>15, Sfax Street, Zone 4 Wuse</li>
                <li><strong>Lagos&nbsp;</strong>5 Simpson Street</li>
                <li><strong>London</strong>38 Barnet Lane, EN5 2DN</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>© {year} Ezeobi &amp; Partners. All Rights Reserved. | Exclusive Legal Practice</p>
          <p>Project developed by <a href="https://wa.me/2347068473984?text=i%20want%20o%20build%20a%20web%20project%20Francis,%20give%20me%20Quote" target="_blank" rel="noopener noreferrer"><strong>Fnets Technologies Ltd</strong></a>.</p>
          <p>
            Abuja · Lagos · London
          </p>
        </div>
      </div>
    </footer>
  )
}
