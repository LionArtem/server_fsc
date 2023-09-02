import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import Footer from './components/Footer';
import Header from './components/Header';
import Home from './peges/Home/Home';

import Department from './components/Department/Department.jsx';
import NodFound from './peges/nodFound';
import Node from './components/Department/Node/Node.jsx';

import Search from './components/search/Search';

import {
  chargeYardList,
  stoveNumberFive,
  meshReplacement,
  winchRopeReplacement,
  beltReplacement,
  ropeReplacement13872,
  VY4BeltReplacement,
} from './utils/constants';
import Description from './components/Department/Node/Description';

function App() {
  const location = useLocation();
  return (
    <div className="page">
      <Header />
      <main className="main">
        {/* {location.pathname === '/server_fsc/' && <Search />} */}
        <Routes>
          <Route path="/server_fsc/" element={<Home />} />
          <Route path="/department" element={<Department />} />
          {/*<Route
            path="/coke-rumble"
            element={
              <Node
                job="Замена сетки"
                link={'/mesh-replacement'}
                titleNode="Грохот кокса"
              />
            }
          />
          <Route
            path="/mesh-replacement"
            element={<Description listJob={meshReplacement} />}
          />

          <Route
            path="/four-crusher"
            element={
              <Node
                job="Замена ремней"
                link={'/belt-replacement'}
                titleNode="4-х волковая дробилка"
              />
            }
          />
          <Route
            path="/belt-replacement"
            element={<Description listJob={beltReplacement} />}
          />

          <Route
            path="/one_department"
            element={<Department title="Печь №5" list={stoveNumberFive} />}
          />
          <Route
            path="/roll-winch"
            element={
              <Node
                job="Замена каната"
                link={'/winch-rope-replacement'}
                titleNode="Лебедка подката"
              />
            }
          />
          <Route
            path="/winch-rope-replacement"
            element={<Description listJob={winchRopeReplacement} />}
          />
          <Route
            path="/13872"
            element={
              <Node
                job="Замена каната(большой подъём)"
                link={'/13872-rope-replacement'}
                titleNode="Кран №13872"
              />
            }
          />
          <Route
            path="/13872-rope-replacement"
            element={<Description listJob={ropeReplacement13872} />}
          />
          <Route
            path="/VY-4"
            element={
              <Node
                job="Замена ремней"
                link={'/VY-4-Belt-replacement'}
                titleNode="Вентилятор №325/326"
              />
            }
          />
          <Route
            path="/VY-4-Belt-replacement"
            element={<Description listJob={VY4BeltReplacement} />}
          /> */}
          <Route path="*" element={<NodFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
