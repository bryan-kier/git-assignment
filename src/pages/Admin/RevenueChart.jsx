import { useMemo, useRef, useState } from 'react';
import { revenueTrend } from '../../data/analytics';
import { formatPHP } from '../../data/products';
import './RevenueChart.css';

const WIDTH = 720;
const HEIGHT = 240;
const PAD = { top: 20, right: 16, bottom: 28, left: 52 };
const PLOT_W = WIDTH - PAD.left - PAD.right;
const PLOT_H = HEIGHT - PAD.top - PAD.bottom;

function niceMax(value) {
  const step = 5000;
  return Math.ceil(value / step) * step;
}

export default function RevenueChart() {
  const [activeIndex, setActiveIndex] = useState(null);
  const svgRef = useRef(null);

  const { points, yMax } = useMemo(() => {
    const max = niceMax(Math.max(...revenueTrend.map((d) => d.amount)));
    const xForFn = (i) => PAD.left + (i / (revenueTrend.length - 1)) * PLOT_W;
    const yForFn = (v) => PAD.top + PLOT_H - (v / max) * PLOT_H;
    return {
      points: revenueTrend.map((d, i) => ({ ...d, x: xForFn(i), y: yForFn(d.amount) })),
      yMax: max,
    };
  }, []);

  const linePath = points.map((p, i) => `${i === 0 ? 'M' : 'L'}${p.x},${p.y}`).join(' ');
  const areaPath = `${linePath} L${points[points.length - 1].x},${PAD.top + PLOT_H} L${points[0].x},${PAD.top + PLOT_H} Z`;

  const gridSteps = [0, 0.5, 1];
  const labeledIndices = new Set([0, Math.round((points.length - 1) / 2), points.length - 1]);

  function updateFromClientX(clientX) {
    const svg = svgRef.current;
    if (!svg) return;
    const rect = svg.getBoundingClientRect();
    const scale = WIDTH / rect.width;
    const svgX = (clientX - rect.left) * scale;
    const ratio = (svgX - PAD.left) / PLOT_W;
    const index = Math.round(ratio * (points.length - 1));
    setActiveIndex(Math.min(points.length - 1, Math.max(0, index)));
  }

  function onKeyDown(e) {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      setActiveIndex((i) => Math.max(0, (i ?? points.length - 1) - 1));
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      setActiveIndex((i) => Math.min(points.length - 1, (i ?? -1) + 1));
    } else if (e.key === 'Escape') {
      setActiveIndex(null);
    }
  }

  const active = activeIndex != null ? points[activeIndex] : null;
  const last = points[points.length - 1];

  return (
    <div className="revenue-chart">
      <div className="chart-head">
        <div>
          <h3>Revenue, Last 14 Days</h3>
          <p>Daily gross revenue across all channels.</p>
        </div>
        <div className="chart-head-value">
          <strong>{formatPHP(last.amount)}</strong>
          <span>Today</span>
        </div>
      </div>

      <div className="chart-svg-wrap">
        <svg
          ref={svgRef}
          className="chart-svg"
          viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
          role="img"
          aria-label={`Revenue trend from ${points[0].label} to ${last.label}, ending at ${formatPHP(last.amount)}`}
          tabIndex={0}
          onKeyDown={onKeyDown}
          onPointerMove={(e) => updateFromClientX(e.clientX)}
          onPointerLeave={() => setActiveIndex(null)}
        >
          {gridSteps.map((step) => {
            const y = PAD.top + PLOT_H - step * PLOT_H;
            return (
              <g key={step}>
                <line x1={PAD.left} x2={WIDTH - PAD.right} y1={y} y2={y} className="chart-grid" />
                <text x={PAD.left - 10} y={y} className="chart-axis-label" textAnchor="end" dominantBaseline="middle">
                  {step === 0 ? '0' : `${Math.round((yMax * step) / 1000)}K`}
                </text>
              </g>
            );
          })}

          <path d={areaPath} className="chart-area" />
          <path d={linePath} className="chart-line" />

          {points.map(
            (p, i) =>
              labeledIndices.has(i) && (
                <text key={p.date} x={p.x} y={HEIGHT - 6} className="chart-axis-label" textAnchor="middle">
                  {p.label}
                </text>
              )
          )}

          <circle cx={last.x} cy={last.y} r="5" className="chart-end-dot" />

          {active && (
            <>
              <line x1={active.x} x2={active.x} y1={PAD.top} y2={PAD.top + PLOT_H} className="chart-crosshair" />
              <circle cx={active.x} cy={active.y} r="5" className="chart-active-dot" />
            </>
          )}
        </svg>

        {active && (
          <div
            className="chart-tooltip"
            style={{
              left: `${(active.x / WIDTH) * 100}%`,
              top: `${(active.y / HEIGHT) * 100}%`,
            }}
          >
            <strong>{formatPHP(active.amount)}</strong>
            <span>{active.label}</span>
          </div>
        )}
      </div>

      <table className="visually-hidden">
        <caption>Daily revenue, last 14 days</caption>
        <thead>
          <tr>
            <th scope="col">Date</th>
            <th scope="col">Revenue</th>
          </tr>
        </thead>
        <tbody>
          {revenueTrend.map((d) => (
            <tr key={d.date}>
              <td>{d.label}</td>
              <td>{formatPHP(d.amount)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
