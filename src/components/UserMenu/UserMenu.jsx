import { useSelector, useDispatch } from 'react-redux';
import authOperations from '../../store/auth/auth-operations';
import {
  selectIsLoggedIn,
  selectUserName,
} from '../../store/auth/auth-selectors';
import s from './UserMenu.module.css';

export default function UserMenu() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const userName = useSelector(selectUserName);

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
