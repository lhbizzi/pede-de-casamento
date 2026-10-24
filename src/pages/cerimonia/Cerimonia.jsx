import React from "react";
import "./Cerimonia.css";
import fotoIgreja from "../../assets/fotoIgreja.jpeg";

export default function Cerimonia() {
  const scrollToTop = (e) => {
    if (e) {
      e.preventDefault();
    }

    const homeEl = document.getElementById("home");
    if (homeEl) {
      homeEl.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    if (document.documentElement) {
      document.documentElement.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
    if (document.body) {
      document.body.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
    const rootEl = document.getElementById("root");
    if (rootEl) {
      rootEl.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  };

  const churchName = "Paróquia Nossa Senhora das Graças";
  const addressText =
    "Av. Major Nicácio, 1779 - Cidade Nova, Franca - SP, 14401-135";
  const mapsSearchUrl =
    "https://www.google.com/maps/search/?api=1&query=Par%C3%B3quia+Nossa+Senhora+das+Gra%C3%A7as+Avenida+Major+Nicacio+Franca+SP";
  const mapsDirectionsUrl =
    "https://www.google.com/maps/dir/?api=1&destination=Par%C3%B3quia+Nossa+Senhora+das+Gra%C3%A7as+Avenida+Major+Nicacio+Franca+SP";
  const embedMapsUrl =
    "https://maps.google.com/maps?q=Par%C3%B3quia+Nossa+Senhora+das+Gra%C3%A7as,+Av.+Major+Nic%C3%A1cio,+1779+-+Cidade+Nova,+Franca+-+SP&t=&z=16&ie=UTF8&iwloc=&output=embed";

  return (
    <section id="cerimonia" className="cerimonia-section">
      <div className="cerimonia-container">
        {/* Top Botanical Ornament */}
        <div className="cerimonia-ornament-wrapper">
          <svg
            className="cerimonia-botanical-ornament"
            viewBox="0 0 160 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            {/* Delicate main center stem */}
            <path
              d="M 12 30 C 45 22, 115 22, 148 30"
              stroke="#b37d68"
              strokeWidth="1.3"
              strokeLinecap="round"
            />
            {/* Left side delicate leaves and twigs */}
            <path
              d="M 28 27 C 20 20, 17 25, 23 29 C 26 30, 28 28, 28 27 Z"
              fill="#b37d68"
              opacity="0.8"
            />
            <path
              d="M 40 25 C 34 16, 28 18, 33 24 C 36 26, 39 26, 40 25 Z"
              fill="#b37d68"
              opacity="0.85"
            />
            <path
              d="M 42 26 C 39 33, 46 34, 46 28 Z"
              fill="#b37d68"
              opacity="0.75"
            />
            <path
              d="M 54 24 C 50 14, 58 14, 57 22 C 56 25, 55 25, 54 24 Z"
              fill="#b37d68"
              opacity="0.9"
            />
            <path
              d="M 64 23 C 65 14, 73 15, 69 22 C 67 24, 65 24, 64 23 Z"
              fill="#b37d68"
              opacity="0.85"
            />
            <path
              d="M 58 25 C 57 32, 64 32, 62 26 Z"
              fill="#b37d68"
              opacity="0.75"
            />
            {/* Center top bud */}
            <path
              d="M 80 22 C 77 10, 83 10, 80 22 Z"
              fill="#b37d68"
              opacity="0.95"
            />
            {/* Right side delicate leaves and twigs */}
            <path
              d="M 96 23 C 95 14, 87 15, 91 22 C 93 24, 95 24, 96 23 Z"
              fill="#b37d68"
              opacity="0.85"
            />
            <path
              d="M 106 24 C 110 14, 102 14, 103 22 C 104 25, 105 25, 106 24 Z"
              fill="#b37d68"
              opacity="0.9"
            />
            <path
              d="M 98 25 C 96 32, 103 32, 102 26 Z"
              fill="#b37d68"
              opacity="0.75"
            />
            <path
              d="M 120 25 C 126 16, 132 18, 127 24 C 124 26, 121 26, 120 25 Z"
              fill="#b37d68"
              opacity="0.85"
            />
            <path
              d="M 118 26 C 121 33, 114 34, 114 28 Z"
              fill="#b37d68"
              opacity="0.75"
            />
            <path
              d="M 132 27 C 140 20, 143 25, 137 29 C 134 30, 132 28, 132 27 Z"
              fill="#b37d68"
              opacity="0.8"
            />
          </svg>
        </div>

        {/* Section Title */}
        <h2 className="cerimonia-title">CERIMÔNIA</h2>

        {/* Church Watercolor Image */}
        <div className="cerimonia-image-wrapper">
          <img
            src={fotoIgreja}
            alt="Igreja em Aquarela - Cerimônia de Casamento"
            className="cerimonia-image"
            loading="lazy"
          />
        </div>

        {/* Ceremonial Message with Catholic Faith & Prominent Time */}
        <div className="cerimonia-text-content">
          <div className="cerimonia-faith-badge">
            <svg
              className="cross-icon"
              width="12"
              height="16"
              viewBox="0 0 14 18"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M5 0h4v4h4v3H9v11H5V7H1V4h4V0z" />
            </svg>
            <span>Sacramento do Matrimônio</span>
          </div>

          <p className="cerimonia-faith-quote">
            "Assim, já não são dois, mas uma só carne. Portanto, não separe o
            homem o que Deus uniu."
            <span className="quote-reference">—Mt 19,6</span>
          </p>

          <p className="cerimonia-description">
            Sob as bênçãos de Deus e a intercessão de Nossa Senhora, receberemos
            o sagrado Sacramento do Matrimônio. É com o coração repleto de fé e
            alegria que convidamos você e sua família para partilharem conosco
            deste momento de oração diante do altar do Senhor, testemunhando a
            nossa união em Cristo.
          </p>

          {/* Prominent Schedule & Punctuality Card */}
          <div className="cerimonia-schedule-card">
            <div className="schedule-header">
              <svg
                className="schedule-icon"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              <span className="schedule-label">Horário da Celebração</span>
            </div>

            <div className="schedule-time-row">
              <span className="schedule-time-value">10:30</span>
              <span className="schedule-time-period">da manhã</span>
            </div>
          </div>

          <p className="cerimonia-address">
            <svg
              className="address-icon"
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            <span>
              {churchName} • {addressText}
            </span>
          </p>
        </div>

        {/* Map Section */}
        <div id="local" className="cerimonia-map-wrapper">
          <iframe
            title="Local da Cerimônia no Google Maps"
            src={embedMapsUrl}
            className="cerimonia-map-iframe"
            loading="lazy"
            allowFullScreen=""
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* Scroll To Top Floating Button */}
        <a
          href="#home"
          onClick={scrollToTop}
          className="cerimonia-scroll-top-btn"
          aria-label="Voltar ao início"
          title="Voltar ao topo"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <polyline points="18 15 12 9 6 15"></polyline>
          </svg>
        </a>
      </div>
    </section>
  );
}
