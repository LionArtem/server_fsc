import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchGetEquipmentId,
  selectDepartment,
} from '../../../redax/slices/departmentSlice';

export default function Description() {
  const dispatch = useDispatch();

  const { listJobsEquipment } = useSelector(selectDepartment);

  React.useEffect(() => {
    dispatch(
      fetchGetEquipmentId({
        idDepartment: localStorage.getItem('idDepartment'),
        idGroup: localStorage.getItem('idGroup'),
        idEquipment: localStorage.getItem('idEquipment'),
      })
    );
  }, []);

  return (
    <div className="job-description navigation">
      <div className="job-description__conteiner">
        {listJobsEquipment.length > 0 &&
          listJobsEquipment.description.map((obj, i) => (
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
          {listJobsEquipment.length > 0 && listJobsEquipment.tools}
        </ul>
        <h3 className="job-description__titl">Запчасти,метизы:</h3>
        <ul className="job-description__list">
          {listJobsEquipment.length > 0 && listJobsEquipment.spareParts}
        </ul>
        <h3 className="job-description__titl">СИЗ:</h3>
        <ul className="job-description__list">
          {listJobsEquipment.length > 0 && listJobsEquipment.sIZ}
        </ul>
        <h3 className="job-description__titl">Мероприятия по ТБ:</h3>
        <ul className="job-description__list">
          {listJobsEquipment.length > 0 && listJobsEquipment.safetyPrecautions}
        </ul>
        {/* <button className="job-description__button-comment" type="button">
          Комментарии
        </button> */}
      </div>
    </div>
  );
}
