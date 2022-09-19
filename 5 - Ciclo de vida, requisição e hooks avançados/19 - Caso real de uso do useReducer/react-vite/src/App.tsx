import { usePeopleList } from './hooks/peopleList'
import { ChangeEvent, useState } from 'react'

const App = () => {
  const [list, listDispatch] = usePeopleList()
  const [nameInput, setNameInput] = useState('')


  const handleAddButton = () => {
    if(nameInput) {
      listDispatch({
        type: 'ADD',
        payload: {
          name: nameInput
        }
      })
      setNameInput('')
    }
  }

  const handleRemoveButton = (id: string) => {
    listDispatch({
      type: 'REMOVE',
      payload: {
        id: id
      }
    })
  }

  const handleOrderButton = () => {
    listDispatch({
      type: 'ORDER'
    })
  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNameInput(e.target.value)
  }


  return (
    <div>

      <input type="text" value={nameInput} onChange={handleInputChange}/>
      <button onClick={handleAddButton}>Adicionar</button>
      <button onClick={handleOrderButton}>Ordenar</button>

      <hr />
      

      Lista de pessoas:
      <ul>
      {list.map((item, index)=>(
        <li key={index}>
          {item.name} - {item.id}
          <button onClick={() => handleRemoveButton(item.id)}>[ Deletar ]</button>
        </li>
      ))}
      </ul>
    </div>
  )
}

export default App