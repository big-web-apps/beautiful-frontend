import React from 'react';
import { Tabs, Text } from '@mantine/core';

interface ITabsEstateProps {
  value: string;
  setValue: (value: string) => void;
}

export const TabsEstate: React.FC<ITabsEstateProps> = props => {
  const { value, setValue } = props;

  //Render
  return (
    <Tabs pt={16} value={value} onTabChange={setValue}>
      <Tabs.List grow>
        <Tabs.Tab value="1">
          <Text size={18}>1-комнатные</Text>
        </Tabs.Tab>
        <Tabs.Tab value="2">
          <Text size={18}>2-комнатные</Text>
        </Tabs.Tab>
        <Tabs.Tab value="3">
          <Text size={18}>3-комнатные</Text>
        </Tabs.Tab>
      </Tabs.List>
    </Tabs>
  );
};
