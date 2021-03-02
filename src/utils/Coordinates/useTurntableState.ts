import { Coordinates } from 'types/Coordinates';
import { positionOnCircle } from 'utils/Geometry/positionOnCircle';
import { useRotatingState } from 'utils/Hooks/useRotatingState';

export const useTurntableState = (seatQuantity: number, radius: number, origin: Coordinates = {x: 0, y: 0, z: 0}) => {
  // calculate seat positions, based on https://math.stackexchange.com/questions/260096/find-the-coordinates-of-a-point-on-a-circle
  const DEGREES_IN_CIRCLE = 360;
  const degreesBetweenSeats = DEGREES_IN_CIRCLE / seatQuantity;
  const seatPositions: Coordinates[] = new Array(seatQuantity).fill(null)
    .map((_null, seatNumber) => {
      const angleFromOrigin = seatNumber * degreesBetweenSeats;
      return positionOnCircle(angleFromOrigin, radius, origin);
    });
  // create rotation functions
  return useRotatingState(seatPositions);
}
