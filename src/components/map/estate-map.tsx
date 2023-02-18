import React from 'react';
import {Map} from '@pbe/react-yandex-maps';
import MapContainer from './map-container';
import {Box} from '@mantine/core';

interface EstateMapI {
  mapPolygonColors: string [];
}

const EstateMap: React.FC<EstateMapI> = (props) => {
  return (
    <div style={{position: 'relative', height: "500px"}}>
      <MapContainer
        mapPolygonColors={props.mapPolygonColors}
        state={{center: [45.035470, 38.975313], zoom: 12}}
      />
    </div>
  );
};

export default EstateMap;