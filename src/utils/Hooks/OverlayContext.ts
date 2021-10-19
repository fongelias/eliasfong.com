import { createContext } from 'react';

export interface OverlayAPI {
  transition: () => void;
}

const defaultOverlayAPI = {
  transition: () => {},
}

export const OverlayContext = createContext(defaultOverlayAPI);
