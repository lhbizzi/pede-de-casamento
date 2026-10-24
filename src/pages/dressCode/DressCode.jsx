import React from "react";
import "./DressCode.css";
import dressCodeImg from "../../assets/dressCode.jpeg";

export default function DressCode() {
  return (
    <section id="dresscode" className="dresscode-section">
      <div className="dresscode-container">
        {/* Top Botanical Ornament */}
        <div className="dresscode-ornament-wrapper">
          <svg
            className="dresscode-botanical-ornament"
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
        <h2 className="dresscode-title">DRESS CODE</h2>

        {/* Traje Fino Badge */}
        <div className="dresscode-badge">
          <span>Traje Fino ✨</span>
        </div>

        {/* Introduction Message */}
        <p className="dresscode-intro">
          Para tornar nosso dia ainda mais especial, pedimos que nossos
          convidados escolham trajes elegantes e adequados à ocasião,
          contribuindo para a beleza e a harmonia desse momento tão importante
          para nós.
        </p>

        {/* Main Content: Illustration + Guidelines Cards */}
        <div className="dresscode-main-grid">
          {/* Watercolor Illustration */}
          <div className="dresscode-image-container">
            <img
              src={dressCodeImg}
              alt="Ilustração em Aquarela do Traje Fino"
              className="dresscode-image"
              loading="lazy"
            />
          </div>

          {/* Guidelines Columns */}
          <div className="dresscode-cards-column">
            {/* Para Mulheres */}
            <div className="dresscode-card card-women">
              <div className="dresscode-card-header">
                <span className="dresscode-card-tag">Elegância & Modéstia</span>
                <h3 className="dresscode-card-title">Para as Mulheres</h3>
              </div>
              <p className="dresscode-card-text">
                Pedimos a preferência por vestidos discretos, com os ombros
                cobertos e sem decotes profundos ou fendas acentuadas, prezando
                pela elegância e pela modéstia.
              </p>
              <div className="dresscode-pills">
                <span className="dresscode-pill">Vestidos elegantes</span>
                <span className="dresscode-pill">Ombros cobertos</span>
                <span className="dresscode-pill">Decotes discretos</span>
              </div>
            </div>

            {/* Para Homens */}
            <div className="dresscode-card card-men">
              <div className="dresscode-card-header">
                <span className="dresscode-card-tag">Clássico & Alinhado</span>
                <h3 className="dresscode-card-title">Para os Homens</h3>
              </div>
              <p className="dresscode-card-text">
                Sugerimos o uso de terno, camisa social, calça de alfaiataria e
                sapatos sociais, compondo um visual clássico e elegante.
              </p>
              <div className="dresscode-pills">
                <span className="dresscode-pill">Camisa social</span>
                <span className="dresscode-pill">Sapato social</span>
              </div>
            </div>
          </div>
        </div>

        {/* Heartfelt Gratitude Note */}
        <div className="dresscode-gratitude-box">
          <p className="dresscode-gratitude-text">
            Agradecemos, com muito carinho, pela compreensão e por respeitarem
            nossas escolhas para esse dia tão sonhado. Mal podemos esperar para
            compartilhar esse momento inesquecível com vocês!
          </p>
        </div>
      </div>
    </section>
  );
}
