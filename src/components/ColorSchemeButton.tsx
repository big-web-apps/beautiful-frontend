import React from 'react';
import { ActionIcon, useMantineColorScheme } from '@mantine/core';
import { MoonStars, Sun } from 'tabler-icons-react';

interface IColorSchemeButtonProps {}

export const ColorSchemeButton: React.FC<IColorSchemeButtonProps> = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';

  //Render
  return (
    <ActionIcon onClick={() => toggleColorScheme()}>{dark ? <Sun size={28} /> : <MoonStars size={28} />}</ActionIcon>
  );
};
