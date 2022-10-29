import { Suspense } from 'react'
import './App.css'
import { Chair } from './Chair'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Canvas camera={{ fov: 70 }}>
          <ambientLight intensity={0.5}></ambientLight>
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
      </header>
    </div>
  )
}

export default App
