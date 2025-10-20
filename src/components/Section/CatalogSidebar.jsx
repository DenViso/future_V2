// src/components/CatalogSidebar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";

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
      <h4>Тип прикрас:</h4>
      <p>Жіночі</p>

      <ul>
        <li><Link to="/Women/Inner/39">Каблучки</Link></li>
        <li><Link to="/Women/Inner/26">Браслети</Link></li>
        <li><Link to="/Women/Inner/29">Підвіски</Link></li>
        <li><Link to="/Women/Inner/31">Хрестики</Link></li>
        <li><Link to="/Women/Inner/28">Сережки</Link></li>

        
         

        <li><Link to="/Women/Inner/30">Доріжка</Link></li>
        <li><Link to="/Women/Inner/27">Ланцюг</Link></li>
      </ul>

      <div className="horizontal"></div>

      <p>Чоловічі</p>
      <ul>
        <li><Link to="/Men/Inner/41">Персні</Link></li>
        <li><Link to="/Men/Inner/43">Ланцюжки</Link></li>
        <li><Link to="/Men/Inner/44">Браслети</Link></li>
        <li><Link to="/Men/Inner/45">Хрестики</Link></li>
        <li><Link to="/Men/Inner/42">Інше</Link></li>
      </ul>

      <div className="horizontal"></div>

      {/* Puset dropdown */}
     
             <button
            type="button"
            onClick={() => setIsPusetOpen(v => !v)}
            className="dropdown_btn"
          >
            Пусет {isPusetOpen ? "▲" : "▼"}
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
        Для заручин {isEngagementOpen ? "▲" : "▼"}
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
      <Link to="/Inner/53">Обручки</Link>
    </aside>
  );
};
