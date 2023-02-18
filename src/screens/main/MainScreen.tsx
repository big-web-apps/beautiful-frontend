import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import title from './image/title.png';
import {
  BackgroundImage,
  Box,
  Button,
  Center,
  Grid,
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

interface IMainScreenProps {}

export const MainScreen: React.FC<IMainScreenProps> = observer(() => {
  const { filterStore } = useRootStore();
  const theme = useMantineTheme();

  const [openDrawer, setOpenDrawer] = useState(false);

  const [colors, setColors] = useState<string[]>([]);

  //Effects
  useEffect(() => {
    filterStore.setCurrentItemsOffset(0);
    filterStore.getFlats();

    /*return () => {
      filterStore.resetStore();
    };*/
  }, [
    filterStore.priceRange,
    filterStore.roomsRange,
    filterStore.squareRange,
    filterStore.districts,
    filterStore.classes,
  ]);

  /*const handleChangeCountServer = useCallback(
      debounce((itemId: number) => {
        cartStore.changeServerCart(itemId);
      }, 750),
      [],
  );*/

  //Handlers
  const handleToggleDrawer = () => {
    setOpenDrawer(prev => !prev);
    countPolygonColors();
  };

  const countPolygonColors = () => {
    let prices: number[] = [];

    Object.values(dataSell1).map((item, index) => {
      const t = item.data[0][1];
      return prices.push(parseInt(t));
    });
    let maxPrice = Math.max(...prices);

    let tempColors: string[] = [];

    prices.forEach(price => {
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
            classesValue={filterStore.classes}
            setClassesValue={filterStore.setClasses}
            districtValue={filterStore.districts}
            setDistrictValue={filterStore.setDistricts}
            roomsValue={filterStore.roomsRange}
            setRoomsValue={filterStore.setRoomsRange}
            toggleDrawer={handleToggleDrawer}
          />
        </Box>
        <Box mt={40} pos={'relative'}>
          <Center>
            <LoadingOverlay visible={filterStore.loading} />
          </Center>
          <Grid>
            {!!filterStore?.currentItems?.length &&
              filterStore.currentItems?.map(data => {
                return (
                  <Grid.Col key={data.id} span={4}>
                    <EstateCard data={data} />
                  </Grid.Col>
                );
              })}
          </Grid>
          {!filterStore.loadingMore && filterStore.haveNewItems && (
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
        <MapsDrawer mapPolygonColors={colors} isOpen={openDrawer} toggleDrawer={handleToggleDrawer} />
      </Box>
    </DefaultLayout>
  );
});
