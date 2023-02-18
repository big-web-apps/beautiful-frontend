import React, { useCallback, useEffect, useState } from 'react';
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
import { debounce } from 'chart.js/helpers';

interface IMainScreenProps {}

export const MainScreen: React.FC<IMainScreenProps> = observer(() => {
  const { filterStore } = useRootStore();
  const theme = useMantineTheme();

  const [openDrawer, setOpenDrawer] = useState(false);

  const [colors, setColors] = useState<string[]>([]);

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
    filterStore.getAparts();
  }, []);

  useEffect(() => {
    if (!!filterStore.apartments.length) {
      console.log(filterStore.apartments);

    }
  }, [filterStore.apartments]);

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
            classesValue={filterStore.chooseClasses}
            setClassesValue={filterStore.setChooseClasses}
            districtValue={filterStore.chooseDistricts}
            setDistrictValue={filterStore.setChooseDistricts}
            roomsValue={filterStore.roomsRange}
            setRoomsValue={filterStore.setRoomsRange}
            toggleDrawer={handleToggleDrawer}
          />
        </Box>
        <Box mt={40} pos={'relative'}>
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
        <MapsDrawer mapPolygonColors={colors} isOpen={openDrawer} toggleDrawer={handleToggleDrawer} />
      </Box>
    </DefaultLayout>
  );
});
