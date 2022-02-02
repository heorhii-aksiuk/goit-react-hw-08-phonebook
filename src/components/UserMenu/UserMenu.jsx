import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import authOperations from '../../store/auth/auth-operations';
import { getIsLoggedIn, getUserName } from '../../store/auth/auth-selectors';
import s from './UserMenu.module.css';

export default function UserMenu() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(getIsLoggedIn);
  const userName = useSelector(getUserName);
  const handleClick = () => dispatch(authOperations.logout());

  return (
    isLoggedIn && (
      <div>
        <p className={s.paragraph}>Hello, {userName}</p>
        <button onClick={handleClick} className={s.button} type="button">
          Logout
        </button>
      </div>
    )
  );
}
