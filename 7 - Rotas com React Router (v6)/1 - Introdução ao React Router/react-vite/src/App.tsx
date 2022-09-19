import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { About } from './pages/About'

const App = () => {
  return (
    <div>
      <header>
        <h1>Titulo do site</h1>
      </header>
      <hr />
      <div>

        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/sobre' element={<About />}/>
        </Routes>

      </div>
      <hr />
      <footer>
        Todos os direitos reservados
      </footer>
    </div>
  )
}

export default App
