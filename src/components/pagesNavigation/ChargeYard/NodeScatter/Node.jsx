import React from 'react';
import { Link } from 'react-router-dom';

export default function Node(props) {
  const { title, link } = props;
  return (
    <li className="navigation__title">
      <Link className="navigation__list-links" to={link}>
        <h3 className="navigation__text">{title}</h3>
      </Link>
    </li>
  );
}
