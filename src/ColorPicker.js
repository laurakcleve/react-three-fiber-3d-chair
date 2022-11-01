import { HexColorPicker } from 'react-colorful'
function ColorPicker({ current, chairColors, setChairColors, partNames }) {
  return (
    <div className='color-picker' style={{ display: current ? 'block' : 'none' }}>
      <div className='picker-label'>{partNames[current]}</div>
      <HexColorPicker
        className='picker'
        color={chairColors[current]}
        onChange={(color) => {
          const newColors = { ...chairColors }
          newColors[current] = color
          setChairColors(newColors)
        }}
      />
    </div>
  )
}

export default ColorPicker
