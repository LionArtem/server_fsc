import React from 'react';

import { navigationList } from '.././utils/constants';
import NavigationListLinks from '.././components/NavigationListLinks';
import { useSelector } from 'react-redux';
import { selectDepartment } from '../redax/slices/departmentSlice';

function Home() {
  const { department } = useSelector(selectDepartment);
  return (
    <section className="navigation">
      <nav>
        <ul className="navigation__list">
          {department.map((data, i) => (
            <NavigationListLinks key={i} data={data} />
          ))}
        </ul>
      </nav>
    </section>
  );
}

export default Home;
