/* eslint-disable @next/next/no-img-element */
// /* eslint-disable @next/next/no-img-element */
import CardSlider from "../components/Slider";
import Card from "../components/Card";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section id="travel" className="travel">
        <h2 className="travel__title section-title">путешествуй с нами</h2>
        <div className="travel-container">
          <div className="travel-container__left left-arabic">
            <h3 className="travel-container__title">
              Экскурсионный групповой тур по Саудовской Аравии
            </h3>
            <div className="travel-container__info info">
              <ul className="info__list">
                <li className="info__item">
                  <p className="info__text">Медина - 5 ночей.</p>
                </li>
                <li className="info__item">
                  <p className="info__text">Мекка -11 ночей.</p>
                </li>
                <li className="info__item">
                  <p className="info__text">
                    Джидда - в рамках однодневной экскурсии.
                  </p>
                </li>
                <li className="info__item">
                  <p className="info__text">
                    Таиф (город роз) - в рамках однодневной экскурсии.
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="travel-container__right">
            <CardSlider>
              <Card image="/assets/images/arabia2.png" />
              <Card image="/assets/images/arab4.png" />
              <Card image="/assets/images/arab5.png" />
            </CardSlider>
          </div>
        </div>
        <div className="travel-container">
          <div className="travel-container__left left-text">
            <h3 className="travel-container__title">
              УСПЕЙТЕ ЗАБРОНИРОВАТЬ СО СКИДКОЙ
            </h3>
            <div className="travel-container__info info">
              <ul className="info__list">
                <li className="info__item">
                  <p className="info__text">
                    <strong>Медина </strong> - второй по значимости город
                    ислама, в центре города находится мечеть Аль
                    Масжидан-Набави, ее построил сам Пророк, поэтому она также
                    известна как мечеть Пророка.
                  </p>
                </li>
                <li className="info__item">
                  <p className="info__text">
                    <strong>Мекка</strong> - Это священный исламский город:
                    место рождения Пророка Мухаммеда и город, где ему впервые
                    был ниспослан Коран.
                  </p>
                </li>
                <li className="info__item">
                  <p className="info__text">
                    <strong>Джидда</strong> - важный торговый порт и второй по
                    величине город королевства.
                  </p>
                </li>
                <li className="info__item">
                  <p className="info__text">
                    <strong>Таиф (город роз)</strong> - В горах Таифа
                    произрастают розы с особым ароматом. Выращивание роз
                    представляет неотъемлемую часть экономики и культуры Таифа.
                    Вокруг города роз расположено более 900 цветочных ферм.
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="travel-container__right">
            <CardSlider>
              <Card image="/assets/images/arab6.png" />
              <Card image="/assets/images/arab7.png" />
            </CardSlider>
          </div>
        </div>
        <div className="travel-container">
          <div className="travel-container__left left-deco">
            <h3 className="travel-container__title left-deco-title">
              ЦЕНЫ И ДАТЫ УЖЕ В СИСТЕМЕ И ДОСТУПНЫ К БРОНИРОВАНИЮ!
            </h3>
            <div className="travel-container__info info">
              <h4 className="info__title left-deco-title">
                В стоимость включено:
              </h4>
              <ul className="info__list">
                <li className="info__item left-deco-item">
                  <p className="info__text left-deco-text">Виза</p>
                </li>
                <li className="info__item left-deco-item">
                  <p className="info__text left-deco-text">
                    Трансфер : встреча-проводы
                  </p>
                </li>
                <li className="info__item left-deco-item">
                  <p className="info__text left-deco-text">
                    Проживание в отелях 3/4*
                  </p>
                </li>
                <li className="info__item left-deco-item">
                  <p className="info__text left-deco-text">Питание (НB)</p>
                </li>
                <li className="info__item left-deco-item">
                  <p className="info__text left-deco-text">
                    Услуги лицензированного гида на всех экскурсиях
                  </p>
                </li>
                <li className="info__item left-deco-item">
                  <p className="info__text left-deco-text">
                    Транспорт по всему маршруту
                  </p>
                </li>
                <li className="info__item left-deco-item">
                  <p className="info__text left-deco-text">
                    Экскурсия на красное море
                  </p>
                </li>
                <li className="info__item left-deco-item">
                  <p className="info__text left-deco-text">
                    Входные билеты на все достопримечательности
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="travel-container__right">
            <CardSlider>
              <Card image="/assets/images/arab8.png" />
              <Card image="/assets/images/arab2.png" />
            </CardSlider>
          </div>
        </div>
        <div className="travel-container">
          <div className="travel-container__left ula-container">
            <h3 className="travel-container__title">Таиф</h3>
            <div className="travel-container__info info">
              <h4 className="info__title">однодневная экскурсия</h4>
              <ul className="info__list">
                <li className="info__item">
                  <p className="info__text">
                    Таифа Посетители путешествуют по извилистой дороге через
                    горы, минуя фруктовые рынки, розовые фермы и глубокие
                    долины, пока не достигнут плато, на котором расположен Таиф.
                    Таиф, который часто называют Городом роз, известен
                    знаменитыми ароматными цветами, которые растут в окружающих
                    вади и горах. Он также известен как неофициальная летняя
                    столица Саудовской Аравии. Из-за своей высоты Таиф является
                    прохладным спасением от жары. И хотя розы цветут в апреле,
                    город по-настоящему расцветает в августе, когда в самом
                    разгаре культурный фестиваль Сук Оказ и фестиваль верблюдов
                    наследного принца.
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="travel-container__right">
            <CardSlider>
              <Card image="/assets/images/taif.png" />
              <Card image="/assets/images/taif2.png" />
            </CardSlider>
          </div>
        </div>
        <div className="travel-container">
          <div className="travel-container__left left-deco">
            <h3 className="travel-container__title left-deco-title">Аль-Ула</h3>
            <div className="travel-container__info info">
              <h4 className="info__title left-deco-title">
                однодневная экскурсия
              </h4>
              <ul className="info__list">
                <li className="info__item left-deco-item">
                  <p className="info__text left-deco-text">
                    В мире мало мест, где вы все еще можете почувствовать себя
                    настоящим исследователем, исследующим неизведанное. Во
                    многих исторических местах иллюзия открытия быстро
                    разрушается джунглями палок для селфи. Но в Аль-Уле, где
                    находится первый объект Всемирного наследия ЮНЕСКО в
                    Саудовской Аравии, глубоко в пустыне в северо-западном
                    регионе страны, вы все еще можете разыграть свою фантазию о
                    том, чтобы на один день стать бесстрашным археологом.
                    Несмотря на все достоинства этого места, занимающего первое
                    место в мире — древние гробницы, которые остались наследием
                    7000-летней человеческой цивилизации, потрясающие
                    естественные скальные образования и каньоны, множество
                    возможностей для приключенческих видов спорта и
                    ультрасовременные художественные инсталляции — Аль-Ула
                    остается в значительной степени вне мирового туристического
                    радара, предоставляя вам достаточно места и времени для
                    размышлений о монументальности его красивых пустынных
                    ландшафтов.
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="travel-container__right">
            <CardSlider>
              <Card image="/assets/images/ula1.png" />
              <Card image="/assets/images/ula.png" />
            </CardSlider>
          </div>
        </div>
        <div className="travel-container">
          <div className="travel-container__left ula-container">
            <h3 className="travel-container__title">Эр-Рияда</h3>
            <div className="travel-container__info info">
              <h4 className="info__title">однодневная экскурсия</h4>
              <ul className="info__list">
                <li className="info__item">
                  <p className="info__text">
                    Сочетание средневековья и тысячелетий в Эр-Рияде создает
                    привлекательный культурный союз, в котором можно проследить
                    первые корни Аравии и где можно предвидеть ее смелое
                    будущее. Увлекательную многовековую историю города можно
                    найти в его атмосферных базарах, привлекательных музеях и
                    древней архитектуре, но это также и современный мегаполис со
                    сверкающими небоскребами и растущей сценой современного
                    искусства. Зимние месяцы — идеальное время для посещения
                    Эр-Рияда. Хотя средние высокие температуры летом могут
                    достигать 44 градусов по Цельсию, максимальная температура в
                    декабре и январе составляет 20 градусов.
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="travel-container__right">
            <CardSlider>
              <Card image="/assets/images/riyad2.png" />
              <Card image="/assets/images/riyadh.png" />
              <Card image="/assets/images/riyadh2.png" />
            </CardSlider>
          </div>
        </div>
        <div className="travel-container">
          <div className="travel-container__left left-deco">
            <h3 className="travel-container__title left-deco-title">
              Джидда: невеста Красного моря
            </h3>
            <div className="travel-container__info info">
              <h4 className="info__title left-deco-title">
                В стоимость включено:
              </h4>
              <ul className="info__list">
                <li className="info__item left-deco-item">
                  <p className="info__text left-deco-text">
                    Исследуйте волшебный город Джидда, который когда-то называли
                    «невестой Красного моря», и посетите некоторые из его
                    главных исторических достопримечательностей.
                  </p>
                </li>
              </ul>
            </div>
            <div className="travel-container__info info">
              <h4 className="info__title left-deco-title">
                Приятный бонус каждому туристу в подарок:
              </h4>
              <ul className="info__list">
                <li className="info__item left-deco-item">
                  <p className="info__text left-deco-text">Священный Коран</p>
                </li>
                <li className="info__item left-deco-item">
                  <p className="info__text left-deco-text">
                    Вода Зам-Зам - 5 литров
                  </p>
                </li>
                <li className="info__item left-deco-item">
                  <p className="info__text left-deco-text">Ручная сумка</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="travel-container__right">
            <CardSlider>
              <Card image="/assets/images/jeddah.png" />
              <Card image="/assets/images/jiddah.png" />
            </CardSlider>
          </div>
        </div>
        <div className="travel-container">
          <div className="travel-container__left ula-container">
            <h3 className="travel-container__title">Янбу</h3>
            <div className="travel-container__info info">
              <h4 className="info__title">однодневная экскурсия</h4>
              <ul className="info__list">
                <li className="info__item">
                  <p className="info__text">
                    Янбу, расположенный в провинции Медина, является вторым по
                    величине портовым городом на Красном море после Джидды. Он
                    также является одним из старейших морских портов на Красном
                    море. Он служит главным портом священного города Медины.
                    Янбу не только играет важную роль в экономике страны, но и
                    имеет историческое значение как крупный порт для приема
                    паломников. Традиционно экономика Янбу была связана с
                    маршрутом паломничества, торговлей и экспортом фиников. Порт
                    расширяется, чтобы снять нагрузку с порта Джидды.
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="travel-container__right">
            <CardSlider>
              <Card image="/assets/images/yanbu.png" />
              <Card image="/assets/images/yanbu1.png" />
            </CardSlider>
          </div>
        </div>
      </section>
      <section id="reason" className="reason">
        <h2 className="reson__title section-title">ПОЧЕМУ МЫ?</h2>
        <div className="reason-container container">
          <div className="reason-container__box reason-box">
            <i className="reason-box__icon bx bx-support"></i>
            <span className="reason-box__text">
              Линия поддержки туристов 24/7
            </span>
          </div>
          <div className="reason-container__box reason-box">
            <i className="reason-box__icon bx bxs-plane-alt"></i>
            <span className="reason-box__text">
              Национальный перевозчик все авиакомпании
            </span>
          </div>
          <div className="reason-container__box reason-box">
            <i className="reason-box__icon bx bxs-user-badge"></i>
            <span className="reason-box__text">тур все включено</span>
          </div>
          <div className="reason-container__box reason-box">
            <div className="reason-box-inner">
              <img
                className="reason-ic"
                src="/assets/icons/click.png"
                alt="click logo"
                width="512"
                height="512"
              />
              <img
                className="reason-ic"
                src="/assets/icons/payme.png"
                alt="payme logo"
                width="512"
                height="512"
              />
              <i className="reason-icon bx bxs-dollar-circle"></i>
            </div>
            <span className="reason-box__text">Способ оплаты</span>
          </div>
        </div>
      </section>
      <section id="contact" className="contact">
        <h2 className="contact__title section-title">свяжитесь с нами</h2>
        <div className="contact-container container">
          <div className="contact-container__wrapper contact-wrapper">
            <div className="contact-wrapper__holder">
              <img
                className="contact-wrapper__icon"
                src="/assets/icons/mail.svg"
                alt="mail icon"
                width="25"
                height="25"
              />
              <Link href="#">
                <a className="contact-wrapper__link">
                  info@humotouroperator.uz
                </a>
              </Link>
            </div>
            <div className="contact-wrapper__holder">
              <img
                className="contact-wrapper__icon"
                src="/assets/icons/phone.svg"
                alt="phone icon"
                width="25"
                height="25"
              />
              <Link href="+998991102121">
                <a className="contact-wrapper__link">+998991102121</a>
              </Link>
            </div>
            <div className="contact-wrapper__holder">
              <img
                className="contact-wrapper__icon"
                src="/assets/icons/location.svg"
                alt="location icon"
                width="25"
                height="25"
              />
              <address className="contact-wrapper__text">
                Tashkent sh, Chilonzor lutfiy 94
              </address>
            </div>
          </div>
          <div className="contact-wrapper__container">
            <ul className="social">
              <li className="social__item">
                <Link href="https://t.me/Humo_Groupp" target="_blank">
                  <a className="social__link" target="_blank">
                    <i className="social__icon social-icon-contact bx bxl-telegram"></i>
                  </a>
                </Link>
              </li>
              <li className="social__item">
                <Link href="https://www.instagram.com/humogroup/">
                  <a className="social__link" target="_blank">
                    <i className="social__icon social-icon-contact bx bxl-instagram"></i>
                  </a>
                </Link>
              </li>
              <li className="social__item">
                <Link href="#">
                  <a className="social__link">
                    <i className="social__icon social-icon-contact bx bxl-facebook"></i>
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
