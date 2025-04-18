import { MapContext } from "@/contexts/MapContext";
import { useContext } from "react";

export const useMap = () => {
  const context = useContext(MapContext);
  if (!context) throw new Error("useMapContext must be used within MapProvider");
  return context;
};
