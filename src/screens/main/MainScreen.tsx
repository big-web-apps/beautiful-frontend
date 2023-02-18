import React from 'react';
import { useNavigate } from 'react-router-dom';
import title from './image/title.png';
import { BackgroundImage, Box, Stack, Text, useMantineTheme } from '@mantine/core';
import DefaultLayout from '../../components/layouts/defaultLayout/DefaultLayout';
import { Filters } from './components/Filters';
import { useRootStore } from '../../base/RootStore';
import { observer } from 'mobx-react-lite';

interface IMainScreenProps {}

export const MainScreen: React.FC<IMainScreenProps> = observer(() => {
  const { filterStore } = useRootStore();
  const navigate = useNavigate();

  const theme = useMantineTheme();

  //Render
  return (
    <DefaultLayout>
      <Box pt={16}>
        <BackgroundImage src={title} radius={'xs'} style={{ backgroundPositionY: '27%' }}>
          <Stack justify={'center'} align={'center'} p={32} style={{ backgroundColor: 'rgba(0,0,0,0.5)', height: 550 }}>
            <Text c={theme.white} fz={64}>
              Железобетонные инвестиции
            </Text>
            <Text c={theme.white} fz={24}>
              Инфляция всегда преследовала Вас, но мы оказались быстрее
            </Text>
          </Stack>
        </BackgroundImage>
        <Box>
          <Filters
            priceValue={filterStore.priceRange}
            setPriceValue={filterStore.setPriceRange}
            squareValue={filterStore.squareRange}
            setSquareValue={filterStore.setSquareRange}
            floorsValue={filterStore.floorsRange}
            setFloorsValue={filterStore.setFloorsRange}
            classesValue={filterStore.classes}
            setClassesValue={filterStore.setClasses}
            districtValue={filterStore.districts}
            setDistrictValue={filterStore.setDistricts}
          />
        </Box>
      </Box>
    </DefaultLayout>
  );
});
