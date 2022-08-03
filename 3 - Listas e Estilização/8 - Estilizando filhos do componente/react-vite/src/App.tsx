import * as C from './AppStyles'

const App = () => {
  return (
    <C.Container bgColor="#0000FF">
      <C.Button bg="#FF0000" small>Botão Grande</C.Button>
      <C.Button bg="#00FF00" small>Botão Pequeno</C.Button>
      <span>Estilizando filhos do componente</span> <br />
      <a href="" className='link'>Link Qualquer</a>
    </C.Container>
  )
}

export default App