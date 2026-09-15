import JerseyGraphic from '../../components/JerseyGraphic/JerseyGraphic';
import { useParallax } from '../../hooks/useParallax';
import { HERO_IMAGE } from '../../data/media';
import heroBg from '../../assets/hero-bg.svg';
import './Hero.css';

export default function Hero() {
  const jersey1Ref = useParallax(0.12);
  const jersey2Ref = useParallax(0.22);
  const badgeRef = useParallax(0.06);

  return (
    <section className="hero">
      <div className="hero-bg" aria-hidden="true" style={{ backgroundImage: `url(${heroBg})` }} />
      <div className="hero-ghost" aria-hidden="true">
        KITROOM
      </div>
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <span className="eyebrow">New Imports Weekly &mdash; PH Wide Shipping</span>
          <h1 className="hero-title">
            THE KITS
            <br />
            YOUR CITY
            <br />
            <span className="accent-line">DOESN&apos;T STOCK.</span>
          </h1>
          <p className="hero-sub">
            We source football kits, basketball jerseys, and streetwear straight from overseas sellers &mdash; so you
            don&apos;t have to bid on a stranger&apos;s auction or gamble on customs yourself.
          </p>
          <div className="hero-cta">
            <a href="#drops" className="btn btn-primary">
              Shop New Drops
            </a>
            <a href="#trust" className="link-arrow">
              How Sourcing Works &rarr;
            </a>
          </div>
          <div className="hero-stats">
            <div>
              <strong>1,200+</strong>
              <span>Kits Sourced</span>
            </div>
            <div>
              <strong>38</strong>
              <span>Clubs &amp; Teams</span>
            </div>
            <div>
              <strong>4&ndash;9 Days</strong>
              <span>PH Delivery</span>
            </div>
          </div>
        </div>
        <div className="hero-visual">
          {HERO_IMAGE ? (
            <img className="hero-photo" src={HERO_IMAGE} alt="Featured kit" />
          ) : (
            <>
              <div className="hero-jersey-1" ref={jersey1Ref}>
                <JerseyGraphic pattern="diagonal" fillA="var(--surface-3)" fillB="var(--bg-raised)" number="7" />
              </div>
              <div className="hero-jersey-2" ref={jersey2Ref}>
                <JerseyGraphic pattern="panel" fillA="var(--accent-hover)" fillB="var(--accent-dim)" number="9" />
              </div>
            </>
          )}
          <div className="hero-badge" ref={badgeRef}>
            <span className="dot"></span>
            <div>
              <strong>Derby Night Kit</strong>
              <span>Restocked 2 hours ago</span>
            </div>
          </div>
        </div>
      </div>
      <div className="scroll-cue">
        <span>Scroll</span>
        <span className="line"></span>
      </div>
    </section>
  );
}
