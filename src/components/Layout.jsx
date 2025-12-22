import React, { useState, useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

export const Layout = ({ t, cat1, changeLanguage, i18n }) => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 700);

  const location = useLocation();
  const currentLanguage = i18n.language;

  // Відстежування розміру екрану
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 700; // Змінено на 700px
      setIsMobile(mobile);
      // Закрити меню при зміні розміру на десктоп
      if (!mobile && menuOpen) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [menuOpen]);

  // Закриття меню при зміні сторінки
  useEffect(() => {
    if (location.pathname === "/") {
      window.scrollTo(0, 0);
    }
    setActiveMenu(null);
    setMenuOpen(false);
  }, [location.pathname]);

  // Mouse tracking (якщо потрібно)
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Блокування скролу при відкритому меню
  useEffect(() => {
    if (menuOpen && isMobile) {
      document.body.classList.add('menu-open');
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
      document.body.style.height = '100%';
    } else {
      document.body.classList.remove('menu-open');
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.height = '';
    }
    return () => {
      document.body.classList.remove('menu-open');
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.height = '';
    };
  }, [menuOpen, isMobile]);

  return (
    <div className="App">
      {/* HEADER */}
      <header>
        <div className="hero">
          <div className="hero_header">
            {/* ЛОГО */}
            <div className="logo">
              <Link to="/" onClick={() => setMenuOpen(false)}>
                <img src="/new_img/logo/logo.png" alt="logo" />
              </Link>
            </div>

            {/* ДЕСКТОПНЕ МЕНЮ (> 700px) */}
            {!isMobile && (
              <>
                <nav className="menu desktop-menu">
                  <ul>
                    <li>
                      <Link to="/Catalog">{t("main.catalog")}</Link>
                    </li>
                    <li>
                      <Link to="/Services">{t("main.services")}</Link>
                    </li>
                    <li>
                      <Link to="/About">{t("main.about")}</Link>
                    </li>
                    <li>
                      <Link to="/Contact">{t("main.contact")}</Link>
                    </li>
                  </ul>
                </nav>

                {/* МОВИ ДЛЯ ДЕСКТОПУ */}
                <div className="lang-menu desktop-lang">
                  <button
                    className={currentLanguage === "uk" ? "lngBtn activeLng" : "lngBtn"}
                    onClick={() => changeLanguage("uk")}
                  >
                    Укр
                  </button>
                  <div className="line"></div>
                  <button
                    className={currentLanguage === "en" ? "lngBtn activeLng" : "lngBtn"}
                    onClick={() => changeLanguage("en")}
                  >
                    Eng
                  </button>
                </div>
              </>
            )}

            {/* БУРГЕР КНОПКА (<= 700px) */}
            {isMobile && (
              <div
                className={`burger ${menuOpen ? "active" : ""}`}
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
                aria-expanded={menuOpen}
              >
                <span></span>
                <span></span>
                <span></span>
              </div>
            )}

            {/* МОБІЛЬНЕ МЕНЮ (<= 700px) */}
            {isMobile && menuOpen && (
              <>
                {/* Overlay для затемнення */}
                <div 
                  className="menu-overlay"
                  onClick={() => setMenuOpen(false)}
                />

                {/* Burger Menu */}
                <nav className="menu mobile-menu open">
                  {/* Кнопка закриття */}
                  <button 
                    className="close-btn" 
                    onClick={() => setMenuOpen(false)}
                    aria-label="Close menu"
                  >
                    
                  </button>

                  {/* Пункти меню */}
                  <ul>
                    <li>
                      <Link to="/Catalog" onClick={() => setMenuOpen(false)}>
                        {t("main.catalog")}
                      </Link>
                    </li>
                    <li>
                      <Link to="/Services" onClick={() => setMenuOpen(false)}>
                        {t("main.services")}
                      </Link>
                    </li>
                    <li>
                      <Link to="/About" onClick={() => setMenuOpen(false)}>
                        {t("main.about")}
                      </Link>
                    </li>
                    <li>
                      <Link to="/Contact" onClick={() => setMenuOpen(false)}>
                        {t("main.contact")}
                      </Link>
                    </li>
                  </ul>

                  {/* МОВИ В БУРГЕР МЕНЮ */}
                  <div className="lang-menu mobile-lang">
                    <button
                      className={currentLanguage === "uk" ? "lngBtn activeLng" : "lngBtn"}
                      onClick={() => {
                        changeLanguage("uk");
                        setMenuOpen(false);
                      }}
                    >
                      Укр
                    </button>
                    <div className="line"></div>
                    <button
                      className={currentLanguage === "en" ? "lngBtn activeLng" : "lngBtn"}
                      onClick={() => {
                        changeLanguage("en");
                        setMenuOpen(false);
                      }}
                    >
                      Eng
                    </button>
                  </div>
                </nav>
              </>
            )}
          </div>
        </div>
      </header>

      {/* MAIN */}
      <Outlet />

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-container">
          <div className="logo">
            <Link to="/">
              <img src="/new_img/hero_main/logo2.png" alt="logo" />
            </Link>
          </div>

          <div className="footer-left">
            <p className="slogan">{t("footer.leftText")}</p>
            <p className="desc">{t("main.text")}</p>
          </div>

          <div className="footer-middle">
            <ul>
              <li><Link to="/Catalog">{t("main.catalog")}</Link></li>
              <li><Link to="/Services">{t("main.services")}</Link></li>
              <li><Link to="/Care">{t("footer.category1")}</Link></li>
              <li><Link to="/Reviews">{t("footer.category2")}</Link></li>
              <li><Link to="/About">{t("main.about")}</Link></li>
              <li><Link to="/Contact">{t("main.contact")}</Link></li>
            </ul>
          </div>

          <div className="footer-right">
            <address className="address footer-address">
              <p>{t("adr.strict")}, {t("adr.adress")},<br /> {t("adr.adress1")},{t("adr.ofice")} </p>
              <h4>{t("adr.title")}</h4>
              <p>
                <span>{t("adr.day1")}</span> {t("adr.time")}<br />
                <span>{t("adr.day2")}</span>{t("adr.time2")}<br />
                <span>{t("adr.day3")}</span> {t("adr.time3")}
              </p>
            </address>

            <a href="tel:+380936918998">+38 (093) 691 89 98</a>

            <div className="social-links">
              <a href="https://t.me/yourusername" target="_blank" rel="noopener noreferrer">Telegram</a>
              <p className="line lf"></p>
              <a href="viber://chat?number=%2B380936918998" target="_blank" rel="noopener noreferrer">Viber</a>
              <p className="line lf"></p>
              <a href="https://wa.me/380936918998" target="_blank" rel="noopener noreferrer">WhatsApp</a>
              <p className="line lf"></p>
              <a href="facetime:+380936918998" target="_blank" rel="noopener noreferrer">FaceTime</a>
            </div>

            <p className="social-links">
              <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer">Instagram</a>
              <p className="line lf"></p>
              <a href="https://facebook.com/yourusername" target="_blank" rel="noopener noreferrer">Facebook</a>
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2025 FUTURE Jewelry. Усі права захищено.</p>
          <p>
            <a href="#">Політика конфіденційності</a> | 
            <a href="#">Договір публічної оферти</a>
          </p>
        </div>
      </footer>
    </div>
  );
};