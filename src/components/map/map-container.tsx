import React, {FC, useState} from 'react'
import {Placemark, Polygon, YMaps, Map} from '@pbe/react-yandex-maps'

import districts from './map.json'
import { dataSell1 } from './../../screens/stat/components/data'
import ObjectManagerContainer from './object-manager-container'

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
  isLoading?: boolean,
  mapPolygonColors: string[]
}



const MapContainer: FC<MapContainerProps> = ({
                                               state = {center: [45.035470, 38.975313], zoom: 14},
                                               width = '100%',
                                               height = '100%',
                                               features,
                                               objectManagerFilter,
                                               onPlaceMarkClick,
                                               isLoading,
                                               mapPolygonColors
}) => {


  return (
    <>
      <YMaps>
        <Map defaultState={state} width={width} height={height} >
          <ObjectManagerContainer
            features={ features }
            objectManagerFilter={ objectManagerFilter }
            onPlaceMarkClick={ onPlaceMarkClick }
          />
          {
            districts.data.map((item, index) => {
              return (
                <Polygon
                  key={item.name}
                  geometry={item.geometry}
                  properties={{
                    hintContent: item.name
                  }}
                  options={{
                    strokeColor: "#4b0fff",
                    fillColor: mapPolygonColors == null ? '#cfc3ff' : mapPolygonColors[index],
                    opacity: 0.5,
                    strokeWidth: 2,
                  }}
                  modules={
                    ['geoObject.addon.balloon', 'geoObject.addon.hint']
                  }
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

