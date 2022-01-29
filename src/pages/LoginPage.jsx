import React from 'react';
import Section from '../components/Section/Section';
import LoginForm from '../components/LoginForm/LoginForm';

export default function LoginPage() {
  const plug = loginData => console.log(loginData);

  return (
    <>
      <Section title="Login">
        <LoginForm onSubmitLogin={plug} />
      </Section>
    </>
  );
}
