import { useState } from 'react';
import s from './RegisterForm.module.css';

export default function RegisterForm({ onSubmitRegister }) {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  function handleChange(e) {
    const { name, value } = e.target;
    if (name === 'login') setLogin(value);
    if (name === 'password') setPassword(value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const userRegisterData = { login, password };
    onSubmitRegister(userRegisterData);
    reset();
  }

  function reset() {
    setLogin('');
    setPassword('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className={s.wrapper}>
        <label className={s.label} htmlFor="loginInRegister">
          Login:
        </label>
        <input
          className={s.input}
          value={login}
          onChange={handleChange}
          type="text"
          id="loginInRegister"
          name="login"
          autoComplete="off"
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
          autoComplete="off"
          required
        />
      </div>

      <button className={s.button} type="submit">
        Register
      </button>
    </form>
  );
}
