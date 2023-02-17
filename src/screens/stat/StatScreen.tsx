import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Routes } from '../../routes/routes';
import { LoadingOverlay } from '@mantine/core';

interface IMainScreenProps {}

export const StatScreen: React.FC<IMainScreenProps> = () => {
  const navigate = useNavigate();

  //Render
  return (
    <div>
      <LoadingOverlay visible={true} />
    </div>
  );
};
