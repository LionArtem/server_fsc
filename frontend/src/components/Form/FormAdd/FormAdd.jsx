import React from 'react';
import Style from './FormAdd.module.scss';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  setValue,
  selectformValidetion,
  killAllStateFormValidetion,
} from '../../../redax/slices/formValidetionSlice';

export default function FormAdd({ placeholder, hendleSubmit }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
  const exitButton = () => {
    dispatch(killAllStateFormValidetion());
    navigate(-1);
  };
  return (
    <form onSubmit={(evt) => hendleSubmit(evt)} className={Style.form}>
      <div
        className={Style.clouse}
        onClick={() => {
          exitButton();
        }}
      ></div>
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
      {valid ? (
        <button className={Style.button_on} type="submit">
          добавить
        </button>
      ) : (
        <button disabled type="submit">
          добавить
        </button>
      )}
    </form>
  );
}
