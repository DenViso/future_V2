import React, { useState } from "react";
// import "sectionStyling.css";

import { Link } from "react-router-dom";



export const Care = ({ t }) => {
  const [isOpen, setIsOpen] = useState(false);

  const ansver = [
  {
    id: 1,
    question: t("car.an.q1"),
    answer:
      t("car.an.a1"),
  },
  {
    id: 2,
    question: t("car.an.q2"),
    answer:
       t("car.an.a2"),
  },
  {
    id: 3,
    question: t("car.an.q3"),
    answer:
       t("car.an.a3"),
  },
  {
    id: 4,
    question: t("car.an.q4"),
    answer:
       t("car.an.a4"),
  },
  {
    id: 5,
    question:t("car.an.q5"),
    answer:
      t("car.an.a5"),
  },
];

  return (
    <div className="care">
      <nav className="breadcrumbs">
        <Link to="/">{t("main.title")}</Link>
        <span className="separator">›</span>
        <p>{t("main.hww")}</p>
      </nav>

      {/* section1 */}
      <section className="main_section1 ">
        <div className="main_section1_text">
          <h1>
            <span>{t("car.h1s")},</span> {t("car.h1")}
          </h1>
          <p>{t("car.p")}</p>
        </div>

        <div className="main_section1_img services_img">
          <img src="/new_img/hero_main/how1.png" alt="hero_img" />
        </div>
      </section>

      {/* add section with care info  */}
        <div className="care_info">
           <div className="section2_text services_text care_info_head_text">
            <h2 className="care_info_head">
            <span>{t("car.h2s")}</span> {t("car.h2")}
          </h2>
          </div>
          <ul>
            <li>
              <span className="care_info_sp"><span>1.</span></span>
              <h2 className="care_info_head">{t("car.h2.1")}</h2>
              <p className="care_info_text">{t("car.p2.1")} </p>
            </li>
            <li>
              <span className="care_info_sp"><span>2.</span></span>
              <h2 className="care_info_head">{t("car.h2.2")}</h2>
              <p className="care_info_text">{t("car.p2.2")}</p>
            </li>
            <li>
              <span className="care_info_sp"><span>3.</span></span>
              <h2 className="care_info_head">{t("car.h2.3")}</h2>
              <p className="care_info_text">{t("car.p2.3")}</p>
            </li>
            <li>
              <span className="care_info_sp"><span>4.</span></span>
              <h2 className="care_info_head">{t("car.h2.4")}</h2>
              <p className="care_info_text">{t("car.p2.4")}</p>
            </li>
            <li>
              <span className="care_info_sp"><span>5.</span></span>
              <h2 className="care_info_head">{t("car.h2.5")}</h2>
              <p className="care_info_text">{t("car.p2.5")}</p>
            </li>
            <li>
              <span className="care_info_sp"><span>6.</span></span>
              <h2 className="care_info_head">{t("car.h2.6")}</h2>
              <p className="care_info_text">{t("car.p2.6")}</p>
            </li>
          </ul>
        </div>
      {/* section2 */}

      <section className="main_section2 services_section2 care1">
        <div className="section2_text services_text">
          <h2 className="">
            <span>{t("car.h3s")}</span> {t("car.h3")}
          </h2>
          <p className="care_text1">
           {t("car.p3")} <br />{t("car.p3.br")}
          </p>

          <p className="care_text1">
            {t("car.p3.1")} <br /> {t("car.p3.1.br")}
          </p>
          <p className="care_text1">
            {t("car.p3.2")}<br /> {t("car.p3.2.br")}
          </p>
        </div>
        <div className="section2_img services_img2 care_img">
          <img className="care_img" src="/new_img/hero_main/how2.png" alt="" />
        </div>
      </section>
      {/* section2 */}

      <section className="main_section2 services_section2 care1 ">
        <div className="section2_img services_img2 care_img">
          <img className="care_img" src="/new_img/hero_main/how3.png" alt="" />
        </div>
        <div className="section2_text services_text">
          <h2 className="services_text_head">{t("car.h4")}</h2>
          <p className="services_text_pever">
            {t("car.p4")}
          </p>
          <div className="services_section2_main_text care2_text">
            <ul>
              <li>
               
                <h2 className="care2_textT"> <span className="care2_textT_dot"></span>
                  {t("car.h5")}  <br /> {t("car.h5.br")}
                </h2>
              </li>
              <li>
                <h2 className="care2_textT"> <span className="care2_textT_dot"></span>
                 {t("car.h5.1")}
                  <br /> {t("car.h5.1.br")}
                </h2>
              </li>
              <li>
                <h2 className="care2_textT"> <span className="care2_textT_dot"></span>
                 {t("car.h5.2")}
                </h2>
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* section2 */}
 <section className="main_section2 services_section2 care1 ">
      <div className="section2_text services_text question_section">
        <h2 className="">{t("car.h6")}</h2>
        {ansver.map((item) => (
          <div key={item.id} className=" question_section">
            <div className="question" onClick={() => setIsOpen(isOpen == item.id ? null : item.id)}>
              
             <p>{item.question}</p>
              <span>
                {isOpen == item.id ? "\u2014" : "->"}
              </span>
            </div>
            {isOpen == item.id && <p  className="answer">{item.answer} </p>}
          </div>
        ))}
      </div>
      <div className="section2_img services_img2 care_img">
        <img className="care_img"  src="/new_img/hero_main/how4.png" alt="" />
      </div>
      </section>
    </div>
  );
};
