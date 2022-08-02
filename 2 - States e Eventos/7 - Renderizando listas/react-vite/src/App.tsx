import { Pessoa } from './components/Pessoa'

const App = () => {

  let list = [
    {name: 'Marlon', age: 90},
    {name: 'Heitor', age: 3},
    {name: 'Higino', age: 33},
    {name: 'Maria', age: 55}
  ]


  return (
    <div>
      <h2>Lista de presença</h2>
      <ul>
        {list.map((item, index) => (
          <Pessoa data={item} key={index}/>
        ))}
      </ul>
    </div>
  )
}

export default App