import { useState } from "react"

const App = () => {

  const [show, setShow] = useState(false)

  const handleShow = () => {
    // Toggle de uma linha só
    setShow(!show)

  }

  return (
    <div>
      <button onClick={handleShow}>{show ? 'Ocultar' : 'Mostrar'}</button>

      {show && 
        <div>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus ipsum
        </div>
      }
    </div>
  )
}

export default App