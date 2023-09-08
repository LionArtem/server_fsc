import React from 'react';
import FormAddTitle from './FormAddTitle';

export default function FormEquipment() {
  const hendleSubmit = () => {};

  return (
    <FormAddTitle
      hendleSubmit={hendleSubmit}
      textPlaceholder="название оборудования"
    ></FormAddTitle>
  );
}
