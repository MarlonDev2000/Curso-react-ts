import { useEffect, useState } from "react"


const App = () => {
  const [name, setName] = useState('Marlon')

  const handleClick = () => {
    setName('Heitor')
  }

  useEffect(()=>{
    alert('Executou')
  }, [name])


  return (
    <div>
      Nome: {name}
      <button onClick={handleClick}>Clique Aqui</button>
    </div>
  )
}


export default App