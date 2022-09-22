import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { AboutMarlon } from './pages/AboutMarlon'
import { AboutHeitor } from './pages/AboutHeitor'

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
          <Route path='/sobre/marlon' element={<AboutMarlon />}/>
          <Route path='/sobre/heitor' element={<AboutHeitor />}/>
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
