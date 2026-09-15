import { useState } from 'react';
import Reveal from '../../components/Reveal/Reveal';
import './Newsletter.css';

export default function Newsletter() {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
    setEmail('');
  }

  return (
    <section className="section-pad" id="newsletter">
      <div className="wrap">
        <Reveal as="div" className="newsletter-band">
          <div>
            <h2>Never Miss a Restock.</h2>
            <p>Get a heads-up the moment a followed kit, size, or team comes back in stock.</p>
          </div>
          <div>
            <form className="newsletter-form" onSubmit={handleSubmit}>
              <label htmlFor="newsletter-email" className="visually-hidden">
                Email address
              </label>
              <input
                type="email"
                id="newsletter-email"
                placeholder="you@email.com"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
              <button type="submit" className="btn btn-primary">
                Notify Me
              </button>
            </form>
            {submitted && <p className="newsletter-msg">You&apos;re on the list &mdash; watch your inbox.</p>}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
