import React from 'react';
import { Canvas } from 'react-three-fiber';
import { BasicBox } from 'components/presentational/three/BasicBox';

import styles from './LandingPage.module.scss';

export const LandingPage = () => {


  return (
    <div className={styles.LandingPageContainer}>
      <Canvas>
        <ambientLight />
        <BasicBox />
        {/* <pointLight position={[10, 10, 10]} /> */}
      </Canvas>
    </div>
  );
}
