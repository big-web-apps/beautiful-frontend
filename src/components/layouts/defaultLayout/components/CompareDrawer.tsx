import React from 'react';
import { Drawer, useMantineTheme, Text } from '@mantine/core';

interface ICompareDrawerProps {
  isOpen: boolean;
  toggleDrawer: () => void;
}

export const CompareDrawer: React.FC<ICompareDrawerProps> = props => {
  const theme = useMantineTheme();

  //Render
  return (
    <>
      <Drawer
        opened={props.isOpen}
        onClose={props.toggleDrawer}
        title={
          <Text size={22} fw={500}>
            Сравнение объектов
          </Text>
        }
        withinPortal
        padding="xl"
        position={'right'}
        size={'60%'}
        style={{ zIndex: 10000 }}
      ></Drawer>
    </>
  );
};
