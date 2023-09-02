import React from 'react';
import Style from './ButtonsAdd.module.scss';
import plus from '../../../image/33.svg';

export default function ButtonsAdd() {
  return (
    <div className={Style.button}>
      <img src={plus} alt="плюс"></img>
    </div>
  );
}
