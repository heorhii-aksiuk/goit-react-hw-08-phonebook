import React from 'react';
import s from './UserMenu.module.css';
export default function UserMenu() {
  return (
    <div>
      <p className={s.paragraph}>user@mail.com</p>
      <button className={s.button} type="button">
        Logout
      </button>
    </div>
  );
}
