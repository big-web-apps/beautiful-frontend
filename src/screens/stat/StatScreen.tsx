import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Container, Grid, Paper, Text, useMantineTheme } from '@mantine/core';
import DefaultLayout from '../../components/layouts/defaultLayout/DefaultLayout';
import { StateEstate } from './components/StatEstate';
import { StatsRing } from './components/StatsRing';
import { ArrowDownRight, ArrowUpRight } from 'tabler-icons-react';
import { dataSell } from './components/data';
import { TabsEstate } from './components/TabsEstate';

interface IMainScreenProps {}

export const StatScreen: React.FC<IMainScreenProps> = () => {
  const navigate = useNavigate();

  const theme = useMantineTheme();

  const [sellValue, setSellValue] = useState<string>('1');

  const data = [
    {
      label: 'Средняя цена продажи в Краснодаре (январь 2023)',
      stats: '118865 р',
      progress: 60,
      color: theme.colors.green[5],
      icon: <ArrowUpRight />,
    },
    {
      label: 'Средняя цена аренды в Краснодаре (январь 2023)',
      stats: '18164 р',
      progress: 40,
      color: theme.colors.green[5],
      icon: <ArrowUpRight />,
    },
    {
      label: 'Самая дорогая недвижимость - Геленджик',
      stats: '230386 р',
      progress: 70,
      color: theme.colors.red[5],
      icon: <ArrowDownRight />,
    },
    {
      label: 'Самая дешевая недвижимость - п. Калинино',
      stats: '83774 р',
      progress: 40,
      color: theme.colors.red[5],
      icon: <ArrowDownRight />,
    },
  ];

  //Render
  return (
    <DefaultLayout>
      <Container size={'xl'}>
        <Text size={26} py={40} weight={700}>
          Статистика
        </Text>
        <StatsRing data={data} />
        <div>
          <Paper mt={16} withBorder radius="md" p="md">
            <Text pt={8} fz={26} fw={600} style={{ lineHeight: 1 }}>
              Продажа недвижимости
            </Text>
            <Text py={8} fz={'sm'} fw={300} style={{ lineHeight: 1 }}>
              Выберите нужные районы, чтобы отразить их на графике
            </Text>
            <TabsEstate value={sellValue} setValue={setSellValue} />
            <StateEstate data={dataSell} />
          </Paper>
          <Paper mt={16} withBorder radius="md" p="md">
            <Text pt={8} fz={26} fw={600} style={{ lineHeight: 1 }}>
              Аренда недвижимости
            </Text>
            <Text py={8} fz={'sm'} fw={300} style={{ lineHeight: 1 }}>
              Выберите нужные районы, чтобы отразить их на графике
            </Text>
            <TabsEstate value={sellValue} setValue={setSellValue} />
            <StateEstate data={dataSell} />
          </Paper>
          <Paper mt={16} mb={16} withBorder radius="md" p="md">
            <Text pt={8} fz={26} fw={600} style={{ lineHeight: 1 }}>
              Текущий тренд
            </Text>
            <Grid pt={24} grow align={'stretch'}>
              <Grid.Col span={4}>
                <Card shadow="sm" p="lg" radius="md" withBorder style={{ minHeight: '100%' }}>
                  <Text fz={16} fw={300} style={{ lineHeight: 1.1 }}>
                    Цены на недвижимость на пике, не рекомендуем вкладываться в ближайшее время в готовое жилье. Стоит
                    рассмотреть варианты на уровне котлована или же другие источники.
                  </Text>
                </Card>
              </Grid.Col>
              <Grid.Col span={4}>
                <Card shadow="sm" p="lg" radius="md" withBorder style={{ minHeight: '100%' }}>
                  <Text fz={16} fw={300} style={{ lineHeight: 1.1 }}>
                    Рекомендуем обратить внимание на льготную ипотеку для айтишников, а также на некоторые варианты
                    субсидированной ипотеки от государства.
                  </Text>
                </Card>
              </Grid.Col>
              <Grid.Col span={4}>
                <Card shadow="sm" p="lg" radius="md" withBorder style={{ minHeight: '100%' }}>
                  <Text fz={16} fw={300} style={{ lineHeight: 1.1 }}>
                    Отличное время для продажи, но надо быть готовым к долгому поиску покупателя
                  </Text>
                </Card>
              </Grid.Col>
            </Grid>
          </Paper>
        </div>
      </Container>
    </DefaultLayout>
  );
};
