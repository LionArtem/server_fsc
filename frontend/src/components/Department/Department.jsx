import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  selectDepartment,
  fetchGetDepartmentId,
} from '../../redax/slices/departmentSlice';

import DepartmentCard from './DepartmentCard';

import NodeLink from './Node/NodeLink';
import ButtonsAdd from '../Buttons/ButtonsAdd/ButtonsAdd';
import { useNavigate } from 'react-router-dom';

function Department() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { department } = useSelector(selectDepartment);
  //console.log(department);

  React.useEffect(() => {
    dispatch(
      fetchGetDepartmentId(
        localStorage.getItem('idDepartment')
          ? localStorage.getItem('idDepartment')
          : department._id
      )
    );
  }, []);

  const openForm = () => {
    navigate('/Form_equipment_roup');
  };

  return (
    <>
      <h1 className="header-department">{department.titleDepartment}:</h1>
      <ButtonsAdd openForm={openForm} />
      <section className="navigation navigation__cards">
        {department.equipmentGroup &&
          department.equipmentGroup.length > 0 &&
          department.equipmentGroup.map((obj, i) => (
            <DepartmentCard key={i} idGroup={obj._id} subTitle={obj.titleGroup}>
              {obj.listEquipment.map((data, i) => (
                <NodeLink key={i} data={data} idGroup={obj._id} />
              ))}
            </DepartmentCard>
          ))}
      </section>
    </>
  );
}

export default Department;
