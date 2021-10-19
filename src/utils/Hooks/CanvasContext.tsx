import { createContext, ReactNode, useState } from 'react';
import { Canvas } from 'react-three-fiber';
import { BasicPlane } from 'components/presentational/three/BasicPlane';
import { softShadows, PerspectiveCamera } from '@react-three/drei';
import { useSpring, animated } from 'react-spring/three';
import { Coordinates } from 'types/Coordinates';

// shader declaration
softShadows();


// defaults
const defaultCanvasAPI = {
  moveCamera: () => {},
}

const FLOOR_ROTATION = {
  x: -Math.PI / 2,
  y: 0,
  z: 0,
}

const FLOOR_POSITION = {
  x: 0,
  y: -1,
  z: 0,
}


// context definitions
export interface CanvasAPI {
  moveCamera: () => void;
}

export const CanvasContext = createContext(defaultCanvasAPI);

interface CanvasProviderProps {
  children: ReactNode;
}

interface CanvasContextProviderProps {
  children: ReactNode;
}

interface CameraProps {
  position?: Coordinates;
}

const DEFAULT_CAMERA_POSITION = {
  x: 0,
  y: 0,
  z: 5,
}

const Camera = ({position = DEFAULT_CAMERA_POSITION}: CameraProps) => {
  const {positionX, positionY, positionZ} = useSpring({
    positionX: position.x,
    positionY: position.y,
    positionZ: position.z,
  });

  return (
    <animated.group
      position-x={positionX}
      position-y={positionY}
      position-z={positionZ}
    >
      <PerspectiveCamera
        makeDefault
        fov={75}/>
    </animated.group>
  )
}

const CanvasContextProvider = ({children}: CanvasContextProviderProps) => {
  const [cameraPosition, setCameraPosition] = useState(DEFAULT_CAMERA_POSITION);
  
  // canvas level state here
  const canvasAPI: CanvasAPI = {
    moveCamera: () => {
      setCameraPosition({x: 0, y: 2, z: 10});
    }
  }

  return (
    <>
      <Camera position={cameraPosition}/>
      <ambientLight />
      <directionalLight
          castShadow
          position={[0, 10, 0]}
          intensity={1.5}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />
      <pointLight position={[10, 10, 10]} />
      <CanvasContext.Provider value={canvasAPI}>
        { children }
      </CanvasContext.Provider>
      <BasicPlane
        rotation={FLOOR_ROTATION}
        position={FLOOR_POSITION}/>
    </>
  )
}

export const CanvasProvider = ({ children }: CanvasProviderProps) => (
  <Canvas shadowMap>
    <CanvasContextProvider>
      {children}
    </CanvasContextProvider>
  </Canvas>
);
