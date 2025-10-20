import React, { useState } from "react";
// import "sectionStyling.css";

import { Link } from "react-router-dom";

const ansver = [
  {
    id: 1,
    question: "Скільки коштує виготовлення прикраси?",
    answer:
      "Вартість залежить від складності, металу, типу каменя та розміру. Ми завжди готуємо індивідуальний прорахунок.",
  },
  {
    id: 2,
    question: "Чи можна виготовити прикрасу з мого золота?",
    answer:
      "Наші вироби — це не конвеєр. Кожна прикраса виготовляється вручну, досвідченим майстром.",
  },
  {
    id: 3,
    question: "Чи можна побачити процес виготовлення?",
    answer:
      "Наші вироби — це не конвеєр. Кожна прикраса виготовляється вручну, досвідченим майстром.",
  },
  {
    id: 4,
    question: "Що, якщо я не знаю, який камінь обрати?",
    answer:
      "Наші вироби — це не конвеєр. Кожна прикраса виготовляється вручну, досвідченим майстром.",
  },
  {
    id: 5,
    question: "Скільки триває виготовлення?",
    answer:
      "Виготовлення прикраси зазвичай триває від 2 до 4 тижнів, залежно від складності роботи, наявності матеріалів та завантаженості майстерні.",
  },
];

export const Care = ({ t }) => {
  const [isOpen, setIsOpen] = useState(false);

  

  return (
    <div className="care">
      <nav className="breadcrumbs">
        <Link to="/">Головна</Link>
        <span className="separator">›</span>
        <p>Як ми працюємо</p>
      </nav>

      {/* section1 */}
      <section className="main_section1 ">
        <div className="main_section1_text">
          <h1>
            <span>Як</span> ми працюємо
          </h1>
          <p>Прозоро. Акуратно. З повагою до кожної деталі.</p>
        </div>

        <div className="main_section1_img services_img">
          <img src="/new_img/hero_main/how1.png" alt="hero_img" />
        </div>
      </section>

      {/* add section with care info  */}
        <div className="care_info">
           <div className="section2_text services_text care_info_head_text">
            <h2 className="care_info_head">
            <span>Етапи</span> співпраці
          </h2>
          </div>
          <ul>
            <li>
              <span className="care_info_sp"><span>1.</span></span>
              <h2 className="care_info_head">Консультація</h2>
              <p className="care_info_text">Обговорюємо ідею. Можна приїхати до нас у майстерню або поспілкуватися телефоном. </p>
            </li>
            <li>
              <span className="care_info_sp"><span>2.</span></span>
              <h2 className="care_info_head">Індивідуальний прорахунок</h2>
              <p className="care_info_text">Майстер готує точну вартість з урахуванням усіх побажань. Це займає 1–2 дні.</p>
            </li>
            <li>
              <span className="care_info_sp"><span>3.</span></span>
              <h2 className="care_info_head">Передоплата 50%</h2>
              <p className="care_info_text">Після затвердження вартості — починаємо роботу.</p>
            </li>
            <li>
              <span className="care_info_sp"><span>4.</span></span>
              <h2 className="care_info_head">Виготовлення</h2>
              <p className="care_info_text">Створення прикраси займає 7–20 днів — усе залежить від складності.</p>
            </li>
            <li>
              <span className="care_info_sp"><span>5.</span></span>
              <h2 className="care_info_head">Примірка або доставка</h2>
              <p className="care_info_text">Ви можете забрати прикрасу особисто або отримати її поштою.</p>
            </li>
            <li>
              <span className="care_info_sp"><span>6.</span></span>
              <h2 className="care_info_head">Гарантія та сервіс</h2>
              <p className="care_info_text">Ми безкоштовно обслуговуємо всі вироби, які створили.</p>
            </li>
          </ul>
        </div>
      {/* section2 */}

      <section className="main_section2 services_section2 care1">
        <div className="section2_text services_text">
          <h2 className="">
            <span>Виробництво:</span> як це виглядає
          </h2>
          <p className="care_text1">
            Наші вироби — це не конвеєр. Кожна прикраса <br /> виготовляється
            вручну, досвідченим майстром.{" "}
          </p>

          <p className="care_text1">
            Ми працюємо з діамантами, сапфірами, смарагдами, <br /> турмалінами,
            перлами та іншими коштовностями.
          </p>
          <p className="care_text1">
            Використовуємо сучасні технології, але основу складає <br /> ручна
            робота — акуратна, точна, надійна.
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
          <h2 className="services_text_head">Гарантії</h2>
          <p className="services_text_pever">
            Ми не просто продаємо прикраси — ми створюємо вироби, за які несемо
            відповідальність.
          </p>
          <div className="services_section2_main_text care2_text">
            <ul>
              <li>
               
                <h2 className="care2_textT"> <span className="care2_textT_dot"></span>
                  Всі виготовлені нами прикраси ми обслуговуємо безкоштовно{" "}
                  <br /> (чистка, полірування, огляд, кріплення).
                </h2>
              </li>
              <li>
                <h2 className="care2_textT"> <span className="care2_textT_dot"></span>
                  Якщо прикраса потребує ремонту — звертайтесь у будь-який{" "}
                  <br /> час. Ми відновимо її.
                </h2>
              </li>
              <li>
                <h2 className="care2_textT"> <span className="care2_textT_dot"></span>
                  Якщо у вас є власне золото — ми можемо використати його, ви
                   сплачуєте лише за роботу.
                </h2>
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* section2 */}
 <section className="main_section2 services_section2 care1 ">
      <div className="section2_text services_text question_section">
        <h2 className="">Часті запитання</h2>
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
