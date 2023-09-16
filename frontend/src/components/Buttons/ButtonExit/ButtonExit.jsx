import React from 'react';
import Style from './ButtonExit.module.scss';
import Foto from '../../../image/123.svg';

export default function ButtonExit() {
  return <img className={Style.button} src={Foto} alt="стрелка назад"></img>;
}
