import React, { useState } from "react";
import "./CardGrid.css";

const Card = ({ title, details, isSelected, onSelect }) => {
  return (
    <div className={`card ${isSelected ? "selected" : ""}`} onClick={onSelect}>
      <div className="card-header">
        <h3>{title}</h3>
        <span className="card-toggle">
          {isSelected ? "−" : "+"}
        </span>
      </div>

      {isSelected && (
        <div className="card-details">
          <p>{details}</p>
        </div>
      )}
    </div>
  );
};

const CardGrid = ({ cards }) => {
  const leftCards = cards.filter((_, i) => i % 2 === 0);
  const rightCards = cards.filter((_, i) => i % 2 === 1);

  const [leftOpen, setLeftOpen] = useState(null);
  const [rightOpen, setRightOpen] = useState(null);

  return (
    <div className="grid-container">
      {/* Left column */}
      <div className="column">
        {leftCards.map((card, i) => (
          <Card
            key={i}
            title={card.title}
            details={card.details}
            isSelected={leftOpen === i}
            onSelect={() => setLeftOpen(leftOpen === i ? null : i)}
          />
        ))}
      </div>

      {/* Right column */}
      <div className="column">
        {rightCards.map((card, i) => (
          <Card
            key={i}
            title={card.title}
            details={card.details}
            isSelected={rightOpen === i}
            onSelect={() => setRightOpen(rightOpen === i ? null : i)}
          />
        ))}
      </div>
    </div>
  );
};

export default CardGrid;
