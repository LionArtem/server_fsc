import React from 'react';

import FormAddTitle from './FormAddTitle';

import { fetchAddNewDepartment } from '../../../redax/slices/departmentSlice';
import { useDispatch } from 'react-redux';

export default function FormDepartmen() {
  const dispatch = useDispatch();

  const hendleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(fetchAddNewDepartment(evt.target.name.value));
  };

  return (
    <FormAddTitle
      hendleSubmit={hendleSubmit}
      textPlaceholder="отделение"
      linkExit="/"
    ></FormAddTitle>
  );
}
