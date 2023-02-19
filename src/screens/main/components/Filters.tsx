import React from 'react';
import {
  Accordion,
  Button,
  Card,
  Flex,
  Grid,
  Group,
  MultiSelect,
  RangeSlider,
  Text,
  useMantineTheme,
} from '@mantine/core';
import { Check, LockOff, LockOpen, Map2, ShieldLock } from 'tabler-icons-react';
import { useRootStore } from '../../../base/RootStore';

interface IFiltersProps {
  priceValue: [number, number];
  setPriceValue: (value: [number, number]) => void;
  squareValue: [number, number];
  setSquareValue: (value: [number, number]) => void;
  floorsValue: [number, number];
  setFloorsValue: (value: [number, number]) => void;
  classesValue: string[];
  setClassesValue: (value: string[]) => void;
  districtValue: string[];
  setDistrictValue: (value: string[]) => void;
  roomsValue: [number, number];
  setRoomsValue: (value: [number, number]) => void;
  toggleDrawer: () => void;
}

export const Filters: React.FC<IFiltersProps> = props => {
  const { filterStore } = useRootStore();
  const theme = useMantineTheme();

  //Render
  const renderAllFilters = () => {
    return (
      <Accordion px={-8} defaultValue={'customization'}>
        <Accordion.Item value="customization" style={{ border: '1px solid transparent', padding: '-8px' }}>
          <Accordion.Control style={{ border: '1px solid transparent', margin: '-16px', width: 400 }}>
            <Text fw={500} fz={28}>
              Расширенные фильтры
            </Text>
          </Accordion.Control>
          <Accordion.Panel>
            <Grid style={{ margin: '0 -28px' }}>
              <Grid.Col px={16} py={8} span={4}>
                <Text pb={8} fz={20}>
                  Цена
                </Text>
                <RangeSlider
                  px={16}
                  value={props.priceValue}
                  onChange={props.setPriceValue}
                  min={500000}
                  max={30000000}
                  marks={[
                    { value: 500000, label: '500 тыс' },
                    { value: 30000000, label: '30 млн' },
                  ]}
                  size={'lg'}
                />
              </Grid.Col>
              <Grid.Col px={16} py={8} span={4}>
                <Text pb={8} fz={20}>
                  Площадь (м²)
                </Text>
                <RangeSlider
                  px={16}
                  value={props.squareValue}
                  onChange={props.setSquareValue}
                  min={10}
                  max={150}
                  marks={[
                    { value: 10, label: '10' },
                    { value: 150, label: '150' },
                  ]}
                  size={'lg'}
                />
              </Grid.Col>
              <Grid.Col px={16} py={8} span={4}>
                <Text pb={8} fz={20}>
                  Этаж
                </Text>
                <RangeSlider
                  px={16}
                  value={props.floorsValue}
                  onChange={props.setFloorsValue}
                  min={0}
                  max={25}
                  marks={[
                    { value: 0, label: '0' },
                    { value: 25, label: '25' },
                  ]}
                  size={'lg'}
                />
              </Grid.Col>
              <Grid.Col px={16} py={8} span={4}>
                <Text pt={24} pb={8} fz={20}>
                  Количество комнат
                </Text>
                <RangeSlider
                  px={16}
                  value={props.roomsValue}
                  onChange={props.setRoomsValue}
                  min={0}
                  max={3}
                  step={1}
                  minRange={0}
                  marks={[
                    { value: 0, label: '0' },
                    { value: 3, label: '3' },
                  ]}
                  size={'lg'}
                />
              </Grid.Col>
              <Grid.Col px={16} pt={30} span={4}>
                <Text pb={4} fz={20}>
                  Район города
                </Text>
                <MultiSelect
                  searchable
                  value={props.districtValue}
                  onChange={props.setDistrictValue}
                  dropdownPosition="bottom"
                  data={filterStore.districts || []}
                  withinPortal
                  placeholder="Выберите районы"
                  size={'lg'}
                />
              </Grid.Col>
              <Grid.Col px={16} pt={30} span={4}>
                <Text pb={4} fz={20}>
                  Класс жилья
                </Text>
                <MultiSelect
                  searchable
                  value={props.classesValue}
                  onChange={props.setClassesValue}
                  dropdownPosition="bottom"
                  data={filterStore.classes || []}
                  withinPortal
                  placeholder="Выберите классы"
                  size={'lg'}
                />
              </Grid.Col>
            </Grid>
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    );
  };

  return (
    <Card mt={24} shadow="sm" p="lg" radius="md" withBorder style={{ minHeight: '100%' }}>
      <Group pb={16} position={'apart'}>
        <Text fw={500} fz={32}>
          Фильтры
        </Text>
        <Button onClick={props.toggleDrawer} leftIcon={<Map2 />} style={{ minHeight: '100%', width: 300 }}>
          <Text fz={20}>Открыть карту</Text>
        </Button>
      </Group>

      <Grid pb={32}>
        <Grid.Col span={4}>
          <Button
            radius={'md'}
            leftIcon={<Check />}
            color={'green'}
            fullWidth
            p={8}
            style={{ width: '100%', height: '100%' }}
          >
            <Flex align={'flex-start'} direction={'column'} style={{ width: '100%' }}>
              <Text size={'lg'}>Минимум риска</Text>
              <Text size={'sm'} sx={{ lineHeight: 1.3 }}>
                Покупка жилья, которое уже сдано
                <br /> или близко к его сдаче.
                <br /> Только от крупных застройщиков.
              </Text>
            </Flex>
          </Button>
        </Grid.Col>
        <Grid.Col span={4}>
          <Button
            disabled
            radius={'md'}
            leftIcon={<LockOpen style={{ color: 'gray' }} />}
            color={'yellow'}
            fullWidth
            p={8}
            style={{ height: '100%', width: '100%' }}
          >
            <Flex align={'flex-start'} direction={'column'} style={{ width: '100%' }}>
              <Text size={'lg'} sx={{ color: theme.colors.gray[5] }}>
                Средний риск
              </Text>
              <Text size={'sm'} sx={{ lineHeight: 1.3, color: theme.colors.gray[5] }}>
                Надежные застройщики <br />
                на этапе строительства
              </Text>
            </Flex>
          </Button>
        </Grid.Col>
        <Grid.Col span={4}>
          <Button
            disabled
            radius={'md'}
            leftIcon={<LockOff style={{ color: 'gray' }} />}
            color={'red'}
            fullWidth
            p={8}
            style={{ height: '100%' }}
          >
            <Flex align={'flex-start'} direction={'column'} style={{ width: '100%' }}>
              <Text size={'lg'} sx={{ color: theme.colors.gray[5] }}>
                Максимальный риск
              </Text>
              <Text size={'sm'} sx={{ lineHeight: 1.3, color: theme.colors.gray[5] }}>
                Покупка на котловане от застройщика,
                <br /> рекомендуем быть внимательными
              </Text>
            </Flex>
          </Button>
        </Grid.Col>
      </Grid>
      {renderAllFilters()}
    </Card>
  );
};
