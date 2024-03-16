import React, { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { animated, useSpring } from '@react-spring/three'


const SpringMesh = ({ size = 1, color="blue", mass = 10, tension= 900, friction = 70 }) => {
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
      <boxGeometry args={[size, size, size]} />
      <meshStandardMaterial color={color} />
    </animated.mesh>
  )
}

export function SpringCube({ size = 1, color="blue" }) {
    
  return (
    <Canvas camera={{ position: [5, 5, 5], fov: 25 }}>
      <directionalLight position={[-2, 2, 10]} />
      <ambientLight />
      <SpringMesh size={size} color={color} />
    </Canvas>
  )
}
