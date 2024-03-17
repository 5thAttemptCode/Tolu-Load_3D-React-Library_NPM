import React from 'react'
import { Canvas } from '@react-three/fiber'
import { useSpring, animated } from '@react-spring/three'


const Cube = () => {
  const { scale } = useSpring({
    from: { scale: [1, 1, 1] },
    to: async next => {
      while (1) {
        await next({ scale: [2, 2, 2] });
        await next({ scale: [1, 1, 1] });
      }
    },
    config: { duration: 600 }
  })
  
    return (
      <animated.mesh scale={scale}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="blue" />
      </animated.mesh>
    )
  }

export function ScaleCube() {
  return (
    <Canvas camera={{ position: [5, 5, 5], fov: 25 }}>
      <directionalLight position={[-2, 2, 10]} />
      <ambientLight />
      <Cube />
    </Canvas>
  )
}
