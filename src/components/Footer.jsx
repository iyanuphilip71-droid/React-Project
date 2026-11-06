import { Link } from 'react-router-dom'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <h3 className="footer-logo">
            🍽️ Foodie<span className="logo-accent">Hub</span>
          </h3>
          <p className="footer-text">
            Delicious meals from the best local kitchens, delivered fresh to your door.
          </p>
        </div>

        <div>
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/cart">Cart</Link></li>
          </ul>
        </div>

        <div>
          <h4>Contact (sample details)</h4>
          <ul className="footer-links">
            <li>📧 philipiyanu71@gmail.com</li>
            <li>📞 +234 800 000 0000</li>
            <li>📍 12 Sunshine Garden Estate, Ondo</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {year} FoodieHub. A student project: no real orders are processed.</p>
      </div>
    </footer>
  )
}
