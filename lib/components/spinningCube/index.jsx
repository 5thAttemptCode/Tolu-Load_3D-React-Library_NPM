import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'


function RotatingCube() {
  const ref = useRef()
  const clockRef = useRef(new THREE.Clock())

  useFrame(() => {
      const angle = clockRef.current.getElapsedTime() * 2
      const distance = 2
      const x = Math.sin(angle) * distance
      const z = Math.cos(angle) * distance
      ref.current.position.set(x, 0, z)
      ref.current.rotation.y += 0.005
  })

  return (
    <group>
      <mesh ref={ref}>
        <sphereGeometry args={[0.15, 128, 128]} />
        <meshStandardMaterial color="blue" />
      </mesh>
    </group>
  )
}

export function SpinningCube() {
  return (
    <div className="canvas">
      <Canvas camera={{ position: [0, 0, 6], fov: 55 }}>
        <ambientLight />
        <group rotation-z={0.33}>
          <RotatingCube />
          <mesh>
            <sphereGeometry args={[1, 128, 128]} />
            <meshStandardMaterial color="white" />
          </mesh>
          <group rotation-x={0.07}>
            <mesh rotation-x={1.5} position-y={0.17}>
              <torusGeometry args={[2.1, 0.02, 20, 100, 6.3]} />
              <meshStandardMaterial color="red" />
            </mesh>
            <mesh rotation-x={1.5} position-y={-0.17}>
              <torusGeometry args={[2.1, 0.02, 20, 100, 6.3]} />
              <meshStandardMaterial color="red" />
            </mesh>
          </group>
        </group>
      </Canvas>
    </div>
  )
}