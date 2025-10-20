import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CatalogSidebar } from "../CatalogSidebar";

export const Engagement = ({ t }) => {
  const navigate = useNavigate();

  const rowSize = 8;
  const rowsPerPage = 3;
  const pageSize = rowSize * rowsPerPage; // 24

  const [page, setPage] = useState(1);
  const [visibleCount, setVisibleCount] = useState(pageSize);

  

  const engagementSubCategories = [
    { id: 47, name: t("section.section5"), img: "/img/sect/jew/1eng/1.jpg" },
    { id: 48, name: t("section.section6"), img: "/img/sect/jew/1eng/2.jpg" },
    { id: 51, name: t("section.section7"), img: "/img/sect/jew/1eng/3.jpg" },
    { id: 50, name: t("section.section8"), img: "/img/sect/jew/1eng/4.jpg" },
    { id: 49, name: t("section.section9"), img: "/img/sect/jew/1eng/5.jpg" },
  ];

  const totalPages = Math.ceil(subCategories.length / pageSize);
  const pagedItems = subCategories.slice((page - 1) * pageSize, page * pageSize);
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
    <div className="subInner-container">
      {/* Хлібні крихти */}
      <nav className="breadcrumbs">
        <Link to="/">Головна</Link>
        <span className="separator">›</span>
        <Link to="/catalog">Каталог</Link>
        <span className="separator">›</span>
        <p>Для заручин</p>
      </nav>

      <section className="catalog_section">
        {/* Sidebar */}
                 <CatalogSidebar
                  // pusetSubCategories={pusetSubCategories}
                  engagementSubCategories={engagementSubCategories}
                  onCategorySelect={(id) => console.log("Обрана категорія:", id)}
                />

        {/* Сітка підкаталогів */}
        <div className="catalog_grid">
          {itemsToRender.map((sub) => (
            <Link key={sub.id} to={`/Inner/${sub.id}`} className="catalog_item">
              <img loading="lazy" src={sub.img} alt={sub.name} />
              <div className="subInner-info-text"></div>
            </Link>
          ))}

          {/* Лічильник */}
          <div className="catalog_counter">
            {startIndex}–{endIndex} з {subCategories.length}
          </div>

          {/* Кнопка “Показати ще” */}
          {visibleCount < pagedItems.length && (
            <div className="catalog_btn_wrap">
              <button className="catalog_btn" onClick={handleLoadMore}>
                Показати ще
              </button>
            </div>
          )}

          {/* Пагінація */}
          <div className="catalog_pagination">
            <button
              onClick={() => handlePageChange(page - 1)}
              disabled={page === 1}
            >
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
            <button
              onClick={() => handlePageChange(page + 1)}
              disabled={page === totalPages}
            >
              ›
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
