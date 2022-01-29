import { useState } from 'react';
import s from './LoginForm.module.css';

export default function LoginForm({ onSubmitLogin }) {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  function handleChange(e) {
    const { name, value } = e.target;
    if (name === 'login') setLogin(value);
    if (name === 'password') setPassword(value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const userLoginData = { login, password };
    onSubmitLogin(userLoginData);
    reset();
  }

  function reset() {
    setLogin('');
    setPassword('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className={s.wrapper}>
        <label className={s.label} htmlFor="loginInLogin">
          Login:
        </label>
        <input
          className={s.input}
          value={login}
          onChange={handleChange}
          type="text"
          id="loginInLogin"
          name="login"
          autoComplete="off"
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
          autoComplete="off"
          required
        />
      </div>

      <button className={s.button} type="submit">
        Login
      </button>
    </form>
  );
}
