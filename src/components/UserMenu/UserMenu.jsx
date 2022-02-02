import React from 'react';
import { useSelector } from 'react-redux';
import { getIsLoggedIn, getUserName } from '../../store/auth/auth-selectors';
import s from './UserMenu.module.css';
export default function UserMenu() {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const userName = useSelector(getUserName);
  return (
    isLoggedIn && (
      <div>
        <p className={s.paragraph}>Hello, {userName}</p>
        <button className={s.button} type="button">
          Logout
        </button>
      </div>
    )
  );
}
