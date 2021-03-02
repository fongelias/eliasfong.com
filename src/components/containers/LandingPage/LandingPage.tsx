import React, { useCallback, useContext } from 'react';
import { Canvas } from 'react-three-fiber';
import { BasicBox } from 'components/presentational/three/BasicBox';
import { useTurntableState } from 'utils/Coordinates/useTurntableState';
import { Coordinates } from 'types/Coordinates';
import { equality } from 'utils/Coordinates/coordinateMath';
import { useRotatingState } from 'utils/Hooks/useRotatingState';
import { ViewportContext } from 'utils/Hooks/ViewportContext';

import styles from './LandingPage.module.scss';


export const LandingPage = () => {
  // declare context
  const viewportContext = useContext(ViewportContext);
  // create seats
  const TABLE_SEATS = 3;
  const TABLE_RADIUS = 1.5;
  const TABLE_ORIGIN = {x: 0, y: 0, z: 2};
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
      viewportContext.transition();
    } else {
      rotateClockwise();
    }
  }, [
    rotateSeats,
    rotateText,
    seatPositions,
    viewportContext,
    TABLE_ORIGIN,
  ]);

  return (
    <div className={styles.LandingPageContainer}>
      <Canvas>
        <ambientLight />
        {
          seatPositions.map((positionState, key) => (
            <BasicBox
              key={key}
              position={positionState}
              onClick={onClickHandler}/>
          ))
        }
        <pointLight position={[10, 10, 10]} />
      </Canvas>
      <h2 className={styles.OptionName}>{textState[0]}</h2>
    </div>
  )
};
