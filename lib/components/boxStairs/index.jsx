import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'


export function Stairs({ color="blue" }) {

  const onMobile = window.innerWidth < 930

  const steps = 5
  const decValue = 0.3
  
  const Step = ({ yPosition, delay, step }) => {

    const meshRef = useRef()
    // Decrease xz with decValue for each step
    const xz = Math.max(2 - (decValue * step), 0)
    const [ direction, setDirection ] = useState(1)

    useFrame((state, delta) => {
      if (meshRef.current && state.clock.elapsedTime > delay){
        if (meshRef.current.rotation.y >= Math.PI/2) setDirection(-1)
        else if(meshRef.current.rotation.y <= 0) setDirection(1)
        meshRef.current.rotation.y += (direction * delta)
      }
    })
    
    return(
      <mesh ref={meshRef} position={[0, yPosition, 0]}>
        <boxGeometry args={[xz, 0.3, xz]} />
        <meshStandardMaterial color={color} />
      </mesh>
    )
  }

  return (
    <div className="canvas">
      <Canvas camera={{ position: [5, 5, 5], fov:(onMobile ? 55 : 45) }}>
        <directionalLight intensity={2} position={[-2, 2, 10]} />
        { 
          Array(steps).fill().map((_, index) => 
            <Step 
              yPosition={0.3 * index} 
              delay={0.2*index} 
              step={index} 
              key={index}
            />
          )
        }
      </Canvas>
    </div>
  )
}