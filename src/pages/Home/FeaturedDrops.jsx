import Reveal from '../../components/Reveal/Reveal';
import ProductCard from '../../components/ProductCard/ProductCard';
import { products } from '../../data/products';
import './FeaturedDrops.css';

export default function FeaturedDrops() {
  return (
    <section className="drops section-pad" id="drops">
      <div className="wrap">
        <Reveal as="div" className="section-head">
          <h2>Featured Drops</h2>
          <p>Fresh imports and restocks, updated as our overseas sellers confirm stock.</p>
        </Reveal>
        <div className="drop-grid">
          {products.map((product) => (
            <Reveal as="div" key={product.id}>
              <ProductCard product={product} />
            </Reveal>
          ))}
        </div>
        <Reveal as="div" className="drops-foot">
          <a href="#drops" className="btn btn-ghost">
            View All Drops
          </a>
        </Reveal>
      </div>
    </section>
  );
}
