import React, { useState } from 'react';
import DefaultLayout from '../../components/layouts/defaultLayout/DefaultLayout';
import {
  ActionIcon,
  Badge,
  Button,
  Card,
  Container,
  Grid,
  Group,
  Image,
  List,
  Slider,
  Text,
  ThemeIcon,
  useMantineTheme,
} from '@mantine/core';
import { useParams } from 'react-router-dom';
import img from '../../assets/images/image.png';
import { Check, ExclamationMark, Heart, Report } from 'tabler-icons-react';
import { TextHelper } from '../../helpers/TextHelper';

interface ObjectModel {
  apartment_complex: apartment_complex;
  id: number | null;
  rooms: number | null;
  floor: number | null;
  liter_name: string | null;
  districts: string | null;
  meter_price: number | null;
  price: number | null;
  url: string | null;
  square: number | null;
  living_square: number | null;
  coefficient: number | null;
}

interface apartment_complex {
  id: number | null;
  name: string | null;
  address: string | null;
  class_type: string | null;
  image: string | null;
  latitude: number | null;
  longitude: number | null;
}

const data: ObjectModel = {
  id: 1,
  apartment_complex: {
    id: 2,
    name: 'ЖК Малинки',
    address: 'Краснодарский край, Краснодар, Карасунский, мкр. Новознаменский, улица Богатырская, 11лит7',
    class_type: 'elit',
    image: 'sas',
    latitude: 45,
    longitude: 35,
  },

  square: 37.65,
  rooms: 6,
  floor: 7,
  liter_name: 'фычсв',
  districts: 'ГМР',
  meter_price: 134455,
  price: 56754346,
  url: 'sas',
  living_square: 20,
  coefficient: 1.1,
};

export const ObjectScreen: React.FC = () => {
  const params = useParams();
  const theme = useMantineTheme();

  const [years, setYears] = useState(1);

  //Render
  return (
    <DefaultLayout>
      <Container pt={40} size={'xl'}>
        <Grid gutter={40}>
          <Grid.Col span={3}>
            <Image src={img} width={'100%'} />
          </Grid.Col>
          <Grid.Col span={9}>
            <Group position={'apart'}>
              <Text fw={600} fz={40}>
                {data.apartment_complex.name} ({data.districts})
              </Text>
              <ActionIcon radius={100} size={'xl'} color={'red'} variant={'outline'}>
                <Heart size={22} />
              </ActionIcon>
            </Group>
            <Text fz={24}>{data.apartment_complex.address}</Text>
            <Group>
              <Text fz={20}>Литер: {data.liter_name}</Text>
              <Badge my={16} mt={10} variant={'dot'} size={'lg'}>
                {data.apartment_complex.class_type}
              </Badge>
            </Group>

            <Grid pt={16}>
              <Grid.Col pt={24} span={6}>
                <Text fz={24}>
                  {data.rooms} комн. кв., {data.square} м² ({data.living_square} м²), {data.floor} этаж
                </Text>

                <Text pt={16} fz={28}>
                  {TextHelper.getPriceString(data.price)}
                </Text>
                <Text fz={20}>({TextHelper.getPriceString(data.meter_price)} /м²)</Text>
              </Grid.Col>
              <Grid.Col span={6}>
                <Card shadow="sm" p="lg" radius="md" withBorder style={{ minHeight: '100%' }}>
                  <Text fz={20}>
                    Через {TextHelper.getYearsNumFormat(years, 'ru')} по нашим прогнозам цена на этот объект достигнет:
                  </Text>
                  <Text pt={8} fz={28} c={theme.colors.green[5]}>
                    {TextHelper.getPriceString(99999999)}
                  </Text>
                  <Slider
                    min={1}
                    max={5}
                    marks={[
                      { value: 1, label: '1' },
                      { value: 5, label: '5' },
                    ]}
                    value={years}
                    onChange={setYears}
                    size={'lg'}
                  />
                </Card>
              </Grid.Col>
            </Grid>
          </Grid.Col>
        </Grid>

        <Grid pt={8} gutter={40}>
          <Grid.Col span={3}>
            <Button variant={'outline'} fullWidth size={'lg'}>
              Перейти на сайт
            </Button>
            <Button mt={16} variant={'outline'} fullWidth size={'lg'}>
              Другие планировки
            </Button>
          </Grid.Col>
          <Grid.Col span={9}>
            <Text pb={16} fw={600} fz={28}>
              Что мы думаем?
            </Text>
            <List
              spacing="md"
              size="lg"
              center
              icon={
                <ThemeIcon color="teal" size={24} radius="xl">
                  <Check />
                </ThemeIcon>
              }
            >
              <List.Item>Развивающийся район, множество строек вокруг</List.Item>
              <List.Item>Надежный застройщик, менее 1% задержек при сдаче</List.Item>
              <List.Item
                icon={
                  <ThemeIcon color="yellow" size={24} radius="xl">
                    <ExclamationMark />
                  </ThemeIcon>
                }
              >
                Постоянные пробки сейчас
              </List.Item>
              <List.Item
                icon={
                  <ThemeIcon color="yellow" size={24} radius="xl">
                    <ExclamationMark />
                  </ThemeIcon>
                }
              >
                Плохо развит общественный транспорт сейчас
              </List.Item>
              <List.Item
                icon={
                  <ThemeIcon color="blue" size={24} radius="xl">
                    <Report />
                  </ThemeIcon>
                }
              >
                Сейчас поблизости строют новую школу
              </List.Item>
              <List.Item
                icon={
                  <ThemeIcon color="blue" size={24} radius="xl">
                    <Report />
                  </ThemeIcon>
                }
              >
                По генплану в пределах 1,5 км планируется трамвайная линия
              </List.Item>
            </List>
          </Grid.Col>
        </Grid>
      </Container>
    </DefaultLayout>
  );
};
