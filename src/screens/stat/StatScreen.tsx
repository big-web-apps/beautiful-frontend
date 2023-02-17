import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoadingOverlay } from '@mantine/core';
//import { StateEstate } from './components/StatEstate';

interface IMainScreenProps {}

export const StatScreen: React.FC<IMainScreenProps> = () => {
  const navigate = useNavigate();

  //Render
  return <div>{/*<StateEstate data={[]} />*/}</div>;
};
