import { useReducer } from 'react'

type reducerState = {
  count: number
}

type reducerAction = {
  type: string
}

const initialState: reducerState = {
  count: 0
}

const reducer = (state: reducerState, action: reducerAction) => {
  switch(action.type) {
    case 'ADD':
      return {...state, count: state.count++}
    break

    case 'DEL':
      if(state.count > 0) {
        return {...state, count: state.count--}
      }
    break

    case 'RESET':
      return initialState
    break
  }

  return state
}

const App = () => {

  const [state, dispatch] = useReducer(reducer, initialState)

  const add = () => {
    dispatch({type: 'ADD'})
  }

  const del = () => {
    dispatch({type: 'DEL'})
  }

  const reset = () => {
    dispatch({type: 'RESET'})
  }

  return (
    <div>
      Contagem: {state.count}
      <hr />
      <button onClick={add}>Adicionar</button>
      <button onClick={del}>Remover</button>
      <button onClick={reset}>Resetar</button>

    </div>
  )
}

export default App