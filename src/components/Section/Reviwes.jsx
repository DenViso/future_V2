import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../App.css";

export const Reviwes = ({ t }) => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [visibleCount, setVisibleCount] = useState(9);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [visibleForm, setVisibleForm] = useState(false);

  // стан форми
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    text: "",
    rating: 5,
    consent: false,
    file: null,
  });
  const [errors, setErrors] = useState({});
  const resetFormData = () => {
    setFormData({
      name: "",
      phone: "",
      text: "",
      rating: 5,
      consent: false,
      file: null,
    });
  };
  useEffect(() => {
    let mounted = true;
    const controller = new AbortController();

    const fetchReviews = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch("https://api.future.in.ua/api/v1/reviews/", {
          signal: controller.signal,
        });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();

        if (Array.isArray(data)) {
          if (mounted) {
            setFeedbacks(data);
            localStorage.setItem("feedbacks", JSON.stringify(data));
          }
        } else {
          throw new Error("Invalid data format");
        }
      } catch (err) {
        console.error("Error fetching feedbacks:", err);
        setError(err.message);
        const saved = localStorage.getItem("feedbacks");
        if (saved && mounted) setFeedbacks(JSON.parse(saved));
      } finally {
        if (mounted) setLoading(false);
      }
    };

    fetchReviews();

    return () => {
      mounted = false;
      controller.abort();
    };
  }, []);

  const loadMore = () => setVisibleCount((p) => p + 9);
  const visible = feedbacks.slice(0, visibleCount);

  // валідація
  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = "Вкажіть імʼя";
    // if (!formData.phone.trim()) errs.phone = "Вкажіть телефон";
    if (!formData.text.trim()) errs.text = "Напишіть відгук";
    if (formData.rating === 0) errs.rating = "Оберіть оцінку";
    if (!formData.consent) errs.consent = "Потрібна згода";
    return errs;
  };

  // submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      try {
        const fd = new FormData();
        fd.append("name", formData.name);
        fd.append("phone", formData.phone);
        fd.append("text", formData.text);
        fd.append("rating", formData.rating);
        if (formData.file) fd.append("file", formData.file);

        const res = await fetch("https://api.future.in.ua/api/v1/reviews/", {
          method: "POST",
          body: fd,
        });

        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();

        alert("✅ Ваш відгук надіслано!");
        console.log("success:", data);

        setFormData({
          name: "",
          phone: "",
          text: "",
          rating: 0,
          consent: false,
          file: null,
        });
        resetFormData();
        setVisibleForm(false); // Закриваємо форму після успішної відправки
      } catch (err) {
        console.error("Помилка при відправці:", err);
        alert("❌ Сталася помилка");
      }
    }
  };
  const handleClose = () => {
    console.log("Закриття форми");
    setVisibleForm(false);
    setErrors({});
    resetFormData();
  };

  return (
    <div className="reviwes">
      {/* Хлібні крихти */}
      <nav className="breadcrumbs">
        <Link to="/">{t("main.title")}</Link> <span className="separator">›</span>
        <p>{t("main.reviews")}</p>
      </nav>

      <div className="section2_text position_rew">
        <h2 className="care_info_head">
          <span>{t("main.reviews")}</span> {t("rev.h1")}
        </h2>
        <div className="rew_text_but">
          <p className="rew_info_p">
           {t("rev.p1")}
          </p>
          <button
            onClick={() => {
              setVisibleForm(true);
              setTimeout(() => {
                document
                  .querySelector(".rew_card")
                  ?.scrollIntoView({ behavior: "smooth" });
              }, 100);
            }}
            className="reviwes-button"
          >
            {t("btn.review")}
          </button>
        </div>
      </div>

      {loading && <p>Завантаження...</p>}
      {error && <p style={{ color: "red" }}>Помилка: {error}</p>}
      <div
        className="revswesImg"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 20,
          marginTop: 20,
        }}
      >
        {visible.length === 0 && !loading && (
          <div style={{ gridColumn: "1/-1" }}>Немає відгуків</div>
        )}

        {visible.map((fb) => (
          <div key={fb.id} className="main_section8_card rewiew-card">
            <div className="card_header">
              <div className="header_icon">
                {fb.photo ? (
                  <img src={fb.photo} alt={fb.name} />
                ) : (
                  <img src="/new_img/logo/gIcon.png" alt="hero_img" />
                )}
                <strong className="header_name">{fb.name}</strong>
              </div>

              <div className="header_star">
                <div className="star">
                  {[1, 2, 3, 4, 5].map((s) => {
                    // Якщо error є, показуємо повну зірку без ключа (кей), або можна додати key, якщо потрібно
                    if (error) {
                      return (
                        <img
                          key={s}
                          src="/new_img/hero_main/star_full.png"
                          alt="star"
                        />
                      );
                    }

                    // Якщо fb.rating відсутній або 0, показуємо всі зірки повними
                    if (!fb.rating || fb.rating === 0) {
                      return (
                        <img
                          key={s}
                          src="/new_img/hero_main/star_full.png"
                          alt="star"
                        />
                      );
                    }

                    // Інакше, лінійно показуємо повні чи порожні зірки
                    return (
                      <img
                        key={s}
                        src={
                          fb.rating >= s
                            ? "/new_img/hero_main/star_full.png"
                            : "/new_img/hero_main/star_empty.png"
                        }
                        alt="star"
                      />
                    );
                  })}
                </div>
              </div>
            </div>

            <p className="card_text">{fb.text}</p>
            {fb.created_at && (
              <small>
                {new Date(fb.created_at).toLocaleDateString("uk-UA")}
              </small>
            )}
          </div>
        ))}
      </div>

      {/* Лічильник та кнопка завантажити ще */}
      <div style={{ textAlign: "center", marginTop: 20 }}>
        <p style={{ marginBottom: 12, fontSize: 14, color: "#a0a0a0" }}>
          {`1-${visible.length} відгуки з ${feedbacks.length}`}
        </p>
        {visibleCount < feedbacks.length && (
          <button
            onClick={loadMore}
            disabled={loading}
            className="reviwes-button"
          >
            {t?.("reviwes.loadMore") ?? "Показати ще"}
          </button>
        )}
      </div>
      {/* {visibleForm ? " active_card" : "rew_card"} */}
      {/* _________________________________Форма____________________________________ */}
      <div className={visibleForm ? " rew_card" : "active_card"}>
        <div className="rew_card_conteiner">
          <div className="rew_card_header">
            <button
              onClick={() => {
                if (!loading) handleClose();
              }}
            >
              <img src="/new_img/hero_main/crest.png" alt="" />
            </button>
            <h2>Залишити відгук</h2>
          </div>

          <form onSubmit={handleSubmit} className="rew_form">
            <label>Імʼя</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              placeholder="Введіть імʼя"
            />
            {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}

            <label>Телефон</label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              placeholder="Введіть телефон"
            />
            {errors.phone && <p style={{ color: "red" }}>{errors.phone}</p>}

            <label>Ваш відгук</label>

      <div style={{ position: "relative",width: "100%",height: "70px", backgroundColor: "transparent" }}>
  <textarea
    value={formData.text}
    onChange={(e) => {
      const text = e.target.value;
      if (text.length <= 274) {
        setFormData({ ...formData, text });
      } else {
        setFormData({ ...formData, text: text.substring(0, 274) });
      }
    }}
    placeholder="Напишіть відгук"
    maxLength={274}
    style={{ backgroundColor: "transparent" }}
  />
  <div
    style={{
      position: "absolute",
      right: 8,
      bottom: 4,
      fontSize: 12,
      color: "#666",
      userSelect: "none",
    }}
  >
    {formData.text.length} / 274
  </div>
