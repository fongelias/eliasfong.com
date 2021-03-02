import { useState } from 'react';


export const useRotatingState = <T> (possibleStates: T[]): [T[], () => void, () => void] => {
  const [states, setStates] = useState(possibleStates);
  const rotateStateClockwise = () => setStates((initialState: T[]) => [...initialState.slice(1), ...initialState.slice(0, 1)]);
  const rotateStateCounterClockwise = () => setStates((initialState: T[]) => [...initialState.slice(-1), ...initialState.slice(0, -1)]);

  return [
    states,
    rotateStateClockwise,
    rotateStateCounterClockwise,
  ]
}
