import { useState, Suspense, useEffect } from 'react'
import { Chair } from './Chair'
import ColorPicker from './ColorPicker'
import { Canvas } from '@react-three/fiber'
import { ContactShadows, Environment, OrbitControls } from '@react-three/drei'

function App() {
  const initialChairColors = {
    backAndSides: '#ffffff',
    seat: '#ffffff',
    legs: '#ffffff',
  }

  const [hoveredPart, setHoveredPart] = useState(null)
  const [current, setCurrent] = useState(null)
  const [chairColors, setChairColors] = useState(initialChairColors)

  const partNames = {
    backAndSides: 'Back and sides',
    seat: 'Seat',
    legs: 'Legs',
  }

  useEffect(() => {
    const cursor = `<svg width="64" height="64" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path fill="rgba(255, 255, 255, 0.5)" d="M29.5 54C43.031 54 54 43.031 54 29.5S43.031 5 29.5 5 5 15.969 5 29.5 15.969 54 29.5 54z" stroke="#000"/><g filter="url(#filter0_d)"><path d="M29.5 47C39.165 47 47 39.165 47 29.5S39.165 12 29.5 12 12 19.835 12 29.5 19.835 47 29.5 47z" fill="${chairColors[hoveredPart]}"/></g><path d="M2 2l11 2.947L4.947 13 2 2z" fill="#000"/><text fill="#000" style="white-space:pre" font-family="Inter var, sans-serif" font-size="10" letter-spacing="-.01em"><tspan x="35" y="63">${partNames[hoveredPart]}</tspan></text></g><defs><clipPath id="clip0"><path fill="#fff" d="M0 0h64v64H0z"/></clipPath><filter id="filter0_d" x="6" y="8" width="47" height="47" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="2"/><feGaussianBlur stdDeviation="3"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/><feBlend in2="BackgroundImageFix" result="effect1_dropShadow"/><feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"/></filter></defs></svg>`
    const auto = `<svg width="64" height="64" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="rgba(255, 255, 255, 0.5)" d="M29.5 54C43.031 54 54 43.031 54 29.5S43.031 5 29.5 5 5 15.969 5 29.5 15.969 54 29.5 54z" stroke="#000"/><path d="M2 2l11 2.947L4.947 13 2 2z" fill="#000"/></svg>`
    if (hoveredPart) {
      document.body.style.cursor = `url('data:image/svg+xml;base64,${btoa(
        cursor
      )}'), auto`
      return () =>
        (document.body.style.cursor = `url('data:image/svg+xml;base64,${btoa(
          auto
        )}'), auto`)
    }
  })

  return (
    <div className='container'>
      <div className='image-container'>
        <Canvas camera={{ fov: 70, position: [3, 1.5, 4] }}>
          <spotLight intensity={1} position={[20, 50, 50]} angle={0.5} />
          <Suspense fallback='null'>
            <Chair
              colors={chairColors}
              setColors={setChairColors}
              hoveredPart={hoveredPart}
              setHoveredPart={setHoveredPart}
              current={current}
              setCurrent={setCurrent}
            />
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
        <ColorPicker
          current={current}
          chairColors={chairColors}
          setChairColors={setChairColors}
          partNames={partNames}
        />
      </div>

      <div className='details'>
        <h1>Dining Chair</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consectetur
          nostrum quae ipsam debitis enim vero! Laudantium corrupti maiores maxime
          quibusdam provident totam, suscipit voluptate.
        </p>
        <div className='buy'>
          <span className='price'>$750</span>
          <button>Buy Now</button>
        </div>
      </div>
    </div>
  )
}

export default App
