const App = () => {

  const handleButtonClick = () => {
    alert("Clicou!")
  }

  return (
    <div>
      <button onClick={handleButtonClick}>Clique Aqui</button>
    </div>
  )
}

export default App