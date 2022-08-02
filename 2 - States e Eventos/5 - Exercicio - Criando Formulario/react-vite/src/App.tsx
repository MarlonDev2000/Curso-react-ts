import React, { useState } from 'react'

const App = () => {

  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const [age, setAge] = useState('')

  const handleInputName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }
  const handleInputLastName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value)
  }
  const handleInputAge = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAge(e.target.value)
  }

  return (
    <div>
      <div>
        Nome:
        <input type="text" value={name} onChange={handleInputName}/>
      </div>

      <div>
        Sobrenome:
        <input type="text" value={lastName} onChange={handleInputLastName}/>
      </div>

      <div>
        Idade:
        <input type="text" value={age} onChange={handleInputAge}/>
      </div>

      <hr/>

      Olá {name} {lastName}, tudo bem?<br/>
      Você tem {age} anos.
    </div>
  );
}

export default App;