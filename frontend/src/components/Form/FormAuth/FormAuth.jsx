import Style from '../Form.module.scss';

import ButtonSubmit from '../../Buttons/ButtonSubmit/ButtonSubmit';
import ButtonExit from '../ButtonExit';
import { useDispatch, useSelector } from 'react-redux';
import {
  setValue,
  selectformValidetion,
} from '../../../redax/slices/formValidetionSlice';
import { selectAuth } from '../../../redax/slices/authSlice';

export default function FormAuth({ hendleSubmit, textSubmit, children }) {
  const dispatch = useDispatch();
  const { value, errors, valid } = useSelector(selectformValidetion);
  const { fopmReg } = useSelector(selectAuth);

  const changeValue = (evt) => {
    dispatch(
      setValue({
        value: evt.target.value,
        name: evt.target.name,
        errors: evt.target.validationMessage,
        valid: evt.target.closest('form').checkValidity(),
      })
    );
  };

  return (
    <form onSubmit={(evt) => hendleSubmit(evt)} className={Style.form}>
      <ButtonExit />
      <label>e-mail</label>
      <span>{errors.email}</span>
      <input
        pattern="[a-zA-Z0-9._\-]+@[a-zA-Z0-9._\-]+\.[a-zA-Z0-9_\-]+"
        value={value.email ?? ''}
        onChange={(evt) => changeValue(evt)}
        type="email"
        name="email"
        required
      ></input>
      <label>пароль</label>
      <span>{errors.password}</span>
      <input
        value={value.password ?? ''}
        onChange={(evt) => changeValue(evt)}
        type="password"
        name="password"
        minLength={8}
        required
      ></input>
      {fopmReg && (
        <>
          <label>имя</label>
          <span>{errors.name}</span>
          <input
            pattern="^((?!\s{2}).)*$"
            value={value.name ?? ''}
            onChange={(evt) => changeValue(evt)}
            name="name"
            minLength={5}
            maxLength={30}
            required
          ></input>{' '}
          <label>должность</label>
          <span>{errors.positionWork}</span>
          <input
            pattern="^((?!\s{2}).)*$"
            value={value.positionWork ?? ''}
            onChange={(evt) => changeValue(evt)}
            name="positionWork"
            minLength={5}
            maxLength={30}
            required
          ></input>
        </>
      )}
      <ButtonSubmit valid={valid} text={textSubmit} />
      {children}
    </form>
  );
}
