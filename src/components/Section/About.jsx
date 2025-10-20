import React from "react";
import { Link } from "react-router-dom";
import "./sectionStyling.css";

export const About = ({ t }) => {
  return (
    <div className="about">
      <nav class="breadcrumbs">
        <Link to="/">Головна</Link>
        <span class="separator">›</span>
        <p>Про нас</p>
      </nav>
      {/* section1 */}
      <section className="main_section1">
        <div className="main_section1_text">
          <h1>
            <span>Про нас.</span>Як усе почалося
          </h1>
          <p className="about_text">
            Це родинна справа, яка бере початок з маленької майстерні у 2011
            році. <br />
            Батько й син об’єднали досвід і пристрасть до ювелірної справи — і
            вже у 2013 з’явився наш бренд і перший магазин. <br />
            Ми працюємо з 2010 року, офіційно — з 2013. Створюємо прикраси, у
            яких є не тільки золото й каміння, а й зміст.
          </p>
        </div>

        <div className="main_section1_img services_img">
          <img src="/new_img/hero_main/a_u1.png" alt="hero_img" />
        </div>
      </section>

       {/*sectoion 7*/}

        <section className="main_section7 position_about">
          <div className="main_section4_text position7  pos_about">
            <h2>Ми ті, хто створює
              <span> прикраси  <br /> зі змістом</span> 
            </h2>
            <p>
              Наша команда — це ювеліри з досвідом, молоді дизайнери, технологи й ті, хто відповідає за сервіс і комунікацію.
            </p>
            <p>
             Кожен виріб проходить через руки кількох людей — і кожен вкладає частину себе.
            </p>
            <p>
             Ми працюємо вручну, з використанням сучасних інструментів, але головне — це бачення і відчуття форми.
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
              <span> Краса має зміст,</span> якщо <br /> вона ваша.
            </h2>
            <p>
              Ми не просто створюємо вироби — ми допомагаємо зберігати моменти, нагадування, стани.
            </p>
            <p>
             Це може бути подарунок, пропозиція, пам’ять, просто мрія.
            </p>
            <p>
            І ми завжди поруч, щоб зробити її реальною.
            </p>
           
          </div>
       
        </section>

        {/*section 9  */}
      <section className="main_section7 section9 services_section9">
        <div className="main_section4_text position7">
          <h2>
            <span>Готові створити </span> <br /> прикрасу вашої мрії?
          </h2>
          <p>
            Залиште заявку — і ми зв’яжемось з вами <br />
            для персональної консультації.
          </p>

          <form class="contact-form">
            <label for="name">Ім’я</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Введіть ім’я"
              required
            />

            <label for="phone">Телефон</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="+38 (012) 345 67 89"
              required
            />

            <label for="contact">Оберіть зручний спосіб зв’язку</label>
            <select id="contact" name="contact">
              <option value="telegram">Telegram</option>
              <option value="viber">Viber</option>
              <option value="phone">Телефон</option>
            </select>

            <button type="submit">Залишити заявку</button>
          </form>
          
        </div>
        <div className="main_section7_img">
          <img src="/new_img/hero_main/s9.png" alt="" />
        </div>
      </section>
    </div>
  );
};
