import React from 'react';
import {
  Accordion,
  Box,
  Button,
  Card,
  Grid,
  Group,
  MultiSelect,
  RangeSlider, Stack,
  Text,
  useMantineTheme,
} from '@mantine/core';
import { LockOff, LockOpen, Map2, ShieldLock } from 'tabler-icons-react';

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
  const theme = useMantineTheme();

  //Render
  const renderAllFilters = () => {
    return (
      <Accordion px={-8}>
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
                <Text pb={8} fz={20}>
                  Количество комнат
                </Text>
                <RangeSlider
                  px={16}
                  value={props.roomsValue}
                  onChange={props.setRoomsValue}
                  min={1}
                  max={10}
                  marks={[
                    { value: 1, label: '0' },
                    { value: 10, label: '10' },
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
                  data={['React', 'Angular', 'Svelte', 'Vue']}
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
                  data={['React', 'Angular', 'Svelte', 'Vue']}
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
        <Text fw={600} fz={32}>
          Фильтры
        </Text>
        <Button onClick={props.toggleDrawer} leftIcon={<Map2 />} style={{ minHeight: '100%', width: 300 }}>
          <Text fz={20}>Открыть карту</Text>
        </Button>
      </Group>

      <Grid pb={32}>
        <Grid.Col span={4}>
          <Button leftIcon={<ShieldLock />} color={'green'} fullWidth p={8} style={{ height: '100%' }}>
            <Box>
              <Text size={'lg'}>Минимум риска</Text>
              <Text size={'sm'} sx={{lineHeight: 1.3}}>
                Покупка жилья, которое уже сдано<br/> или близко к его сдаче.<br/> Только от крупных застройщиков.
              </Text>
            </Box>
          </Button>
        </Grid.Col>
        <Grid.Col span={4}>
          <Button leftIcon={<LockOpen />} color={'yellow'} fullWidth p={8} style={{ height: '100%' }}>
            <Box sx={{width: '100%'}}>
              <Text size={'lg'}>Средний риск</Text>
              <Text size={'sm'} sx={{lineHeight: 1.3 }}>
                Надежные застройщики <br/>на этапе строительства
              </Text>
            </Box>
          </Button>
        </Grid.Col>
        <Grid.Col span={4}>
          <Button leftIcon={<LockOff />} color={'red'} fullWidth p={8} style={{ height: '100%' }}>
            <Box>
              <Text size={'lg'}>Максимальный риск</Text>
              <Text size={'sm'}  sx={{lineHeight: 1.3 }}>
                Покупка на котловане от застройщика,<br/> рекомендуем быть внимательными
              </Text>
            </Box>
          </Button>
        </Grid.Col>
      </Grid>
      {renderAllFilters()}
    </Card>
  );
};
