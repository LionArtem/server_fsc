import { useNavigate } from 'react-router-dom';
import login from '../../image/275.svg';
import Style from './Footer.module.scss';

function Footer() {
  const navigate = useNavigate();
  return (
    <footer className="footer">
      <p className="footer__copyright">Артём Гриневич</p>
      <nav>
        <a
          className="footer__link-vk"
          href="https://vk.com/id82204125"
          target="_blank"
          rel="noreferrer"
        >
          (Вконтакте)
        </a>
      </nav>
      <img
        onClick={() => navigate('/login')}
        className={Style.login_img}
        src={login}
        alt="вход"
      />
    </footer>
  );
}

export default Footer;
