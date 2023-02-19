import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import title from './image/title.png';
import {
  BackgroundImage,
  Box,
  Button,
  Card,
  Center,
  Grid,
  Group,
  Loader,
  LoadingOverlay,
  Stack,
  Text,
  useMantineTheme,
} from '@mantine/core';
import DefaultLayout from '../../components/layouts/defaultLayout/DefaultLayout';
import { Filters } from './components/Filters';
import { useRootStore } from '../../base/RootStore';
import { observer } from 'mobx-react-lite';
import { MapsDrawer } from './components/MapsDrawer';
import EstateCard from '../../components/estate-card/EstateCard';
import { dataSell1 } from '../stat/components/data';
import { debounce } from 'chart.js/helpers';
import { TextHelper } from '../../helpers/TextHelper';

interface IMainScreenProps {}

export const MainScreen: React.FC<IMainScreenProps> = observer(() => {
  const { filterStore } = useRootStore();
  const theme = useMantineTheme();

  const [openDrawer, setOpenDrawer] = useState(false);

  const [colors, setColors] = useState<string[]>([]);
  const [prices, setPrices] = useState<number[]>([]);

  //Effects
  useEffect(() => {
    filterStore.setLoading(true);
    handleChange();

    /*return () => {
      filterStore.resetStore();
    };*/
  }, [
    filterStore.priceRange,
    filterStore.roomsRange,
    filterStore.floorsRange,
    filterStore.squareRange,
    filterStore.chooseDistricts,
    filterStore.chooseClasses,
  ]);

  useEffect(() => {
    filterStore.getRegions();
    filterStore.getPopular();
  }, []);

  const handleChange = useCallback(
    debounce(() => {
      filterStore.setCurrentItemsOffset(0);
      filterStore.getFlats();
    }, 750),
    [],
  );

  //Handlers
  const handleToggleDrawer = () => {
    setOpenDrawer(prev => !prev);
    countPolygonColors();
  };

  const countPolygonColors = () => {
    let tempPrices: number[] = [];

    Object.values(dataSell1).map((item, index) => {
      const t = item.data[0][1];
      return tempPrices.push(parseInt(t));
    });
    setPrices(tempPrices);
    let maxPrice = Math.max(...tempPrices);

    let tempColors: string[] = [];

    tempPrices.forEach(price => {
      let percentage = (price * 100) / maxPrice;

      let R, G, B;
      if (percentage <= 50) {
        R = 255;
        G = (percentage / 50.0) * 255;
      } else {
        R = 255 - ((percentage - 50) / 50.0) * 255;
        G = 255;
      }
      B = 0;

      tempColors.push('rgb(' + R + ',' + G + ',' + B + ')');
    });
    setColors([...tempColors]);
  };

  const handleLoadMore = () => {
    filterStore.getFlats();
  };

  //Render
  return (
    <DefaultLayout>
      <Box pt={16}>
        <BackgroundImage src={title} radius={30} sx={{ backgroundPositionY: '27%' }}>
          <Stack
            justify={'center'}
            p={32}
            style={{ backgroundColor: 'rgba(0,0,0,0.5)', height: 550, borderRadius: 30 }}
          >
            <Text c={theme.white} fz={64}>
              Железобетонные инвестиции
            </Text>
            <Text c={theme.white} fz={24} ta={'left'} sx={{ maxWidth: '450px', lineHeight: 1.4 }}>
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
            classesValue={filterStore.chooseClasses}
            setClassesValue={filterStore.setChooseClasses}
            districtValue={filterStore.chooseDistricts}
            setDistrictValue={filterStore.setChooseDistricts}
            roomsValue={filterStore.roomsRange}
            setRoomsValue={filterStore.setRoomsRange}
            toggleDrawer={handleToggleDrawer}
          />
        </Box>
        <Card
          mt={16}
          shadow="sm"
          p="lg"
          radius="md"
          withBorder
          sx={{ position: 'relative', backgroundColor: theme.colors.blue[9], zIndex: 1 }}
        >
          <Group position={'apart'} align={'start'}>
            <Stack spacing={0}>
              <Text size={15}>ЖК «Режиссер»</Text>
              <Text mt={5} size={15} inline sx={{ zIndex: 2, position: 'relative' }}>
                ул. Уральская, 100/6
              </Text>
            </Stack>
            <Text fw={600} size={32} td={'underline'}>
              От {TextHelper.getPriceString(1148230)}
            </Text>
          </Group>
          <Text mt={20} fw={600} size={28} inline sx={{ zIndex: 2, position: 'relative' }}>
            Уникальное предложение вблизи от всей инфраструктуры!<br/> Сдача Литера 3 в этом году
          </Text>
          <Text mt={16} size={12} inline sx={{ zIndex: 2, position: 'relative' }}>
            Реклама. АСК недвижимость. Подробная информация на сайте застройщика
          </Text>
        </Card>
        <Box mt={20} pos={'relative'}>
          <Center>
            <LoadingOverlay pos={'absolute'} visible={filterStore.loading} />
          </Center>
          <Grid style={{ minHeight: 50 }}>
            {!!filterStore?.currentItems?.length &&
              filterStore.currentItems?.map(data => {
                return (
                  <Grid.Col key={data.id} span={4}>
                    <EstateCard data={data} />
                  </Grid.Col>
                );
              })}
          </Grid>
          {!filterStore.loading && !filterStore.loadingMore && filterStore.haveNewItems && (
            <Center pt={24}>
              <Button size={'lg'} onClick={handleLoadMore}>
                Получить новые элементы
              </Button>
            </Center>
          )}
          {filterStore.loadingMore && (
            <Center pt={24}>
              <Loader />
            </Center>
          )}
        </Box>
        <Text fw={500} fz={32} pt={30} pb={20}>
          Популярное
        </Text>
        <Box pos={'relative'}>
          <Center>
            <LoadingOverlay pos={'absolute'} visible={filterStore.loading} />
          </Center>
          <Grid style={{ minHeight: 50 }}>
            {!!filterStore?.popularItems?.length &&
              filterStore.popularItems?.map(data => {
                return (
                  <Grid.Col key={data.id} span={4}>
                    <EstateCard data={data} />
                  </Grid.Col>
                );
              })}
          </Grid>
        </Box>
        <MapsDrawer prices={prices} mapPolygonColors={colors} isOpen={openDrawer} toggleDrawer={handleToggleDrawer} />
      </Box>
    </DefaultLayout>
  );
});
