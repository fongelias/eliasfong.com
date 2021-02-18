import React, { useRef } from 'react';

export const BasicBox = () => {
  const mesh = useRef();

  return (
    <mesh
      ref={mesh}
      position={[0,0,0]}>
        <boxBufferGeometry args={[1,1,1]}/>
        <meshStandardMaterial color='orange'/>
    </mesh>
  )
}
