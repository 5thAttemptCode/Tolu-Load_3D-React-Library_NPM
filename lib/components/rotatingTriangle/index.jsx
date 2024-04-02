import React, { useState } from 'react'
import '../main.css'
import { animated, useSpring } from '@react-spring/three'
import { Canvas } from '@react-three/fiber'


export function SpinTriangle({ colorLeftBox="blue", colorRightBox="cyan" }) {

  const Triangle = ({ mass = 10, tension= 900, friction = 70, rotateDirection = 1, posXYZ=[0, 0, 0], children }) => {
    const [step, setStep] = useState(0);
    const steps = [rotateDirection * -Math.PI / 2, rotateDirection * -Math.PI, rotateDirection * -1.5 * Math.PI, rotateDirection * -2 * Math.PI];
  
    const { rotation } = useSpring({
      reset: true,
      from: { rotation: step === 0 ? 0 : steps[step - 1] }, 
      to: { rotation: steps[step] },
      onRest: () => setStep((step + 1) % steps.length),
      config: { mass, tension, friction },
    });

    return (
      <animated.mesh rotation-x={rotation} position={posXYZ}>
        {children}
      </animated.mesh>
    )
};

  return (
    <div className="canvas">
      <Canvas camera={{ position: [-8, 2, 10], fov: 30 }}>
        <ambientLight intensity={0.75} />
        <directionalLight intensity={2.5}/>
        <group position={[0.75, 0, 0]}>
          <Triangle posXYZ={[-1.5, 0, 0]} rotateDirection={1}>
            <boxGeometry args={[3, 1, 1]} />
            <meshStandardMaterial color={colorLeftBox} />
          </Triangle>
          <Triangle posXYZ={[1.5, 0, 0]} rotateDirection={-1}>
            <boxGeometry args={[3, 1, 1]} />
            <meshStandardMaterial color={colorRightBox} />
          </Triangle>
        </group>
      </Canvas>
    </div>
  )
}