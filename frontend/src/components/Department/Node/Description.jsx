import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchGetEquipmentId,
  selectDepartment,
} from '../../../redax/slices/departmentSlice';
import ButtonsAdd from '../../Buttons/ButtonsAdd/ButtonsAdd';
import { useNavigate } from 'react-router-dom';

export default function Description() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

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

  const openForm = () => {
    navigate('/Form_job');
  };

  return (
    <div className="job-description navigation">
      <ButtonsAdd openForm={openForm} />
      <div className="job-description__conteiner">
        <div>
          <p className="job-description__text">
            {listJobsEquipment.titleEquipment}
          </p>
        </div>
        {listJobsEquipment.listJobs &&
          listJobsEquipment.listJobs.map((data) => (
            <div key={data._id}>
              <h3 className="job-description__titl">Вид работы:</h3>
              <p className="job-description__list">{data.nameJob}</p>
              <h3 className="job-description__titl">Фото:</h3>
              <img
                className="job-description__foto"
                src={data.foto}
                alt={'оборудование'}
              />
              <h3 className="job-description__titl">Описание:</h3>
              <p className="job-description__list">{data.discription}</p>
              <h3 className="job-description__titl">инструмент:</h3>
              <p className="job-description__list">{data.tools}</p>
              <h3 className="job-description__titl">Запчасти,метизы:</h3>
              <p className="job-description__list">{data.spareParts}</p>
              <h3 className="job-description__titl">СИЗ:</h3>
              <p className="job-description__list">{data.safetyPrecautions}</p>
              <h3 className="job-description__titl">Мероприятия по ТБ:</h3>
              <p className="job-description__list">{data.spareParts}</p>
              {/* <button className="job-description__button-comment" type="button">
          Комментарии
        </button> */}
            </div>
          ))}
      </div>
    </div>
  );
}
