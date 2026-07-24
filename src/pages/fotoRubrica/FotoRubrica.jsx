import React, { useState } from "react";
import "./FotoRubrica.css";
import fotoRubrica from "../../assets/fotoRubrica.jpeg";
import Rubrica from "../../components/Rubrica";

export default function FotoRubrica() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileSubOpen, setMobileSubOpen] = useState(false);

  const menuItems = [
    { label: "Home", href: "#home" },
    {
      label: "Cerimônia",
      href: "#cerimonia",
      subItems: [
        { label: "Local", href: "#local" },
        { label: "Dress Code", href: "#dresscode" },
      ],
    },
    { label: "Lista de Presentes", href: "#presentes" },
  ];

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    if (menuOpen) {
      setMobileSubOpen(false);
    }
  };

  return (
    <div className="hero-container">
      {/* Background Image Container */}
      <div
        className="hero-bg"
        style={{ backgroundImage: `url(${fotoRubrica})` }}
      />

      {/* Dark tint and gradient overlay */}
      <div className="hero-overlay" />

      {/* Header Navigation */}
      <header className="hero-header">
        <nav className="desktop-nav">
          {menuItems.map((item, idx) => {
            if (item.subItems) {
              return (
                <div key={idx} className="nav-item-dropdown">
                  <a href={item.href} className="nav-link dropdown-toggle">
                    {item.label}
                    <svg
                      className="chevron-icon"
                      width="8"
                      height="5"
                      viewBox="0 0 8 5"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 1L4 4L7 1"
                        stroke="currentColor"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                  <div className="dropdown-menu">
                    {item.subItems.map((sub, sIdx) => (
                      <a key={sIdx} href={sub.href} className="dropdown-link">
                        {sub.label}
                      </a>
                    ))}
                  </div>
                </div>
              );
            }
            return (
              <a
                key={idx}
                href={item.href}
                className={`nav-link ${idx === 0 ? "active" : ""}`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          className={`hamburger-btn ${menuOpen ? "open" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className="hamburger-line line-1"></span>
          <span className="hamburger-line line-2"></span>
          <span className="hamburger-line line-3"></span>
        </button>

        {/* Mobile Menu Drawer Overlay */}
        <div className={`mobile-drawer ${menuOpen ? "open" : ""}`}>
          {menuItems.map((item, idx) => {
            if (item.subItems) {
              return (
                <div key={idx} className="mobile-dropdown-container">
                  <button
                    className="mobile-nav-link mobile-dropdown-toggle"
                    onClick={() => setMobileSubOpen(!mobileSubOpen)}
                  >
                    {item.label}
                    <svg
                      className={`mobile-chevron ${mobileSubOpen ? "open" : ""}`}
                      width="12"
                      height="8"
                      viewBox="0 0 12 8"
                      fill="none"
                    >
                      <path
                        d="M1 1.5L6 6.5L11 1.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  <div
                    className={`mobile-sub-menu ${mobileSubOpen ? "open" : ""}`}
                  >
                    {item.subItems.map((sub, sIdx) => (
                      <a
                        key={sIdx}
                        href={sub.href}
                        className="mobile-sub-link"
                        onClick={() => {
                          setMenuOpen(false);
                          setMobileSubOpen(false);
                        }}
                      >
                        {sub.label}
                      </a>
                    ))}
                  </div>
                </div>
              );
            }
            return (
              <a
                key={idx}
                href={item.href}
                className="mobile-nav-link"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            );
          })}
        </div>
      </header>

      {/* Centered Monogram & Names */}
      <main className="hero-content">
        <Rubrica />
        <h1 className="couple-names">Maria Vitória e Frederico</h1>{" "}
        <p
          className="wedding-date"
          style={{
            backgroundColor: "#c4bfac",
            color: "#6a6b4b",
            padding: "10px 24px",
            borderRadius: "50px",
            fontWeight: "500",
            display: "inline-block",
            letterSpacing: "0.2em",
          }}
        >
          17 | 04 | 2027
        </p>
      </main>
      {/* Footer with a subtle scroll indicator */}
      <footer className="hero-footer">
        <div className="scroll-indicator">
          <span className="scroll-dot"></span>
        </div>
      </footer>
    </div>
  );
}
