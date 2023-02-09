import Footer from './components/Footer';
import Header from './components/Header';
import NavigationListLinks from './components/NavigationListLinks';

function App() {
  return (
    <div className="page">
      <Header />
      <main className="main">
        <section className="navigation">
          <nav>
            <ul className="navigation__list">
              <NavigationListLinks title="1-ое отделение" />
              <NavigationListLinks title="2-ое отделение" />
              <NavigationListLinks title="3-ие отделение" />
              <NavigationListLinks title="Шихтовый двор" />
              <NavigationListLinks title="РММ 1-го отделения" />
              <NavigationListLinks title="Участок производства порашковой проволоки" />
              <NavigationListLinks title="Газоочистка 1-го отделения" />
              <NavigationListLinks title="РММ 3-го отделения" />
              <NavigationListLinks title="Газоочистка 3-го отделения" />
              <NavigationListLinks title="Насосная оборотного цыкла" />
            </ul>
          </nav>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
