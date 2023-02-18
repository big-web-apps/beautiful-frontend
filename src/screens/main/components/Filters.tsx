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
            value={props.priceValue}
            onChangeEnd={props.setPriceValue}
            min={500000}
            max={30000000}
            marks={[
              { value: 500000, label: '500000' },
              { value: 30000000, label: '30000000' },
            ]}
          />
        </Grid.Col>
        <Grid.Col px={16} py={8} span={4}>
          <Text pb={8} fz={20}>
            Площадь (м²)
          </Text>
          <RangeSlider
            value={props.squareValue}
            onChangeEnd={props.setSquareValue}
            min={10}
            max={150}
            marks={[
              { value: 10, label: '10' },
              { value: 150, label: '150' },
            ]}
          />
        </Grid.Col>
        <Grid.Col px={16} py={8} span={4}>
          <Text pb={8} fz={20}>
            Этаж
          </Text>
          <RangeSlider
            value={props.floorsValue}
            onChangeEnd={props.setFloorsValue}
            min={0}
            max={25}
            marks={[
              { value: 0, label: '0' },
              { value: 25, label: '25' },
            ]}
          />
        </Grid.Col>
        <Grid.Col px={16} pt={24} span={4}>
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
          />
        </Grid.Col>
        <Grid.Col px={16} pt={24} span={4}>
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
          />
        </Grid.Col>
        <Grid.Col px={16} mt={16} span={4}>
          <Button fullWidth onClick={props.toggleDrawer} leftIcon={<Map2 />} style={{ minHeight: '100%' }}>
            Открыть карту
          </Button>
        </Grid.Col>
      </Grid>
    </Card>
  );
};
