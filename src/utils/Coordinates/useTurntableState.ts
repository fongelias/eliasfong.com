import { useState } from 'react';
import { Coordinates } from 'types/Coordinates';
import { positionOnCircle } from 'utils/Geometry/positionOnCircle';

export const useTurntableState = (seatQuantity: number, radius: number, origin: Coordinates = {x: 0, y: 0, z: 0}) => {
  // calculate seat positions, based on https://math.stackexchange.com/questions/260096/find-the-coordinates-of-a-point-on-a-circle
  const DEGREES_IN_CIRCLE = 360;
  const degreesBetweenSeats = DEGREES_IN_CIRCLE / seatQuantity;
  const seatPositions: Coordinates[] = new Array(seatQuantity).fill(null)
    .map((_null, seatNumber) => {
      const angleFromOrigin = seatNumber * degreesBetweenSeats;
      return positionOnCircle(angleFromOrigin, radius, origin);
    });
  // create rotation functions and seatPositionsState
  const [seatPositionsState, setSeatPositionsState] = useState(seatPositions);
  const rotateSeats = () => {
    // update seat positions
    setSeatPositionsState((initialSeatPositonsState) => {
      console.log(initialSeatPositonsState);
      // move the last position to the front of the array
      return [...initialSeatPositonsState.slice(-1), ...initialSeatPositonsState.slice(0, -1)]
    });
  };
  
  return {
    seatPositionsState,
    rotateSeats,
  }
}