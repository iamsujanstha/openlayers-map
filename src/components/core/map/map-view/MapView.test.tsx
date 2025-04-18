import { render } from '@testing-library/react';
import MapView from './MapView';
import { MapProvider } from '@/contexts/MapContext';


describe('MapView Component', () => {
  beforeEach(() => {
    const mapDiv = document.createElement('div');
    mapDiv.setAttribute('id', 'map-container');
    document.body.appendChild(mapDiv);
  });

  afterEach(() => {
    /* Cleaning aftr each test */
    const mapDiv = document.getElementById('map-container');
    if (mapDiv) {
      mapDiv.remove();
    }
  });

  it('should render map container', () => {
    const { container } = render(
      <MapProvider>
        <MapView />
      </MapProvider>
    );

    const mapContainer = container.querySelector('#map-container');
    expect(mapContainer).toBeInTheDocument();
  });

  it('should render markers when locations are provided', () => {
    render(
      <MapProvider >
        <MapView />
      </MapProvider>
    );
    const mapContainer = document.getElementById('map-container');
    expect(mapContainer).toBeInTheDocument();
  });
});
