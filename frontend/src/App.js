import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './peges/Home/Home';

import Department from './components/Department/Department.jsx';
import NodFound from './peges/nodFound';
import FormDepartmen from './components/Form/FormDepartmen/FormDepartmen';
import FormEquipmentGroup from './components/Form/FormDepartmen/FormEquipmentGroup';
import FormLogin from './components/Form/FormAuth/FormLogin';
import FormReg from './components/Form/FormAuth/FormReg';
import { fetchGetUser } from '../src/redax/slices/userSlice';
import { selectAuth } from './redax/slices/authSlice';

import { useDispatch, useSelector } from 'react-redux';
import FormEquipment from './components/Form/FormDepartmen/FormEquipment';
import Description from './components/Department/Node/Description';

function App() {
  const dispatch = useDispatch();
  const { token } = useSelector(selectAuth);

  React.useEffect(() => {
    if (token) {
      dispatch(fetchGetUser(token));
    }
  }, []);

  return (
    <div className="page">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/department" element={<Department />} />
        <Route path="/description" element={<Description />} />
        <Route path="/login" element={<FormLogin />} />
        <Route path="/reg" element={<FormReg />} />
        <Route path="/form_departmen" element={<FormDepartmen />} />
        <Route path="/Form_equipment_roup" element={<FormEquipmentGroup />} />
        <Route path="/Form_equipment" element={<FormEquipment />} />
        <Route path="*" element={<NodFound />} />
      </Routes>
    </div>
  );
}

export default App;
