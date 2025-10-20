import React, { useState, useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
// import { MenuDrop } from "./DropWindow/MenuDrop";
// import { SearchDrop } from "./DropWindow/SearchDrop";
// import { Cart } from "./Cart/Cart";
// import LazyLoad from "react-lazyload";

export const Layout = ({ t, cat1, changeLanguage, i18n }) => {
  const [activeMenu, setActiveMenu] = useState(null); // "menu", "search", or null
  const [showCart, setShowCart] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  // const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 700);

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      window.scrollTo(0, 0);
    }
    setActiveMenu(null);
  }, [location.pathname]);
  // console.log(location.pathname);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 700);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // const handleMouseLeave = () => {
  //   mousePosition > { x: 0, y: 0 } && setActiveMenu(null);
  // };

  // const handleMouseLeave = () => {
  //   if (mousePosition.x > 0 && mousePosition.y > 0) {
  //     setActiveMenu(null);
  //   }
  // };

  // const handlePhoneClick = () => {
  //   window.removeEventListener("beforeunload", handleBeforeUnload);
  // };

  // const handleClick = () => {
  //   setShowCart(true);
  // };

  // const handleSearch = () => {
  //   setActiveMenu(null);
    // Закриття пошукового меню після натискання кнопки пошуку
    // Логіка пошуку
  // };

  // const handleMouseEnter = (menu) => {
  //   setActiveMenu(menu);
  // };

  const currentLanguage = i18n.language;
  // console.log(currentLanguage);
  return (
  <div className="App">

      {/* HEADER */}
      <header>
        <div className="hero">
          <div className="hero_header">
            <div className="logo">
              <Link to="/">
                <img src="/new_img/logo/logo.png" alt="logo" />
              </Link>
            </div>
            <div className="menu">
              <ul>
                <li>
                  <Link to="/Catalog">
                    <p> {t("main.catalog")}</p>
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link to="/Services">
                    <p>{t("main.services")}</p>
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link to="/About">
                    <p>{t("main.about")}</p>
                  </Link>
                </li>
                <li>
                  <Link to="/Contact">
                    <p>{t("main.contact")}</p>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="lang">
              <button
                className={
                  currentLanguage == "uk" ? "lngBtn  activeLng" : "lngBtn"
                }
                
                onClick={() => changeLanguage("uk")}
              >
                Укр
              </button>
              <div className="line"></div>
              <button
                className={
                  currentLanguage == "en" ? " lngBtn  activeLng" : "lngBtn"
                }
               
                onClick={() => changeLanguage("en")}
              >
                Eng
              </button>
            </div>
          </div>
         
        </div>
      </header>

      {/* MAIN */}
      <Outlet />

      {/* FOOTER */}
    <footer class="footer">
  <div class="footer-container">
 <div className="logo">
              <Link to="/">
                <img src="/new_img/hero_main/logo2.png" alt="logo" />
              </Link>
            </div>
    {/* <!-- Ліва колонка --> */}
    <div class="footer-left">
      {/* <div class="logo">FUTURE<br/><span>jewelry</span></div> */}
      <p class="slogan">{t("footer.leftText")}</p>
      <p class="desc">{t("main.text")}</p>
    </div>

    {/* <!-- Середня колонка --> */}
    <div class="footer-middle">
      <ul>
        <li><Link to="/Catalog">{t("main.catalog")}</Link></li>
        <li><Link to="/Services">{t("main.services")}</Link></li>
        <li><Link to="Care">{t("footer.category1")}</Link></li>
        <li><Link to="/Reviews">{t("footer.category2")}</Link></li>
        <li><Link to="/About">{t("main.about")}</Link></li>
        <li><Link to="/Contact">{t("main.contact")}</Link></li>
      </ul>
    </div>

    {/* <!-- Права колонка --> */}
    <div class="footer-right">
      <address className="address footer-address">
            
            <p>{t("adr.strict")}, {t("adr.adress")}, {t("adr.ofice")}</p>

            <h4>{t("adr.title")}</h4>
            <p>
              <span>{t("adr.day1")}</span> {t("adr.time")}<br />
              <span>{t("adr.day2")}</span>{t("adr.time2")}
              <br />
              <span>{t("adr.day3")}</span> {t("adr.time3")}
            </p>
          </address>
<a href="tel:+380 0634545828">+380 063 454 58 28</a>


      <p class="social-links">
  <a href="https://t.me/yourusername" target="_blank">Telegram</a> <div className="line lf"></div>
  <a href="viber://chat?number=%2B380936918998" target="_blank">Viber</a> <div className="line lf"></div>
  <a href="https://wa.me/380936918998" target="_blank">WhatsApp</a> <div className="line lf"></div>
  <a href="facetime:+380936918998" target="_blank">FaceTime</a>
</p>

<p class="social-links">
  <a href="https://instagram.com/yourusername" target="_blank">Instagram</a><div className="line lf"></div>
  <a href="https://facebook.com/yourusername" target="_blank">Facebook</a>
</p>

    </div>
  </div>

  {/* <!-- Нижня частина --> */}
  <div class="footer-bottom">
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
