import React from 'react';
import FormAuth from './FormAuth';
import { useNavigate } from 'react-router-dom';
import Style from '../Form.module.scss';
import { useDispatch } from 'react-redux';
import { setfopmReg } from '../../../redax/slices/authSlice';

export default function FormReg() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(setfopmReg(true));
    return () => dispatch(setfopmReg(false));
  }, []);

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
