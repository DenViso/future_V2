import React, { useState, useEffect } from "react";
import "./carousel.css";

const Carousel = ({ t, slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  // Визначаємо кількість карток в залежності від ширини екрана
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 768) {
        setItemsPerPage(1); // Мобільні - 1 картка
      } else if (width <= 1024) {
        setItemsPerPage(2); // Планшети - 2 картки
      } else {
        setItemsPerPage(3); // Десктоп - 3 картки
      }
    };

    // Викликаємо при завантаженні
    handleResize();

    // Слухаємо зміну розміру вікна
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Скидаємо індекс при зміні itemsPerPage
  useEffect(() => {
    setCurrentIndex(0);
  }, [itemsPerPage]);

  // Циклічна прокрутка назад
  const prevSlide = () => {
    setCurrentIndex((prev) => {
      const newIndex = prev - itemsPerPage;
      // Якщо виходимо за межі початку, переходимо в кінець
      if (newIndex < 0) {
        return Math.floor(slides.length / itemsPerPage) * itemsPerPage;
      }
      return newIndex;
    });
  };

  // Циклічна прокрутка вперед
  const nextSlide = () => {
    setCurrentIndex((prev) => {
      const newIndex = prev + itemsPerPage;
      // Якщо виходимо за межі кінця, повертаємось на початок
      if (newIndex >= slides.length) {
        return 0;
      }
      return newIndex;
    });
  };

  // Отримуємо видимі слайди
  const getVisibleSlides = () => {
    const endIndex = currentIndex + itemsPerPage;
    if (endIndex <= slides.length) {
      return slides.slice(currentIndex, endIndex);
    }
    // Якщо виходимо за межі, беремо з початку
    const remaining = endIndex - slides.length;
    return [...slides.slice(currentIndex), ...slides.slice(0, remaining)];
  };

  const visibleSlides = getVisibleSlides();

  return (
    <div className="carousel">
      {/* Кнопки керування в правому верхньому куті */}
      <div className="carousel-controls">
        <button 
          onClick={prevSlide}
          aria-label="Previous slide"
        >
          <img src="/new_img/hero_main/ArrowLeft.png" alt="Previous" />
        </button>
        <button 
          onClick={nextSlide}
          aria-label="Next slide"
        >
          <img src="/new_img/hero_main/ArrowRight.png" alt="Next" />
        </button>
      </div>

      {/* Контент каруселі */}
      <div className="carousel-content">
        {visibleSlides.map((card, index) => (
          <div className="card" key={`${currentIndex}-${index}`}>
            <img src={card.img} alt={card.title} />
            <h3>{card.title}</h3>
            <p>{card.desc}</p>
          </div>
        ))}
      </div>

      {/* Індикатори (точки) */}
      {/* <div className="carousel-dots">
        {Array.from({ length: Math.ceil(slides.length / itemsPerPage) }).map(
          (_, index) => (
            <span
              key={index}
              className={`dot ${index === Math.floor(currentIndex / itemsPerPage) ? "active" : ""}`}
              onClick={() => setCurrentIndex(index * itemsPerPage)}
              role="button"
              aria-label={`Go to slide ${index + 1}`}
              tabIndex={0}
              onKeyPress={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  setCurrentIndex(index * itemsPerPage);
                }
              }}
            />
          )
        )}
      </div> */}
      
    </div>
  );
};

export default Carousel;