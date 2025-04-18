import { vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import MapLocations from './MapLocations';
import { useLocations } from '@/hooks/useLocations';
import { useMap } from '@/hooks/useMap';


vi.mock('@/hooks/useLocations');
vi.mock('@/hooks/useMap');

describe('MapLocations Component', () => {
  const mockSetLocations = vi.fn();

  const sampleLocations = [
    { lat: 27.7172, lng: 85.324, name: 'Kathmandu' },
    { lat: 28.2639, lng: 83.9721, name: 'Pokhara' },
  ];

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should show shimmer loader when loading', () => {
    (useLocations as jest.Mock).mockReturnValue({ loading: true });
    (useMap as jest.Mock).mockReturnValue({
      locations: [],
      setLocations: vi.fn(),
    });

    render(<MapLocations />);

    const shimmerElements = screen.getAllByTestId('shimmer');
    expect(shimmerElements.length).toBeGreaterThan(0);
  });


  it('should render location inputs when loading is false', async () => {
    (useLocations as jest.Mock).mockReturnValue({ loading: false });
    (useMap as jest.Mock).mockReturnValue({
      locations: sampleLocations,
      setLocations: mockSetLocations,
    });

    render(<MapLocations />);

    expect(await screen.findByDisplayValue('27.7172')).toBeInTheDocument();
    expect(screen.getByDisplayValue('85.324')).toBeInTheDocument();
    expect(screen.getByDisplayValue('28.2639')).toBeInTheDocument();
    expect(screen.getByDisplayValue('83.9721')).toBeInTheDocument();
  });

  it('should call setLocations on input change', async () => {
    (useLocations as jest.Mock).mockReturnValue({ loading: false });
    (useMap as jest.Mock).mockReturnValue({
      locations: sampleLocations,
      setLocations: mockSetLocations,
    });

    render(<MapLocations />);

    const latInput = screen.getByDisplayValue('27.7172') as HTMLInputElement;
    fireEvent.change(latInput, { target: { value: '28.0000' } });

    await waitFor(() => {
      expect(mockSetLocations).toHaveBeenCalled();
    });
  });
});
