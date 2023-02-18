import React, { FC } from 'react';
import { ActionIcon, Badge, Button, Card, Group, Image, Text } from '@mantine/core';
import { Heart } from 'tabler-icons-react';

import img from './../../assets/images/image.png';
import { Link } from 'react-router-dom';

export interface EstateCardModel {
  title: string;
  address: string;
  square: Number;
  rooms: Number;
  floor: string;
  category: string;
  price: string;
  isLiked?: boolean;
}

const EstateCard: FC<EstateCardModel> = ({
  title,
  address,
  square,
  rooms,
  floor,
  category,
  price,
  isLiked = false,
}) => {
  return (
    <Link to={`/object/${rooms}`}>
      <Card shadow="sm" p="lg" radius="md" withBorder sx={{ position: 'relative', zIndex: 1 }}>
        <Group position={'apart'}>
          <Text size={20} fw={600} color={''}>
            {rooms + '-комн. кв., ' + square + ' м², ' + floor + ' этаж'}
          </Text>
          <ActionIcon radius={100} size={'lg'} color={'red'} variant={isLiked ? 'filled' : 'outline'}>
            <Heart size={22} />
          </ActionIcon>
        </Group>
        <Badge mt={10} variant={'dot'}>
          {category}
        </Badge>
        <Text mt={30} size={15} c={'gray.7'}>
          {title}
        </Text>
        <Text mt={5} size={15} c={'gray.7'} inline sx={{ zIndex: 2, position: 'relative' }}>
          {address}
        </Text>
        <Text mt={30} mb={40} size={22} fw={500}>
          {price}
        </Text>
        <Group position={'left'}>
          <Button>Перейти на сайт </Button>
        </Group>
        <Image
          src={img}
          width={170}
          sx={{
            position: 'absolute',
            bottom: -125,
            right: -20,
            zIndex: 0,
            opacity: 0.4,
          }}
        />
      </Card>
    </Link>
  );
};

export default EstateCard;
