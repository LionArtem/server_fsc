function NavigationListLinks(props) {
  const { title } = props;
  return (
    <li className="navigation__title">
      <a className="navigation__list-links" href="">
        <h2 className="navigation__text">{title}.</h2>
      </a>
    </li>
  );
}

export default NavigationListLinks;
