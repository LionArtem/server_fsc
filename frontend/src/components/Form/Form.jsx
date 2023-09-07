import React from 'react';
import Style from './Form.module.scss';

import { useSelector } from 'react-redux';
import { selectformValidetion } from '../../redax/slices/formValidetionSlice';
import ButtonSubmit from '../Buttons/ButtonSubmit/ButtonSubmit';
import ButtonExit from './ButtonExit';

export default function FormAdd({ hendleSubmit, children, textSubmit }) {
  const { valid } = useSelector(selectformValidetion);

  return (
    <form onSubmit={(evt) => hendleSubmit(evt)} className={Style.form}>
      <ButtonExit />
      {children}
      <ButtonSubmit valid={valid} text={textSubmit} />
    </form>
  );
}
