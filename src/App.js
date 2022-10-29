import { Suspense } from 'react'
import { Chair } from './Chair'
import { Armchair } from './Armchair'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

function App() {
  return (
    <>
      <Canvas camera={{ fov: 70, position: [4, 1.5, 3.5] }}>
        <ambientLight intensity={0.5} />
        <spotLight
          intensity={0.5}
          position={[10, 10, 10]}
          angle={0.15}
          penumbra={1}
        ></spotLight>
        <Suspense fallback='null'>
          <Chair />
        </Suspense>
        <OrbitControls />
      </Canvas>

      <Canvas camera={{ fov: 70, position: [4, 1.5, 3.5] }}>
        <ambientLight intensity={0.5} />
        <spotLight
          intensity={0.5}
          position={[10, 10, 10]}
          angle={0.15}
          penumbra={1}
        ></spotLight>
        <Suspense fallback='null'>
          <Armchair />
        </Suspense>
        <OrbitControls />
      </Canvas>
    </>
  )
}

export default App
