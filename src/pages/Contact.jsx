import React, { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    e.target.reset();
  };

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow">LET'S TALK</div>

            <h1>
              Ready to see NexaFlow{" "}
              <span>in action?</span>
            </h1>

            <p className="lead">
              Tell us what you are building. Our team will get back
              to you shortly.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="section contact">
        <div className="container contact-grid">
          <div>
            <div className="eyebrow">GET IN TOUCH</div>

            <h2>Let's build something great together.</h2>

            <p>
              Whether you want a product demo, have a question about
              pricing, or need help choosing the right solution,
              we're here to help.
            </p>

            <div className="cards">
              <article>
                <div className="icon">✉</div>
                <h3>Email</h3>
                <p>hello@nexaflow.com</p>
              </article>

              <article>
                <div className="icon">☎</div>
                <h3>Talk to us</h3>
                <p>Our team is ready to help.</p>
              </article>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <input
              required
              type="text"
              placeholder="Your name"
            />

            <input
              required
              type="email"
              placeholder="Work email"
            />

            <input
              type="text"
              placeholder="Company name"
            />

            <textarea
              required
              placeholder="Tell us about your business"
              rows="6"
            />

            <button className="btn" type="submit">
              Request a demo →
            </button>

            {sent && (
              <p className="success">
                Thanks! Your request has been received.
              </p>
            )}
          </form>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <div className="container cta-box">
          <div>
            <div className="eyebrow">NEXAFLOW</div>

            <h2>Simple tools. Smarter growth.</h2>

            <p>
              Everything your team needs in one powerful workspace.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}