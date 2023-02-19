import React, { FC } from 'react';
import { ActionIcon, Badge, Button, Card, Group, Image, Text } from '@mantine/core';
import { ArrowDownRight, ArrowRight, ArrowUpRight, Heart } from 'tabler-icons-react';

import img from './../../assets/images/image.png';
import { Link } from 'react-router-dom';
import { ObjectModel } from '../../screens/object/ObjectData';
import { TextHelper } from '../../helpers/TextHelper';

interface IEstateCard {
  data: ObjectModel;
}

const EstateCard: FC<IEstateCard> = props => {
  const { data } = props;

  return (
    <Link to={`/object/${data.id}`}>
      <Card shadow="sm" p="lg" radius="md" withBorder sx={{ position: 'relative', zIndex: 1 }}>
        <Group position={'apart'}>
          <Text size={20} fw={600} color={''}>
            {data.rooms + '-комн. кв., ' + data.square + ' м², ' + data.floor + ' этаж'}
          </Text>
          <ActionIcon radius={100} size={'lg'} color={'red'} variant={'filled'}>
            <Heart size={22} />
          </ActionIcon>
        </Group>
        <Badge mt={10} variant={'dot'}>
          {data.apartment_complex.class_type}
        </Badge>
        <Text mt={30} size={15} c={'gray.7'}>
          {data.apartment_complex.name}
        </Text>
        <Text mt={5} size={15} c={'gray.7'} inline sx={{ zIndex: 2, position: 'relative' }}>
          {data.apartment_complex.address}
        </Text>
        <Text mt={30} size={22} fw={500}>
          {TextHelper.getPriceString(data.price)}
        </Text>
        <Group mt={2} mb={20} align={'center'}>
          {TextHelper.getProcent(data?.coefficient)}
          {data.coefficient && data.coefficient > 1 ? (
            data.coefficient > 1.09 ? (
              <ArrowUpRight size={24} />
            ) : (
              <ArrowRight size={24} />
            )
          ) : (
            <ArrowDownRight size={24} />
          )}
        </Group>
        <Group position={'left'}>
          <Button>Перейти к объекту </Button>
        </Group>
        <img
          src={data.image || ''}
          width={120}
          style={{
            position: 'absolute',
            bottom: 8,
            right: 8,
            zIndex: 0,
            opacity: 0.8,
            objectFit: 'contain',
          }}
          onError={({ currentTarget }) => {
            currentTarget.onerror = null;
            //@ts-ignore
            currentTarget.src =
              'https://avatars.mds.yandex.net/i?id=53fda90c878108f8d13a0315f5e22214-5459035-images-thumbs&n=13&exp=1';
          }}
        />
      </Card>
    </Link>
  );
};

export default EstateCard;
