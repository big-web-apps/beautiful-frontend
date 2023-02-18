import React, { useEffect, useState } from 'react';
import DefaultLayout from '../../components/layouts/defaultLayout/DefaultLayout';
import {
  ActionIcon,
  Badge,
  Box,
  Button,
  Card,
  Center,
  Container,
  Grid,
  Group,
  Image,
  List,
  Slider,
  Text,
  Textarea,
  ThemeIcon,
  useMantineTheme,
} from '@mantine/core';
import { useParams } from 'react-router-dom';
import { Check, ExclamationMark, Heart, PlayerRecord, Report, Send } from 'tabler-icons-react';
import { TextHelper } from '../../helpers/TextHelper';
import { comments, data } from './ObjectData';
import { CommentHtml } from './components/Comment';
import { useRootStore } from '../../base/RootStore';
import { observer } from 'mobx-react-lite';
import { rent } from '../stat/components/data';

export const ObjectScreen: React.FC = observer(() => {
  const { filterStore } = useRootStore();
  const { currentItem } = filterStore;
  const theme = useMantineTheme();

  let { id } = useParams();

  const [years, setYears] = useState(1);
  const [money, setMoney] = useState(0);

  //Effects
  useEffect(() => {
    if (Number(id)) {
      filterStore.getFlat(Number(id));
    }
  }, [id]);

  useEffect(() => {
    if (currentItem?.coefficient && currentItem?.price) {
      let price = currentItem?.price;

      for (let i = 1; i <= years; i++) {
        price = price * currentItem?.coefficient;
      }

      setMoney(price);
    }
  }, [currentItem?.price, years]);

  //Render
  return (
    <DefaultLayout>
      <Container pt={40} size={'xl'}>
        <Grid gutter={40}>
          <Grid.Col span={3}>
            <Image src={currentItem?.image} width={'100%'} />
          </Grid.Col>
          <Grid.Col span={9}>
            <Group position={'apart'}>
              <Text fw={600} fz={40}>
                {currentItem?.apartment_complex.name} ({currentItem?.districts})
              </Text>
              <ActionIcon radius={100} size={'xl'} color={'red'} variant={'outline'}>
                <Heart size={22} />
              </ActionIcon>
            </Group>
            <Text fz={24}>{currentItem?.apartment_complex.address}</Text>
            <Group>
              <Text fz={20}>Литер: {currentItem?.liter_name}</Text>
              <Badge my={16} mt={10} variant={'dot'} size={'lg'}>
                {currentItem?.apartment_complex.class_type}
              </Badge>
            </Group>

            <Grid pt={16}>
              <Grid.Col pt={24} span={6}>
                <Text fz={24}>{currentItem?.rooms} комн. кв.</Text>
                <Text fz={24}>
                  {currentItem?.square} м² ({currentItem?.living_square} м²),
                </Text>
                <Text fz={24}>{currentItem?.floor} этаж</Text>

                <Text pt={16} fz={28}>
                  {TextHelper.getPriceString(currentItem?.price)}
                </Text>
                <Text fz={20}>({TextHelper.getPriceString(currentItem?.meter_price)} /м²)</Text>
              </Grid.Col>
              <Grid.Col span={6}>
                <Card shadow="sm" p="lg" radius="md" withBorder style={{ minHeight: '100%' }}>
                  <Text fz={20}>
                    Через {TextHelper.getYearsNumFormat(years, 'ru')} по нашим прогнозам цена на этот объект достигнет:
                  </Text>
                  <Text pt={8} fz={28} c={theme.colors.green[5]}>
                    {TextHelper.getPriceString(money)}
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
            <Card shadow="sm" p="lg" my={32} radius="md" withBorder>
              <Center>
                <Text>Купите нашу продвинутую подписку и получите:</Text>
              </Center>
              <List
                pt={16}
                spacing="sm"
                size="md"
                center
                icon={
                  <ThemeIcon size={24} radius="xl">
                    <PlayerRecord />
                  </ThemeIcon>
                }
              >
                <List.Item>Интерактивную карту генплана до 2040 года</List.Item>
                <List.Item>Уведомления о снижении цены на избранные элементы</List.Item>
                <List.Item>Безлимитное количество запросов</List.Item>
                <List.Item>Расширенную аналитику от известных экспертов</List.Item>
              </List>
              <Button mt={24} fullWidth size={'lg'}>
                Перейти к тарифам
              </Button>
            </Card>
          </Grid.Col>
          <Grid.Col span={9}>
            <Text pb={16} fw={600} fz={28}>
              Что мы думаем?
            </Text>
            <Grid gutter={40}>
              <Grid.Col span={6}>
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
              <Grid.Col span={6}>
                {currentItem?.price && currentItem?.rooms && (
                  <Card shadow="sm" p="lg" radius="md" withBorder style={{ minHeight: '100%' }}>
                    <Text fz={20}>Прогноз окупаемости аренды:</Text>
                    <List pt={4} size={'lg'}>
                      <List.Item> {TextHelper.getPriceString(currentItem?.price)} - стоимость квартиры</List.Item>
                      <List.Item>
                        {TextHelper.getPriceString(currentItem?.price / 10)} - стоимость ремонта (10% от стоимости
                        квартиры)
                      </List.Item>
                      <List.Item>
                        {TextHelper.getPriceString(
                          rent[(currentItem?.districts as any) || ('' as any)][currentItem.rooms - 1],
                        )}{' '}
                        - средняя стоимость сдачи в районе {currentItem?.districts}
                      </List.Item>
                    </List>
                    <Text pt={10} fz={14}>
                      {TextHelper.getPriceString(currentItem?.price)} +{' '}
                      {TextHelper.getPriceString(currentItem?.price / 10)} /{' '}
                      {TextHelper.getPriceString(
                        rent[(currentItem?.districts as any) || ('' as any)][currentItem.rooms - 1],
                      )}{' '}
                      =
                    </Text>
                    <Text pt={2} fz={30} c={theme.colors.green[5]}>
                      {currentItem?.price &&
                        TextHelper.getYearsNumFormat(
                          Number(
                            currentItem.price /
                              12 /
                              rent[(currentItem?.districts as any) || ('' as any)][currentItem.rooms - 1].toFixed(0),
                          ),
                          'ru',
                        )}
                    </Text>
                    <Text fz={16} c={theme.colors.green[5]}>
                      {currentItem?.price &&
                        (
                          currentItem.price /
                          rent[(currentItem?.districts as any) || ('' as any)][currentItem.rooms - 1]
                        ).toFixed(0)}{' '}
                      месяцев
                    </Text>
                  </Card>
                )}
                <Text>{}</Text>
              </Grid.Col>
            </Grid>
            <Text pt={32} fw={600} fz={28}>
              А что Вы думаете?
            </Text>
            <Grid align={'end'}>
              <Grid.Col span={11}>
                <Textarea
                  mt="md"
                  label="Сообщение"
                  placeholder="Ваше сообщение"
                  minRows={1}
                  autosize
                  name="message"
                  variant="filled"
                />
              </Grid.Col>
              <Grid.Col span={1}>
                <Button size="md" fullWidth>
                  <Send />
                </Button>
              </Grid.Col>
            </Grid>
            <Box pt={24}>
              {comments.map(item => (
                <CommentHtml postedAt={item.postedAt} body={item.body} author={item.author} />
              ))}
            </Box>
          </Grid.Col>
        </Grid>
      </Container>
    </DefaultLayout>
  );
});
