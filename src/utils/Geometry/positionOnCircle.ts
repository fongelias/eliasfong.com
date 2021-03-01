import { Coordinates } from 'types/Coordinates';
import { transpose } from 'utils/Coordinates/coordinateMath';

export const positionOnCircle = (degrees: number, radius: number, origin: Coordinates = {x: 0, y: 0, z: 0}): Coordinates => {
  // uses x and z axis due to default canvas orientation
  // rule out base cases
  if (degrees === 0 || degrees === 360) {
    return transpose(
      {x: 0, y: 0, z: radius},
      origin
    );
  }

  if (degrees === 90) {
    return transpose(
      {x: radius, y: 0, z: 0},
      origin
    );
  }

  if (degrees === 180) {
    return transpose(
      {x: 0, y: 0, z: -radius},
      origin,
    );
  }

  if (degrees === 270) {
    return transpose(
      {x: -radius, y: 0, z: 0},
      origin,
    );
  }
  // determine quadrant
  const isZPositive = degrees < 90 || degrees > 270;
  const isXPositive = degrees < 180;
  // determine relative measurements
  const quadrantAngle = degrees % 90;
  const radians = Math.PI / 180 * quadrantAngle
  const oppositeSideLength = Math.sin(radians) * radius;
  const adjacentSideLength = Math.cos(radians) * radius;
  // calculate position
  const isAdjacentSideOnZAxis = (isZPositive && isXPositive) || (!isZPositive && !isXPositive);
  const xMagnitude = isAdjacentSideOnZAxis ? oppositeSideLength : adjacentSideLength;
  const zMagnitude = isAdjacentSideOnZAxis ? adjacentSideLength : oppositeSideLength;
  const xDirection = isXPositive ? 1 : -1;
  const zDirection = isZPositive ? 1 : -1;
  return transpose(
    {
      x: (xMagnitude * xDirection),
      y: 0,
      z: (zMagnitude * zDirection),
    },
    origin,
  );
}