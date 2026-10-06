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

import Home from "./pages/Home";
import Features from "./pages/Features";
import Solutions from "./pages/Solutions";
import Pricing from "./pages/Pricing";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";

function Header() {
  const [menu, setMenu] = useState(false);

  const closeMenu = () => setMenu(false);

  return (
    <header className="header">
      <div className="container nav">

        <Link to="/" className="logo" onClick={closeMenu}>
          <span>✦</span>
          NexaFlow
        </Link>

        <button
          className="menu"
          onClick={() => setMenu(!menu)}
          aria-label="Toggle menu"
        >
          ☰
        </button>

        <nav className={menu ? "open" : ""}>

          <NavLink to="/" onClick={closeMenu}>
            Home
          </NavLink>

          <NavLink to="/features" onClick={closeMenu}>
            Features
          </NavLink>

          <NavLink to="/solutions" onClick={closeMenu}>
            Solutions
          </NavLink>

          <NavLink to="/pricing" onClick={closeMenu}>
            Pricing
          </NavLink>

          <NavLink to="/faq" onClick={closeMenu}>
            FAQ
          </NavLink>

          <NavLink to="/contact" onClick={closeMenu}>
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

function Footer() {
  return (
    <footer>
      <div className="container footer-grid">

        <div>
          <Link to="/" className="logo">
            <span>✦</span>
            NexaFlow
          </Link>

          <p>
            Simple tools for ambitious teams.
          </p>
        </div>

        <div>
          <b>Product</b>

          <Link to="/features">
            Features
          </Link>

          <Link to="/pricing">
            Pricing
          </Link>
        </div>

        <div>
          <b>Company</b>

          <Link to="/solutions">
            Solutions
          </Link>

          <Link to="/contact">
            Contact
          </Link>
        </div>

        <div>
          <b>Legal</b>

          <button>Privacy</button>
          <button>Terms</button>
        </div>

      </div>

      <div className="container copyright">
        © 2026 NexaFlow. All rights reserved.
      </div>
    </footer>
  );
}

function App() {
  return (
    <>
      <Header />

      <main>
        <Routes>

          <Route path="/" element={<Home />} />

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

        </Routes>
      </main>

      <Footer />
    </>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);