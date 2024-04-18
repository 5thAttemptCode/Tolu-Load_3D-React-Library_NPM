import React from 'react'
import '../main.css'
import { Canvas } from '@react-three/fiber'
import { useSpring, animated } from '@react-spring/three'


const Ico = ({ color }) => {
  const { scale } = useSpring({
    from: { scale: [1, 1, 1] },
    to: async next => {
      while (1) {
        await next({ scale: [2, 2, 2] });
        await next({ scale: [1, 1, 1] });
      }
    },
    config: { duration: 600 }
  })
  
    return (
      <>
      <animated.mesh scale={scale}>
        <icosahedronGeometry args={[1.5, 1]}/>
        <meshBasicMaterial wireframe color={color} />
      </animated.mesh>
      </>
    )
  }

export function ScalingIco({ color="blue" }) {

  const onMobile = window.innerWidth < 930

  return (
    <div className="canvas">
      <Canvas camera={{ position: [5, 5, 5], fov:( onMobile ? 65 : 55) }}>
        <directionalLight position={[-2, 2, 10]} />
        <ambientLight />
        <Ico color={color} />
      </Canvas>
    </div>
  )
}
