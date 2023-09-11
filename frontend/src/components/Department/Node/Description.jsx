import React from 'react';

export default function Description({ listJob }) {
  const addList = (arr) => {
    return arr && arr.map((obj, i) => <li key={i}>{obj.title}</li>);
  };

  return (
    <div className="job-description navigation">
      <div className="job-description__conteiner">
        {listJob &&
          listJob.description.map((obj, i) => (
            <div key={i}>
              <p className="job-description__text">{obj.title}</p>
              {obj.src && (
                <img
                  className="job-description__foto"
                  src={obj.src}
                  alt={obj.alt}
                />
              )}
            </div>
          ))}
        <h3 className="job-description__titl">инструмент:</h3>
        <ul className="job-description__list">
          {addList(listJob && listJob.tools)}
        </ul>
        <h3 className="job-description__titl">Запчасти,метизы:</h3>
        <ul className="job-description__list">
          {addList(listJob && listJob.spareParts)}
        </ul>
        <h3 className="job-description__titl">СИЗ:</h3>
        <ul className="job-description__list">
          {addList(listJob && listJob.sIZ)}
        </ul>
        <h3 className="job-description__titl">Мероприятия по ТБ:</h3>
        <ul className="job-description__list">
          {addList(listJob && listJob.safetyPrecautions)}
        </ul>
        {/* <button className="job-description__button-comment" type="button">
          Комментарии
        </button> */}
      </div>
    </div>
  );
}
