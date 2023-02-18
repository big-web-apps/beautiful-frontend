import React, {FC} from 'react'
import {Placemark, Polygon, YMaps, Map} from '@pbe/react-yandex-maps'

import districts from './map.json'
import ObjectManagerContainer from './object-manager-container';

interface MapContainerProps {
  state: {
    center: number[],
    zoom: number
  },
  width?: string,
  height?: string,
  features?: any,
  objectManagerFilter?: any,
  onPlaceMarkClick?: any,
  isLoading?: boolean
}

const MapContainer: FC<MapContainerProps> = ({
                                               state = {center: [45.035470, 38.975313], zoom: 14},
                                               width = '100%',
                                               height = '100%',
                                               features,
                                               objectManagerFilter,
                                               onPlaceMarkClick,
                                               isLoading
                                             }) => {
  console.log(districts.data[0].geometry)
  const defaultState = {
    center: [45.035470, 38.975313],
    zoom: 14,
  };
  return (
    <>
      <YMaps>
        <Map defaultState={defaultState} width={width} height={height} >
          <ObjectManagerContainer
            features={ features }
            objectManagerFilter={ objectManagerFilter }
            onPlaceMarkClick={ onPlaceMarkClick }
          />
          {
            districts.data.map(e => {
              return (
                <Polygon
                  key={e.name}
                  geometry={e.geometry}
                  options={{
                    strokeColor: "#4b0fff",
                    fillColor: "#cfc3ff",
                    opacity: 0.3,
                    strokeWidth: 2,
                  }}
                />
              )
            })
          }
        </Map>
      </YMaps>
    </>
  );
};

export default MapContainer;

