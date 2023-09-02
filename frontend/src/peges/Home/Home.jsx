import React from 'react';
import Style from './Home.module.scss';

import { navigationList } from '../../utils/constants';
import NavigationListLinks from '../../components/NavigationListLinks';
import { useSelector } from 'react-redux';
import { selectDepartment } from '../../redax/slices/departmentSlice';
import Search from '../../components/search/Search';
import ButtonsAdd from '../../components/Buttons/ButtonsAdd/ButtonsAdd';

function Home() {
  const { department } = useSelector(selectDepartment);
  return (
    <>
      <div className={Style.conteiner_interaction}>
        <ButtonsAdd />
        <Search />
      </div>
      <section className="navigation">
        <nav>
          <ul className="navigation__list">
            {department.map((data, i) => (
              <NavigationListLinks key={i} data={data} />
            ))}
          </ul>
        </nav>
      </section>
    </>
  );
}

export default Home;
