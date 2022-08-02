import { Button } from './components/Button'

const App = () => {

  let textoDoBotao = 'Clicar no botão'

  const buttonEventAction = (text: string) => {
    alert(`Frase do App: ${text}`)
  }

  return (
    <div>
      <Button text={textoDoBotao} clickFn={buttonEventAction}/>
    </div>
  )
}

export default App