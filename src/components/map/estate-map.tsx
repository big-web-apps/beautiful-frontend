import React from 'react';
import {Map} from '@pbe/react-yandex-maps';
import MapContainer from './map-container';
import {Box} from '@mantine/core';

const EstateMap = () => {
  return (
    <div style={{position: 'relative', height: "500px"}}>
      <MapContainer
        state={{center: [45.035470, 38.975313], zoom: 14}}
      />
    </div>
  );
};

export default EstateMap;