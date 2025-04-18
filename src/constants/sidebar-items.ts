import {MapIcon, MeasurementIcon, OverlayIcon} from '@/assets/svg'
import { NavigationPath } from '@/routes/navigation-path';


const { map, measurement, overlay } = NavigationPath;

export const sidebarItems = [
  { path: map, label: 'Map', icon: MapIcon },
  { path: measurement, label: 'Measurement', icon: MeasurementIcon },
  { path: overlay, label: 'Overlay', icon: OverlayIcon },
];
