import React from "react";
import { Link } from "react-router-dom";
import "./sectionStyling.css";

export const About = ({ t }) => {
  return (
    <div className="about">
      <nav class="breadcrumbs">
        <Link to="/">{t("main.title")}</Link>
        <span class="separator">›</span>
        <p>{t("main.about")}</p>
      </nav>
      {/* section1 */}
      <section className="main_section1">
        <div className="main_section1_text">
          <h1>
            <span>{t("aU.hS")}</span>{t("aU.h")}
          </h1>
          <p className="about_text">
            {t("aU.p1")} <br />
            {t("aU.p2")} <br />
            {t("aU.p3")}
          </p>
        </div>

        <div className="main_section1_img services_img">
          <img src="/new_img/hero_main/a_u1.png" alt="hero_img" />
        </div>
      </section>

       {/*sectoion 7*/}

        <section className="main_section7 position_about">
          <div className="main_section4_text position7  pos_about">
            <h2>{t("aU.h1")}<span> {t("aU.h1s")}  <br /> {t("aU.h1sbr")}</span> 
            </h2>
            <p>
             {t("aU.p4")}
            </p>
            <p>
             {t("aU.p5")}
            </p>
            <p>
             {t("aU.p6")}
            </p>
           
          </div>
          <div className="main_section7_img">
            <img src="/new_img/hero_main/a_u2.png" alt="" />
          </div>
        </section>
       {/*sectoion 7*/}

        <section className="main_section7 position_about">
             <div className="main_section7_img">
            <img src="/new_img/hero_main/a_u3.png" alt="" />
          </div>
          <div className="main_section4_text position7 pos_about">
            <h2>
              <span> {t("aU.h2s")}</span> {t("aU.h2")} <br /> {t("aU.h2br")}
            </h2>
            <p>
              {t("aU.p7")}
            </p>
            <p>
            {t("aU.p8")}
            </p>
            <p>
            {t("aU.p9")}
            </p>
           
          </div>
       
        </section>

        {/*section 9  */}
      <section className="main_section7 section9 services_section9">
        <div className="main_section4_text position7">
          <h2>
            <span>{t("aU.h3s")} </span> <br /> {t("aU.h3br")}
          </h2>
          <p>
            {t("aU.p10")} <br />
            {t("aU.p11")}
          </p>

          <form class="contact-form">
            <label for="name">{t("sec9.n1")}</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder={t("sec9.n2")}
              required
            />

            <label for="phone">{t("sec9.t2")}</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="+38 (012) 345 67 89"
              required
            />

            <label for="contact">{t("sec9.e3")}</label>
            <select style={{ background: "transparent", color: "gray" }}id="contact" name="contact">
              <option value="telegram">{t("sec9.o1")}</option>
              <option value="viber">{t("sec9.o2")}</option>
              <option value="phone">{t("sec9.o3")}</option>
            </select>

            <button type="submit">{t("btn.leave")}</button>
          </form>
          
        </div>
        <div className="main_section7_img">
          <img src="/new_img/hero_main/s9.png" alt="" />
        </div>
      </section>
    </div>
  );
};
