import React from 'react';
import Form from '../Form';
import { fetchAddNewDepartment } from '../../../redax/slices/departmentSlice';
import { useDispatch, useSelector } from 'react-redux';

import {
  setValue,
  selectformValidetion,
} from '../../../redax/slices/formValidetionSlice';

export default function FormDepartmen() {
  const dispatch = useDispatch();

  const { value, errors } = useSelector(selectformValidetion);

  const hendleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(fetchAddNewDepartment(evt.target.name.value));
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
      <span>{errors.name}</span>
      <input
        pattern="^((?!\s{2}).)*$"
        maxLength={30}
        minLength={3}
        value={value.name ?? ''}
        onChange={(evt) => changeValue(evt)}
        required
        name="name"
        placeholder="название отделения"
      />
    </Form>
  );
}
