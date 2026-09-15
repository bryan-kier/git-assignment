import { useState } from 'react';
import { products, formatPHP, stockLabels } from '../../data/products';
import { statDeltas } from '../../data/analytics';
import RevenueChart from './RevenueChart';
import OrderStatusBreakdown from './OrderStatusBreakdown';
import TopProducts from './TopProducts';
import './Admin.css';

const stats = [
  { label: 'Revenue Today', value: formatPHP(18450), delta: statDeltas.revenueToday },
  { label: 'Orders Pending', value: '6', delta: statDeltas.ordersPending },
  {
    label: 'Low Stock Items',
    value: products.filter((p) => p.stock === 'low').length.toString(),
    delta: statDeltas.lowStockItems,
  },
  {
    label: 'Pre-Orders Open',
    value: products.filter((p) => p.stock === 'preorder').length.toString(),
    delta: statDeltas.preOrdersOpen,
  },
];

function StatDelta({ delta }) {
  if (!delta) return null;
  const arrow = delta.direction === 'up' ? '▲' : delta.direction === 'down' ? '▼' : '–';
  const tone = delta.good == null ? 'neutral' : delta.good ? 'good' : 'muted';
  const text = delta.direction === 'flat' ? delta.text : `${arrow} ${delta.text}`;
  return (
    <span className={`stat-delta stat-delta--${tone}`}>
      {text} <span className="stat-delta-context">vs {delta.comparedTo}</span>
    </span>
  );
}

export default function Admin() {
  const [tab, setTab] = useState('overview');

  return (
    <main className="wrap simple-page admin">
      <p className="eyebrow">Admin</p>
      <h1>Dashboard</h1>
      <p className="simple-note">
        Placeholder data — real numbers arrive once the Order and Product APIs (Phase 4) are wired up.
      </p>

      <div className="admin-tabs">
        <button type="button" className={tab === 'overview' ? 'is-active' : ''} onClick={() => setTab('overview')}>
          Overview
        </button>
        <button type="button" className={tab === 'inventory' ? 'is-active' : ''} onClick={() => setTab('inventory')}>
          Inventory
        </button>
      </div>

      {tab === 'overview' ? (
        <div className="admin-overview">
          <div className="admin-stats">
            {stats.map((stat) => (
              <div className="stat-card" key={stat.label}>
                <span className="stat-value">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
                <StatDelta delta={stat.delta} />
              </div>
            ))}
          </div>

          <div className="admin-charts-row">
            <RevenueChart />
            <OrderStatusBreakdown />
          </div>

          <TopProducts />
        </div>
      ) : (
        <div className="admin-table-wrap">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Category</th>
                <th>Price</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id}>
                  <td>{product.name}</td>
                  <td>{product.category}</td>
                  <td>{formatPHP(product.price)}</td>
                  <td>
                    <span className={`stock-pill stock-${product.stock}`}>{stockLabels[product.stock]}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </main>
  );
}
