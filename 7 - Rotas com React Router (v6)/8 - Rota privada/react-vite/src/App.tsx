import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { AboutItem } from './pages/AboutItem'
import { NotFound } from './pages/NotFound'
import { RequireAuth } from './RequireAuth'

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
          <Route path='/sobre' element={<RequireAuth><About /></RequireAuth>}/>
          <Route path='/sobre/:slug' element={<AboutItem />}/>
          <Route path='*' element={<NotFound />}/>
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
