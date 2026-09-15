// Mock analytics data for the admin dashboard. No backend yet — this stands
// in for the reporting endpoints the Order/Product APIs (Phase 4) will
// eventually provide.

export const revenueTrend = [
  { date: '2026-09-02', label: 'Sep 2', amount: 9200 },
  { date: '2026-09-03', label: 'Sep 3', amount: 11400 },
  { date: '2026-09-04', label: 'Sep 4', amount: 10100 },
  { date: '2026-09-05', label: 'Sep 5', amount: 13800 },
  { date: '2026-09-06', label: 'Sep 6', amount: 15200 },
  { date: '2026-09-07', label: 'Sep 7', amount: 21600 },
  { date: '2026-09-08', label: 'Sep 8', amount: 19800 },
  { date: '2026-09-09', label: 'Sep 9', amount: 10600 },
  { date: '2026-09-10', label: 'Sep 10', amount: 12300 },
  { date: '2026-09-11', label: 'Sep 11', amount: 14100 },
  { date: '2026-09-12', label: 'Sep 12', amount: 16700 },
  { date: '2026-09-13', label: 'Sep 13', amount: 23400 },
  { date: '2026-09-14', label: 'Sep 14', amount: 20100 },
  { date: '2026-09-15', label: 'Sep 15', amount: 18450 },
];

// Order lifecycle stages from Phase 5 (pending -> paid -> processing ->
// shipped -> delivered). "Pending" is the one an admin needs to act on, so
// it carries the accent — the rest are context, not identity to tell apart.
export const orderStatusBreakdown = [
  { status: 'Pending', count: 6, needsAction: true },
  { status: 'Paid', count: 4, needsAction: false },
  { status: 'Processing', count: 5, needsAction: false },
  { status: 'Shipped', count: 8, needsAction: false },
  { status: 'Delivered', count: 23, needsAction: false },
];

export const statDeltas = {
  revenueToday: { comparedTo: 'yesterday', direction: 'down', text: '8.2%', good: false },
  ordersPending: { comparedTo: 'yesterday', direction: 'down', text: '3', good: true },
  lowStockItems: { comparedTo: 'yesterday', direction: 'down', text: '1', good: true },
  preOrdersOpen: { comparedTo: 'yesterday', direction: 'flat', text: 'No change', good: null },
};
