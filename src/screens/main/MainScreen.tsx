import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import title from './image/title.png';
import { BackgroundImage, Box, Stack, Text, useMantineTheme } from '@mantine/core';
import DefaultLayout from '../../components/layouts/defaultLayout/DefaultLayout';

interface IMainScreenProps {}

export const MainScreen: React.FC<IMainScreenProps> = () => {
  const navigate = useNavigate();

  const theme = useMantineTheme();

  //Render
  return (
    <DefaultLayout>
      <Box pt={16}>
        <BackgroundImage src={title} radius={30} sx={{ backgroundPositionY: '27%' }}>
          <Stack justify={'center'}  p={32} style={{ backgroundColor: 'rgba(0,0,0,0.5)', height: 550, borderRadius: 30 }}>
            <Text c={theme.white} fz={64}>
              Железобетонные инвестиции
            </Text>
            <Text c={theme.white} fz={24} ta={'left'} sx={{maxWidth: '450px', lineHeight: 1.4}}>
              Инфляция всегда преследовала Вас,
              но мы оказались быстрее
            </Text>
          </Stack>
        </BackgroundImage>
      </Box>
    </DefaultLayout>
  );
};
