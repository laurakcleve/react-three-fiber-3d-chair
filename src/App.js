import { Suspense } from 'react'
import { Chair } from './Chair'
import { Canvas } from '@react-three/fiber'
import { ContactShadows, Environment, OrbitControls } from '@react-three/drei'

function App() {
  return (
    <>
      <Canvas camera={{ fov: 70, position: [3, 1.5, 4] }}>
        <spotLight intensity={1} position={[20, 50, 50]} angle={0.5}></spotLight>
        <Suspense fallback='null'>
          <Chair />
          <Environment preset='city' />
          <ContactShadows
            position={[0, -1.8, 0]}
            opacity={0.5}
            scale={100}
            blur={0.4}
            color='#000000'
          />
        </Suspense>
        <OrbitControls />
      </Canvas>
    </>
  )
}

export default App
