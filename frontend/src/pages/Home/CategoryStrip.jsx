import Reveal from '../../components/Reveal/Reveal';
import { categories } from '../../data/products';
import './CategoryStrip.css';

export default function CategoryStrip() {
  return (
    <section className="categories section-pad" id="categories">
      <div className="wrap">
        <Reveal as="div" className="section-head">
          <h2>Shop by Category</h2>
          <p>Three lanes, one source &mdash; club football, basketball, and the streetwear that lives outside both.</p>
        </Reveal>
        <div className="cat-grid">
          {categories.map((cat) => (
            <Reveal as="article" className="cat-card" key={cat.id}>
              <span className="cat-mark">{cat.number}</span>
              <h3>{cat.name}</h3>
              <p>{cat.description}</p>
              <a className="cat-link" href="#drops">
                Browse {cat.name}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
