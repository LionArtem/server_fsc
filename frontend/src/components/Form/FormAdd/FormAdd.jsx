import React from 'react';
import Style from './FormAdd.module.scss';

export default function FormAdd({ placeholder }) {
  return (
    <form className={Style.form}>
      <input placeholder={placeholder} />
      <button>добавить</button>
    </form>
  );
}
