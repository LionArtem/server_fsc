import React from 'react';
import ButtonsAdd from '../Buttons/ButtonsAdd/ButtonsAdd';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addIdGroup } from '../../redax/slices/departmentSlice';

export default function DepartmentCard(props) {
  const { children, subTitle, idGroup } = props;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const openForm = () => {
    dispatch(addIdGroup(idGroup));
    navigate('/Form_equipment');
  };

  return (
    <div className="navigation__card">
      <h2 className="navigation__text navigation__text-card">{subTitle}</h2>
      <ButtonsAdd openForm={openForm} />
      <nav>
        <ul className="navigation__list">{children}</ul>
      </nav>
    </div>
  );
}
