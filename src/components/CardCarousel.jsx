import { useState } from "react";
import "./CardCarousel.css";

export default function CardCarousel({ cards }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cards.length - 1 : prevIndex - 1
    );
  };

  const next = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === cards.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="carousel-container">
      <button className="nav-arrow left" onClick={prev}>
        &#10094;
      </button>

      <div className="carousel-track">
        {cards.map((card, index) => {
          const offset = index - currentIndex;

          return (
            <div
              key={index}
              className={`carousel-card ${
                offset === 0
                  ? "active"
                  : offset === -1 || offset === cards.length - 1
                  ? "left"
                  : offset === 1 || offset === -(cards.length - 1)
                  ? "right"
                  : "hidden"
              }`}
            >
              <div className="card-content">
                <div className="card-text">
                  <h2>{card.title}</h2>
                  <p>{card.text}</p>
                </div>

                <div className="card-image">
                  <img src={card.image} alt={card.title} />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <button className="nav-arrow right" onClick={next}>
        &#10095;
      </button>
    </div>
  );
}
