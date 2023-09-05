import React from 'react';
import FormAuth from './FormAuth';
import Style from '../Form.module.scss';
import { useNavigate } from 'react-router-dom';

export default function FormLogin() {
  const navigate = useNavigate();
  const hendleSubmit = (evt) => {
    evt.preventDefault();
    //dispatch(fetchAddNewDepartment(evt.target.name.value));
  };
  return (
    <FormAuth hendleSubmit={hendleSubmit} textSubmit={'Войти'}>
      {' '}
      <p className={Style.text_auth}>
        Не зарегистрированны?
        <span onClick={() => navigate('/reg')}>Регистрация</span>
      </p>
    </FormAuth>
  );
}
