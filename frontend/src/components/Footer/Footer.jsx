import { useNavigate } from 'react-router-dom';
import login from '../../image/275.svg';
import Style from './Footer.module.scss';
import { useSelector } from 'react-redux';
import { selectUser } from '../../redax/slices/userSlice';

function Footer() {
  const navigate = useNavigate();
  const { user } = useSelector(selectUser);

  return (
    <footer className="footer">
      <p className="footer__user-name">{user.name}</p>
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
