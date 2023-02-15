import React from 'react';
import { Link } from 'react-router-dom';
function OneBranch() {
  return (
    <>
      <h1 className="header__title">Шихтовый двор:</h1>
      <section className="navigation navigation__cards">
        <div className="navigation__card">
          <h2 className="navigation__text navigation__text-card">
            Узел расссева
          </h2>
          <nav>
            <ul className="navigation__list">
              <li className="navigation__title">
                <Link className="navigation__list-links" to="/coke-rumble">
                  <h3 className="navigation__text">Грохот кокса</h3>
                </Link>
              </li>
              <li className="navigation__title">
                <Link className="navigation__list-links" to="/">
                  <h3 className="navigation__text">
                    Грохот кварцита 3-е отделение
                  </h3>
                </Link>
              </li>
              <li className="navigation__title">
                <Link className="navigation__list-links" to="/">
                  <h3 className="navigation__text">
                    Грохот квацита 1-е отделение
                  </h3>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="navigation__card">
          <h2 className="navigation__text navigation__text-card">ГПМ</h2>
          <nav>
            <ul className="navigation__list">
              <li className="navigation__title">
                <Link className="navigation__list-links" to="/">
                  <h3 className="navigation__text">Кран 17900</h3>
                </Link>
              </li>
              <li className="navigation__title">
                <Link className="navigation__list-links" to="/">
                  <h3 className="navigation__text">Кран 003</h3>
                </Link>
              </li>
              <li className="navigation__title">
                <Link className="navigation__list-links" to="/">
                  <h3 className="navigation__text">Кран 009</h3>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="navigation__card">
          <h2 className="navigation__text navigation__text-card">Дробилки</h2>
          <nav>
            <ul className="navigation__list">
              <li className="navigation__title">
                <Link className="navigation__list-links" to="/">
                  <h3 className="navigation__text">4-х волковая</h3>
                </Link>
              </li>
              <li className="navigation__title">
                <Link className="navigation__list-links" to="/">
                  <h3 className="navigation__text">2-х волковая</h3>
                </Link>
              </li>
              <li className="navigation__title">
                <Link className="navigation__list-links" to="/">
                  <h3 className="navigation__text">
                    Щековая дробилка кокса 3-е отделение
                  </h3>
                </Link>
              </li>
              <li className="navigation__title">
                <Link className="navigation__list-links" to="/">
                  <h3 className="navigation__text">
                    Щековая дробилка кокса 1-е отделение
                  </h3>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="navigation__card">
          <h2 className="navigation__text navigation__text-card">Конвеера</h2>
          <nav>
            <ul className="navigation__list">
              <li className="navigation__title">
                <Link className="navigation__list-links" to="/">
                  <h3 className="navigation__text">Конвеер 9м</h3>
                </Link>
              </li>
              <li className="navigation__title">
                <Link className="navigation__list-links" to="/">
                  <h3 className="navigation__text">Конвеер 9</h3>
                </Link>
              </li>
              <li className="navigation__title">
                <Link className="navigation__list-links" to="/">
                  <h3 className="navigation__text">Конвеер 9А</h3>
                </Link>
              </li>
              <li className="navigation__title">
                <Link className="navigation__list-links" to="/">
                  <h3 className="navigation__text">Конвеер 25</h3>
                </Link>
              </li>
              <li className="navigation__title">
                <Link className="navigation__list-links" to="/">
                  <h3 className="navigation__text">Конвеер 24</h3>
                </Link>
              </li>
              <li className="navigation__title">
                <Link className="navigation__list-links" to="/">
                  <h3 className="navigation__text">Конвеер 1</h3>
                </Link>
              </li>
              <li className="navigation__title">
                <Link className="navigation__list-links" to="/">
                  <h3 className="navigation__text">Конвеер 2(реверсивный)</h3>
                </Link>
              </li>
              <li className="navigation__title">
                <Link className="navigation__list-links" to="/">
                  <h3 className="navigation__text">Конвеер 3</h3>
                </Link>
              </li>
              <li className="navigation__title">
                <Link className="navigation__list-links" to="/">
                  <h3 className="navigation__text">Конвеер 4</h3>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </section>
    </>
  );
}

export default OneBranch;
