import React from 'react';
import { Coordinates } from 'types/Coordinates';
import { useSpring, animated } from 'react-spring/three';

interface BasicBoxProps {
  position: Coordinates;
  onClick: (position: Coordinates) => void;
}

export const BasicBox = ({
  position,
  onClick = () => void(0),
}: BasicBoxProps) => {
  const {x, y, z} = useSpring({
    x: position.x,
    y: position.y,
    z: position.z,
  });

  return (
    <animated.mesh
      onClick={() => onClick(position)}
      position-x={x}
      position-y={y}
      position-z={z}
      castShadow>
        <boxBufferGeometry args={[0.5,0.5,0.5]}/>
        <meshStandardMaterial color='orange'/>
    </animated.mesh>
  )
}
