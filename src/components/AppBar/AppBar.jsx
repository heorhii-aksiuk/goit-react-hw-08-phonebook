import React from 'react';
import { NavLink } from 'react-router-dom';
import Section from '../Section/Section';

export default function AppBar() {
  return (
    <Section title="My phonebook">
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to="/contacts">Contacts</NavLink>
            </li>
            <li>
              <NavLink to="/register">Register</NavLink>
            </li>
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </Section>
  );
}
