import { useSpring, a } from '@react-spring/three';
import { Canvas } from '@react-three/fiber'
import React, { useEffect, useState } from 'react'


export default function JumpingRectangles({ color="blue" }) {

  const onMobile = window.innerWidth < 930

  const [toggle1, setToggle1] = useState(false)
  const [toggle2, setToggle2] = useState(false)
  const [toggle3, setToggle3] = useState(false)
  const [cycle, setCycle] = useState(false)

  const props1 = useSpring({ position: toggle1 ? [0, 2, 0] : [0, 0.5, 0] })
  const props2 = useSpring({ position: toggle2 ? [1, 2, 0] : [1, 0.25, 0] })
  const props3 = useSpring({ position: toggle3 ? [2, 2, 0] : [2, 0, 0] })

  useEffect(() => {
    const timer1 = setTimeout(() => setToggle1(v => !v), 500)
    const timer2 = setTimeout(() => setToggle2(v => !v), 600)
    const timer3 = setTimeout(() => setToggle3(v => !v), 700)
    const resetTimer = setTimeout(() => {
      // flip the cycle state to trigger rerender and restart animation sequence
      setCycle(c => !c)
    }, 700)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearTimeout(timer3)
      clearTimeout(resetTimer)
    }
  }, [cycle])

    
  return (
    <div className="canvas">
      <Canvas camera={{ position: [5, 5, 5], fov:(onMobile ? 55 : 45) }}>
        <directionalLight position={[-2, 2, 10]} />
        <ambientLight />

        <group position={[-1, -1, 0]}>
        <a.mesh {...props1}>
          <boxGeometry args={[0.6, 2, 0.6]} />
          <meshStandardMaterial color={color} />
        </a.mesh>
        <a.mesh {...props2}>
            <boxGeometry args={[0.6, 2, 0.6]} />
            <meshStandardMaterial color={color} />
        </a.mesh>
        <a.mesh {...props3}>
          <boxGeometry args={[0.6, 2, 0.6]} />
          <meshStandardMaterial color={color} />
        </a.mesh>
        </group>
      </Canvas>
    </div>
  )
}
