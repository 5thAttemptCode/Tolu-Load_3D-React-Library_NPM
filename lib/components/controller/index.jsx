import React from 'react'
import '../main.css'
import { Canvas } from '@react-three/fiber'


export function PlayStation() {

  return (
    <div className="canvas">
      <Canvas camera={{ position: [0, 0.2, 3], fov: 60 }}>
        <ambientLight />
        <group position-y={-1.2} rotation-y={1.6}>
          <mesh rotation-x={-0.75}>
            <boxGeometry args={[0.1, 1, 0.1]} />
            <meshStandardMaterial color="#3f8be8" />
          </mesh>
          <mesh rotation-x={0.75} >
            <boxGeometry args={[0.1, 1, 0.1]} />
            <meshStandardMaterial color="#3f8be8" />
          </mesh>
        </group>
        <mesh position-x={1}>
          <torusGeometry args={[0.33, 0.06, 3, 100, 6.3]} />
          <meshStandardMaterial color="#9c2f22" />
        </mesh>
        <mesh position-x={-1} rotation-z={0.78}>
          <torusGeometry args={[0.4, 0.06, 10, 4, 6.3]} />
          <meshStandardMaterial color="#bc6ca5" />
        </mesh>
        <mesh position-y={1} rotation-z={-0.53}>
          <torusGeometry args={[0.4, 0.1, 3, 3, 6.3]} />
          <meshStandardMaterial color="#4ca46d" />
        </mesh>
      </Canvas>
    </div>
  )
}
