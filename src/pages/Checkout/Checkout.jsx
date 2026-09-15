import { useState } from 'react';
import { Link } from 'react-router-dom';
import { formatPHP } from '../../data/products';
import './Checkout.css';

// Mock cart — stands in for the server-side cart (Phase 4 Order & Cart
// Service) until that exists.
const cartItems = [
  { id: 'continental-cup-home-kit', name: 'Continental Cup Home Kit', size: 'M', qty: 1, price: 3450 },
  { id: 'vintage-warmup-track-top', name: 'Vintage Warm-Up Track Top', size: 'L', qty: 1, price: 2600 },
];

const SHIPPING_FEE = 180;
const PAYMENT_METHODS = [
  { id: 'gcash', label: 'GCash' },
  { id: 'paypal', label: 'PayPal' },
  { id: 'cod', label: 'Cash on Delivery' },
];

export default function Checkout() {
  const [payment, setPayment] = useState('gcash');
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);
  const total = subtotal + SHIPPING_FEE;

  return (
    <main className="wrap simple-page checkout">
      <p className="eyebrow">Checkout</p>
      <h1>Review &amp; Pay</h1>
      <p className="simple-note">
        Static preview only — cart validation, live shipping quotes (EasyParcel), and payment intents come with the
        backend.
      </p>

      <div className="checkout-grid">
        <div className="checkout-main">
          <section className="checkout-block">
            <h2>Order Summary</h2>
            <ul className="cart-list">
              {cartItems.map((item) => (
                <li key={item.id} className="cart-row">
                  <div>
                    <strong>{item.name}</strong>
                    <span className="cart-meta">
                      Size {item.size} &middot; Qty {item.qty}
                    </span>
                  </div>
                  <span>{formatPHP(item.price * item.qty)}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="checkout-block">
            <h2>Shipping Address</h2>
            <div className="form-grid">
              <label className="field">
                <span>Full Name</span>
                <input type="text" name="fullName" placeholder="Juan Dela Cruz" />
              </label>
              <label className="field">
                <span>Mobile Number</span>
                <input type="tel" name="mobile" placeholder="09XX XXX XXXX" />
              </label>
              <label className="field field-wide">
                <span>Street Address</span>
                <input type="text" name="address" placeholder="Unit / Street / Barangay" />
              </label>
              <label className="field">
                <span>City / Municipality</span>
                <input type="text" name="city" placeholder="Quezon City" />
              </label>
              <label className="field">
                <span>Province</span>
                <input type="text" name="province" placeholder="Metro Manila" />
              </label>
            </div>
          </section>

          <section className="checkout-block">
            <h2>Payment Method</h2>
            <div className="payment-row">
              {PAYMENT_METHODS.map((method) => (
                <button
                  key={method.id}
                  type="button"
                  className={`payment-btn ${payment === method.id ? 'is-selected' : ''}`}
                  onClick={() => setPayment(method.id)}
                >
                  {method.label}
                </button>
              ))}
            </div>
          </section>
        </div>

        <aside className="checkout-totals">
          <h2>Total</h2>
          <div className="totals-row">
            <span>Subtotal</span>
            <span>{formatPHP(subtotal)}</span>
          </div>
          <div className="totals-row">
            <span>Shipping (estimate)</span>
            <span>{formatPHP(SHIPPING_FEE)}</span>
          </div>
          <div className="totals-row totals-final">
            <span>Total</span>
            <span>{formatPHP(total)}</span>
          </div>
          <button type="button" className="btn btn-primary checkout-submit">
            Place Order
          </button>
          <Link to="/" className="checkout-back">
            &larr; Continue shopping
          </Link>
        </aside>
      </div>
    </main>
  );
}
