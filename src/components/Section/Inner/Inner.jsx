import React, { useState, useEffect } from "react";
import { Loader } from "../SubSection/Loader";
import { useParams, Link, useNavigate } from "react-router-dom";

export const Inner = ({ t, cat1, usdRate }) => {
  const navigate = useNavigate();
  const { paramValue } = useParams();

  const rowSize = 8;
  const rowsPerPage = 3;
  const pageSize = rowSize * rowsPerPage; // 24

  const [page, setPage] = useState(1);
  const [visibleCount, setVisibleCount] = useState(pageSize);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [loading, setLoading] = useState(true);

  const [isPusetOpen, setIsPusetOpen] = useState(false);
  const [isEngagementOpen, setIsEngagementOpen] = useState(false);

  // Пусет
  const subCategories = [
    { id: "35", name: t("section.section5"), img: "/img/sect/jew/pus/1.jpg" },
    { id: "33", name: t("section.section6"), img: "/img/sect/jew/pus/2.jpg" },
    { id: "32", name: t("section.section7"), img: "/img/sect/jew/pus/3.jpg" },
    { id: "34", name: t("section.section8"), img: "/img/sect/jew/pus/4.jpg" },
    { id: "37", name: t("section.section9"), img: "/img/sect/jew/pus/5.jpg" },
    { id: "36", name: t("section.section22"), img: "/img/sect/jew/pus/6.jpg" },
  ];

  // Engagement
  const engagementSubCategories = [
    { id: "47", name: t("section.section5"), img: "/img/sect/jew/1eng/1.jpg" },
    { id: "48", name: t("section.section6"), img: "/img/sect/jew/1eng/2.jpg" },
    { id: "51", name: t("section.section7"), img: "/img/sect/jew/1eng/3.jpg" },
    { id: "50", name: t("section.section8"), img: "/img/sect/jew/1eng/4.jpg" },
    { id: "49", name: t("section.section9"), img: "/img/sect/jew/1eng/5.jpg" },
  ];

  // Мапа категорій
  const categoryMap = {
    39: t("section.section10"),
    26: t("section.section17"),
    29: t("section.section15"),
    31: t("section.section14"),
    28: t("section.section13"),
    30: t("section.section11"),
    27: t("section.section16"),
    41: t("section.section19"),
    43: t("section.section16"),
    44: t("section.section20"),
    45: t("section.section21"),
    42: t("section.section18"),
    53: t("section.section2"),
    ...Object.fromEntries(subCategories.map((s) => [s.id, s.name])),
    ...Object.fromEntries(engagementSubCategories.map((s) => [s.id, s.name])),
  };

  // Лоадер
  useEffect(() => {
    const delay = setTimeout(() => setLoading(false), 300);
    return () => clearTimeout(delay);
  }, [paramValue]);

  // Синхронізація paramValue → selectedCategory
  useEffect(() => {
    if (paramValue) {
      const id = String(paramValue);
      const name = categoryMap[id] || "Невідома категорія";

      // визначаємо групу
      let group = "default";
      if (subCategories.some((s) => s.id === id)) group = "puset";
      if (engagementSubCategories.some((s) => s.id === id)) group = "engagement";

      setSelectedCategory({ id, name, group });
      setPage(1);
      setVisibleCount(pageSize);
    }
  }, [paramValue]);

  if (loading) return <Loader />;

  // Фільтруємо товари
  const filteredItems = selectedCategory
    ? cat1.filter((item) => String(item.category) === selectedCategory.id)
    : [];

  const totalPages = Math.ceil(filteredItems.length / pageSize);
  const pagedItems = filteredItems.slice((page - 1) * pageSize, page * pageSize);
  const itemsToRender = pagedItems.slice(0, visibleCount);

  const startIndex = (page - 1) * pageSize + 1;
  const endIndex = startIndex + itemsToRender.length - 1;

  // Зміна сторінки
  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
      setVisibleCount(pageSize);
      window.scrollTo(0, 0);
    }
  };

  // Показати ще
  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + rowSize, pagedItems.length));
  };

  // Вибір категорії
  const handleCategorySelect = (id, group = "default") => {
    navigate(`/Inner/${id}`);
    const categoryId = String(id);
    const categoryName = categoryMap[categoryId] || "Невідома категорія";
    setSelectedCategory({ id: categoryId, name: categoryName, group });
    setPage(1);
    setVisibleCount(pageSize);
    setIsPusetOpen(false);
    setIsEngagementOpen(false);
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
        <Link to="/">{t("main.title")}</Link>
        <span className="separator">›</span>
        <Link to="/catalog">{t("main.catalog")}</Link>

        {selectedCategory && (
          <>
            {selectedCategory.group === "puset" && (
              <>
                <span className="separator">›</span>
                <p>{t("section.section12")}</p>
              </>
            )}

            {selectedCategory.group === "engagement" && (
              <>
                <span className="separator">›</span>
                <p>{t("section.section1")}</p>
              </>
            )}

            <span className="separator">›</span>
            <p>{selectedCategory.name}</p>
          </>
        )}
      </nav>

      <section className="catalog_section">
        {/* Sidebar */}
        <aside className="catalog_sidebar">
          <h4>{t("section.title")}</h4>
          <p>{t("section.woman")}</p>
          <ul>
            <li onClick={() => handleCategorySelect("39")}>{t("section.section10")}</li>
            <li onClick={() => handleCategorySelect("26")}>{t("section.section17")}</li>
            <li onClick={() => handleCategorySelect("29")}>{t("section.section15")}</li>
            <li onClick={() => handleCategorySelect("31")}>{t("section.section14")}</li>
            <li onClick={() => handleCategorySelect("28")}>{t("section.section13")}</li>
            <li onClick={() => handleCategorySelect("30")}>{t("section.section11")}</li>
            <li onClick={() => handleCategorySelect("27")}>{t("section.section16")}</li>
          </ul>

          <div className="horizontal"></div>
          <p>{t("section.man")}</p>
          <ul>
            <li onClick={() => handleCategorySelect("41")}>{t("section.section19")}</li>
            <li onClick={() => handleCategorySelect("43")}>{t("section.section16")}</li>
            <li onClick={() => handleCategorySelect("44")}>{t("section.section20")}</li>
            <li onClick={() => handleCategorySelect("45")}>{t("section.section21")}</li>
            <li onClick={() => handleCategorySelect("42")}>{t("section.section18")}</li>
          </ul>

          <div className="horizontal"></div>

          <button onClick={() => setIsPusetOpen(!isPusetOpen)} className="dropdown_btn">
           {t("section.section12")} {isPusetOpen ? "▲" : "▼"}
          </button>
          {isPusetOpen && (
            <ul className="dropdown_list dropdown_list2">
              {subCategories.map((sub) => (
                <li key={sub.id}>
                  <button
                    onClick={() => handleCategorySelect(sub.id, "puset")}
                    className="dropdown_item"
                  >
                    <span>{sub.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          )}

          <div className="horizontal"></div>

          <button onClick={() => setIsEngagementOpen(!isEngagementOpen)} className="dropdown_btn">
            {t("section.section1")} {isEngagementOpen ? "▲" : "▼"}
          </button>
          {isEngagementOpen && (
            <ul className="dropdown_list dropdown_list2">
              {engagementSubCategories.map((sub) => (
                <li key={sub.id}>
                  <button
                    onClick={() => handleCategorySelect(sub.id, "engagement")}
                    className="dropdown_item"
                  >
                    <span>{sub.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          )}

          <div className="horizontal"></div>
          <li onClick={() => handleCategorySelect("53")}>{t("section.section2")}</li>
        </aside>

        {/* Сітка товарів */}
        <div className="catalog_grid">
          {itemsToRender.map((product) => (
            <div key={product.id} onClick={() => navigate(`/product/${product.id}`)}>
              <div className="catalog_item">
                <img
                  loading="lazy"
                  src={product.media_files?.[0]?.photo || "/img/noImg.png"}
                  alt={product.sku}
                />
              </div>
            </div>
          ))}

          {/* Лічильник */}
          {filteredItems.length > 0 && (
            <div className="catalog_counter">
              {startIndex}–{endIndex} товари з {filteredItems.length}
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
          {totalPages > 1 && (
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
          )}
        </div>
      </section>
    </div>
  );
};
