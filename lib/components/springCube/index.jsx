import React, { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { animated, useSpring } from '@react-spring/three'


const SpringMesh = ({ color={color}, mass = 10, tension= 900, friction = 70 }) => {

  const [step, setStep] = useState(0)
  const steps = [-Math.PI / 2, -Math.PI, -1.5 * Math.PI, -2 * Math.PI]

  const { rotation } = useSpring({
    reset: true,
    from: { rotation: step === 0 ? 0 : steps[step - 1] }, 
    to: { rotation: steps[step] },
    onRest: () => setStep((step + 1) % steps.length),
    config: { mass, tension, friction },
  })

  return (
    <animated.mesh rotation-y={rotation}>
      <icosahedronGeometry args={[1.5, 0]} />
      <meshPhysicalMaterial 
        metalness={0}
        color={color} 
        roughness={0.2}
        transmission={1}
        thickness={1}
      />
    </animated.mesh>
  )
}

export function FronstedIco({ color="blue" }) {
    
  return (
    <div className="canvas">
      <Canvas camera={{ position: [5, 5, 5], fov: 55 }}>
        <directionalLight position={[0, 5, 10]} />
        <SpringMesh color={color} />
        <mesh>
          <icosahedronGeometry args={[0.5, 0]} />
          <meshStandardMaterial />
        </mesh>
      </Canvas>
    </div>
  )
}
