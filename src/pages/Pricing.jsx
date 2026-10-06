import React from "react";
import { Link } from "react-router-dom";

const plans = [
  {
    name: "Starter",
    description: "For individuals and small teams.",
    price: "₹999",
    features: [
      "Up to 5 users",
      "Core analytics",
      "Basic workflows",
      "Email support",
    ],
  },
  {
    name: "Growth",
    description: "For growing businesses.",
    price: "₹2,499",
    popular: true,
    features: [
      "Up to 25 users",
      "Advanced analytics",
      "Automation workflows",
      "Priority support",
    ],
  },
  {
    name: "Scale",
    description: "For larger organizations.",
    price: "Custom",
    features: [
      "Unlimited teams",
      "Custom integrations",
      "Advanced security",
      "Dedicated support",
    ],
  },
];

export default function Pricing() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow">SIMPLE PRICING</div>

            <h1>
              Choose a plan that{" "}
              <span>fits your stage.</span>
            </h1>

            <p className="lead">
              Start small, grow when you're ready and upgrade whenever
              your business needs more.
            </p>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="section">
        <div className="container">
          <div className="pricing">
            {plans.map((plan) => (
              <article
                className={plan.popular ? "popular" : ""}
                key={plan.name}
              >
                {plan.popular && <label>Most popular</label>}

                <h3>{plan.name}</h3>

                <p>{plan.description}</p>

                <strong>
                  {plan.price}
                  {plan.price !== "Custom" && (
                    <span>/month</span>
                  )}
                </strong>

                <Link
                  to="/contact"
                  className={plan.popular ? "btn" : "btn btn-outline"}
                >
                  {plan.price === "Custom"
                    ? "Talk to sales"
                    : "Start trial"}
                </Link>

                <ul>
                  {plan.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="section soft">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow">EVERY PLAN INCLUDES</div>

            <h2>Everything you need to get started.</h2>
          </div>

          <div className="cards">
            <article>
              <div className="icon">✓</div>
              <h3>14-day free trial</h3>
              <p>
                Explore NexaFlow before committing to a paid plan.
              </p>
            </article>

            <article>
              <div className="icon">↗</div>
              <h3>Easy upgrades</h3>
              <p>
                Change your plan whenever your business needs change.
              </p>
            </article>

            <article>
              <div className="icon">◉</div>
              <h3>Secure platform</h3>
              <p>
                Your business data stays protected with secure
                infrastructure.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <div className="container cta-box">
          <div>
            <div className="eyebrow">NOT SURE WHICH PLAN?</div>

            <h2>Let's find the right fit.</h2>

            <p>
              Tell us about your business and we'll help you choose.
            </p>
          </div>

          <Link to="/contact" className="btn">
            Talk to us →
          </Link>
        </div>
      </section>
    </>
  );
}