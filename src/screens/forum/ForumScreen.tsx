import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Avatar, Button, Container, Group, Paper, Stack, Text, Title } from '@mantine/core';
import DefaultLayout from '../../components/layouts/defaultLayout/DefaultLayout';
import { observer } from 'mobx-react-lite';

const data = [
  {
    title: 'ЖК Смородина',
    address: 'Краснодарский край, Краснодар, Карасунский, мкр. Новознаменский, улица Богатырская, 11лит7',
    square: 37.65,
    rooms: 1,
    floor: '6-10',
    category: 'Элит',
    price: '4 860 615 ₽',
    isLiked: true,
  },
  {
    title: 'ЖК Смородина',
    address: 'Краснодарский край, Краснодар, Карасунский, мкр. Новознаменский, улица Богатырская, 11лит7',
    square: 37.65,
    rooms: 1,
    floor: '6-10',
    category: 'Элит',
    price: '4 860 615 ₽',
  },
  {
    title: 'ЖК Смородина',
    address: 'Краснодарский край, Краснодар, Карасунский, мкр. Новознаменский, улица Богатырская, 11лит7',
    square: 37.65,
    rooms: 1,
    floor: '6-10',
    category: 'Элит',
    price: '4 860 615 ₽',
    isLiked: true,
  },
];

export const ForumScreen = observer(() => {
  const navigate = useNavigate();

  //Renders
  return (
    <DefaultLayout>
      <Container size={'xl'} mt={20}></Container>
    </DefaultLayout>
  );
});
