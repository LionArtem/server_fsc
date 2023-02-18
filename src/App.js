import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Footer from './components/Footer';
import Header from './components/Header';
import Home from './peges/Home';

import ChargeYard from './components/pagesNavigation/ChargeYard/ChargeYard.jsx';
import NodFound from './peges/nodFound';
import CokeRumble from './components/pagesNavigation/ChargeYard/NodeScatter/CokeRumble.jsx';

import Search from './components/search/Search';

function App() {
  return (
    <div className="page">
      <Header />
      <Search />
      <main className="main">
        <Routes>
          <Route path="/server_fsc" element={<Home />} />
          <Route path="/one_branch" element={<ChargeYard />} />
          <Route path="/coke-rumble" element={<CokeRumble />} />
          <Route path="*" element={<NodFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
