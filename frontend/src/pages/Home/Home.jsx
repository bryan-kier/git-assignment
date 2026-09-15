import Hero from './Hero';
import CategoryStrip from './CategoryStrip';
import FeaturedDrops from './FeaturedDrops';
import TrustSection from './TrustSection';
import Newsletter from './Newsletter';

export default function Home() {
  return (
    <main id="top">
      <Hero />
      <CategoryStrip />
      <FeaturedDrops />
      <TrustSection />
      <Newsletter />
    </main>
  );
}
