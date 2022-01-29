import s from './LoginForm.module.css';

export default function LoginForm() {
  return (
    <form onSubmit="">
      <div className={s.wrapper}>
        <label className={s.label} htmlFor="login">
          Login:
        </label>
        <input
          className={s.input}
          value=""
          onChange=""
          type="text"
          id="login"
          name="login"
          autoComplete="off"
          required
        />
      </div>
      <div className={s.wrapper}>
        <label className={s.label} htmlFor="password">
          Password:
        </label>
        <input
          className={s.input}
          value=""
          onChange=""
          type="password"
          id="password"
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
