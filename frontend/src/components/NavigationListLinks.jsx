import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { addDepartment } from '../redax/slices/departmentSlice';

function NavigationListLinks(props) {
  const { data } = props;
  const dispatch = useDispatch();

  return (
    <li
      onClick={() => dispatch(addDepartment(data))}
      className="navigation__title"
    >
      <Link to="/department" className="navigation__list-links">
        <h2 className="navigation__text">{data.titleDepartment}.</h2>
      </Link>
    </li>
  );
}

export default NavigationListLinks;
