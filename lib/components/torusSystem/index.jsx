import React, { useRef } from 'react'
import '../main.css'
import { Canvas, useFrame } from '@react-three/fiber'


export function TorusSystem({ colorLarge="blue", colorMedium="blue", colorSmall="blue", colorSphere="blue" }) {

  const materialMetalness = 2

  const SystemElement = ({ children, speed, axis }) => {
    const meshRef = useRef()
    
    useFrame((state, delta) => {
      if(meshRef.current) {
        meshRef.current.rotation[axis] += delta * speed
      }
    })
    return(
      <mesh ref={meshRef}>
        {children}
      </mesh>
    )
  }

  return (
    <div className='canvas'>
      <Canvas camera={{ position: [-5, 5, 5], fov: 55 }}>
        <directionalLight intensity={2} />
        <ambientLight intensity={0.3} />
        {/* Toruse Large */}
        <SystemElement axis="x" speed={1}>
          <torusGeometry args={[3, 0.2, 5, 100, 6.3]} />
          <meshStandardMaterial color={colorLarge} metalness={materialMetalness} />
        </SystemElement>

        {/* Toruse Medium */}
        <SystemElement axis="y" speed={1.5}>
          <torusGeometry args={[2, 0.2, 5, 100, 4.5]} />
          <meshStandardMaterial color={colorMedium} metalness={materialMetalness} />
        </SystemElement>

        {/* Toruse Small */}
        <SystemElement axis="z" speed={3}>
          <torusGeometry args={[1, 0.2, 5, 100, 3.5]} />
          <meshStandardMaterial color={colorSmall} metalness={materialMetalness} />
        </SystemElement>

        <mesh>
          <sphereGeometry args={[0.5, 32, 32]} />
          <meshPhysicalMaterial color={colorSphere}
            roughness={0.2}
            metalness={1}
            clearcoat={1}
            clearcoatRoughness={0.1} 
          />
        </mesh>
      </Canvas>
    </div>
  )
}
