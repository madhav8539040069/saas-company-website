import React, { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSending(true);
    setSent(false);
    setError("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mqpeeewy", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      const data = await response.json();

      if (response.ok) {
        setSent(true);
        form.reset();
      } else {
        setError(
          data?.errors?.[0]?.message ||
            `Form submission failed (${response.status})`
        );
      }
    } catch (err) {
      setError(
        "Unable to connect to the form service. Please check your internet connection and try again."
      );
    } finally {
      setSending(false);
    }
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
              name="name"
              placeholder="Your name"
            />

            <input
              required
              type="email"
              name="email"
              placeholder="Work email"
            />

            <input
              type="text"
              name="company"
              placeholder="Company name"
            />

            <textarea
              required
              name="business"
              placeholder="Tell us about your business"
              rows="6"
            />

            <button
              className="btn"
              type="submit"
              disabled={sending}
            >
              {sending ? "Sending..." : "Request a demo →"}
            </button>

            {sent && (
              <p className="success">
                Thanks! Your request has been received.
              </p>
            )}

            {error && (
              <p className="success">
                {error}
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