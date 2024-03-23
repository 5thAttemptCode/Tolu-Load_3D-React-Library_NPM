import React from 'react'
import '../main.css'
import { Canvas } from '@react-three/fiber'


export function PlayStation() {
  return (
    <div className="canvas">
        <Canvas camera={{ position: [0, 0.2, 3], fov: 55 }}>
            <directionalLight position-y={-2} />
            <directionalLight position-y={2} />
            <directionalLight position-z={1} intensity={0.3} />
           <group position-y={-1.2} rotation-y={1.6}>
                <mesh rotation-x={-0.75}>
                    <boxGeometry args={[0.1, 1, 0.1]} />
                    <meshStandardMaterial color="blue" />
                </mesh>
                <mesh rotation-x={0.75} >
                    <boxGeometry args={[0.1, 1, 0.1]} />
                    <meshStandardMaterial color="blue" />
                </mesh>
            </group>
            <mesh position-x={1}>
                <sphereGeometry args={[0.35, 64, 32]} />
                <meshStandardMaterial color="blue" />
            </mesh>
            <mesh position-x={-1}>
                <boxGeometry args={[0.6, 0.6, 0.6]} />
                <meshStandardMaterial color="blue" />
            </mesh>
            <mesh position-y={1} rotation-z={-0.5}>
                <torusGeometry args={[0.4, 0.1, 3, 3, 6.3]} />
                <meshStandardMaterial color="blue" />
            </mesh>
        </Canvas>
    </div>
  )
}
