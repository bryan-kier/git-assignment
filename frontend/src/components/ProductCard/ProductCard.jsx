import { Link } from 'react-router-dom';
import JerseyGraphic from '../JerseyGraphic/JerseyGraphic';
import { formatPHP, stockLabels } from '../../data/products';
import './ProductCard.css';

export default function ProductCard({ product }) {
  return (
    <article className="drop-card">
      <Link to={`/product/${product.id}`} className="drop-visual">
        <span className={`stock-pill stock-${product.stock}`}>{stockLabels[product.stock]}</span>
        <JerseyGraphic pattern={product.pattern} fillA={product.fillA} fillB={product.fillB} number={product.number} />
      </Link>
      <div className="drop-info">
        <span className="tag">{product.category}</span>
        <h3>
          <Link to={`/product/${product.id}`}>{product.name}</Link>
        </h3>
        <div className="price-row">
          <span className="price">
            {formatPHP(product.price)} <small>PHP</small>
          </span>
          <button className="add-btn" aria-label={`Add ${product.name} to cart`}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M12 5v14M5 12h14" />
            </svg>
          </button>
        </div>
      </div>
    </article>
  );
}
