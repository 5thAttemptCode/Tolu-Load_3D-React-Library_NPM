import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'


export function SpinningCube({ size = 1, color="blue" }) {

  function MeshComponent({ size, color }) {
    const meshRef = useRef()
    
    useFrame((state, delta) => {
      if(meshRef.current) {
        meshRef.current.rotation.y += delta * 3
      }
    })
    
    return (
      <mesh ref={meshRef} rotation={[0, 0, 0]}>
        <boxGeometry args={[size, size, size]} />
        <meshStandardMaterial color={color} />
      </mesh>
    )
  }

  return (
    <Canvas>
      <directionalLight position={[-2, 2, 10]} />
      <MeshComponent size={size} color={color} />
    </Canvas>
  )
}
