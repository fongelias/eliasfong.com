import React, { useCallback, useMemo, useContext} from 'react';
import { BasicBox } from 'components/presentational/three/BasicBox';
import { useTurntableState } from 'utils/Coordinates/useTurntableState';
import { Coordinates } from 'types/Coordinates';
import { equality } from 'utils/Coordinates/coordinateMath';
import { useRotatingState } from 'utils/Hooks/useRotatingState';
import { CanvasContext, CanvasAPI } from 'utils/Hooks/CanvasContext';

export const LandingPage = () => {
  // declare context
  const canvasContext: CanvasAPI = useContext(CanvasContext);
  // create seats
  const TABLE_SEATS = 3;
  const TABLE_RADIUS = 1.5;
  const TABLE_ORIGIN = useMemo(() => ({x: 0, y: 0, z: 2}), []);
  const [seatPositions, rotateSeats] = useTurntableState(TABLE_SEATS, TABLE_RADIUS, TABLE_ORIGIN);
  // create text
  const [textState, rotateText] = useRotatingState([
    'engineering',
    'writing',
    'photography',
  ]);
  // create click handler
  const onClickHandler = useCallback((position: Coordinates) => {
    // rotation definitions
    const rotateClockwise = () => {
      rotateSeats();
      rotateText();
    }
    // position definitions
    const OBJECT_IS_CENTER = equality(position, {
      ...TABLE_ORIGIN,
      z: TABLE_ORIGIN.z + TABLE_RADIUS,
    });
    // on click logic
    if (OBJECT_IS_CENTER) {
      // camera.position.z = 10;
      // camera.updateProjectionMatrix()
      canvasContext.moveCamera();
    } else {
      rotateClockwise();
    }
  }, [
    rotateSeats,
    rotateText,
    TABLE_ORIGIN,
  ]);

  return (
    <>
      {
        seatPositions.map((positionState, key) => (
          <BasicBox
            key={key}
            position={positionState}
            onClick={onClickHandler}/>
        ))
      }
    </>
  )
};
