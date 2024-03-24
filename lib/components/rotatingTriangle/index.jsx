import { Canvas, useFrame } from '@react-three/fiber'
import React, { useRef, useState } from 'react'
import '../main.css'
import { animated, useSpring } from '@react-spring/three'


export function SpinTriangle() {

    const posY = -0.8
    const rotZ = -0.54

    function TriangleS({ mass = 10, tension= 900, friction = 70 }) {
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
          <animated.mesh position-y={posY} rotation-y={rotation} rotation-z={rotZ}>
            <torusGeometry args={[1, 0.075, 4, 3, 6.3]} />
            <meshStandardMaterial color="blue" />
          </animated.mesh>
        )
      }

      function TriangleM() {
        const meshRefM = useRef()
        useFrame((state, delta) => {
          if(meshRefM.current) {
            meshRefM.current.rotation.y -= delta * 1.5
          }
        })
        
        return (
          <mesh ref={meshRefM} position-y={posY} rotation-z={rotZ}>
            <torusGeometry args={[2, 0.075, 4, 3, 6.3]} />
            <meshStandardMaterial color="cyan" />
          </mesh>
        )
      }

      function TriangleL() {
        const meshRefL = useRef()
        useFrame((state, delta) => {
          if(meshRefL.current) {
            meshRefL.current.rotation.y += delta
          }
        })
        
        return (
          <mesh ref={meshRefL} position-y={posY} rotation-z={rotZ}>
            <torusGeometry args={[3, 0.075, 4, 3, 6.3]} />
            <meshStandardMaterial color="blue" />
          </mesh>
        )
      }

  return (
    <div className="canvas">
    <Canvas>
        <ambientLight />
        <TriangleL />
        <TriangleM />
        <TriangleS />
    </Canvas>
    </div>
  )
}
