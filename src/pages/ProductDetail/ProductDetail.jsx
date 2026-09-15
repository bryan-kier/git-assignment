import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import JerseyGraphic from '../../components/JerseyGraphic/JerseyGraphic';
import { products, formatPHP, stockLabels } from '../../data/products';
import './ProductDetail.css';

const SIZES = ['S', 'M', 'L', 'XL', 'XXL'];

export default function ProductDetail() {
  const { productId } = useParams();
  const product = products.find((item) => item.id === productId);
  const [size, setSize] = useState('M');

  if (!product) {
    return (
      <main className="wrap simple-page">
        <p className="eyebrow">Not Found</p>
        <h1>We couldn&apos;t find that kit.</h1>
        <p className="simple-note">It may have sold out permanently, or the link is off.</p>
        <Link to="/" className="btn btn-primary">
          Back to Homepage
        </Link>
      </main>
    );
  }

  return (
    <main className="wrap simple-page pdp">
      <p className="pdp-breadcrumb">
        <Link to="/">Home</Link> / {product.category} / {product.name}
      </p>
      <div className="pdp-grid">
        <div className="pdp-visual">
          <span className={`stock-pill stock-${product.stock}`}>{stockLabels[product.stock]}</span>
          {product.image ? (
            <img className="pdp-photo" src={product.image} alt={product.name} />
          ) : (
            <JerseyGraphic pattern={product.pattern} fillA={product.fillA} fillB={product.fillB} number={product.number} />
          )}
        </div>
        <div className="pdp-info">
          <span className="tag">{product.category}</span>
          <h1>{product.name}</h1>
          <p className="pdp-price">
            {formatPHP(product.price)} <small>PHP</small>
          </p>
          <p className="simple-note">
            Sourced from a vetted overseas seller. Fabric weight, print method, and exact shipping window vary by
            drop — full spec sheet lands here once the Product &amp; Catalog API (Phase 4) is wired up.
          </p>

          <div className="pdp-field">
            <span className="pdp-field-label">Size</span>
            <div className="size-row">
              {SIZES.map((option) => (
                <button
                  key={option}
                  type="button"
                  className={`size-btn ${size === option ? 'is-selected' : ''}`}
                  onClick={() => setSize(option)}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          <button type="button" className="btn btn-primary pdp-add">
            {product.stock === 'preorder' ? 'Pre-Order This Kit' : 'Add to Cart'}
          </button>

          <dl className="pdp-meta">
            <div>
              <dt>Availability</dt>
              <dd>{stockLabels[product.stock]}</dd>
            </div>
            <div>
              <dt>Ships from</dt>
              <dd>Overseas seller network</dd>
            </div>
            <div>
              <dt>Delivers to</dt>
              <dd>Philippines only</dd>
            </div>
          </dl>
        </div>
      </div>
    </main>
  );
}
