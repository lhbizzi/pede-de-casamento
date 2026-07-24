import React from "react";

export default function Rubrica() {
  return (
    <div className="monogram-wrapper">
      <svg
        className="monogram-svg"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Elegant botanical leaves weaving on the left side */}
        <g className="monogram-leaves">
          {/* Main stem */}
          <path
            d="M 22 170 C 22 140, 24 100, 32 70 C 35 60, 40 45, 48 30"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            fill="none"
          />
          {/* Left side leaves crossing the square border */}
          <path
            d="M 22 155 C 10 150, 8 140, 16 135 C 22 135, 23 145, 23 150"
            fill="white"
          />
          <path
            d="M 25 125 C 12 120, 10 110, 20 102 C 26 104, 27 114, 25 122"
            fill="white"
          />
          <path
            d="M 28 95 C 18 85, 18 75, 27 70 C 32 75, 31 85, 29 92"
            fill="white"
          />
          {/* Right side leaves inside the square */}
          <path
            d="M 26 135 C 38 135, 42 125, 36 120 C 30 120, 28 128, 27 132"
            fill="white"
          />
          <path
            d="M 29 105 C 40 102, 45 92, 38 88 C 32 88, 31 96, 30 101"
            fill="white"
          />
          <path
            d="M 33 75 C 44 70, 46 60, 39 58 C 34 58, 34 66, 33 71"
            fill="white"
          />
          {/* Leaf at the top tip */}
          <path
            d="M 48 30 C 48 20, 56 18, 56 26 C 52 30, 49 32, 48 30"
            fill="white"
          />
        </g>

        {/* Thin clean square outline */}
        <rect
          x="30"
          y="30"
          width="140"
          height="140"
          stroke="white"
          strokeWidth="2"
          fill="none"
          className="monogram-border"
        />

        {/* Initials in the center */}
        <text x="102" y="112" textAnchor="middle" className="monogram-text">
          M·F
        </text>
      </svg>
    </div>
  );
}
