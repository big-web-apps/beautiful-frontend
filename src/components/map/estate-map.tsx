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
  const { filterStore } = useRootStore();
  const [features, setFeatures] = useState<any>({
    type: "FeatureCollection",
    features: []
  })

  //Effects
  useEffect(() => {
    filterStore.resetStore();
    filterStore.getFlats();

    let tempFeatures: any = []

    filterStore.currentItems.forEach( (item, index) => {
      if (item !== null) {
        let tempElement = {
          "type": "Feature",
          "id": index,
          "geometry": {
            "type": "Point",
            "coordinates": [
              item.apartment_complex.latitude,
              item.apartment_complex.longitude - 0.0007
            ]
          },
          "options": {
            iconLayout: "default#image",
            iconImageHref: marker,
            iconImageSize: [70, 90],
          }
      }

      tempFeatures.push(tempElement);

    }})


    setFeatures({
      type: "FeatureCollection",
      features: [...tempFeatures]
    })

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