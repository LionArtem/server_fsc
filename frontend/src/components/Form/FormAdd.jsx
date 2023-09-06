import React from 'react';
import Style from './Form.module.scss';

import { useDispatch, useSelector } from 'react-redux';
import {
  setValue,
  selectformValidetion,
} from '../../redax/slices/formValidetionSlice';
import ButtonSubmit from '../Buttons/ButtonSubmit/ButtonSubmit';
import ButtonExit from './ButtonExit';

export default function FormAdd({ placeholder, hendleSubmit }) {
  const dispatch = useDispatch();

  const { value, errors, valid } = useSelector(selectformValidetion);

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
    <form onSubmit={(evt) => hendleSubmit(evt)} className={Style.form}>
      <ButtonExit />
      <span>{errors.name}</span>
      <input
        pattern="^((?!\s{2}).)*$"
        maxLength={30}
        minLength={3}
        value={value.name ?? ''}
        onChange={(evt) => changeValue(evt)}
        required
        name="name"
        placeholder={placeholder}
      />
      <ButtonSubmit valid={valid} text={'добавить'} />
    </form>
  );
}
