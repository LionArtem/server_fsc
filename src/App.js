import Footer from './components/Footer';
import Header from './components/Header';
import Home from './peges/Home';
import { Routes, Route } from 'react-router-dom';
import ChargeYard from './components/pagesNavigation/ChargeYard/index.jsx';
import NodFound from './peges/nodFound';
import CokeRumble from './components/pagesNavigation/ChargeYard/CokeRumble/CokeRumble';

function App() {
  return (
    <div className="page">
      <Header />
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
