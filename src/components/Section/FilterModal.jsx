// FilterModal.jsx - Модальне вікно з фільтрами
import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { t } from "i18next";
// import { initReactI18next } from 'react-i18next';

export const FilterModal = ({ 
  isOpen, 
  onClose, 
  onApply, 
  onReset,
  pusetSubCategories = [],
  engagementSubCategories = []
  
}) => {
  const { t } = useTranslation();
  
  const [selectedFilters, setSelectedFilters] = useState({
    categories: [],
    subcategories: [],
    materials: [],
    priceRange: { min: 0, max: 50000 },
    inStock: false
  });

  const [showPusetSub, setShowPusetSub] = useState(false);
  const [showEngagementSub, setShowEngagementSub] = useState(false);

  // Закриття по ESC
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  // Закриття по кліку поза модалкою
  const handleOverlayClick = (e) => {
    if (e.target.classList.contains('filter-modal')) {
      onClose();
    }
  };

  // Обробка зміни категорії
  const handleCategoryChange = (categoryId) => {
    setSelectedFilters(prev => {
      const categories = prev.categories.includes(categoryId)
        ? prev.categories.filter(id => id !== categoryId)
        : [...prev.categories, categoryId];
      
      return { ...prev, categories };
    });

    // Показати підкатегорії для спеціальних категорій
    if (categoryId === 'pusets') {
      setShowPusetSub(!showPusetSub);
    } else if (categoryId === 'engagement') {
      setShowEngagementSub(!showEngagementSub);
    }
  };

  // Обробка зміни підкатегорії
  const handleSubcategoryChange = (subcategoryId) => {
    setSelectedFilters(prev => {
      const subcategories = prev.subcategories.includes(subcategoryId)
        ? prev.subcategories.filter(id => id !== subcategoryId)
        : [...prev.subcategories, subcategoryId];
      
      return { ...prev, subcategories };
    });
  };

  // Обробка зміни матеріалу
  const handleMaterialChange = (material) => {
    setSelectedFilters(prev => {
      const materials = prev.materials.includes(material)
        ? prev.materials.filter(m => m !== material)
        : [...prev.materials, material];
      
      return { ...prev, materials };
    });
  };

  // Застосування фільтрів
  const handleApply = () => {
    const filters = [];
    
    // Додаємо активні фільтри
    selectedFilters.categories.forEach(cat => {
      filters.push({ type: 'category', value: cat });
    });
    
    selectedFilters.subcategories.forEach(sub => {
      filters.push({ type: 'subcategory', value: sub });
    });
    
    selectedFilters.materials.forEach(mat => {
      filters.push({ type: 'material', value: mat });
    });
    
    if (selectedFilters.inStock) {
      filters.push({ type: 'stock', value: 'inStock' });
    }

    onApply(filters);
  };

  // Скидання всіх фільтрів
  const handleReset = () => {
    setSelectedFilters({
      categories: [],
      subcategories: [],
      materials: [],
      priceRange: { min: 0, max: 50000 },
      inStock: false
    });
    setShowPusetSub(false);
    setShowEngagementSub(false);
    onReset();
  };

  if (!isOpen) return null;

  return (
    <div 
      className="filter-modal active" 
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="filter-modal-title"
    >
      <div className="filter-modal-content" onClick={(e) => e.stopPropagation()}>
        
        {/* Header */}
        <div className="filter-modal-header">
          <h2 className="filter-modal-title" id="filter-modal-title">
            {t("catalog.filters")}
          </h2>
          <button 
            className="filter-close-btn" 
            onClick={onClose}
            aria-label={t("catalog.close")}
          >
            ×
          </button>
        </div>

        {/* Body */}
        <div className="filter-modal-body">
          
          {/* Категорії */}
          <div className="filter-section">
            <h3 className="filter-section-title">
              {t("catalog.category")}
            </h3>
            <div className="filter-options">
              <label className="filter-option">
                <div className="filter-checkbox">
                  <input 
                    type="checkbox" 
                    checked={selectedFilters.categories.includes('rings')}
                    onChange={() => handleCategoryChange('rings')}
                  />
                  <span className="filter-checkbox-custom"></span>
                </div>
                <span className="filter-option-label">
                  {t("catalog.rings")}
                </span>
                <span className="filter-option-count">24</span>
              </label>

              <label className="filter-option">
                <div className="filter-checkbox">
                  <input 
                    type="checkbox"
                    checked={selectedFilters.categories.includes('earrings')}
                    onChange={() => handleCategoryChange('earrings')}
                  />
                  <span className="filter-checkbox-custom"></span>
                </div>
                <span className="filter-option-label">
                  {t("catalog.earrings")}
                </span>
                <span className="filter-option-count">18</span>
              </label>

              <label className="filter-option">
                <div className="filter-checkbox">
                  <input 
                    type="checkbox"
                    checked={selectedFilters.categories.includes('pendants')}
                    onChange={() => handleCategoryChange('pendants')}
                  />
                  <span className="filter-checkbox-custom"></span>
                </div>
                <span className="filter-option-label">
                  {t("catalog.pendants")}
                </span>
                <span className="filter-option-count">15</span>
              </label>

              <label className="filter-option">
                <div className="filter-checkbox">
                  <input 
                    type="checkbox"
                    checked={selectedFilters.categories.includes('pusets')}
                    onChange={() => handleCategoryChange('pusets')}
                  />
                  <span className="filter-checkbox-custom"></span>
                </div>
                <span className="filter-option-label">
                  {t("catalog.pusets")}
                </span>
                <span className="filter-option-count">32</span>
              </label>

              <label className="filter-option">
                <div className="filter-checkbox">
                  <input 
                    type="checkbox"
                    checked={selectedFilters.categories.includes('engagement')}
                    onChange={() => handleCategoryChange('engagement')}
                  />
                  <span className="filter-checkbox-custom"></span>
                </div>
                <span className="filter-option-label">
                  {t("catalog.engagement")}
                </span>
                <span className="filter-option-count">12</span>
              </label>
            </div>
          </div>

          {/* Підкатегорії Пусети */}
          {showPusetSub && pusetSubCategories.length > 0 && (
            <div className="filter-section">
              <h3 className="filter-section-title">
                {t("catalog.pusetTypes")}
              </h3>
              <div className="filter-subcategories">
                {pusetSubCategories.map(sub => (
                  <div 
                    key={sub.id}
                    className="filter-subcategory"
                    onClick={() => handleSubcategoryChange(sub.id)}
                    style={{
                      border: selectedFilters.subcategories.includes(sub.id) 
                        ? '3px solid var(--brown)' 
                        : 'none'
                    }}
                  >
                    {sub.img && <img src={sub.img} alt={sub.name} />}
                    <div className="filter-subcategory-name">{sub.name}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Підкатегорії Для заручин */}
          {showEngagementSub && engagementSubCategories.length > 0 && (
            <div className="filter-section">
              <h3 className="filter-section-title">
                {t("catalog.engagementTypes")}
              </h3>
              <div className="filter-subcategories">
                {engagementSubCategories.map(sub => (
                  <div 
                    key={sub.id}
                    className="filter-subcategory"
                    onClick={() => handleSubcategoryChange(sub.id)}
                    style={{
                      border: selectedFilters.subcategories.includes(sub.id) 
                        ? '3px solid var(--brown)' 
                        : 'none'
                    }}
                  >
                    {sub.img && <img src={sub.img} alt={sub.name} />}
                    <div className="filter-subcategory-name">{sub.name}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Матеріал */}
          <div className="filter-section">
            <h3 className="filter-section-title">
              {t("catalog.material")}
            </h3>
            <div className="filter-options">
              <label className="filter-option">
                <div className="filter-checkbox">
                  <input 
                    type="checkbox"
                    checked={selectedFilters.materials.includes('silver925')}
                    onChange={() => handleMaterialChange('silver925')}
                  />
                  <span className="filter-checkbox-custom"></span>
                </div>
                <span className="filter-option-label">
                  {t("catalog.silver925")}
                </span>
                <span className="filter-option-count">45</span>
              </label>

              <label className="filter-option">
                <div className="filter-checkbox">
                  <input 
                    type="checkbox"
                    checked={selectedFilters.materials.includes('gold585')}
                    onChange={() => handleMaterialChange('gold585')}
                  />
                  <span className="filter-checkbox-custom"></span>
                </div>
                <span className="filter-option-label">
                  {t("catalog.gold585")}
                </span>
                <span className="filter-option-count">28</span>
              </label>

              <label className="filter-option">
                <div className="filter-checkbox">
                  <input 
                    type="checkbox"
                    checked={selectedFilters.materials.includes('gold750')}
                    onChange={() => handleMaterialChange('gold750')}
                  />
                  <span className="filter-checkbox-custom"></span>
                </div>
                <span className="filter-option-label">
                  {t("catalog.gold750")}
                </span>
                <span className="filter-option-count">12</span>
              </label>
            </div>
          </div>

          {/* Наявність */}
          <div className="filter-section">
            <h3 className="filter-section-title">
              {t("catalog.availability")}
            </h3>
            <div className="filter-options">
              <label className="filter-option">
                <div className="filter-checkbox">
                  <input 
                    type="checkbox"
                    checked={selectedFilters.inStock}
                    onChange={(e) => setSelectedFilters(prev => ({
                      ...prev,
                      inStock: e.target.checked
                    }))}
                  />
                  <span className="filter-checkbox-custom"></span>
                </div>
                <span className="filter-option-label">
                  {t("catalog.inStock")}
                </span>
                <span className="filter-option-count">68</span>
              </label>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="filter-modal-footer">
          <button className="filter-reset-btn" onClick={handleReset}>
            {t("catalog.reset")}
          </button>
          <button className="filter-apply-btn" onClick={handleApply}>
            {t("catalog.apply")}
          </button>
        </div>

      </div>
    </div>
  );
};