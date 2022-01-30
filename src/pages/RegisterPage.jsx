import React from 'react';
import Section from '../components/Section/Section';
import RegisterForm from '../components/RegisterForm/RegisterForm';

export default function RegisterPage() {
  const plug = loginData => console.log(loginData);
  return (
    <>
      <Section title="Register">
        <RegisterForm onSubmitRegister={plug} />
      </Section>
    </>
  );
}
