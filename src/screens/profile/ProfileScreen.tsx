import { signOut } from 'firebase/auth';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../base/firebase/firebase-config';
import { useRootStore } from '../../base/RootStore';
import { Routes } from '../../routes/routes';
import {Avatar, Button, Container, Group, Paper, Stack, Text, Title} from '@mantine/core';
import DefaultLayout from '../../components/layouts/defaultLayout/DefaultLayout';
import { observer } from 'mobx-react-lite';

export const ProfileScreen = observer(() => {
  const { exampleStore, userStore } = useRootStore();

  const navigate = useNavigate();

  //Effects
  useEffect(() => {
    exampleStore.getBeerItem('1');
  }, []);

  useEffect(() => {
    console.log(exampleStore.beerItem);
  }, [exampleStore.beerItem]);

  //Handlers
  const handleLogout = () => {
    signOut(auth);
    userStore.resetStore();
    navigate(Routes.auth);
  };

  //Renders
  return (
    <DefaultLayout>
      <Container size={'md'} mt={20} >
        <Paper>
          <Group spacing={20}>
            <Avatar color={'indigo'} radius={100} size={110} />
            <Stack spacing={0}>
              <Text size={28} fw={500} >Инвестор Инвесторович</Text>
              <Text c={'dimmed'} size={18}>+7 (918) 900 00 00</Text>
            </Stack>
          </Group>
        </Paper>
        <Text size={32} fw={500} mt={35}>Портфель</Text>
        <></>
        {/*<Button onClick={handleLogout}>Logout</Button>*/}
      </Container>
    </DefaultLayout>
  );
});
