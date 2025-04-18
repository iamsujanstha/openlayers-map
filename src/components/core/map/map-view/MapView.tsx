import React, { useEffect, useMemo } from 'react';
import styled from 'styled-components';
import 'ol/ol.css';
import { Map, Feature, View } from 'ol';
import { Point } from 'ol/geom';
import { fromLonLat } from 'ol/proj';
import { Vector as VectorSource, OSM } from 'ol/source';
import { Vector as VectorLayer, Tile as TileLayer } from 'ol/layer';
import { Circle as CircleStyle, Stroke, Style } from 'ol/style';
import { useMapContext } from '@/contexts/MapContext';


const DEFAULT_ZOOM = 16;
const SEOUL_CITY_HALL = [126.9780, 37.5665];

const MapView = () => {
  const { locations } = useMapContext();
  const locationList = useMemo(() => locations?.map(({ lng, lat }) => [lng, lat]) ?? [], [locations]);

  useEffect(() => {
    const vectorSource = new VectorSource();

    /* Map Initialization */
    const map = new Map({
      target: 'map-container',
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
        new VectorLayer({
          source: vectorSource,
          style: new Style({
            image: new CircleStyle({
              radius: 10,
              stroke: new Stroke({
                color: 'blue',
                width: 2,
              }),
            }),
          }),
        }),
      ],
      view: new View({
        center: fromLonLat(SEOUL_CITY_HALL),
        zoom: DEFAULT_ZOOM,
      }),
    });

    /* Add Location features */
    if (locationList.length > 0) {
      const features = locationList.map(([lat, lng]) => {
        const point = new Point(fromLonLat([lat, lng]));
        return new Feature(point);
      });

      vectorSource.addFeatures(features);
      map.getView().fit(vectorSource.getExtent(), {
        padding: [10, 30, 10, 40],
      });
    }

    return () => {
      map.setTarget(undefined);
    };
  }, [locationList]);

  return <StyledMapContainer id="map-container" data-testid="map-container" />;
};

export default React.memo(MapView);


const StyledMapContainer = styled.div`
  width: 100%;
  height: 100%;
`;