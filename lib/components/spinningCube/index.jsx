import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'

export function SpinningCube({ args, color }) {

  function MeshComponent({ args, color }) {
    const meshRef = useRef()
    
    useFrame((state, delta) => {
      if(meshRef.current) {
        meshRef.current.rotation.y += delta * 3
      }
    })
    
    return (
      <mesh ref={meshRef} rotation={[0.5, 0.5, 0.5]}>
        <boxGeometry args={args} />
        <meshStandardMaterial color={color} />
      </mesh>
    )
  }

  return (
    <Canvas>
      <directionalLight position={[-2, 2, 10]}/>
      <MeshComponent args={args} color={color} />
    </Canvas>
  )
}
