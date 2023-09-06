import React from 'react';
import FormAuth from './FormAuth';
import Style from '../Form.module.scss';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { killAllStateFormValidetion } from '../../../redax/slices/formValidetionSlice';
import { fetchLoginUser } from '../../../redax/slices/authSlice';

export default function FormLogin() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  React.useEffect(() => {
    return () => dispatch(killAllStateFormValidetion());
  }, []);

  const hendleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(
      fetchLoginUser({
        email: evt.target.email.value,
        password: evt.target.password.value,
      })
    );
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
