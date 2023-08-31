import React from 'react';

export default function DepartmentCard(props) {
  const { children,subTitle } = props;
  return (
    <div className="navigation__card">
      <h2 className="navigation__text navigation__text-card">{subTitle}</h2>
      <nav>
        <ul className="navigation__list">
        {children}
        </ul>
      </nav>
    </div>
  );
}
