import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  Link,
} from "react-router-dom";

import "./styles.css";

// Existing pages
import Home from "./pages/Home";
import Features from "./pages/Features";
import Solutions from "./pages/Solutions";
import Pricing from "./pages/Pricing";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";

/* ================================
   HEADER
================================ */

function Header() {
  const [menu, setMenu] = useState(false);

  const closeMenu = () => {
    setMenu(false);
  };

  return (
    <header className="header">
      <div className="container nav">

        {/* Logo */}
        <Link
          to="/"
          className="logo"
          onClick={closeMenu}
        >
          <span>✦</span>
          NexaFlow
        </Link>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="menu"
          onClick={() => setMenu((value) => !value)}
          aria-label="Toggle navigation menu"
          aria-expanded={menu}
        >
          ☰
        </button>

        {/* Navigation */}
        <nav className={menu ? "open" : ""}>

          <NavLink
            to="/"
            end
            onClick={closeMenu}
          >
            Home
          </NavLink>

          <NavLink
            to="/features"
            onClick={closeMenu}
          >
            Features
          </NavLink>

          <NavLink
            to="/solutions"
            onClick={closeMenu}
          >
            Solutions
          </NavLink>

          <NavLink
            to="/pricing"
            onClick={closeMenu}
          >
            Pricing
          </NavLink>

          <NavLink
            to="/faq"
            onClick={closeMenu}
          >
            FAQ
          </NavLink>

          <NavLink
            to="/contact"
            onClick={closeMenu}
          >
            Contact
          </NavLink>

          <Link
            to="/contact"
            className="btn btn-small btn-outline"
            onClick={closeMenu}
          >
            Book a demo
          </Link>

        </nav>
      </div>
    </header>
  );
}

/* ================================
   FOOTER
================================ */

function Footer() {
  return (
    <footer>
      <div className="container footer-grid">

        {/* Brand */}
        <div>
          <Link to="/" className="logo">
            <span>✦</span>
            NexaFlow
          </Link>

          <p>
            Simple tools for ambitious teams.
          </p>
        </div>

        {/* Product */}
        <div>
          <b>Product</b>

          <Link to="/features">
            Features
          </Link>

          <Link to="/pricing">
            Pricing
          </Link>
        </div>

        {/* Company */}
        <div>
          <b>Company</b>

          <Link to="/solutions">
            Solutions
          </Link>

          <Link to="/faq">
            FAQ
          </Link>

          <Link to="/contact">
            Contact
          </Link>
        </div>

        {/* Legal */}
        <div>
          <b>Legal</b>

          <Link to="/privacy">
            Privacy Policy
          </Link>

          <Link to="/terms">
            Terms & Conditions
          </Link>
        </div>

      </div>

      <div className="container copyright">
        © 2026 NexaFlow. All rights reserved.
      </div>
    </footer>
  );
}

/* ================================
   404 PAGE
================================ */

function NotFound() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-head">

          <span className="eyebrow">
            404
          </span>

          <h1>
            Page Not Found
          </h1>

          <p>
            Sorry, the page you are looking for does not exist.
          </p>

          <Link
            to="/"
            className="btn"
          >
            Back to Home
          </Link>

        </div>
      </div>
    </section>
  );
}

/* ================================
   APP
================================ */

function App() {
  return (
    <>
      <Header />

      <main>
        <Routes>

          {/* Main Pages */}
          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/features"
            element={<Features />}
          />

          <Route
            path="/solutions"
            element={<Solutions />}
          />

          <Route
            path="/pricing"
            element={<Pricing />}
          />

          <Route
            path="/faq"
            element={<FAQ />}
          />

          <Route
            path="/contact"
            element={<Contact />}
          />

          {/* Legal Pages
              These use your existing files
              inside src/pages/
          */}
          <Route
            path="/privacy"
            element={<Privacy />}
          />

          <Route
            path="/terms"
            element={<Terms />}
          />

          {/* 404 */}
          <Route
            path="*"
            element={<NotFound />}
          />

        </Routes>
      </main>

      <Footer />
    </>
  );
}

/* ================================
   REACT ROOT
================================ */

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error(
    'Root element "#root" was not found in index.html'
  );
}

createRoot(rootElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);