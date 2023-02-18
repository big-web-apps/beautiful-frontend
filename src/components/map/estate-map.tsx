import React, {useEffect, useState} from 'react';
import {Map} from '@pbe/react-yandex-maps';
import MapContainer from './map-container';
import {Box} from '@mantine/core';
import {useRootStore} from '../../base/RootStore';

import marker from './../../assets/images/Marker.svg'

interface EstateMapI {
  mapPolygonColors: string [];
}


const EstateMap: React.FC<EstateMapI> = (props) => {
  const {filterStore} = useRootStore();
  const [features, setFeatures] = useState<any>({
    type: "FeatureCollection",
    features: []
  })

  //Effects

  useEffect(() => {
    if (!!filterStore.apartments.length) {
      let tempFeatures: any = []
      console.log('HA: ', filterStore.apartments)

      filterStore.apartments.forEach((item, index) => {
        if (item !== null) {
          let tempElement = {
            "type": "Feature",
            "id": index,
            "geometry": {
              "type": "Point",
              "coordinates": [
                item.latitude,
                item.longitude
              ]
            },
            "properties": {
              hintContent: item.name
            },
            "options": {
              iconLayout: "default#image",
              iconImageHref: marker,
              iconImageSize: [70, 90],
            },
            "modules": [
              'geoObject.addon.balloon',
              'geoObject.addon.hint'
            ]

          }
          tempFeatures.push(tempElement);
        }
      })

      setFeatures({
        type: "FeatureCollection",
        features: [...tempFeatures]
      })
    }

  }, [filterStore.apartments])

  useEffect(() => {
    filterStore.resetStore();
    filterStore.getAparts();

    return () => {
      filterStore.resetStore();
    };
  }, []);


  return (
    <div style={{position: 'relative', height: "500px"}}>
      <MapContainer
        mapPolygonColors={props.mapPolygonColors}
        state={{center: [45.035470, 38.975313], zoom: 12}}
        features={features}
      />
    </div>
  );
};

export default EstateMap;