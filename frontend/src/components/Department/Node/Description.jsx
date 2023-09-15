import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchGetEquipmentId,
  selectDepartment,
} from '../../../redax/slices/departmentSlice';

export default function Description() {
  const dispatch = useDispatch();

  const { listJobsEquipment } = useSelector(selectDepartment);
  console.log(listJobsEquipment);

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
        <div>
          <p className="job-description__text">
            {listJobsEquipment.titleEquipment}
          </p>
        </div>
        {listJobsEquipment.listJobs &&
          listJobsEquipment.listJobs.map(() => (
            <>
              <img className="job-description__foto" src={'*'} alt={'alt'} />
              <h3 className="job-description__titl">инструмент:</h3>
              <p className="job-description__list">{listJobsEquipment.tools}</p>
              <h3 className="job-description__titl">Запчасти,метизы:</h3>
              <p className="job-description__list">
                {listJobsEquipment.spareParts}
              </p>
              <h3 className="job-description__titl">СИЗ:</h3>
              <p className="job-description__list">{listJobsEquipment.sIZ}</p>
              <h3 className="job-description__titl">Мероприятия по ТБ:</h3>
              <p className="job-description__list">
                {listJobsEquipment.safetyPrecautions}
              </p>
              {/* <button className="job-description__button-comment" type="button">
          Комментарии
        </button> */}
            </>
          ))}
      </div>
    </div>
  );
}
