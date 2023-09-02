import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './peges/Home/Home';

import Department from './components/Department/Department.jsx';
import NodFound from './peges/nodFound';
import FormDepartmen from './components/Form/FormDepartmen/FormDepartmen';

function App() {
  return (
    <div className="page">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/department" element={<Department />} />
        <Route path="/form_departmen" element={<FormDepartmen />} />
        <Route path="*" element={<NodFound />} />
      </Routes>
    </div>
  );
}

export default App;
