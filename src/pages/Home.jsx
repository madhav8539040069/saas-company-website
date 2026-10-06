import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <div className="eyebrow">● BUILT FOR MODERN TEAMS</div>

            <h1>
              Turn complex work into <span>simple growth.</span>
            </h1>

            <p className="lead">
              NexaFlow brings projects, customer data and business insights
              together in one beautifully simple SaaS platform.
            </p>

            <div className="actions">
              <Link to="/contact" className="btn">
                Start free
              </Link>

              <Link to="/features" className="btn btn-ghost">
                Explore features →
              </Link>
            </div>

            <div className="trust">
              <span>✓ No credit card required</span>
              <span>✓ 14-day free trial</span>
              <span>✓ Cancel anytime</span>
            </div>
          </div>

          {/* DASHBOARD */}
          <div className="dashboard-card">
            <div className="dash-top">
              <b>Overview</b>
              <span className="status">● Live</span>
            </div>

            <div className="metric">
              <small>Monthly revenue</small>
              <strong>₹12,84,500</strong>
              <span className="up">+18.4%</span>
            </div>

            <div className="chart">
              {[32, 48, 42, 64, 58, 78, 92].map((h, i) => (
                <i key={i} style={{ height: `${h}%` }} />
              ))}
            </div>

            <div className="dash-row">
              <div>
                <small>Active users</small>
                <b>24,892</b>
              </div>

              <div>
                <small>Conversion</small>
                <b>8.42%</b>
              </div>

              <div>
                <small>Growth</small>
                <b>+32%</b>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUSTED BY */}
      <section className="logos">
        <div className="container logo-row">
          <span>TRUSTED BY TEAMS AT</span>
          <b>ORBIT</b>
          <b>vertex</b>
          <b>ACME</b>
          <b>northstar</b>
          <b>lumen</b>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <div className="container cta-box">
          <div>
            <div className="eyebrow">READY WHEN YOU ARE</div>
            <h2>Build a smarter way to work.</h2>
            <p>
              Start your free trial today and see what your team can
              accomplish.
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