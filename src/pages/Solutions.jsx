import React from "react";
import { Link } from "react-router-dom";

const solutions = [
  {
    icon: "🚀",
    title: "For Growing Businesses",
    text: "Start with simple tools and scale your workspace as your business grows.",
    points: [
      "Manage your growing workload",
      "Track business performance",
      "Automate repetitive work",
    ],
  },
  {
    icon: "👥",
    title: "For Modern Teams",
    text: "Give your team one place to collaborate, manage tasks and make decisions.",
    points: [
      "Centralized team workspace",
      "Clear task ownership",
      "Better collaboration",
    ],
  },
  {
    icon: "📊",
    title: "For Business Leaders",
    text: "Get a clear view of your business with useful data and actionable insights.",
    points: [
      "Real-time business analytics",
      "Performance monitoring",
      "Growth insights",
    ],
  },
];

export default function Solutions() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow">SOLUTIONS</div>

            <h1>
              One platform for your{" "}
              <span>entire business.</span>
            </h1>

            <p className="lead">
              From your first customer to a growing global team, NexaFlow
              adapts to the way you work.
            </p>

            <div className="actions">
              <Link to="/contact" className="btn">
                Talk to us
              </Link>

              <Link to="/features" className="btn btn-ghost">
                Explore features →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow">BUILT FOR YOU</div>

            <h2>
              Designed around the way your team works.
            </h2>

            <p>
              Whether you're starting out, scaling up or managing a larger
              organization, NexaFlow gives you the tools you need.
            </p>
          </div>

          <div className="cards">
            {solutions.map((solution) => (
              <article key={solution.title}>
                <div className="icon">{solution.icon}</div>

                <h3>{solution.title}</h3>

                <p>{solution.text}</p>

                <ul className="checks">
                  {solution.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SCALE SECTION */}
      <section className="section soft">
        <div className="container split">
          <div>
            <div className="eyebrow">DESIGNED FOR SCALE</div>

            <h2>
              From first customer to global team.
            </h2>

            <p>
              Start simple and expand as your business grows. NexaFlow
              adapts to your workflow without adding unnecessary complexity.
            </p>

            <ul className="checks">
              <li>Centralized workspace</li>
              <li>Role-based team access</li>
              <li>Secure cloud infrastructure</li>
              <li>API-ready integrations</li>
            </ul>

            <Link to="/contact" className="btn">
              Book a demo →
            </Link>
          </div>

          <div className="feature-panel">
            <div className="mini">
              <span>Growth score</span>
              <strong>92/100</strong>
            </div>

            <div className="progress">
              <span style={{ width: "92%" }} />
            </div>

            <div className="mini">
              <span>Tasks automated</span>
              <strong>74%</strong>
            </div>

            <div className="progress">
              <span style={{ width: "74%" }} />
            </div>

            <div className="activity">
              <b>Today</b>
              <p>✓ Campaign report generated</p>
              <p>✓ 18 tasks automated</p>
              <p>✓ Weekly insights ready</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <div className="container cta-box">
          <div>
            <div className="eyebrow">READY TO GROW?</div>

            <h2>
              Build a smarter business.
            </h2>

            <p>
              Give your team a simpler way to work and grow.
            </p>
          </div>

          <Link to="/contact" className="btn">
            Get started →
          </Link>
        </div>
      </section>
    </>
  );
}