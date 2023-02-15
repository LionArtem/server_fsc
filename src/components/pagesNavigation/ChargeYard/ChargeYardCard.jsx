import React from 'react';

export default function ChargeYardCard(props) {
  const { title, children } = props;
  return (
    <div className="navigation__card">
      <h2 className="navigation__text navigation__text-card">{title}</h2>
      <nav>
        <ul className="navigation__list">
        {children}
        </ul>
      </nav>
    </div>
  );
}
