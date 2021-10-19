import React from 'react';
import { LandingPage } from 'components/containers/LandingPage';
import { CanvasProvider } from 'utils/Hooks/CanvasContext';

import styles from './WorldContainer.module.scss';

export const WorldContainer = () => {
  // consider transition as animation

  return (
    <div className={styles.WorldContainer}>
      <CanvasProvider>
        <LandingPage/>
      </CanvasProvider>
      <h2 className={styles.OptionName}>text</h2>
    </div>
  )
};
