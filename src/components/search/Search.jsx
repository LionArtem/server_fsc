import React from 'react';
import { Link } from 'react-router-dom';

import Fuse from 'fuse.js';

import style from './Search.module.scss';

import { searchList } from '../.././utils/constants';
import Found from '../../image/search.svg';

export default function Search() {
  const [inputValue, setInputValue] = React.useState('');

  const [botton, setBotton] = React.useState(false);

  const fuse = new Fuse(searchList, {
    keys: ['value'],
  });

  const matches = fuse.search(inputValue);

  const offEarch = () => {
    setBotton(false);
    setTimeout(setInputValue(''), 2000);
  };

  function closeOverley(evt) {
    if (evt.target === evt.currentTarget) setBotton(false);
    setInputValue('');
  }

  return (
    <div className={style.search_conteiner}>
      {matches.length > 0 && (
        <div
          onClick={(evt) => closeOverley(evt)}
          className={style.overflow}
        ></div>
      )}
      <div>
        <img src={Found} alt="поиск" />
        <input
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
            setBotton(false);
          }}
          type="text"
          placeholder="Поиск оборудования"
          minLength="2"
          maxLength="50"
        />
      </div>

      {botton && !!matches.length && (
        <Link to={matches[0].item.link}>
          <div onClick={() => offEarch()}>Найти</div>
        </Link>
      )}
      {inputValue.length > 0 && !matches.length && (
        <p className={style.nod_found}>По вашему запросу не чего не найдено</p>
      )}
      {!!matches.length && (
        <div className={style.search_list_conteiner}>
          <ul>
            {matches.map((obj, i) => (
              <li
                key={i}
                onClick={() => {
                  setInputValue(obj.item.value);
                  setBotton(true);
                }}
              >
                {obj.item.value}
              </li>
            ))}
          </ul>
        </div>
      )}
      {}
    </div>
  );
}
