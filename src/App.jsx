import React from 'react'
import { SpinningCube } from '../lib/components/spinningCube'

export default function App() {
  return (
    <SpinningCube args={[2, 2, 2]} color="blue" />
  )
}
