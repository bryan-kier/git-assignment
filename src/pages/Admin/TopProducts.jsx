import { Link } from 'react-router-dom';
import { products, formatPHP } from '../../data/products';
import './TopProducts.css';

const ranked = [...products]
  .map((p) => ({ ...p, revenue: p.price * p.unitsSold }))
  .sort((a, b) => b.revenue - a.revenue)
  .slice(0, 5);

const maxRevenue = ranked[0]?.revenue ?? 1;

export default function TopProducts() {
  return (
    <div className="top-products">
      <div className="chart-head">
        <div>
          <h3>Top Products, Last 14 Days</h3>
          <p>Ranked by revenue.</p>
        </div>
      </div>

      <ul className="top-list">
        {ranked.map((product, i) => (
          <li className="top-row" key={product.id}>
            <span className="top-rank">{i + 1}</span>
            <Link to={`/product/${product.id}`} className="top-name">
              {product.name}
            </Link>
            <span className="top-track">
              <span className="top-fill" style={{ width: `${(product.revenue / maxRevenue) * 100}%` }} />
            </span>
            <span className="top-value">{formatPHP(product.revenue)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
