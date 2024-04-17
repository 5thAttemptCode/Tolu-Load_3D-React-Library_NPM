import React, { useRef } from 'react'
import '../main.css'
import { Canvas, useFrame } from '@react-three/fiber'


export function TorusSystem({ colorLarge="blue", colorMedium="blue", colorSmall="blue", colorSphere="blue" }) {

  const onMobile = window.innerWidth < 930

  const materialMetalness = 2

  const SystemElement = ({ children, speed, axis, operation }) => {
    const meshRef = useRef()
    
    useFrame((state, delta) => {
      if(meshRef.current) {
        meshRef.current.rotation[axis] = operation(meshRef.current.rotation[axis], delta * speed)
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
      <Canvas camera={{ position: [-5, 5, 5], fov:(onMobile ? 95 : 55) }}>
        <directionalLight intensity={2} />
        <ambientLight intensity={0.3} />
        {/* Toruse Large */}
        <SystemElement axis="x" speed={1} operation={(a, b) => a + b}>
          <torusGeometry args={[3, 0.2, 20, 100, 6.3]} />
          <meshStandardMaterial color={colorLarge} metalness={materialMetalness} />
        </SystemElement>

        {/* Toruse Medium */}
        <SystemElement axis="y" speed={1.5} operation={(a, b) => a + b}>
          <torusGeometry args={[2, 0.2, 20, 100, 6.3]} />
          <meshStandardMaterial color={colorMedium} metalness={materialMetalness} />
        </SystemElement>

        {/* Toruse Small */}
        <SystemElement axis="x" speed={3.5} operation={(a, b) => a - b}>
          <torusGeometry args={[1, 0.2, 20, 100, 6.3]} />
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
