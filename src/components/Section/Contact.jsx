import React from "react";
import { Link } from "react-router-dom";
// import LazyLoad from "react-lazyload";
export const Contact = ({ t }) => {
  return (
    <div className="contacts">
      <nav class="breadcrumbs">
        <Link to="/">{t("main.title")}</Link>
        <span class="separator">›</span>
        <p>{t("main.contact")}</p>
      </nav>

      {/*sectoion 7*/}

      <section className="main_section7 contact_position">
        <div className="main_section4_text position7 contact_section">
          <h2>
            <span>{t("cont.tit")}</span> {t("cont.titSp")}
          </h2>
          <p>
        {t("cont.p")}
          </p>

          <address className="address contact_address">
            <h4>{t("adr.adr")}</h4>
            <p>
              {t("adr.strict")}, {t("adr.adress")}, <br /> {t("adr.adress1")}, {t("adr.ofice")}
            </p>
            <h4>{t("main.contact")}:</h4>
            <p class="social-links contact_social">
              <a href="tel:+38 (093) 691 89 98">+38 (093) 691 89 98</a>
              <a href="https://t.me/yourusername" target="_blank">
                Telegram
              </a>{" "}
              <a href="viber://chat?number=%2B380936918998" target="_blank">
                Viber
              </a>{" "}
              <a href="https://wa.me/380936918998" target="_blank">
                WhatsApp
              </a>{" "}
              <a href="facetime:+380936918998" target="_blank">
                FaceTime
              </a>
              <a href="https://instagram.com/yourusername" target="_blank">
                Instagram
              </a>
              <a href="https://facebook.com/yourusername" target="_blank">
                Facebook
              </a>
            </p>
            <h4>Email:</h4>
            <a href="mail:hello@futurejewelry.ua">hello@futurejewelry.ua</a>

            <h4>{t("adr.adr")}</h4>
            <p>
              <span> {t("adr.day1")}: </span> 10:00 - 19:00 <br />
              <span> {t("adr.day2")}: </span> 11:00 - 18:00
              <br />
              <span> {t("adr.day3")}: </span> {t("adr.time3")}
            </p>
          </address>
        </div>
        <div className="main_section7_img map-container">
          <iframe
            className="map_frame"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1512.4716052078795!2d30.373629070391335!3d50.39146365353875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4ca2cfb4c3d4d%3A0x1f3d39db90b6dc57!2z0LLRg9C70LjRhtGPINCE0LLRgNC-0L_QtdC50YHRjNC60LAsIDE1LCDQktC40YjQvdC10LLQtSwg0LzRltGB0YLQviDQmtC40ZfQsiwgMDIwMDA!5e0!3m2!1suk!2sua!4v1757342026694!5m2!1suk!2sua"
          ></iframe>
        </div>
      </section>
    </div>
  );
};
