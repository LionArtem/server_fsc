import React from 'react';
import Style from './Home.module.scss';

import NavigationListLinks from '../../components/NavigationListLinks';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectDepartment,
  fetchGetAllDepartment,
} from '../../redax/slices/departmentSlice';
import Search from '../../components/search/Search';
import ButtonsAdd from '../../components/Buttons/ButtonsAdd/ButtonsAdd';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { ListDepartment } = useSelector(selectDepartment);

  const openDepartmentForm = () => {
    navigate('/form_departmen');
  };

  React.useEffect(() => {
    dispatch(fetchGetAllDepartment());
  }, []);

  return (
    <>
      <Header />
      <main className="main">
        <div className={Style.conteiner_interaction}>
          <ButtonsAdd openForm={openDepartmentForm} />
          <Search />
        </div>
        <section className="navigation">
          <nav>
            <ul className="navigation__list">
              {ListDepartment.map((data, i) => (
                <NavigationListLinks key={i} data={data} />
              ))}
            </ul>
          </nav>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Home;
