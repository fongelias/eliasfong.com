import { Coordinates, ThreeCoordinates } from 'types/Coordinates';

export const toThreeCoordinates = (coordinates: Coordinates): ThreeCoordinates => [coordinates.x, coordinates.y, coordinates.z];
