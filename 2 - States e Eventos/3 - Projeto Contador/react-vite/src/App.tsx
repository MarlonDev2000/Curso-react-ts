import { useState } from 'react'

const App = () => {

  const [numero, setNumero] = useState(0)

  const handleMinus = () => {
    if(numero !== 0) {
      setNumero(numero - 1)
    } else {
      setNumero(numero)
    }
  }

  const handleMore = () => {
    setNumero(numero + 1)
  }

  return (
    <div>
      <button onClick={handleMinus}>-</button>
      {numero}
      <button onClick={handleMore}>+</button>
    </div>
  )
}

export default App