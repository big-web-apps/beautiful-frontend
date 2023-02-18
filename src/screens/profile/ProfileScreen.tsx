import { signOut } from 'firebase/auth';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../base/firebase/firebase-config';
import { useRootStore } from '../../base/RootStore';
import { Routes } from '../../routes/routes';
import { Avatar, Container, Group, Paper, Stack, Text, Title } from '@mantine/core';
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
      <Container size={'xl'} mt={20}>
        <Paper>
          <Group spacing={20} position={'apart'}>
            <Group>
              <Avatar color={'indigo'} radius={100} size={80} />
              <Stack spacing={0}>
                <Text size={22} fw={500}>
                  Инвестор Инвесторович
                </Text>
                <Text c={'dimmed'} size={16}>
                  +7 (918) 900 00 00
                </Text>
              </Stack>
            </Group>
            <Stack>
              <Text fw={600} size={'lg'}>
                Тариф: Инвестор
              </Text>
              <Text size={'lg'}>Осталось 2 запроса на месяц</Text>
            </Stack>
          </Group>
        </Paper>
        <Text size={26} fw={600} my={35}>
          Расширенная аналитика
        </Text>
        <Group grow>
          {/*{data.map(data => {
            return <EstateCard data={data} />;
          })}*/}
        </Group>
        <Text size={26} fw={600} my={35}>
          Избранное
        </Text>
        <Group grow>
          {/*{data.map(data => {
            return <EstateCard data={data} />;
          })}*/}
        </Group>
        {/*<Button onClick={handleLogout}>Logout</Button>*/}
      </Container>
    </DefaultLayout>
  );
});
