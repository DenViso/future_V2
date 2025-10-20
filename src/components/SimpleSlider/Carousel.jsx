
import React, { useState } from "react";
import "./carousel.css";

const Carousel = ({ t, slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev - itemsPerPage < 0 ? slides.length - itemsPerPage : prev - itemsPerPage
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev + itemsPerPage >= slides.length ? 0 : prev + itemsPerPage
    );
  };

  const visibleSlides = slides.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <div className="carousel">
      {/* кнопка в правому верхньому куті */}
      <div className="carousel-controls">
        <button onClick={prevSlide}><img src="/new_img/hero_main/ArrowLeft.png" alt="" /></button>
        <button onClick={nextSlide}><img src="/new_img/hero_main/ArrowRight.png" alt="" /></button>
      </div>

      <div className="carousel-content">
        {visibleSlides.map((card, index) => (
          <div className="card" key={index}>
            <img src={card.img} alt={card.title} />
            <h3>{card.title}</h3>
            <p>{card.desc}</p>
            {/* <button className="card-btn">{card.btn}</button> */}
          </div>
        ))}
      </div>

      {/* точки (по сторінкам) */}
      {/* <div className="carousel-dots">
        {Array.from({ length: Math.ceil(slides.length / itemsPerPage) }).map(
          (_, index) => (
            <span
              key={index}
              className={`dot ${index === Math.floor(currentIndex / itemsPerPage) ? "active" : ""}`}
              onClick={() => setCurrentIndex(index * itemsPerPage)}
            />
          )
        )}
      </div> */}
    </div>
  );
};

export default Carousel;
