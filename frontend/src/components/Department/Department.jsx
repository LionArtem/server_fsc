import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectDepartment } from '../../redax/slices/departmentSlice';

import DepartmentCard from './DepartmentCard';

import NodeLink from './Node/NodeLink';

function Department() {
  const dispatch = useDispatch();
  const { department } = useSelector(selectDepartment);

  return (
    <>
      <h1 className="header-department">{department[0].titleDepartment}:</h1>
      <section className="navigation navigation__cards">
        {department[0].equipmentGroup.map((obj, i) => (
          <DepartmentCard key={i} subTitle={obj.titleGroup}>
            {obj.listEquipment.map((data, i) => (
              <NodeLink key={i} title={data.titleEquipment} />
            ))}
          </DepartmentCard>
        ))}
      </section>
    </>
  );
}

export default Department;
