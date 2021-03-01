import React from 'react';
import { Canvas } from 'react-three-fiber';
import { BasicBox } from 'components/presentational/three/BasicBox';
import { useTurntableState } from 'utils/Coordinates/useTurntableState';

import styles from './LandingPage.module.scss';


const LandingPageContent = () => {
  const { seatPositionsState, rotateSeats } = useTurntableState(3, 1.5, {x: 0, y: 0, z: 2});

  return (
    <>
      <ambientLight />
      {
        seatPositionsState.map((positionState) => (
          <BasicBox
            position={positionState}
            onClick={rotateSeats}/>
        ))
      }
      {/* <BasicBox
        onClick={() => setPosition(endingPosition)}
        position={position}/> */}
      <pointLight position={[10, 10, 10]} />
    </>
  )
}

export const LandingPage = () => (
  <div className={styles.LandingPageContainer}>
    <Canvas>
      <LandingPageContent />
    </Canvas>
  </div>
);
