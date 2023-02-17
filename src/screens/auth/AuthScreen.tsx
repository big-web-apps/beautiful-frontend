import React from 'react';
import { LoginComponent } from './components/LoginComponent';
import DefaultLayout from '../../components/layouts/defaultLayout/DefaultLayout';
import { Container } from '@mantine/core';

interface IAuthScreenProps {}

export const AuthScreen: React.FC<IAuthScreenProps> = () => {
  //Render
  return (
    <DefaultLayout>
      <Container size={'md'}>
        <LoginComponent />
      </Container>
    </DefaultLayout>
  );
};
