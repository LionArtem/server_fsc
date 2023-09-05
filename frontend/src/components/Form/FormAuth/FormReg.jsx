import React from 'react';
import FormAuth from './FormAuth';
import { useNavigate } from 'react-router-dom';
import Style from "../Form.module.scss";


export default function FormReg() {
  const navigate = useNavigate();
  const hendleSubmit = (evt) => {
    evt.preventDefault();
    //dispatch(fetchAddNewDepartment(evt.target.name.value));
  };
  return (
    <FormAuth hendleSubmit={hendleSubmit} textSubmit={'Зарегистрироваться'}>
      {' '}
      <p className={Style.text_auth}>
        Зарегистрированны?<span onClick={() => navigate('/login')}>Войти</span>
      </p>
    </FormAuth>
  );
}
