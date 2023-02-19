import React, { FC } from 'react';
import { Polygon, YMaps, Map } from '@pbe/react-yandex-maps';

import districts from './map.json';
import ObjectManagerContainer from './object-manager-container';

interface MapContainerProps {
  state: {
    center: number[];
    zoom: number;
  };
  width?: string;
  height?: string;
  features?: any;
  objectManagerFilter?: any;
  onPlaceMarkClick?: any;
  isLoading?: boolean;
  mapPolygonColors: string[];
  prices: number[];
}

const MapContainer: FC<MapContainerProps> = ({
  state = { center: [45.03547, 38.975313], zoom: 14 },
  width = '100%',
  height = '100%',
  features,
  objectManagerFilter,
  onPlaceMarkClick,
  isLoading,
  mapPolygonColors,
  prices,
}) => {
  function numberWithSpaces(x: number) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  }

  return (
    <>
      <YMaps>
        <Map defaultState={state} width={'67vw'} height={'95vh'}>
          <ObjectManagerContainer
            features={features}
            // objectManagerFilter={ objectManagerFilter }
            // onPlaceMarkClick={ onPlaceMarkClick }
          />
          {districts.data.map((item, index) => {
            return (
              <Polygon
                key={item.name}
                geometry={item.geometry}
                properties={{
                  hintContent: item.name,
                  balloonContent: numberWithSpaces(prices[index]) + ' ₽',
                }}
                options={{
                  strokeColor: '#4b0fff',
                  fillColor: mapPolygonColors == null ? '#cfc3ff' : mapPolygonColors[index],
                  opacity: 0.5,
                  strokeWidth: 2,
                }}
                modules={['geoObject.addon.balloon', 'geoObject.addon.hint']}
              />
            );
          })}
        </Map>
      </YMaps>
    </>
  );
};

export default MapContainer;
