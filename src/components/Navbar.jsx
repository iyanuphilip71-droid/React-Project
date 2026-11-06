import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/menu', label: 'Menu' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar({ cartCount }) {
  // State for the mobile navigation menu (open / closed)
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <Link to="/" className="logo" onClick={closeMenu}>
          <span className="logo-mark">🍽️</span>
          <span>
            Foodie<span className="logo-accent">Hub</span>
          </span>
        </Link>

        <button
          type="button"
          className="nav-toggle"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? '✕' : '☰'}
        </button>

        <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
              onClick={closeMenu}
            >
              {link.label}
            </NavLink>
          ))}
          <NavLink
            to="/cart"
            className={({ isActive }) => (isActive ? 'cart-link active' : 'cart-link')}
            onClick={closeMenu}
          >
            🛒 Cart <span className="cart-badge">{cartCount}</span>
          </NavLink>
        </nav>
      </div>
    </header>
  )
}
