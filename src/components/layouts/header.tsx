import { Button, Header as MantineHeader, Indicator } from '@mantine/core';
import { Container, Group, Text } from '@mantine/core';
import { Bell, Cloud } from 'tabler-icons-react';
import { useNavigate } from 'react-router-dom';

export const AppHeader = (props: { title: JSX.Element }) => {
  const navigate = useNavigate();

  return (
    <>
      <MantineHeader height={55} fixed={true} position={{ top: -1, left: 0, right: 0 }}>
        <Container size={'sm'} style={{ height: '55px' }}>
          <Group py={10} align={'center'} position={'right'}>
            {/*{props.title}*/}
            <Group spacing={10} position={'right'}>
              <Button p={0} variant={'subtle'} onClick={() => navigate('/weather')}>
                <Group spacing={5}>
                  <Cloud size={25} color={'gray'} />
                  <Text size={'sm'} color={'gray'}>
                    +18°C
                  </Text>
                </Group>
              </Button>
              <Indicator color="orange" label={'1'}>
                <Button p={0} sx={{ width: 40 }} variant={'subtle'} onClick={() => navigate('/notifications')}>
                  <Bell size={25} color={'gray'} />
                </Button>
              </Indicator>
            </Group>
          </Group>
        </Container>
      </MantineHeader>
    </>
  );
};
