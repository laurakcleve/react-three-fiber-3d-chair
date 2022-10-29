import { Suspense } from 'react'
import { Chair } from './Chair'
import { Armchair } from './Armchair'
import { Canvas } from '@react-three/fiber'
import { ContactShadows, OrbitControls } from '@react-three/drei'

function App() {
  return (
    <>
      <Canvas camera={{ fov: 70, position: [3, 1.5, 4] }}>
        <ambientLight intensity={0.5} />
        <spotLight
          intensity={0.5}
          position={[10, 10, 10]}
          angle={0.15}
          penumbra={1}
        ></spotLight>
        <Suspense fallback='null'>
          <Chair />
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

      <Canvas camera={{ fov: 70, position: [3, 2, 4] }}>
        <ambientLight intensity={0.5} />
        <spotLight
          intensity={0.5}
          position={[10, 10, 10]}
          angle={0.15}
          penumbra={1}
        ></spotLight>
        <Suspense fallback='null'>
          <Armchair />
          <ContactShadows
            position={[0, -0.92, 0]}
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
