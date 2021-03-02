import React, { ReactNode } from 'react';
import { animated } from 'react-spring';
import { ViewportContext, ViewportAPI } from 'utils/Hooks/ViewportContext'; 

import styles from './PageContainer.module.scss';

interface PageContainerProps {
  children: ReactNode;
}

export const PageContainer = ({
  children,
}: PageContainerProps) => {
  // switch from one page to another
  const viewportAPI: ViewportAPI = {
    transition: () => { console.log('transition()') },
  }

  return (
    <ViewportContext.Provider value={viewportAPI}>
      <div className={styles.PageContainer}>
        <animated.div className={styles.CurrentPage}>
          {children}
        </animated.div>
        <animated.div></animated.div>
      </div>
    </ViewportContext.Provider>
  )
};
