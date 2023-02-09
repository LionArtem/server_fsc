function App() {
  return (
    <div className="page">
      <header className="header">
        <h1 className="header__title">
          Этот сайт создан что бы облегчить жизнь слесаря.
        </h1>
        <div className="header__foto rateit"></div>
      </header>
      <main>
        <section className="navigation">
          <nav>
            <ul className="navigation__list">
              <li className="navigation__title">
                <a className="navigation__list-links" href="">
                  <h2 className="navigation__text">1-ое отделение.</h2>
                </a>
              </li>
              <li className="navigation__title">
                <a className="navigation__list-links" href="">
                  <h2 className="navigation__text">2-ое отделение.</h2>
                </a>
              </li>
              <li className="navigation__title">
                <a className="navigation__list-links" href="">
                  <h2 className="navigation__text">3-ие отделение.</h2>
                </a>
              </li>
              <li className="navigation__title">
                <a className="navigation__list-links">
                  <h2 className="navigation__text">Шихтовый двор.</h2>
                </a>
              </li>
              <li className="navigation__title">
                <a className="navigation__list-links" href="">
                  <h2 className="navigation__text">РММ 1-го отделения.</h2>
                </a>
              </li>
              <li className="navigation__title">
                <a className="navigation__list-links" href="">
                  <h2 className="navigation__text">
                    Участок производства порашковой проволоки.
                  </h2>
                </a>
              </li>
              <li className="navigation__title">
                <a className="navigation__list-links" href="">
                  <h2 className="navigation__text">
                    Газоочистка 1-го отделения.
                  </h2>
                </a>
              </li>
              <li className="navigation__title">
                <a className="navigation__list-links" href="">
                  <h2 className="navigation__text">РММ 2-го отделения.</h2>
                </a>
              </li>
              <li className="navigation__title">
                <a className="navigation__list-links" href="">
                  <h2 className="navigation__text">
                    Газоочистка 3-го отделения.
                  </h2>
                </a>
              </li>
              <li className="navigation__title">
                <a className="navigation__list-links" href="">
                  <h2 className="navigation__text">
                    Насосная оборотного цыкла.
                  </h2>
                </a>
              </li>
            </ul>
          </nav>
        </section>
      </main>
      <footer className="footer">
        <p className="footer__copyright">Артём Гриневич</p>
        <nav>
          <a
            className="footer__link-vk"
            href="https://vk.com/id82204125"
            target="_blank"
          >
            (Вконтакте)
          </a>
        </nav>
      </footer>
    </div>
  );
}

export default App;
