import React from 'react';
import { Drawer, useMantineTheme } from '@mantine/core';

interface IMapsDrawerProps {
  isOpen: boolean;
  toggleDrawer: () => void;
}

export const MapsDrawer: React.FC<IMapsDrawerProps> = props => {
  const theme = useMantineTheme();

  //Render
  return (
    <>
      <Drawer opened={props.isOpen} onClose={props.toggleDrawer} title="Карта" padding="xl" size={'60%'}>
        {/* Drawer content */}
      </Drawer>
    </>
  );
};
