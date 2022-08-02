import { useState } from 'react'

const App = () => {

  const [numero, setNumero] = useState(0)
  const [nome, setNome] = useState('Marlon')

  const handleButtonClick = () => {
    setNome('Heitor')
    setNumero(numero + 1)
  }

  return (
    <div>
      Meu nome é: {nome} <br />
      O numero é: {numero} <br />
      <button onClick={handleButtonClick}>Clique Aqui</button>
    </div>
  )
}

export default App