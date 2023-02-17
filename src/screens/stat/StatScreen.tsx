import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Routes } from '../../routes/routes';
import {
  Card,
  Center,
  Container,
  Group,
  LoadingOverlay,
  Paper,
  RingProgress,
  Text,
  useMantineTheme,
} from '@mantine/core';
import DefaultLayout from '../../components/layouts/defaultLayout/DefaultLayout';
import { StateEstate } from './components/StatEstate';
import { StatsRing } from './components/StatsRing';
import { ArrowUpRight } from 'tabler-icons-react';
import { dataSell } from './components/data';

interface IMainScreenProps {}

export const StatScreen: React.FC<IMainScreenProps> = () => {
  const navigate = useNavigate();

  const theme = useMantineTheme();

  const data = [
    {
      label: 'Средняя цена в Краснодаре (январь 2023)',
      stats: '118 865 р',
      progress: 60,
      color: theme.colors.green[5],
      icon: <ArrowUpRight />,
    },
    {
      label: 'Средняя цена в Краснодаре (январь 2023)',
      stats: '118 865 р',
      progress: 60,
      color: theme.colors.green[5],
      icon: <ArrowUpRight />,
    },
  ];

  //Render
  return (
    <DefaultLayout>
      <Container size={'xl'}>
        {/*<div
          style={{
            position: 'absolute',
            top: 0,
            left: '10%',
            width: '80%',
            height: '230px',
            backgroundColor: theme.primaryColor,
            borderRadius: '0 0 100px 100px',
            zIndex: -1,
          }}
        ></div>*/}
        <Text size={26} py={40} weight={500}>
          Статистика
        </Text>
        <StatsRing data={data} />
        <div>
          <StateEstate
            title={'Продажа недвижимости'}
            subtitle={'Выберите нужные районы, чтобы отразить их на графике'}
            data={dataSell}
          />
        </div>
      </Container>
    </DefaultLayout>
  );
};
