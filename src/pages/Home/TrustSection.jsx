import Reveal from '../../components/Reveal/Reveal';
import './TrustSection.css';

const points = [
  {
    num: '01',
    title: 'No Overseas Guesswork',
    body: "We deal directly with vetted sellers, so you're not the one gambling on a stranger's listing.",
  },
  {
    num: '02',
    title: 'Real Stock, Real Status',
    body: 'Every item shows honest availability — in stock, low stock, or pre-order — before you pay.',
  },
  {
    num: '03',
    title: 'PH-Wide Delivery',
    body: 'Shipped through our local courier partners straight to your door, no customs forms to chase.',
  },
  {
    num: '04',
    title: 'Restock Alerts',
    body: "Follow an item that's sold out and we'll notify you the moment it's back in the queue.",
  },
];

export default function TrustSection() {
  return (
    <section className="trust section-pad" id="trust">
      <div className="wrap">
        <Reveal as="div" className="section-head">
          <h2>Why Buy Through 100-Yard Apparel</h2>
          <p>
            Importing solo means bidding blind on eBay and hoping customs behaves. Here&apos;s what changes when we do
            it for you.
          </p>
        </Reveal>
        <div className="trust-grid">
          {points.map((point) => (
            <Reveal as="div" className="trust-item" key={point.num}>
              <span className="num">{point.num}</span>
              <h3>{point.title}</h3>
              <p>{point.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
