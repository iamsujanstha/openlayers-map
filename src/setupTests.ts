import '@testing-library/jest-dom';

class ResizeObserver {
  observe() { }
  unobserve() { }
  disconnect() { }
}

(globalThis as typeof globalThis).ResizeObserver = ResizeObserver
