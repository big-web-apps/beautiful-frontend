import React from 'react';
import { Button, Card, Grid, MultiSelect, RangeSlider, Text, useMantineTheme } from '@mantine/core';
import { Map2 } from 'tabler-icons-react';

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
  toggleDrawer: () => void;
}

export const Filters: React.FC<IFiltersProps> = props => {
  const theme = useMantineTheme();

  //Render
  return (
    <Card mt={24} shadow="sm" p="lg" radius="md" withBorder style={{ minHeight: '100%' }}>
      <Text pb={16} fw={600} fz={32}>
        Фильтры
      </Text>
      <Grid>
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
        <Grid.Col px={16} mt={30} span={4}>
          <Button fullWidth onClick={props.toggleDrawer} leftIcon={<Map2 />} style={{ minHeight: '100%' }}>
            <Text fz={20}>Открыть карту</Text>
          </Button>
        </Grid.Col>
      </Grid>
    </Card>
  );
};
