import React from 'react';
import Style from './FormAdd.module.scss';
import { useNavigate } from 'react-router-dom';

export default function FormAdd({ placeholder }) {
  const navigate = useNavigate();
  return (
    <form className={Style.form}>
      <dev className={Style.clouse} onClick={() => navigate(-1)}></dev>
      <input placeholder={placeholder} />
      <button>добавить</button>
    </form>
  );
}
