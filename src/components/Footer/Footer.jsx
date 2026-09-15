import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-grid">
          <div className="foot-brand">
            <Link className="logo" to="/">
              100<span>YARD</span>
            </Link>
            <p>NFL apparel, sourced overseas and delivered across the Philippines — so you don't have to be the one importing it.</p>
          </div>
          <div className="foot-col">
            <h4>Shop</h4>
            <ul>
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
            </ul>
          </div>
          <div className="foot-col">
            <h4>Help</h4>
            <ul>
              <li>
                <Link to="/checkout">Shipping &amp; Delivery</Link>
              </li>
              <li>
                <Link to="/checkout">Track My Order</Link>
              </li>
              <li>
                <a href="#top">Returns</a>
              </li>
              <li>
                <a href="#top">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="foot-col">
            <h4>Company</h4>
            <ul>
              <li>
                <a href="#trust">Our Sourcing Process</a>
              </li>
              <li>
                <a href="#top">About</a>
              </li>
              <li>
                <a href="#top">Careers</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="foot-bottom">
          <span>&copy; {new Date().getFullYear()} 100-Yard Apparel. Shipping within the Philippines only.</span>
        </div>
      </div>
    </footer>
  );
}
