import { createContext } from 'react';

export interface ViewportAPI {
  transition: () => void;
}

const defaultViewportAPI = {
  transition: () => {},
}

export const ViewportContext = createContext(defaultViewportAPI);
