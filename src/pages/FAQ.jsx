import React, { useState } from "react";
import { Link } from "react-router-dom";

const questions = [
  {
    question: "Is there a free trial?",
    answer:
      "Yes. Every plan starts with a 14-day free trial and no credit card is required.",
  },
  {
    question: "Can I change plans later?",
    answer:
      "Yes. You can upgrade or downgrade your plan whenever your team's needs change.",
  },
  {
    question: "Is my data secure?",
    answer:
      "We use secure cloud infrastructure, access controls and industry-standard security practices to protect your business data.",
  },
  {
    question: "How many users can I add?",
    answer:
      "The number of users depends on your selected plan. You can upgrade your plan as your team grows.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Yes. You can cancel your subscription according to the terms of your selected plan.",
  },
  {
    question: "Do you provide customer support?",
    answer:
      "Yes. Support is available according to your plan, with priority support available on higher plans.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow">FAQ</div>

            <h1>
              Questions, <span>answered.</span>
            </h1>

            <p className="lead">
              Find quick answers to common questions about NexaFlow,
              pricing, security and getting started.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ LIST */}
      <section className="section faq">
        <div className="container">
          <div className="faq-list">
            {questions.map((item, index) => (
              <div className="faq-item" key={item.question}>
                <button
                  type="button"
                  onClick={() =>
                    setOpen(open === index ? null : index)
                  }
                >
                  <span>{item.question}</span>
                  <span>{open === index ? "−" : "+"}</span>
                </button>

                {open === index && <p>{item.answer}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <div className="container cta-box">
          <div>
            <div className="eyebrow">STILL HAVE QUESTIONS?</div>

            <h2>We're here to help.</h2>

            <p>
              Talk to our team and get answers for your specific needs.
            </p>
          </div>

          <Link to="/contact" className="btn">
            Contact us →
          </Link>
        </div>
      </section>
    </>
  );
}