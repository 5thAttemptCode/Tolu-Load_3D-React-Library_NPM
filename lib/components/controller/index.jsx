import React, { useRef } from 'react'
import '../main.css'
import { Canvas, useFrame } from '@react-three/fiber'


const RotatingMesh = ({ children, position, rotation, axis }) => {
  const torusRef = useRef()
  
  useFrame(() => {
    torusRef.current.rotation[axis] += 0.05
  })
    
  return (
    <mesh position={position} rotation={rotation} ref={torusRef}>
      { children }
    </mesh>
  )
}


export function Controller({ colorCross="#3f8be8", colorCircle="#9c2f22", colorCube="#bc6ca5", colorTriangle="#4ca46d"}) {

  const onMobile = window.innerWidth < 930

  return (
    <div className="canvas">
      <Canvas camera={{ position: [0, 0.2, 3.1], fov:(onMobile ? 75 : 60) }}>
        <ambientLight />
        {/* Cross */}
        <RotatingMesh axis="y" position={[0, -1.2, 0]} rotation={[0, 1.6, 0]}>
          <mesh rotation-x={-0.75}>
            <boxGeometry args={[0.1, 1, 0.1]} />
            <meshBasicMaterial color={colorCross} />
          </mesh>
          <mesh rotation-x={0.75} >
            <boxGeometry args={[0.1, 1, 0.1]} />
            <meshBasicMaterial color={colorCross} />
          </mesh>
        </RotatingMesh>

        {/* Circle */}
        <RotatingMesh axis="x" position={[1, 0, 0]}>
          <torusGeometry args={[0.33, 0.06, 3, 100, 6.3]} />
          <meshBasicMaterial color={colorCircle} />
        </RotatingMesh>

        {/* Cube */}
        <RotatingMesh axis="z" position={[-1, 0, 0]} rotation={[0, 0, 0.78]}>
          <torusGeometry args={[0.4, 0.06, 10, 4, 6.3]} />
          <meshBasicMaterial color={colorCube} />
        </RotatingMesh>

        {/* Triangle */}
        <RotatingMesh axis="y" position={[0, 1, 0]} rotation={[0, 0, -0.53]}> 
          <torusGeometry args={[0.4, 0.1, 3, 3, 6.3]} />
          <meshStandardMaterial color={colorTriangle} />
        </RotatingMesh>

      </Canvas>
    </div>
  )
}