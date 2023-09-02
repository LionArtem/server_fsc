import React from 'react';
import Style from './Home.module.scss';

import NavigationListLinks from '../../components/NavigationListLinks';
import { useSelector } from 'react-redux';
import { selectDepartment } from '../../redax/slices/departmentSlice';
import Search from '../../components/search/Search';
import ButtonsAdd from '../../components/Buttons/ButtonsAdd/ButtonsAdd';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function Home() {
  const navigate = useNavigate();
  const { department } = useSelector(selectDepartment);
  const openDepartmentForm = () => {
    navigate('/form_departmen');
  };
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
              {department.map((data, i) => (
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
