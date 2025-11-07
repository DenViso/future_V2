import React from "react";
import { Link } from "react-router-dom";
export const Services = ({ t }) => {
  return (
    <div className="services_section">
<nav class="breadcrumbs">
  <Link to="/" >{
    t("main.title")}</Link>
  <span class="separator">›</span>
  <p>{t("main.services")}</p>
  
  
</nav>

{/* section1 */}
           <section className="main_section1">
             <div className="main_section1_text">
               <h1>
                  <span>{t("se.hs")}</span>, {
                  t("se.h")
                  }
               </h1>
               <p>
                {t("se.p1")} <br /> {t("se.p2")}
               </p>
             </div>
     

             <div className="main_section1_img services_img">
               <img src="/new_img/hero_main/s1.png" alt="hero_img" />
             </div>
           </section>


{/* section2 */}

      <section className="main_section2 services_section2" >
        <div className="section2_text services_text" >
          <h2 className="">
            {t("se.h1")} <span>{t("se.h1s")}</span>{" "}
          </h2>
          <p className="">
           {t("se.p3")}
          </p>
          <div className="services_section2_main_text">
            <h2>{t("se.h2")}</h2>
            <ul>
              <li>
                <h2>{t("se.h2.1")}</h2>
              <p>{t("se.p4")} <br />{t("se.p4.2")}</p>
              </li>
              <li>
                <h2>{t("se.h2.2")}</h2>
              <p>{t("se.p5")} <br /> {t("se.p5.2")}</p>
              </li>
              <li>
                <h2>{t("se.h2.3")}</h2>
              <p>{t("se.p6")}</p>
              </li>
              <li>
                <h2>{t("se.h2.4")}</h2>
              <p>{t("se.p7")}</p>
              </li>
              <li>
                <h2>{t("se.h2.4.2")}</h2>
              <p>{t("se.p7.2")} <br /> {t("se.p7.3")}</p>
              </li>
              <li>
                <h2>{t("se.h2.5")}</h2>
              <p>{t("se.p8")} <br /> {t("se.p8.2")}</p>
              </li>
            </ul>
          </div>
          <button className="services_btn">{t("btn.cons")}</button>
        </div>
        <div className="section2_img services_img2">
          <img src="/new_img/hero_main/s2.png" alt="" />
        </div>
      </section>
{/* section2 */}

      <section className="main_section2 services_section2" >
         <div className="section2_img services_img2">
          <img src="/new_img/hero_main/s3.png" alt="" />
        </div>
        <div className="section2_text services_text" >
          <h2 className="">
           <span>{t("se.h3")}</span> <br />  {t("se.h3s")}      </h2>
          <p className="">
           {t("se.p9")}
          </p>
          <div className="services_section2_main_text">
            <h2>{t("se.h4")}</h2>
            <ul>
              <li>
               
              <h2 style={{fontWeight:"400"}}>{t("se.h4.1")}</h2>
              </li>
              <li>
                <h2 style={{fontWeight:"400"}}>{t("se.h4.2")}</h2>
              
              </li>
              <li>
                <h2 style={{fontWeight:"400"}}>{t("se.h4.3")}</h2>
              
              </li>
              <li>
                <h2 style={{fontWeight:"400"}}>{t("se.h4.4")}</h2>
              
              </li>
             
            </ul>
            <h2>{t("se.h5")}</h2>
            <p>{t("se.p10")}.</p>
            <p>{t("se.p10.2")}</p>
          </div>
          <button className="services_btn">{t("btn.repair")}</button>
        </div>
       
      </section>





{/*section 9  */}
      <section className="main_section7 section9 services_section9">
        <div className="main_section4_text position7">
          <h2>
            <span>{t("mp.h.s8")} </span> <br /> {t("mp.h.t8")}
          </h2>
          <p>
            {t("mp.p.p9")}<br />
            {t("mp.p.p9.1")}
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

            <label for="phone">{t("sec9.o3")}</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="+38 (012) 345 67 89"
              required
            />

            <label for="contact">{t("sec9.e3")}</label>
            <select style={{ background: "transparent", color: "gray" }} id="contact" name="contact">
              <option value="telegram">Telegram</option>
              <option value="viber">Viber</option>
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
