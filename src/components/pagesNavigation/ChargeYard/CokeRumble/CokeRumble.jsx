import React from 'react';

import Grid from '../../../../image/grid.jpg'


export default function CokeRumble() {
  return (
    <section className="job-description navigation">
      <div className="job-description__conteiner">
        <h2 className="job-description__titl ">Замена сетки</h2>
        <p className="job-description__text">Размеры сетки 20мм:</p>
        <img className="job-description__foto" src={Grid} alt="сетка" />
        <p className="job-description__text">Размеры сетки 5мм: 1800х1200мм</p>
        <h3 className="job-description__titl">инструмент:</h3>
        <ul className="job-description__list">
          <li className="">Гвоздодер</li>
          <li className="">Молоток</li>
        </ul>
        <h3 className="job-description__titl">Запчасти,метизы:</h3>
        <ul className="job-description__list">
          <li className="">Гвозди</li>
        </ul>
        <h3 className="job-description__titl">СИЗ:</h3>
        <ul className="job-description__list">
          <li className="">Распиратор</li>
          <li className="">Страховочная привязь</li>
        </ul>
        <h3 className="job-description__titl">Мероприятия по ТБ:</h3>
        <ul className="job-description__list">
          <li className="">Забрать ключ бирку</li>
          <li className="">Разобрать схему</li>
        </ul>
        <button className="job-description__button-comment" type="button">
          Комментарии
        </button>
      </div>
    </section>
  );
}
