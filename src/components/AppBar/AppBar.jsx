import React from 'react';
import { NavLink } from 'react-router-dom';
import Section from '../Section/Section';
import UserMenu from '../UserMenu/UserMenu';
import s from './AppBar.module.css';
export default function AppBar() {
  return (
    <Section title="My phonebook">
      <header>
        <nav className={s.nav}>
          <ul>
            <li className={s.item}>
              <NavLink to="/contacts" className={s.link}>
                Contacts
              </NavLink>
            </li>
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
          </ul>
          <UserMenu></UserMenu>
        </nav>
      </header>
    </Section>
  );
}
