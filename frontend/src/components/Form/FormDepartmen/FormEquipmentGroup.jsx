import React from 'react';

import FormAdd from '../FormAdd/FormAdd';
import { useDispatch } from 'react-redux';

export default function FormEquipmentGroup() {
  const dispatch = useDispatch();

  const hendleSubmit = (evt) => {
    evt.preventDefault();
    // dispatch(fetchAddNewDepartment(evt.target.name.value));
  };

  return (
    <FormAdd hendleSubmit={hendleSubmit} placeholder="группа оборудования" />
  );
}