</div>

            {errors.text && <p style={{ color: "red" }}>{errors.text}</p>}

            <label>Оцініть досвід</label>
            <div className="rating">
              {[1, 2, 3, 4, 5].map((star) => (
                <img
                  key={star}
                  src={
                    formData.rating >= star
                      ? "/new_img/hero_main/star_full.png" // активна зірочка
                      : "/new_img/hero_main/star_empty.png" // неактивна зірочка
                  }
                  alt={`${star} star`}
                  onClick={() => setFormData({ ...formData, rating: star })}
                  style={{
                    cursor: "pointer",
                    width: 28,
                    height: 28,
                    marginRight: 4,
                  }}
                />
              ))}
            </div>
            {errors.rating && <p style={{ color: "red" }}>{errors.rating}</p>}
            {/* input type="file */}

            <div className="photo_preview_container">
              {" "}
              <label htmlFor="fileInput" className="file_input_label">
                + <br />
                Дадати фото
              </label>
              <input
                id="fileInput"
                className="file_input"
                accept="image/*"
                type="file"
                onChange={(e) =>
                  setFormData({ ...formData, file: e.target.files[0] })
                }
              />
              {/* наприклад, превʼю фото */}
              {formData.file && (
                <img
                  className="photo_preview"
                  src={URL.createObjectURL(formData.file)}
                  alt="превʼю фото"
                />
              )}
              {/* інші порожні слоти для фото */}
              <div className="photo_preview"></div>
              <div className="photo_preview"></div>
              <div className="photo_preview"></div>
            </div>

            <label className="radio_label">
              <input
                type="checkbox"
                name="consent"
                checked={formData.consent}
                onChange={(e) =>
                  setFormData({ ...formData, consent: e.target.checked })
                }
                className="radio_input"
              />
              <span className="radio_button"></span>Я даю згоду на обробку
              персональних даних
            </label>
            {errors.consent && <p style={{ color: "red" }}>{errors.consent}</p>}

            <button type="submit" className="reviwes-b">
             Залишити відгук
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
