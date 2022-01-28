import s from './LoginForm.module.css';

export default function LoginForm() {
  return (
    <form onSubmit="">
      <div className={s.wrapper}>
        <label className={s.label} htmlFor="name">
          Login:
        </label>
        <input
          className={s.input}
          value=""
          onChange=""
          type="text"
          id="name"
          name="name"
          autoComplete="off"
          required
        />
      </div>
      <div className={s.wrapper}>
        <label className={s.label} htmlFor="number">
          Password:
        </label>
        <input
          className={s.input}
          value=""
          onChange=""
          type="password"
          id="number"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </div>

      <button className={s.button} type="submit">
        Login
      </button>
    </form>
  );
}
