import React from 'react';
import {
  ActionIcon,
  Anchor,
  Avatar,
  Badge,
  Button,
  Container,
  Group,
  Table,
  Text,
  Title,
  useMantineTheme,
} from '@mantine/core';
import DefaultLayout from '../../components/layouts/defaultLayout/DefaultLayout';
import { observer } from 'mobx-react-lite';
import { ArrowRight, ExclamationMark } from 'tabler-icons-react';

const data = [
  {
    avatar:
      'https://images.unsplash.com/photo-1624298357597-fd92dfbec01d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80',
    name: 'Есть ли жизнь в Музыкальном районе?',
    category: 'Первичка',
    message: 'О чем вы? Их даже на карте не отметили',
    email: 'rob_wolf@gmail.com',
    count: '1234',
    time: 'сегодня в 12:34',
  },
  {
    avatar:
      'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80',
    name: 'Покупаем или фиксируем хрущевки???',
    category: 'Вторичка',
    message: 'Я умру быстрее чем она упадет...',
    email: 'jj@breaker.com',
    count: '76',
    time: 'сегодня в 12:3',
  },
  {
    avatar:
      'https://images.unsplash.com/photo-1632922267756-9b71242b1592?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80',
    name: 'Стоит ли ждать метро к 2100 году?',
    category: 'Фантастика',
    message: 'Телепортация быстрее, лололол \n Что дальше, построят трамвайную ветку до Яблоновки?',
    email: 'henry@silkeater.io',
    count: '12',
    time: 'сегодня в 12:32',
  },
  {
    avatar:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80',
    name: 'Машина или автомобиль?',
    category: 'Деньги',
    message: 'Машина универсальнее, не прогадаешь',
    email: 'bhorsefighter@gmail.com',
    count: '22',
    time: 'сегодня в 12:11',
  },
  {
    avatar:
      'https://images.unsplash.com/photo-1630841539293-bd20634c5d72?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80',
    name: 'Генплан - фантастика или фантастика?',
    category: 'Первичка',
    message: 'Принимаю ставки',
    email: 'jeremy@foot.dev',
    count: '65',
    time: 'сегодня в 12:00',
  },
];

interface UsersTableProps {
  data: { avatar: string; name: string; job: string; email: string; phone: string }[];
}

const jobColors: Record<string, string> = {
  engineer: 'blue',
  вторичка: 'cyan',
  фантастика: 'pink',
};

export const ForumScreen = observer(() => {
  const theme = useMantineTheme();
  const rows = data.map(item => (
    <tr key={item.name}>
      <td>
        <Group spacing="sm">
          <Text size="xl" weight={500}>
            {item.name}
          </Text>
        </Group>
      </td>

      <td>
        <Badge
          color={jobColors[item.category.toLowerCase()]}
          variant={theme.colorScheme === 'dark' ? 'light' : 'outline'}
        >
          {item.category}
        </Badge>
      </td>
      <td>
        <Text size={'lg'}>{item.message}</Text>
        <Group>
          <Avatar size={30} src={item.avatar} radius={30} />
          <Anchor<'a'> size="sm" href="#" onClick={event => event.preventDefault()}>
            {item.email}
          </Anchor>
        </Group>
      </td>
      <td>
        <Text size="sm" color="dimmed">
          {item.count}
        </Text>
      </td>
      <td>
        <Text size="sm" color="dimmed">
          {item.time}
        </Text>
      </td>
      <td>
        <Group spacing={0} position="right" noWrap={true}>
          <ActionIcon color="red" variant={'filled'}>
            <ExclamationMark size={16} />
          </ActionIcon>
          <ActionIcon ml={16} variant={'filled'}>
            <ArrowRight size={16} />
          </ActionIcon>
        </Group>
      </td>
    </tr>
  ));

  //Renders
  return (
    <DefaultLayout>
      <Container size={'xl'} mt={20}>
        <Group position={'apart'}>
          <Text size={26} py={20} weight={700}>
            Форум
          </Text>
          <Button variant={'outline'}>+</Button>
        </Group>
        <Table sx={{ minWidth: 800 }} verticalSpacing="sm">
          <thead>
            <tr>
              <th>Тема</th>
              <th>Категория</th>
              <th>Последнее сообщение</th>
              <th>Кол-во сообщений</th>
              <th>Время</th>
              <th />
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </Table>
      </Container>
    </DefaultLayout>
  );
});
