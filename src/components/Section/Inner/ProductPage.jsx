import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "../inner.css";

const categories = [
  { id: 39, name: "Каблучки" },
  { id: 26, name: "Браслети" },
  { id: 29, name: "Підвіски" },
  { id: 31, name: "Хрестики" },
  { id: 28, name: "Сережки" },
  { id: 30, name: "Доріжка" },
  { id: 27, name: "Ланцюг" },
  { id: 53, name: "Обручки" },
  { id: 35, name: "Пусет > Соло" },
  { id: 33, name: "Пусет > Соло розсип" },
  { id: 32, name: "Пусет > Фантазія соло" },
  { id: 34, name: "Пусет > Фантазія розсип" },
  { id: 36, name: "Пусет > Без каміння" },
  { id: 37, name: "Пусет > Кольорові " },
  { id: 48, name: "Для заручин > Соло розсип" },
  { id: 51, name: "Для заручин > Фантазія соло " },
  { id: 50, name: "Для заручин > Фантазія розсип " },
  { id: 49, name: "Для заручин > Кольорові " },
  { id: 47, name: "Для заручин > Соло " },
  { id: 41, name: "Чоловічі > Персні" },
  { id: 43, name: "Чоловічі > Ланцюжки" },
  { id: 44, name: "Чоловічі > Браслети" },
  { id: 45, name: "Чоловічі > Хрестики" },
  { id: 42, name: "Чоловічі > Інше" },
];

const subCategories = [];

export const ProductPage = ({ cat1, usdRate, t }) => {
  const { productId } = useParams();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isLiked, setIsLiked] = useState(false);
  const [likedProducts, setLikedProducts] = useState([]);
  const [mainMedia, setMainMedia] = useState(null);

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
  const breadcrumbCategoryName = category ? category.name : "Невідома категорія";

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
        <p className="current">
          {selectedProduct.name || selectedProduct.sku}
        </p>
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
            <span>Створена вручну — з повагою до кожної деталі.</span>
          </div>

          <div className="modal_characteristic">
            <span>Артикул: {selectedProduct.sku}</span>
            <h3>Що варто знати:</h3>
            <ul>
              <li>
                <p>Можливе виготовлення в білому, рожевому чи жовтому золоті</p>
              </li>
              <li>
                <p>Можемо адаптувати під інші вставки (на запит)</p>
              </li>
              <li>
                <p>Можливе виготовлення з вашого золота</p>
              </li>
            </ul>

            <h3>Термін виготовлення:</h3>
            <p>7–20 робочих днів</p>

            <h3>Замовлення:</h3>
            <p>
              Ми створимо цю прикрасу саме під вас. Залиште заявку — ми
              зв’яжемось для уточнення деталей, підбору розміру та матеріалів.
            </p>

            <h3>Гарантія:</h3>
            <ul>
              <li>
                <p>Безкоштовне обслуговування всіх виробів, виготовлених у нас</p>
              </li>
              <li>
                <p>Якщо виріб потребує ремонту — ми завжди допоможемо</p>
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
              Обговорити замовлення
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
