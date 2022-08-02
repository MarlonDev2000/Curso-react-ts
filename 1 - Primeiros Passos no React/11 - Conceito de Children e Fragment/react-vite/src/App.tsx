import { Header } from './components/Header'
import { Photo } from './components/Photo'

const App = () => {
  return (
    <div>
      <Header title='Titulo usando PROPS' />
      Hello World!
      <Photo legend="Google">
        <img src="http://www.google.com.br/google.jpg" alt="" />
      </Photo>
    </div>
  )
}

export default App