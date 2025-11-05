import React from "react";
import { Link } from "react-router-dom";
// import {Adress }from "../Adress";
import AdressP from "../AdressP"
import "../../App.css";
import Carousel from "../SimpleSlider/Carousel";
//  import { useTranslation } from "react-i18next";


export const MainePage = ({ t, cat1 }) => {
   const cards = [
  {
    id: 1,
    img: "/new_img/hero_main/slider1.png",
    title: t("section.section10"),
    desc: t("mp.d1"),
    btn: "Детальніше",
  },
  {
    id: 2,
    img: "/new_img/hero_main/slider2.png",
    title:t("section.section17"),
    desc: t("mp.d2"),
    btn: "Детальніше",
  },
  {
    id: 3,
    img: "/new_img/hero_main/slider3.png",
    title: t("section.section20"),
    desc: t("mp.d3"),
    btn: "Детальніше",
  },

  {
    id: 6,
    img: "/new_img/hero_main/slider3.png",
    title: t("section.section20"),
    desc: t("mp.d3"),
    btn: "Детальніше",
  },
  {
    id: 5,
    img: "/new_img/hero_main/slider2.png",
    title: t("section.section17"),
    desc: t("mp.d2"),
    btn: "Детальніше",
  },
  {
    id: 4,
    img: "/new_img/hero_main/slider1.png",
    title: t("section.section10"),
    desc: t("mp.d1"),
    btn: "Детальніше",
  },
  {
    id: 8,
    img: "/new_img/hero_main/slider2.png",
    title: t("section.section17"),
    desc: t("mp.d2"),
    btn: "Детальніше",
  },
  {
    id: 9,
    img: "/new_img/hero_main/slider1.png",
    title: t("section.section10"),
    desc: t("mp.d1"),
    btn: "Детальніше",
  },
  {
    id: 7,
    img: "/new_img/hero_main/slider3.png",
    title: t("section.section20"),
    desc: t("mp.d3"),
    btn: "Детальніше",
  },
];

const img_s5 = [
  {
    id: 1,
    img: "/new_img/hero_main/s5.1.png",
  },
  {
    id: 2,
    img: "/new_img/hero_main/s5.2.png",
  },
  {
    id: 2,
    img: "/new_img/hero_main/s5.3.png",
  },
  {
    id: 2,
    img: "/new_img/hero_main/s5.4.png",
  },
  {
    id: 2,
    img: "/new_img/hero_main/s5.5.png",
  },
  {
    id: 2,
    img: "/new_img/hero_main/s5.6.png",
  },
];
const reviews = [
  {
    id: 1,
    name: "Сергій",
    text: "Шукав щось для себе - просте, але зі змістом. Хотілося, щоб перстень відчувався як продовження мене. Щоб дивишся - і все на своєму місці.Коли взяв у руки - все стало ясно. Вага, форма, колір - саме те, що потрібно.Ношу щодня, дякую!",
    created_at: "2025-03-16T07:27:44.036266Z",
    img: "/new_img/hero_main/p1.png",
    stars: 2,
  },
  {
    id: 2,
    name: "Ольга",
    text: "Це була прикраса для себе - як символ важливого етапу в житті.Я мріяла, щоб вона була особливою, не просто гарною, а з глибоким змістом.Коли я побачила прикрасу, очі самі наповнились сльозами - вона була саме такою, яку я мріяла носити щодня.",
    created_at: "2025-03-16T07:27:08.600654Z",
    img: "/new_img/hero_main/p2.png",
    stars: 4,
  },
  {
    id: 3,
    name: "Вікторія",
    text: "Ми замовляли обручки разом з чоловіком - хотілося, щоб вони були не просто красиві, а про нас.Коли отримали коробочку - обом перехопило подих. Все саме так, як уявляли. Щиро дякуємо за ці особливі прикраси.",
    created_at: "2024-09-13T20:17:11.646034Z",
    img: "/new_img/hero_main/p3.png",
    stars: 3,
  },
  {
    id: 4,
    name: "Катерина",
    text: "Користуюся послугами майстерні не вперше. Як завжди все якісно і швидко!",
    created_at: "2024-06-25T13:37:24.895668Z",
    img: null,
    stars: 5,
  },
];
  return (
    <main>
      {/* section1 */}
      <section className="main_section1">
        <div className="main_section1_text">
          <h1>
            {t("main.title1")} <span>{t("main.title1span")}</span>
          </h1>
          <p>
            {t("main.title1text")}
          </p>
        </div>

        <Link to="/Care" className="main_section1_btn">
          <p>{t("main.title1btn")}</p>
        </Link>
        <div className="main_section1_img">
          <img src="/new_img/hero_main/1.png" alt="hero_img" />
        </div>
      </section>

      {/* section2 */}

      <section className="main_section2">
        <div className="section2_text">
          <h2 className="">
            {t("sec2.title")} <span>{t("sec2.titlespan")}</span>{" "}
          </h2>
          <p className="">
           {t("sec2.text")}
          </p>
          <p style={{ marginTop: "20px" }}>
          
           {t("sec2.text1")}
          </p>
        </div>
        <div className="section2_img">
          <img src="/new_img/hero_main/2.png" alt="" />
        </div>
      </section>

      {/* section3 */}

      <section className="main_section3">
        <div className="main_section3_text">
          <h2>
            {t("sec3.title")} <span>{t("sec3.titlespan")}</span>
          </h2>
        </div>

        <Carousel slides={cards} />

        <Link to="/Catalog" className="main_section3_btn">
          {t("btn.choose")}
        </Link>
      </section>

      {/* section 4 */}

      <section className="main_section4">
        <div className="main_section4_text">
          <h2>
            <span>{t("mp.h.s4")}</span>{t("mp.h.t4")}
          </h2>
        </div>
        <div className="main_section_card">
          <div className="carousel-content">
            <Link to="/Women">
              <div className="card">
                <img src="/new_img/hero_main/Women.png" alt="ring" />
                <h3>{t("section.section13")}</h3>
                <p>
                 {t("mp.p.p4")}
                </p>
              </div>
            </Link>
            <Link to="/Men">
              <div className="card">
                <img src="/new_img/hero_main/Men.png" alt="bracelet" />
                <h3>{t("section.section4")}</h3>
                <p>{t("mp.p.p4.1")}</p>
              </div>
            </Link>
            <Link to="/Engagement">
              <div className="card">
                <img src="/new_img/hero_main/Engey.png" alt="pendant" />
                <h3>{t("section.section1")}</h3>
                <p>{t("mp.p.p4.2")}</p>
              </div>
            </Link>
          </div>
        </div>
        <div className="btn_center">
          <Link to="/Catalog" className="main_section4_btn">
           {t("btn.choose")}
          </Link>
        </div>
      </section>

      {/* Section 5 */}

      <section className="main_section5">
        <div className="main_section4_text size5">
          <h2>
            {t("mp.h.t5")} <span>{t("mp.h.s5")}</span>{t("mp.h.t5.1")} 
          </h2>
        </div>
        <div className="section5_content">
          {img_s5.map((img) => (
            <img
              key={img.id}
              src={img.img}
              alt="img"
              // style={{
              //   width: "380px",
              //   height: "380px",
              //   objectFit: "cover",
              // }}
            />
          ))}
          {/* для виводу товара з каталогу */}
          {/* {cat1
            ?.slice(0, 6) // ✅ тільки 8 елементів
            .map((card) => {
              // шукаємо fallback-товар з картинкою
              const fallbackCard = cat1.find(
                (c) => c.media_files && c.media_files.length > 0
              );

              // визначаємо зображення
              const imageSrc =
                card.media_files && card.media_files.length > 0
                  ? card.media_files[0].photo
                  : fallbackCard
                  ? fallbackCard.media_files[0].photo
                  : "/img/noImg.png"; // якщо навіть fallback нема → стандартна заглушка

              return (
                <div className="section_5_img" key={card.id}>
                  <img
                    src={imageSrc}
                    alt={card.name || "product"}
                    style={{
                      width: "380px",
                      height: "380px",
                      objectFit: "cover",
                    }}
                  />
                </div>
              );
            })} */}
        </div>
      </section>

      {/*section 6*/}

      <section className="main_section6">
        <ul>
          <li className="sec6_li">
            <img src="/new_img/hero_main/s6.1.svg" alt="" />
            <p className="sec6_p">{t("sec6.p1")}</p>
          </li>
          <li className="sec6_li">
            <img src="/new_img/hero_main/s6.2.svg" alt="" />
            <p className="sec6_p">{t("sec6.p2")}</p>
          </li>
          <li className="sec6_li">
            <img src="/new_img/hero_main/s6.3.svg" alt="" />
            <p className="sec6_p">{t("sec6.p3")}</p>
          </li>
        </ul>
      </section>

      {/*sectoion 7*/}

      {/* <section className="main_section7">
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
          <button className="main_section4_btn btn_position">
            {t("btn.map")}
          </button>
        </div>
        <div className="main_section7_img">
          <img src="/new_img/hero_main/3.png" alt="" />
        </div>
      </section> */}
< section className="main_section7">
        <AdressP/> 
        
        
        <div className="main_section7_img">
          <img src="/new_img/hero_main/3.png" alt="" />
        </div>
</section>

      {/*section 8*/}

      <section className="main_section8">
        <div className="size8 main_section4_text ">
          <div className="main_section4_text position8">
            <h2 className="s_8_h">
              <span>{t("mp.h.s7")}</span> {t("mp.h.t7")}
            </h2>
            <p>
             {t("mp.p.p8")}
            </p>
          </div>
        </div>
        <div className="main_section8_cards">
          {/* <div className="cart_header">
            <div className="header_data"></div>
            <div className="header_star"></div>
          </div>
          <div className="cart_body"></div>
          <div className="cart_text"></div>
        </div> */}

          {reviews && reviews.length > 0 ? (
            reviews.slice(0, 3).map((rev) => (
              <div className="main_section8_card" key={rev.id}>
                <div className="card_header">
                  <div className="header_icon">
                    {rev.img ? <img src={rev.img} alt="" /> : ""}
                    <p className="header_name">{rev.name}</p>
                  </div>

                  <div className="header_star">
                    {Array.from({ length: 5 }, (_, i) => (
                      <span key={i}>
                        {i < rev.stars ? (
                          <img src="/new_img/hero_main/sfull.svg" alt="" />
                        ) : (
                          <img src="/new_img/hero_main/sem.svg" alt="" />
                        )}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="card_img">
                  <img src="/new_img/hero_main/s5.6.png" alt="" />
                </div>
                <div className="card_text">{rev.text}</div>
              </div>
            ))
          ) : (
            <Loader />
          )}
        </div>
        <div className="section8_btn">
          <Link to="/Reviews" className="main_section4_btn btn_position8">
            {t("btn.see")}
          </Link>
          <button>{t("btn.review")}</button>
        </div>
      </section>

      {/*section 9  */}
      <section className="main_section7 section9">
        <div className="main_section4_text position9">
          <h2>
            <span>{t("mp.h.s8")} </span> <br />{t("mp.h.t8")}
          </h2>
          <p>
           {t("mp.p.p9")} <br />
           {t("mp.p.p9.1")}
          </p>

         <div className="section9_conteiner">
          <div className="main_section7_img">
          <img className="section9_img" src="/new_img/hero_main/s9.png" alt="" />
        </div>
           <form class="contact-form">
            <label for="name">{t("sec9.n1")}</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder= {t("sec9.n2")}
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
            <select style={{ background: "transparent", color: "gray" }} id="contact" name="contact">
              <option value="telegram">{t("sec9.o1")}</option>
              <option value="viber">{t("sec9.o2")}</option>
              <option value="phone">{t("sec9.o3")}</option>
            </select>

            <button type="submit">{t("btn.leave")}</button>
          </form>
        
         </div>
          
        </div>
        
      </section>
    </main>
  );
};
