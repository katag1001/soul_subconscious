import React, { useState } from "react";
import "./CardGrid.css";

const Card = ({ title, details, isSelected, onSelect }) => {
  return (
    <div
      className={`card ${isSelected ? "selected" : ""}`}
      onClick={onSelect}
    >
      <div className="card-header">
        <h3>{title}</h3>
        {!isSelected && <button className="primary-btn">▼</button>}
      </div>
      {isSelected && (
        <div className="card-details">
          <p>{details}</p>
          <button
            className="primary-btn"
            onClick={(e) => {
              e.stopPropagation();
              onSelect(null);
            }}
          >
            Collapse
          </button>
        </div>
      )}
    </div>
  );
};

const CardGrid = ({ cards }) => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  return (
    <div className="grid-container">
      {cards.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          details={card.details}
          isSelected={selectedIndex === index}
          onSelect={() =>
            setSelectedIndex(selectedIndex === index ? null : index)
          }
        />
      ))}
    </div>
  );
};

export default CardGrid;
