import React from 'react';
import { Drawer, useMantineTheme, Text } from '@mantine/core';
import EstateMap from '../../../components/map/estate-map';

interface IMapsDrawerProps {
  isOpen: boolean;
  toggleDrawer: () => void;
  mapPolygonColors: string[];
  prices: number[];
}

export const MapsDrawer: React.FC<IMapsDrawerProps> = props => {
  const theme = useMantineTheme();

  //Render
  return (
    <>
      <Drawer
        opened={props.isOpen}
        onClose={props.toggleDrawer}
        title={
          <Text size={22} fw={500}>
            Порайонная динамика цены
          </Text>
        }
        padding="xl"
        position={'left'}
        withinPortal
        size={'70%'}
        style={{ zIndex: 10000 }}
      >
        {/* Drawer content */}
        <EstateMap prices={props.prices} mapPolygonColors={props.mapPolygonColors} />
      </Drawer>
    </>
  );
};
