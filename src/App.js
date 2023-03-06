import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Footer from './components/Footer';
import Header from './components/Header';
import Home from './peges/Home';

import Department from './components/Department/Department.jsx';
import NodFound from './peges/nodFound';
import Node from './components/Department/Node/Node.jsx';

import Search from './components/search/Search';

import {
  chargeYardList,
  stoveNumberFive,
  meshReplacement,
  ropeReplacement,
  beltReplacement
} from './utils/constants';
import Description from './components/Department/Node/Description';

function App() {
  return (
    <div className="page">
      <Header />

      <main className="main">
        <Search />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/charge_yard"
            element={<Department title="Шихтовый двор" list={chargeYardList} />}
          />
          <Route
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
                link={'/rope-replacement'}
                titleNode="Лебедка подката"
              />
            }
          />
          <Route
            path="/rope-replacement"
            element={<Description listJob={ropeReplacement} />}
          />
          <Route path="*" element={<NodFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
