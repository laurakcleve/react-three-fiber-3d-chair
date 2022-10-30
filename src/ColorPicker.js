import { HexColorPicker } from 'react-colorful'
function ColorPicker({ current, chairColors, setChairColors, partNames }) {
  return (
    <div style={{ display: current ? 'block' : 'none' }}>
      <HexColorPicker
        className='picker'
        color={chairColors[current]}
        onChange={(color) => {
          const newColors = { ...chairColors }
          newColors[current] = color
          setChairColors(newColors)
        }}
      />
      <h1>{partNames[current]}</h1>
    </div>
  )
}

export default ColorPicker
