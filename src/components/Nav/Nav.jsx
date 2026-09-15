import { Link } from 'react-router-dom';
import { useScrolled } from '../../hooks/useScrolled';
import './Nav.css';

export default function Nav() {
  const scrolled = useScrolled();

  return (
    <header className={`nav ${scrolled ? 'nav--solid' : ''}`}>
      <div className="wrap">
        <Link className="logo" to="/">
          100<span>YARD</span>
        </Link>
        <nav>
          <ul className="nav-links">
            <li>
              <Link to="/">Team Jerseys</Link>
            </li>
            <li>
              <Link to="/">Hoodies &amp; Fleece</Link>
            </li>
            <li>
              <Link to="/">Tees &amp; Tops</Link>
            </li>
            <li>
              <Link to="/">Pre-Orders</Link>
            </li>
            <li>
              <Link to="/">About Sourcing</Link>
            </li>
          </ul>
        </nav>
        <div className="nav-actions">
          <button className="icon-btn" aria-label="Search">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="7" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </button>
          <Link className="icon-btn" to="/admin" aria-label="Account">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="8" r="4" />
              <path d="M4 20c0-4 3.6-6 8-6s8 2 8 6" />
            </svg>
          </Link>
          <Link className="icon-btn" to="/checkout" aria-label="Cart, 2 items">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="9" cy="21" r="1.4" />
              <circle cx="18" cy="21" r="1.4" />
              <path d="M2.5 3h2.6l2.7 12.2a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.6L21 7H6" />
            </svg>
            <span className="badge">2</span>
          </Link>
          <Link to="/" className="btn btn-primary">
            Shop New Drops
          </Link>
        </div>
      </div>
    </header>
  );
}
