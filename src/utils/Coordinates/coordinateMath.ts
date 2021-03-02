import { Coordinates } from 'types/Coordinates';

export const coordinateCalc = (
  coords1: Coordinates,
  coords2: Coordinates,
  operation: (coord1: number, coord2: number) => number,
): Coordinates => ({
  x: operation(coords1.x, coords2.x),
  y: operation(coords1.y, coords2.y),
  z: operation(coords1.z, coords2.z),
});

export const equality = (coords1: Coordinates, coords2: Coordinates): boolean => {
  const isXEqual = coords1.x === coords2.x;
  const isYEqual = coords1.y === coords2.y;
  const isZEqual = coords1.z === coords2.z;

  return isXEqual && isYEqual && isZEqual;
};
// const diffCoords = (coords1: Coordinates, coords2: Coordinates) => coordinateCalc(coords1, coords2, (a, b) => a - b);
const addCoords = (coords1: Coordinates, coords2: Coordinates) => coordinateCalc(coords1, coords2, (a, b) => a + b);
// const multiplyCoords = (coords1: Coordinates, coords2: Coordinates) => coordinateCalc(coords1, coords2, (a, b) => a * b);
// const transitionDirection = (coords1: Coordinates, coords2: Coordinates) => coordinateCalc(coords1, coords2, (a, b) => Math.sign(a - b));

export const transpose = addCoords;