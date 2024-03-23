import { Canvas } from '@react-three/fiber'
import React from 'react'
import '../main.css'

export function SpinTriangle() {

    const posY = -0.8
    const rotZ = -0.54
  return (
    <div className="canvas">
    <Canvas>
        <ambientLight />
        <mesh position-y={posY} rotation-z={rotZ}>
            <torusGeometry args={[3, 0.2, 4, 3, 6.3]} />
            <meshStandardMaterial color="blue" />
        </mesh>
        <mesh position-y={posY} rotation-z={rotZ}>
            <torusGeometry args={[2, 0.2, 4, 3, 6.3]} />
            <meshStandardMaterial color="blue" />
        </mesh>
        <mesh position-y={posY} rotation-z={rotZ}>
            <torusGeometry args={[1, 0.2, 4, 3, 6.3]} />
            <meshStandardMaterial color="blue" />
        </mesh>
    </Canvas>
    </div>
  )
}
