import React, { useState, useEffect } from "react";
import "./TimeCounter.css";

// Fácil atualização: Defina a data e hora do casamento aqui (Formato: AAAA-MM-DDTHH:MM:SS)
const WEDDING_DATE = "2027-04-17T00:00:00";

export default function TimeCounter() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const target = new Date(WEDDING_DATE).getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const difference = target - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      // Cálculo de dias, horas, minutos e segundos
      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));

      setTimeLeft({ days: d, hours: h, minutes: m });
    };

    // Atualiza imediatamente ao montar o componente
    updateTimer();

    const timerInterval = setInterval(updateTimer, 1000);
    return () => clearInterval(timerInterval);
  }, []);

  // Formata os números para sempre exibir 2 dígitos (ex: "03" em vez de "3")
  const padNumber = (num) => String(num).padStart(2, "0");

  return (
    <section className="countdown-section">
      <h2 className="countdown-title">Contagem Regressiva</h2>

      <div className="countdown-container">
        {/* Card Dias */}
        <div className="countdown-card">
          <span className="countdown-value">{padNumber(timeLeft.days)}</span>
          <span className="countdown-label">Dias</span>
        </div>

        {/* Card Horas */}
        <div className="countdown-card">
          <span className="countdown-value">{padNumber(timeLeft.hours)}</span>
          <span className="countdown-label">Horas</span>
        </div>

        {/* Card Minutos */}
        <div className="countdown-card">
          <span className="countdown-value">{padNumber(timeLeft.minutes)}</span>
          <span className="countdown-label">Minutos</span>
        </div>
      </div>
    </section>
  );
}
