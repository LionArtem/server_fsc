import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addIdGroup } from '../../../redax/slices/departmentSlice';

export default function NodeLink(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data, idGroup } = props;
  //console.log(data);
  function onListJob() {
    localStorage.setItem('idEquipment', data._id);
    localStorage.setItem('idGroup', idGroup);
    // dispatch(addIdGroup(data._id));
    //console.log(data);
    navigate('/description');
  }
  return (
    <li className="navigation__title">
      <h3
        onClick={() => {
          onListJob();
        }}
        className="navigation__text"
      >
        {data.titleEquipment}
      </h3>
    </li>
  );
}
