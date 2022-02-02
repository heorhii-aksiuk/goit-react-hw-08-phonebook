import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from '../../store/auth/auth-operations';

import s from './LoginForm.module.css';

export default function LoginForm() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleChange(e) {
    const { name, value } = e.target;
    if (name === 'email') setEmail(value);
    if (name === 'password') setPassword(value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(authOperations.login({ email, password }));
    setEmail('');
    setPassword('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className={s.wrapper}>
        <label className={s.label} htmlFor="loginInLogin">
          Email:
        </label>
        <input
          className={s.input}
          value={email}
          onChange={handleChange}
          type="text"
          id="emailInLogin"
          name="email"
          // autoComplete="off"
          autoComplete="on"
          required
        />
      </div>
      <div className={s.wrapper}>
        <label className={s.label} htmlFor="passwordInLogin">
          Password:
        </label>
        <input
          className={s.input}
          value={password}
          onChange={handleChange}
          type="password"
          id="passwordInLogin"
          name="password"
          // autoComplete="off"
          autoComplete="on"
          required
        />
      </div>

      <button className={s.button} type="submit">
        Login
      </button>
    </form>
  );
}
