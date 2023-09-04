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

  function checkedStringGap(string) {
    const regex = /^((?!\s{2}).)*$/;
    const result = regex.test(string);
    return result;
  }
  const changeValue = (evt) => {
    let errMessage = evt.target.validationMessage;
    if (!checkedStringGap(evt.target.value)) {
      errMessage = 'одного пробела достаточно!';
    }
    dispatch(
      setValue({
        value: evt.target.value,
        name: evt.target.name,
        errors: errMessage,
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
