import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function NodeLink(props) {
  const navigate = useNavigate();
  const { data } = props;
  console.log(data);
  function onListJob() {
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
