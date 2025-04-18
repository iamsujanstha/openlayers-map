import { ENV_COFIG } from '@configs/env-config';
import { useEffect, useReducer, useRef, useCallback } from 'react';

export type LocationType = [number, number, number];
type LocationsData = { locations: LocationType[] };

type State = {
  data: LocationType[] | null;
  loading: boolean;
  error: string | null;
};

type Action =
  | { type: 'FETCH_START' }
  | { type: 'FETCH_SUCCESS'; payload: LocationType[] }
  | { type: 'FETCH_ERROR'; payload: string };

const initialState: State = {
  data: null,
  loading: false,
  error: null,
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'FETCH_START':
      return { ...state, loading: true, error: null };
    case 'FETCH_SUCCESS':
      return { data: action.payload, loading: false, error: null };
    case 'FETCH_ERROR':
      return { data: null, loading: false, error: action.payload };
    default:
      return state;
  }
}

const { baseUrl } = ENV_COFIG;

export const useLocations = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const controllerRef = useRef<AbortController | null>(null);

  const fetchLocations = useCallback(async () => {
    dispatch({ type: 'FETCH_START' });

    const controller = new AbortController();
    controllerRef.current = controller;

    try {
      const res = await fetch(
        `${baseUrl}/locations`,
        { signal: controller.signal }
      );

      if (!res.ok) throw new Error(`Failed to fetch: ${res.statusText}`);
      const data: LocationsData = await res.json();

      dispatch({ type: 'FETCH_SUCCESS', payload: data.locations });
    } catch (err: unknown) {
      if (err instanceof Error) {
        if (err.name === 'AbortError') return;
        dispatch({ type: 'FETCH_ERROR', payload: err.message });
      } else {
        dispatch({ type: 'FETCH_ERROR', payload: 'An unknown error occurred' });
      }
    }
  }, []);

  useEffect(() => {
    fetchLocations();

    return () => {
      controllerRef.current?.abort(); // cleanup on unmount
    };
  }, [fetchLocations]);

  return {
    ...state,
    refetch: fetchLocations,
    abort: () => controllerRef.current?.abort(),
  };
};
