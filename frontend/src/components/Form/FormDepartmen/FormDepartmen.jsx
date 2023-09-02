import React from 'react';
import FormAdd from '../FormAdd/FormAdd';

export default function FormDepartmen() {
  const hendleSubmit = (evt) => {
    evt.preventDefault()
    console.log('submit');
  };
  return (
    <FormAdd hendleSubmit={hendleSubmit} placeholder="название отделения" />
  );
}
