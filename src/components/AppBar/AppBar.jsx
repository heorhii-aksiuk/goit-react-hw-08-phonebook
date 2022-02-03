import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../store/auth/auth-selectors';
import Section from '../Section/Section';
import UserMenu from '../UserMenu/UserMenu';
import s from './AppBar.module.css';

export default function AppBar() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <Section title="My phonebook">
      <header>
        <nav className={s.nav}>
          <ul>
            {isLoggedIn ? (
              <li className={s.item}>
                <NavLink to="/contacts" className={s.link}>
                  Contacts
                </NavLink>
              </li>
            ) : (
              <>
                <li className={s.item}>
                  <NavLink to="/register" className={s.link}>
                    Register
                  </NavLink>
                </li>
                <li className={s.item}>
                  <NavLink to="/login" className={s.link}>
                    Login
                  </NavLink>
                </li>
              </>
            )}
          </ul>
          <UserMenu></UserMenu>
        </nav>
      </header>
    </Section>
  );
}
