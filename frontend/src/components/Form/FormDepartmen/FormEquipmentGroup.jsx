import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {
  fetchAddEquipmentDepartment,
  selectDepartment,
} from '../../../redax/slices/departmentSlice';

import FormAddTitle from './FormAddTitle';

export default function FormEquipmentGroup() {
  const dispatch = useDispatch();
  const { department } = useSelector(selectDepartment);

  const hendleSubmit = (evt) => {
    evt.preventDefault();
    const idDepartment = localStorage.getItem('idDepartment')
      ? localStorage.getItem('idDepartment')
      : department._id;
    dispatch(
      fetchAddEquipmentDepartment({
        idDepartment,
        titleGroup: evt.target.name.value,
      })
    );
  };

  return (
    <FormAddTitle
      hendleSubmit={hendleSubmit}
      textPlaceholder="группа оборудования"
    />
  );
}
