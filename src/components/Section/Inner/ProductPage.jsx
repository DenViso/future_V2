import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

import "../inner.css";




const subCategories = [];

export const ProductPage = ({ cat1, usdRate, t }) => {
  const { productId } = useParams();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isLiked, setIsLiked] = useState(false);
  const [likedProducts, setLikedProducts] = useState([]);
  const [mainMedia, setMainMedia] = useState(null);

 const categories = [
  { id: 39, name: t("section.section10") },
  { id: 26, name: t("section.section17") },
  { id: 29, name: t("section.section15") },
  { id: 31, name: t("section.section14") },
  { id: 28, name: t("section.section13") },
  { id: 30, name: t("section.section11") },
  { id: 27, name: t("section.section16") },
  { id: 53, name: t("section.section2") },
  { id: 35, name: `${t("section.section12")} > ${t("section.section5")}` },
  { id: 33, name: `${t("section.section12")} > ${t("section.section6")}` },
  { id: 32, name: `${t("section.section12")} > ${t("section.section7")}` },
  { id: 34, name: `${t("section.section12")} > ${t("section.section8")}` },
  { id: 36, name: `${t("section.section12")} > ${t("section.section22")}` },
  { id: 37, name: `${t("section.section12")} > ${t("section.section9")}` },
  { id: 48, name: `${t("section.section1")} > ${t("section.section6")}` },
  { id: 51, name: `${t("section.section1")} > ${t("section.section7")}` },
  { id: 50, name: `${t("section.section1")} > ${t("section.section8")}` },
  { id: 49, name: `${t("section.section1")} > ${t("section.section9")}` },
  { id: 47, name: `${t("section.section1")} > ${t("section.section5")}` },
  { id: 41, name: `${t("section.man")} > ${t("section.section19")}` },
  { id: 43, name: `${t("section.man")} > ${t("section.section16")}` },
  { id: 44, name: `${t("section.man")} > ${t("section.section17")}` },
  { id: 45, name: `${t("section.man")} > ${t("section.section14")}` },
  { id: 42, name: `${t("section.man")} > ${t("section.section18")}` },
];
  cat1 = Array.isArray(cat1) ? cat1 : [];

  // Завантаження продукту
  useEffect(() => {
    const product = cat1.find((p) => p.id === parseInt(productId, 10)) || null;
    if (product) {
      setSelectedProduct(product);
      setMainMedia(product.media_files?.[0] || null);
    }
  }, [productId, cat1]);

  // Лайки з localStorage
  useEffect(() => {
    const storedLikes = localStorage.getItem("likedProducts");
    if (storedLikes) {
      setLikedProducts(JSON.parse(storedLikes));
    }
  }, []);

  // Чи лайкнутий продукт
  useEffect(() => {
    if (selectedProduct) {
      setIsLiked(likedProducts.some((p) => p.id === selectedProduct.id));
    }
  }, [selectedProduct, likedProducts]);

  if (!selectedProduct) {
    return <div>{t("noProductsFound")}</div>;
  }

  // Категорія і підкатегорія
  const category =
    categories.find((c) => c.id === selectedProduct.category) || null;

  let categoryName = "Невідома категорія";
  let subCatName = "";

  if (category) {
    if (category.name.includes(">")) {
      const parts = category.name.split(">").map((s) => s.trim());
      categoryName = parts[0];
      subCatName = parts[1] || "";
    } else {
      categoryName = category.name;
    }
  }

  const subCategory =
    subCategories.find((s) => s.id === selectedProduct.subcategory) || null;

  if (subCategory) {
    subCatName = subCategory.name; // fallback, якщо будуть subCategories
  }

  // Для breadcrumbs беремо оригінальне ім’я
  const breadcrumbCategoryName = category
    ? category.name
    : "Невідома категорія";

  return (
    <div className="product-page ">
      {/* Хлібні крихти */}
      <nav className="breadcrumbs">
        <Link to="/">{t("main.title")}</Link>
        <span className="separator">›</span>
        <Link to="/catalog">{t("main.catalog")}</Link>

        {category && (
          <>
            <span className="separator">›</span>
            {breadcrumbCategoryName ? (
              <Link to={`/inner/${selectedProduct.category}`}>
                {breadcrumbCategoryName}
              </Link>
            ) : (
              <Link to={`/Men/inner/${selectedProduct.category}`}>
                {breadcrumbCategoryName}
              </Link>
            )}
          </>
        )}

        {subCategory && (
          <>
            <span className="separator">›</span>
            <Link
              to={`/${selectedProduct.category}/${selectedProduct.subcategory}`}
            >
              {subCategory.name}
            </Link>
          </>
        )}

        <span className="separator">›</span>
        <p className="current">{selectedProduct.name || selectedProduct.sku}</p>
      </nav>

      <div className="modal-content">
        <div className="modal_conteiner_img">
          {/* Основне зображення/відео */}
          <div className="main-media">
            {mainMedia?.photo ? (
              <img src={mainMedia.photo} alt="Main" className="main-img" />
            ) : (
              mainMedia?.video && (
                <video
                  src={mainMedia.video}
                  className="main-video"
                  autoPlay
                  controls
                />
              )
            )}
          </div>

          {/* Галерея прев’ю */}
          <div className="media-thumbnails">
            {selectedProduct.media_files?.map((item) => (
              <button
                key={item.id}
                className="thumbnail"
                onClick={() => setMainMedia(item)}
              >
                {item.photo && (
                  <img
                    src={item.photo}
                    alt="Preview"
                    className="thumbnail-img"
                  />
                )}
                {item.video && (
                  <video
                    src={item.video}
                    className="thumbnail-video "
                    muted
                    playsInline
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Інфо про товар */}
        <div className="modal-info">
          <div className="main_section1_text product_page_text">
            <h2>
              {categoryName}{" "}
              <span style={{ color: "#8E1145" }}>{subCatName}</span>
            </h2>
            <span>{t("pp.p1")}</span>
          </div>

          <div className="modal_characteristic">
            <span>{t("pp.art")} {selectedProduct.sku}</span>
            <h3>{t("pp.h1")}</h3>
            <ul>
              <li>
                <p>{t("pp.p2")}</p>
              </li>
              <li>
                <p>{t("pp.p3")}</p>
              </li>
              <li>
                <p>{t("pp.p4")}</p>
              </li>
            </ul>

            <h3>{t("pp.h2")}</h3>
            <p>{t("pp.p5")}</p>

            <h3>{t("pp.h3")}</h3>
            <p>
              {t("pp.p6")}
            </p>

            <h3>{t("pp.h4")}</h3>
            <ul>
              <li>
                <p>
                  {t("pp.p7")}
                </p>
              </li>
              <li>
                <p>{t("pp.p7.1")}</p>
              </li>
            </ul>

            <div className="modal_characteristic_drop">
              {selectedProduct.gold_assay && (
                <p>
                  <span>{t("product.p1")}</span> {selectedProduct.gold_assay}
                </p>
              )}
              {selectedProduct.gold_color && (
                <p>
                  <span>{t("product.p2")}</span> {selectedProduct.gold_color}
                </p>
              )}
              {selectedProduct.size && (
                <p>
                  <span>{t("product.p3")}</span> {selectedProduct.size}
                </p>
              )}
              {selectedProduct.weight && (
                <p>
                  <span>{t("product.p4")}</span> {selectedProduct.weight}
                </p>
              )}
              {selectedProduct.stone_characteristics && (
                <p>
                  <span>{t("product.p5")}</span>{" "}
                  {selectedProduct.stone_characteristics}
                </p>
              )}
              {selectedProduct.certificate && (
                <p>
                  <span>{t("product.p8")}</span>: {selectedProduct.certificate}
                </p>
              )}
              {usdRate && selectedProduct.price && (
                <p>
                  <span>{t("product.p6")}</span>{" "}
                  {(selectedProduct.price * usdRate).toFixed(2)}{" "}
                  {t("product.p7")}
                </p>
              )}
            </div>

            <button className="main_section4_btn modal_characteristic_btn">
              {t("btn.sp")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
