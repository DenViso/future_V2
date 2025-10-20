import React from "react";
import { Link } from "react-router-dom";
export const Services = ({ t }) => {
  return (
    <div className="services_section">
<nav class="breadcrumbs">
  <Link to="/" >Головна</Link>
  <span class="separator">›</span>
  <p>Послуги</p>
  
  
</nav>

{/* section1 */}
           <section className="main_section1">
             <div className="main_section1_text">
               <h1>
                  <span>Послуги</span>, які ми надаємо з 2010 року
               </h1>
               <p>
                З повагою до деталей, зі змістом — ми створюємо, <br /> відновлюємо й ремонтуємо прикраси, які мають значення.
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
            Виготовлення <span>на замовлення</span>{" "}
          </h2>
          <p className="">
            Ми створюємо вироби, що мають значення — для заручин, подарунків, пам’яті чи просто для себе. Ви приходите з ідеєю, ми — втілюємо її в металі й камінні.
          </p>
          <div className="services_section2_main_text">
            <h2>Як це відбувається:</h2>
            <ul>
              <li>
                <h2>Консультація</h2>
              <p>Обговорюємо форму, пропорції, колір металу, тип каменю <br />— підбираємо все індивідуально.</p>
              </li>
              <li>
                <h2>Прорахунок вартості</h2>
              <p>Ювелір готує персональний прорахунок. Це займає 1–2 дні <br /> — кожна деталь має значення.</p>
              </li>
              <li>
                <h2>Передоплата 50%</h2>
              <p>Після погодження — стартуємо.</p>
              </li>
              <li>
                <h2>Виготовлення</h2>
              <p>Процес займає 7–20 днів — залежно від складності.</p>
              </li>
              <li>
                <h2>Примірка або доставка</h2>
              <p>Готову прикрасу можна забрати у майстерні або отримати <br /> поштою.</p>
              </li>
              <li>
                <h2>Сервіс та гарантія</h2>
              <p>Всі вироби ми безкоштовно обслуговуємо. Якщо буде <br /> потрібно — завжди відновимо.</p>
              </li>
            </ul>
          </div>
          <button className="services_btn">Консультація з майстром</button>
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
           <span>Реставрація та ремонт</span> <br /> прикрас із важливою історією
          </h2>
          <p className="">
           Деякі прикраси — не просто метал і каміння. Це памʼять, подарунок, спадок. Ми дбайливо відновлюємо такі вироби, зберігаючи форму, зміст і характер.
          </p>
          <div className="services_section2_main_text">
            <h2>Що ми робимо:</h2>
            <ul>
              <li>
               
              <h2 style={{fontWeight:"400"}}>Паяємо й усуваємо пошкодження</h2>
              </li>
              <li>
                <h2 style={{fontWeight:"400"}}>Відновлюємо старі прикраси</h2>
              
              </li>
              <li>
                <h2 style={{fontWeight:"400"}}>Чистимо та поліруємо вироби</h2>
              
              </li>
              <li>
                <h2 style={{fontWeight:"400"}}>Надійно закріплюємо або замінюємо камені</h2>
              
              </li>
             
            </ul>
            <h2>Гарантія:</h2>
            <p>Всі прикраси, виготовлені у нас, ми обслуговуємо безкоштовно (якщо не потрібні зміни в дизайні чи розмірі).</p>
            <p>Всі прикраси, виготовлені у нас, ми обслуговуємо безкоштовно (якщо не потрібні зміни в дизайні чи розмірі).
Якщо з часом щось пошкодиться — завжди готові відновити.</p>
          </div>
          <button className="services_btn">Хочу відновити прикрасу</button>
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
