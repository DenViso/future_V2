// src/components/CatalogSidebar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { t } from "i18next";

export const CatalogSidebar = ({
  pusetSubCategories = [],
  engagementSubCategories = [],
  onCategorySelect // optional
}) => {
  const [isPusetOpen, setIsPusetOpen] = useState(false);
  const [isEngagementOpen, setIsEngagementOpen] = useState(false);

  const handleSubClick = (id) => {
    if (typeof onCategorySelect === "function") onCategorySelect(id);
    // Note: navigation is handled by <Link>, so we don't call navigate here.
  };

  return (
    <aside className="catalog_sidebar">
      <h4>{t("section.title")}</h4>
      <p>{t("section.woman")}</p>

      <ul>
        <li><Link to="/Women/Inner/39">{t("section.section3")}</Link></li>
        <li><Link to="/Women/Inner/26"> {t("section.section7")}</Link></li>
        <li><Link to="/Women/Inner/29"> {t("section.section15")}</Link></li>
        <li><Link to="/Women/Inner/31"> {t("section.section14")}</Link></li>
        <li><Link to="/Women/Inner/28"> {t("section.section13")}</Link></li>

        
         

        <li><Link to="/Women/Inner/30"> {t("section.section11")}</Link></li>
        <li><Link to="/Women/Inner/27">{t("section.section16")}</Link></li>
      </ul>

      <div className="horizontal"></div>

      <p>{t("section.man")}</p>
      <ul>
        <li><Link to="/Men/Inner/41"> {t("section.section19")}</Link></li>
        <li><Link to="/Men/Inner/43"> {t("section.section16")}</Link></li>
        <li><Link to="/Men/Inner/44"> {t("section.section17")}</Link></li>
        <li><Link to="/Men/Inner/45"> {t("section.section14")}</Link></li>
        <li><Link to="/Men/Inner/42">{t("section.section18")}</Link></li>
      </ul>

      <div className="horizontal"></div>

      {/* Puset dropdown */}
     
             <button
            type="button"
            onClick={() => setIsPusetOpen(v => !v)}
            className="dropdown_btn"
          >
           {t("section.section12")} {isPusetOpen ? "▲" : "▼"}
          </button>

          {isPusetOpen && (
            <ul className="dropdown_list dropdown_list2">
              {pusetSubCategories.map(sub => (
                <li key={sub.id}>
                  {/* Link гарантує навігацію */}
                  <Link
                    to={`/Inner/${sub.id}`}
                    className="dropdown_item"
                    onClick={() => handleSubClick(sub.id)}
                  >
                
                    <span>{sub.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        
      <div className="horizontal"></div>

      {/* Engagement dropdown */}
      <button
        type="button"
        onClick={() => setIsEngagementOpen(v => !v)}
        className="dropdown_btn"
      >
        {t("section.section1")} {isEngagementOpen ? "▲" : "▼"}
      </button>

      {isEngagementOpen && (
        <ul className="dropdown_list dropdown_list2">
          {engagementSubCategories.map(sub => (
            <li key={sub.id}>
              <Link
                to={`/Inner/${sub.id}`}
                className="dropdown_item"
                onClick={() => handleSubClick(sub.id)}
              >
                
                <span>{sub.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      )}

      <div className="horizontal"></div>
      <Link to="/Inner/53">{t("section.section2")}</Link>
    </aside>
  );
};
