import { Coordinates, ORIGIN } from 'types/Coordinates';
import { useSpring, animated } from 'react-spring/three';

interface BasicPlaneProps {
  rotation?: Coordinates;
  position?: Coordinates;
}


export const BasicPlane = ({
  rotation = ORIGIN,
  position = ORIGIN,
}: BasicPlaneProps) => {
  const {positionX, positionY, positionZ} = useSpring({
    positionX: position.x,
    positionY: position.y,
    positionZ: position.z,
  });

  const {rotationX, rotationY, rotationZ} = useSpring({
    rotationX: rotation.x,
    rotationY: rotation.y,
    rotationZ: rotation.z,
  });
  
  return (
    <animated.mesh
      // rotation={[-Math.PI / 2, 0, 0]}
      // position={[0, -1, 0]}
      rotation-x={rotationX}
      rotation-y={rotationY}
      rotation-z={rotationZ}

      position-x={positionX}
      position-y={positionY}
      position-z={positionZ}

      receiveShadow>
      <planeBufferGeometry attach='geometry' args={[100, 100]} />
      <shadowMaterial attach='material' opacity={0.3}/>
    </animated.mesh>
  )
}