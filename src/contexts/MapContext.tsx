
import { createContext, useEffect, useState } from 'react';
import { ILocationDetails } from '@/components/core/map';
import { useLocations } from '@/hooks/useLocations';


interface MapContextType {
  locations: ILocationDetails[];
  setLocations: React.Dispatch<React.SetStateAction<ILocationDetails[]>>;
  loading: boolean;
};

export const MapContext = createContext<MapContextType | undefined>(undefined);

export const MapProvider = ({ children }: { children: React.ReactNode }) => {
  const { data, loading } = useLocations();

  const [locations, setLocations] = useState<ILocationDetails[]>([]);

  useEffect(function syncInitialPosition() {
    if ((data?.length ?? 0) > 0) {
      const updatedLocations = (data ?? []).map((location, index) => ({
        lat: location[0],
        lng: location[1],
        name: `location${index + 1}`
      }));
      setLocations(updatedLocations);
    }
  }, [data, setLocations]);

  return (
    <MapContext.Provider value={{ locations, setLocations, loading }}>
      {children}
    </MapContext.Provider>
  );
};
