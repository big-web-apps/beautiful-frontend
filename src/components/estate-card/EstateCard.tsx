import React from 'react';
import {ActionIcon, Badge, Button, Card, Group, Image, Text} from '@mantine/core';
import {Heart} from 'tabler-icons-react';

import img from './../../assets/images/image.png';

const data = {
  title: "ЖК Смородина",
  address: "Краснодарский край, Краснодар, Карасунский, мкр. Новознаменский, улица Богатырская, 11лит7",
  square: 37.65,
  rooms: 1,
  floor: "6-10",
  category: "Элит",
  price: "4 860 615 ₽"
}
const EstateCard = () => {
  return (
    <Card shadow="sm" p="lg" radius="md" withBorder sx={{position: 'relative', zIndex: 1}}>

      <Group position={"apart"}>
        <Text size={20} fw={600} color={''}>
          {  data.rooms + "-комн. кв., " + data.square + " м², " + data.floor + " этаж" }
        </Text>
        <ActionIcon radius={100} size={'lg'} color={'red'} variant={"outline"}>
          <Heart size={22} />
        </ActionIcon>
      </Group>
      <Badge mt={10} color={''} variant={'dot'} >{ data.category }</Badge>
      <Text mt={30} size={15} c={'dimmed'}>
        {data.title}
      </Text>
      <Text mt={5} size={15} c={'dimmed'} inline sx={{zIndex: 2}}>
        {data.address}
      </Text>
      <Text my={30} size={22} fw={500}>
        {data.price}
      </Text>
      <Group position={'left'}>
        <Button  >Перейти на сайт </Button>
      </Group>
      <Image
        src={img}
        width={170}
        sx={{
          position: 'absolute',
          bottom: -20,
          right: 0,
          zIndex: 0,
          opacity: 0.6
        }}
      />
    </Card>
  );
};

export default EstateCard;