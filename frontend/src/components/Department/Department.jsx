import React from 'react';
import DepartmentCard from './DepartmentCard';

import NodeLink from './Node/NodeLink';

function Department(props) {
  const { title, list } = props;

  return (
    <>
      <h1 className="header-department">{title}:</h1>
      <section className="navigation navigation__cards">
        {list.map((obj, i) => (
          <DepartmentCard key={i} subTitle={obj.subTitle}>
            {obj.list.map((data, i) => (
              <NodeLink key={i} title={data.title} link={data.link} />
            ))}
          </DepartmentCard>
        ))}
      </section>
    </>
  );
}

export default Department;
