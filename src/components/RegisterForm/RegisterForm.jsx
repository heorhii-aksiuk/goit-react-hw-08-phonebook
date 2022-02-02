import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from '../../store/auth/auth-operations';

import s from './RegisterForm.module.css';

export default function RegisterForm() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleChange(e) {
    const { name, value } = e.target;
    if (name === 'name') setName(value);
    if (name === 'email') setEmail(value);
    if (name === 'password') setPassword(value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className={s.wrapper}>
        <label className={s.label} htmlFor="nameInRegister">
          Name:
        </label>
        <input
          className={s.input}
          value={name}
          onChange={handleChange}
          type="text"
          id="nameInRegister"
          name="name"
          // autoComplete="off"
          autoComplete="on"
          required
        />
      </div>
      <div className={s.wrapper}>
        <label className={s.label} htmlFor="emailInRegister">
          Email:
        </label>
        <input
          className={s.input}
          value={email}
          onChange={handleChange}
          type="text"
          id="emailInRegister"
          name="email"
          // autoComplete="off"
          autoComplete="on"
          required
        />
      </div>
      <div className={s.wrapper}>
        <label className={s.label} htmlFor="passwordInRegister">
          Password:
        </label>
        <input
          className={s.input}
          value={password}
          onChange={handleChange}
          type="password"
          id="passwordInRegister"
          name="password"
          // autoComplete="off"
          autoComplete="on"
          required
        />
      </div>

      <button className={s.button} type="submit">
        Register
      </button>
    </form>
  );
}
