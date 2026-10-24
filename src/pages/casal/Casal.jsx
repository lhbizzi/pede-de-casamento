import React from "react";
import "./Casal.css";
import fotoCasal from "../../assets/fotoRubrica.jpeg";

export default function Casal() {
  return (
    <section id="casal" className="casal-section">
      <div className="casal-container">
        {/* Botanical branch ornament at top */}
        <div className="casal-ornament-wrapper">
          <svg
            className="casal-botanical-ornament"
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
        <h2 className="casal-title">O CASAL</h2>

        {/* Circular Photos Container */}
        <div className="casal-photos-container">
          <div
            className="casal-photo-circle photo-left"
            style={{ backgroundImage: `url(${fotoCasal})` }}
            role="img"
            aria-label="Foto de Maria Vitória"
          />
          <div
            className="casal-photo-circle photo-right"
            style={{ backgroundImage: `url(${fotoCasal})` }}
            role="img"
            aria-label="Foto de Frederico"
          />
        </div>

        {/* Couple Story Content */}
        <div className="casal-story-content">
          <p className="casal-paragraph">
            Nossa história começou há 7 anos e, desde então, construímos juntos
            muito mais do que um relacionamento, construímos uma vida cheia de
            momentos especiais, sonhos compartilhados e lembranças que levaremos
            para sempre. Ao longo desse caminho, aprendemos a crescer lado a
            lado, a apoiar um ao outro e a encontrar felicidade nas coisas mais
            simples, sempre com a certeza de que queremos continuar escolhendo
            um ao outro todos os dias.
          </p>

          <p className="casal-paragraph">
            Hoje, damos mais um passo nessa história, vamos nos casar! Se até
            aqui fomos namorados e companheiros, agora escolhemos ser tudo isso
            para sempre. Nosso amor ganhou um novo capítulo, e mal podemos
            esperar para celebrar esse momento tão especial ao lado das pessoas
            que amamos. Que seja apenas o começo de uma vida inteira de muito
            amor.
          </p>
        </div>
      </div>
    </section>
  );
}
