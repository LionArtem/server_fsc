import React from 'react';
import Style from './Form.module.scss';

import ButtonSubmit from '../Buttons/ButtonSubmit/ButtonSubmit';
import ButtonExit from './ButtonExit';
import { useDispatch, useSelector } from 'react-redux';
import {
  setValue,
  selectformValidetion,
} from '../../redax/slices/formValidetionSlice';

export default function FormAuth() {
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

  const hendleSubmit = (evt) => {
    evt.preventDefault();
    //dispatch(fetchAddNewDepartment(evt.target.name.value));
  };

  return (
    <form onSubmit={(evt) => hendleSubmit(evt)} className={Style.form}>
      <ButtonExit />
      <label>e-mail</label>
      <span>{errors.email}</span>
      <input
        pattern="[a-zA-Z0-9._\-]+@[a-zA-Z0-9._\-]+\.[a-zA-Z0-9_\-]+"
        value={value.email ?? ''}
        onChange={(evt) => changeValue(evt)}
        type="email"
        name="email"
        required
      ></input>
      <label>password</label>
      <span>{errors.password}</span>
      <input
        value={value.password ?? ''}
        onChange={(evt) => changeValue(evt)}
        type="password"
        name="password"
        minLength={8}
        required
      ></input>
      <ButtonSubmit valid={valid} text={'Войти'} />
    </form>
  );
}
