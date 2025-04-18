import React from 'react';
import MarkerIcon from '@/assets/svg/marker.svg';
import {
  ContentBox,
  Coordinate,
  Divider,
  Label,
  LocationBox,
  ShimmerWrapper,
  ShimmerLine,
} from './MapLocations.styles';
import { useMapContext } from '@/contexts/MapContext';
import { useLocations } from '@/hooks/useLocations';


const MapLocations = () => {
  const { locations, setLocations } = useMapContext();
  const { loading } = useLocations();

  const handleChange = (index: number, field: 'lat' | 'lng') => (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setLocations((prevDetails) => {
      const updatedDetails = [...prevDetails];
      updatedDetails[index] = {
        ...updatedDetails[index],
        [field]: value,
      };
      return updatedDetails;
    });
  }

  return (
    <ContentBox>
      {loading
        ? Array.from({ length: 3 }).map((_, idx) => (
          <ShimmerWrapper key={idx} data-testid="shimmer">
            <ShimmerLine width="40%" height="24px" />
            <ShimmerLine width="100%" height="38px" />
            <ShimmerLine width="100%" height="38px" />
            <Divider />
          </ShimmerWrapper>
        ))
        : locations.map(({ lat, lng, name }, idx) => (
          <LocationBox key={name}>
            <Label>
              <img src={MarkerIcon} alt="marker" />
              Location {idx + 1}
            </Label>
            <Coordinate>
              <span>Lat</span>
              <input
                type="number"
                value={lat}
                name={`${name}-lat`}
                onChange={handleChange(idx, 'lat')}
              />
            </Coordinate>
            <Coordinate>
              <span>Long</span>
              <input
                type="number"
                value={lng}
                name={`${name}-lng`}
                onChange={handleChange(idx, 'lng')}
              />
            </Coordinate>
            {idx !== locations.length - 1 && <Divider />}
          </LocationBox>
        ))}
    </ContentBox>
  );
};

export default React.memo(MapLocations);
