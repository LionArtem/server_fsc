import React from 'react';
import FormAdd from '../FormAdd/FormAdd';
import { fetchAddNewDepartment } from '../../../redax/slices/departmentSlice';
import { useDispatch } from 'react-redux';

export default function FormDepartmen() {
  const dispatch = useDispatch();
  const hendleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(fetchAddNewDepartment(evt.target.name.value));
  };
  return (
    <FormAdd hendleSubmit={hendleSubmit} placeholder="название отделения" />
  );
}
