import React from 'react';
import FormAuth from './FormAuth';
import { useNavigate } from 'react-router-dom';
import Style from '../Form.module.scss';
import { useDispatch } from 'react-redux';
import { setfopmReg, fetchAddUser } from '../../../redax/slices/authSlice';
import { killAllStateFormValidetion } from '../../../redax/slices/formValidetionSlice';

export default function FormReg() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const clearComponent = () => {
    dispatch(setfopmReg(false));
    dispatch(killAllStateFormValidetion());
  };

  React.useEffect(() => {
    dispatch(setfopmReg(true));
    return () => clearComponent();
  }, []);

  const hendleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(
      fetchAddUser({
        email: evt.target.email.value,
        password: evt.target.password.value,
        name: evt.target.name.value,
        positionWork: evt.target.positionWork.value,
      })
    );
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
