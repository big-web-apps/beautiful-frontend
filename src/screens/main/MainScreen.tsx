import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Routes } from '../../routes/routes';
import { Container, LoadingOverlay } from '@mantine/core';
import DefaultLayout from '../../components/layouts/defaultLayout/DefaultLayout';

interface IMainScreenProps {}

export const MainScreen: React.FC<IMainScreenProps> = () => {
  const navigate = useNavigate();

  //Render
  return (
    /*<DefaultLayout>
      <Container size={'md'}>*/
    <div>ха-ха</div>
    /*</Container>
    </DefaultLayout>*/
  );
};
