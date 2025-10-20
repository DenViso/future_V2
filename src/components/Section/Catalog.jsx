// Catalog.jsx
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { CatalogSidebar } from "./CatalogSidebar";

export const Catalog = ({ cat1 = [], t }) => {
  const location = useLocation();

  // Завжди масив
  const items = Array.isArray(cat1) ? cat1 : [];

  const rowSize = 8;
  const rowsPerPage = 3;
  const pageSize = rowSize * rowsPerPage;

  const [page, setPage] = useState(1);
  const [visibleCount, setVisibleCount] = useState(pageSize);

  // 🔑 Відновлення сторінки та скролу після повернення
  useEffect(() => {
    if (location.state?.page) {
      setPage(location.state.page);
      setTimeout(() => {
        window.scrollTo(0, location.state.scrollY || 0);
      }, 0);
    }
  }, [location.state]);

  // Підкаталоги Пусет
  const pusetSubCategories = [
    { id: 35, name: (t && t("section.section5")) || "Соло", img: "/img/sect/jew/pus/1.jpg" },
    { id: 33, name: (t && t("section.section6")) || "Соло + розсип", img: "/img/sect/jew/pus/2.jpg" },
    { id: 32, name: (t && t("section.section7")) || "Соло фантаз.діам", img: "/img/sect/jew/pus/3.jpg" },
    { id: 34, name: (t && t("section.section8")) || "Фантаз. з розсип", img: "/img/sect/jew/pus/4.jpg" },
    { id: 37, name: (t && t("section.section9")) || "Кольорові камні", img: "/img/sect/jew/pus/5.jpg" },
    { id: 36, name: (t && t("section.section22")) || "Без каменів", img: "/img/sect/jew/pus/6.jpg" },
  ];

  // Підкаталоги Для заручин
  const engagementSubCategories = [
    { id: 47, name: (t && t("section.section5")) || "Модель 1", img: "/img/sect/jew/1eng/1.jpg" },
    { id: 48, name: (t && t("section.section6")) || "Модель 2", img: "/img/sect/jew/1eng/2.jpg" },
    { id: 51, name: (t && t("section.section7")) || "Модель 3", img: "/img/sect/jew/1eng/3.jpg" },
    { id: 50, name: (t && t("section.section8")) || "Модель 4", img: "/img/sect/jew/1eng/4.jpg" },
    { id: 49, name: (t && t("section.section9")) || "Модель 5", img: "/img/sect/jew/1eng/5.jpg" },
  ];

  // Пагінація
  const totalPages = Math.max(1, Math.ceil(items.length / pageSize));
  const pagedItems = items.slice((page - 1) * pageSize, page * pageSize);
  const itemsToRender = pagedItems.slice(0, visibleCount);

  const startIndex = (page - 1) * pageSize + 1;
  const endIndex = startIndex + itemsToRender.length - 1;

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + rowSize, pagedItems.length));
  };

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
      setVisibleCount(pageSize);
      window.scrollTo(0, 0);
    }
  };

  const getPageNumbers = () => {
    const pages = [];
    const windowSize = 1;
    let start = Math.max(2, page - windowSize);
    let end = Math.min(totalPages - 1, page + windowSize);

    pages.push(1);
    if (start > 2) pages.push("...");
    for (let i = start; i <= end; i++) pages.push(i);
    if (end < totalPages - 1) pages.push("...");
    if (totalPages > 1) pages.push(totalPages);

    return pages;
  };

  return (
    <div className="Catalog">
      {/* Хлібні крихти */}
      <nav className="breadcrumbs">
        <Link to="/">Головна</Link>
        <span className="separator">›</span>
        <p>Каталог</p>
      </nav>

      <section className="catalog_section">
        {/* Sidebar */}
        <CatalogSidebar
          pusetSubCategories={pusetSubCategories}
          engagementSubCategories={engagementSubCategories}
          onCategorySelect={(id) => console.log("Обрана категорія:", id)}
        />

        {/* Сітка товарів */}
        <div className="catalog_grid">
          {itemsToRender.length > 0 ? (
            itemsToRender.map((item, idx) => (
              <Link
                key={item.id ?? idx}
                to={`/product/${item.id ?? idx}`}
                state={{ fromPage: page, scrollY: window.scrollY }} // 🔑 передаємо стан
                className="catalog_item"
              >
                <img
                  src={item.media_files?.[0]?.photo || "/img/noImg.png"}
                  alt={item.title || item.sku || `Прикраса ${idx + 1}`}
                  loading="lazy"
                />
              </Link>
            ))
          ) : (
            <p>Немає товарів у цій категорії</p>
          )}

          {/* Лічильник */}
          {itemsToRender.length > 0 && (
            <div className="catalog_counter">
              {startIndex}–{endIndex} товари з {items.length}
            </div>
          )}

          {/* Показати ще */}
          {visibleCount < pagedItems.length && (
            <div className="catalog_btn_wrap">
              <button className="catalog_btn" onClick={handleLoadMore}>
                Показати ще
              </button>
            </div>
          )}

          {/* Пагінація */}
          <div className="catalog_pagination">
            <button onClick={() => handlePageChange(page - 1)} disabled={page === 1}>
              ‹
            </button>
            {getPageNumbers().map((num, idx) =>
              num === "..." ? (
                <span key={idx} className="dots">…</span>
              ) : (
                <button
                  key={idx}
                  className={page === num ? "active" : ""}
                  onClick={() => handlePageChange(num)}
                >
                  {num}
                </button>
              )
            )}
            <button onClick={() => handlePageChange(page + 1)} disabled={page === totalPages}>
              ›
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
