import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRootStore } from '../../base/RootStore';
import { Avatar, Box, Center, Container, Grid, Group, LoadingOverlay, Paper, Stack, Text, Title } from '@mantine/core';
import DefaultLayout from '../../components/layouts/defaultLayout/DefaultLayout';
import { observer } from 'mobx-react-lite';
import EstateCard from '../../components/estate-card/EstateCard';

export const ProfileScreen = observer(() => {
  const { filterStore } = useRootStore();

  //Effects
  useEffect(() => {
    filterStore.getPopular();
    filterStore.getAnalytic();
  }, []);

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
          <Group grow>
            <Box pos={'relative'}>
              <Center>
                <LoadingOverlay pos={'absolute'} visible={filterStore.loading} />
              </Center>
              <Grid style={{ minHeight: 50 }}>
                {!!filterStore?.analyticItems?.length &&
                  filterStore.analyticItems.slice(0, 3)?.map(data => {
                    return (
                      <Grid.Col key={data.id} span={4}>
                        <EstateCard data={data} />
                      </Grid.Col>
                    );
                  })}
              </Grid>
            </Box>
          </Group>
        </Group>
        <Text size={26} fw={600} my={35}>
          Избранное
        </Text>
        <Group grow>
          <Box pos={'relative'}>
            <Center>
              <LoadingOverlay pos={'absolute'} visible={filterStore.loading} />
            </Center>
            <Grid style={{ minHeight: 50 }}>
              {!!filterStore?.popularItems?.length &&
                filterStore.popularItems?.map(data => {
                  return (
                    <Grid.Col key={data.id} span={4}>
                      <EstateCard data={data} />
                    </Grid.Col>
                  );
                })}
            </Grid>
          </Box>
        </Group>
        {/*<Button onClick={handleLogout}>Logout</Button>*/}
      </Container>
    </DefaultLayout>
  );
});
