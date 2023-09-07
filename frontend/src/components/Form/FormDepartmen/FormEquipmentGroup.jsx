import React from 'react';

import Form from '../Form';
import { useDispatch, useSelector } from 'react-redux';

import {
  fetchAddEquipmentDepartment,
  selectDepartment,
} from '../../../redax/slices/departmentSlice';

import {
  selectformValidetion,
  setValue,
} from '../../../redax/slices/formValidetionSlice';

export default function FormEquipmentGroup() {
  const dispatch = useDispatch();

  const { value, errors } = useSelector(selectformValidetion);

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

  const changeValue = (evt) => {
    dispatch(
      setValue({
        value: evt.target.value,
        name: evt.target.name,
        errors: evt.target.validationMessage,
        valid: evt.target.closest('form').checkValidity(),
      })
    );
  };

  return (
    <Form hendleSubmit={hendleSubmit} textSubmit={'Добавить'}>
      {' '}
      <span>{errors.name}</span>
      <input
        pattern="^((?!\s{2}).)*$"
        maxLength={30}
        minLength={3}
        value={value.name ?? ''}
        onChange={(evt) => changeValue(evt)}
        required
        name="name"
        placeholder="группа оборудования"
      />
    </Form>
  );
}
