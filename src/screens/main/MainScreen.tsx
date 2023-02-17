import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Routes } from '../../routes/routes';
import { LoadingOverlay } from '@mantine/core';

interface IMainScreenProps {}

export const MainScreen: React.FC<IMainScreenProps> = () => {
  const navigate = useNavigate();

  //Effects
  useEffect(() => {
    navigate(Routes.auth);
  });

  //Render
  return (
    <div>
      <LoadingOverlay visible={true} />
    </div>
  );
};
