import { useState } from 'react'


const App = () => {

  const [color, setColor] = useState('#FF0000')
  const [padding, setPadding] = useState(0)


  const handleClick = () => {
    setColor('#00ff00')
    setPadding(20)
  }

  return (
    <div>
      <button
      onClick={handleClick} 
      style={{
          backgroundColor: color, 
          color: '#FFFFFF', 
          fontWeight: 'bold',
          border: '1px solid black',
          padding: padding
        }}>Clique Aqui</button>
    </div>
  )
}

export default App