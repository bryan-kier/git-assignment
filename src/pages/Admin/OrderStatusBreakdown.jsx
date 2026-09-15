import { orderStatusBreakdown } from '../../data/analytics';
import './OrderStatusBreakdown.css';

const maxCount = Math.max(...orderStatusBreakdown.map((s) => s.count));

export default function OrderStatusBreakdown() {
  const pending = orderStatusBreakdown.find((s) => s.needsAction);

  return (
    <div className="status-breakdown">
      <div className="chart-head">
        <div>
          <h3>Order Status</h3>
          <p>{pending ? `${pending.count} need attention` : 'All caught up'}</p>
        </div>
      </div>

      <ul className="status-list">
        {orderStatusBreakdown.map((row) => (
          <li className={`status-row ${row.needsAction ? 'is-emphasis' : ''}`} key={row.status}>
            <span className="status-name">{row.status}</span>
            <span className="status-track">
              <span className="status-fill" style={{ width: `${(row.count / maxCount) * 100}%` }} />
            </span>
            <span className="status-count">{row.count}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
