import React from 'react';
import { Drawer, useMantineTheme } from '@mantine/core';
import EstateMap from '../../../components/map/estate-map';

interface IMapsDrawerProps {
  isOpen: boolean;
  toggleDrawer: () => void;
  mapPolygonColors: string[];
}

export const MapsDrawer: React.FC<IMapsDrawerProps> = props => {
  const theme = useMantineTheme();

  //Render
  return (
    <>
      <Drawer opened={props.isOpen} onClose={props.toggleDrawer} title="Порайонная динамика цены" padding="xl" size={'60%'}>
        {/* Drawer content */}
        <EstateMap mapPolygonColors={props.mapPolygonColors} />
      </Drawer>
    </>
  );
};
