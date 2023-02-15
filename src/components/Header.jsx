import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <Link to='/server_fsc' className='header__link'>
        <h1 className="header__title">
          Этот сайт создан что бы облегчить жизнь слесаря.
        </h1>
      </Link>
      <div className="header__foto rateit"></div>
    </header>
  );
}

export default Header;
