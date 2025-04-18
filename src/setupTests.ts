import '@testing-library/jest-dom';

// src/setupTests.ts

class ResizeObserver {
  observe() { }
  unobserve() { }
  disconnect() { }
}

(globalThis as typeof globalThis).ResizeObserver = ResizeObserver
