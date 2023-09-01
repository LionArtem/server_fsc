import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

function NavigationListLinks(props) {
  const { title } = props;
  const dispatch = useDispatch();

  return (
    <li className="navigation__title">
      <Link to="/department" className="navigation__list-links">
        <h2
          className="navigation__text"
        >
          {title}.
        </h2>
      </Link>
    </li>
  );
}

export default NavigationListLinks;
