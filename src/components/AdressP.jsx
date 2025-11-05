import React from 'react'
 import "../App.css";
 import { useTranslation } from "react-i18next";
 import { Link } from 'react-router-dom';

  const AdressP = () => {
   const { t, i18n } = useTranslation();
    return (

     <div className="main_section4_text position7">
          <h2>
            <span>{t("mp.h.s6")}</span> <br /> {t("mp.h.t6")}
          </h2>
          <p>
            {t("mp.p.p7")}
          </p>
          <div className=" horizontal"></div>
          <address className="address">
            <h4>{t("adr.adr")}</h4>
            <p>{t("adr.strict")}, {t("adr.adress")}, {t("adr.ofice")}</p>
            <h4>{t("adr.title")}</h4>
            <p>
              <span> {t("adr.day1")}</span> {t("adr.time")}<br />
              <span>{t("adr.day2")}</span> {t("adr.time2")}
              <br />
              <span>{t("adr.day3")}</span> {t("adr.time3")}
            </p>
          </address>
           <Link to="/contact" className="main_section4_btn btn_position">
            {t("btn.map")}
          </Link>
        </div>
  )
}

export default AdressP