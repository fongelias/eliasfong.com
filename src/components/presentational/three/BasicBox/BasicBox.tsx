import React, { useRef, MouseEvent, useState } from 'react';
import { Coordinates } from 'types/Coordinates';
import { useSpring, animated } from 'react-spring/three';

interface BasicBoxProps {
  position: Coordinates;
  onClick?: (event: MouseEvent) => void;
}

export const BasicBox = ({
  position,
  onClick,
}: BasicBoxProps) => {
  const mesh = useRef();
  const {x, y, z} = useSpring({
    x: position.x,
    y: position.y,
    z: position.z,
  })

  return (
    <animated.mesh
      ref={mesh}
      onClick={onClick}
      position-x={x}
      position-y={y}
      position-z={z}>
        <boxBufferGeometry args={[0.5,0.5,0.5]}/>
        <meshStandardMaterial color='orange'/>
    </animated.mesh>
  )
}
