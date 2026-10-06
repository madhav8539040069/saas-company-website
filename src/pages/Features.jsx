import React from "react";
import { Link } from "react-router-dom";

const features = [
  {
    icon: "⌁",
    title: "Smart Workflows",
    description:
      "Automate repetitive work and keep every process moving with less manual effort.",
    points: [
      "Automate repetitive tasks",
      "Create custom workflows",
      "Save valuable team time",
    ],
  },
  {
    icon: "◫",
    title: "Real-time Analytics",
    description:
      "See the numbers that matter with clear dashboards and actionable business insights.",
    points: [
      "Live business metrics",
      "Clear visual dashboards",
      "Actionable growth insights",
    ],
  },
  {
    icon: "◉",
    title: "Team Collaboration",
    description:
      "Bring conversations, tasks and decisions together so nothing gets lost.",
    points: [
      "Centralized workspace",
      "Team task management",
      "Better communication",
    ],
  },
  {
    icon: "◈",
    title: "Secure Platform",
    description:
      "Keep your business information protected with secure cloud infrastructure.",
    points: [
      "Secure cloud infrastructure",
      "Role-based access",
      "Protected business data",
    ],
  },
  {
    icon: "↗",
    title: "Growth Insights",
    description:
      "Understand what's working and discover new opportunities for your business.",
    points: [
      "Growth tracking",
      "Performance reports",
      "Business opportunities",
    ],
  },
  {
    icon: "⚡",
    title: "Fast & Simple",
    description:
      "A clean and easy-to-use experience designed to help your team move faster.",
    points: [
      "Simple interface",
      "Fast workflows",
      "Easy team onboarding",
    ],
  },
];

export default function Features() {
  return (
    <>
      {/* PAGE HERO */}
      <section className="hero">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow">POWERFUL FEATURES</div>

            <h1>
              Everything your team needs to{" "}
              <span>move faster.</span>
            </h1>

            <p className="lead">
              NexaFlow gives your team one focused workspace for planning,
              collaboration, analytics and business growth.
            </p>

            <div className="actions">
              <Link to="/contact" className="btn">
                Start free
              </Link>

              <Link to="/pricing" className="btn btn-ghost">
                View pricing →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES GRID */}
      <section className="section">
        <div className="container">
          <div className="cards">
            {features.map((feature) => (
              <article key={feature.title}>
                <div className="icon">{feature.icon}</div>

                <h3>{feature.title}</h3>

                <p>{feature.description}</p>

                <ul className="checks">
                  {feature.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ANALYTICS SECTION */}
      <section className="section soft">
        <div className="container split">
          <div>
            <div className="eyebrow">REAL-TIME INSIGHTS</div>

            <h2>
              Know what is happening in your business.
            </h2>

            <p>
              Turn your business data into simple, useful information.
              NexaFlow helps your team understand performance and make
              better decisions.
            </p>

            <ul className="checks">
              <li>Live performance tracking</li>
              <li>Easy-to-understand reports</li>
              <li>Team productivity insights</li>
              <li>Growth performance monitoring</li>
            </ul>

            <Link to="/contact" className="btn">
              See it in action →
            </Link>
          </div>

          <div className="feature-panel">
            <div className="mini">
              <span>Monthly revenue</span>
              <strong>₹12,84,500</strong>
            </div>

            <div className="progress">
              <span style={{ width: "88%" }} />
            </div>

            <div className="mini">
              <span>Team productivity</span>
              <strong>92%</strong>
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
              <b>Today's activity</b>
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
            <div className="eyebrow">READY TO GET STARTED?</div>

            <h2>
              Work smarter with NexaFlow.
            </h2>

            <p>
              Bring your team, workflows and business insights together.
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