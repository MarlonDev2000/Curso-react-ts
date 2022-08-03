const App = () => {
  return (
    <div className="bg-blue-300 p-5">
      <input 
      className="border outline-none border-transparent bg-white p-3 rounded focus:ring-2 focus:ring-blue-500"
      type="text" 
      placeholder="Digite alguma coisa"
      />

      <button 
      className="ml-2 p-3 bg-blue-400 rounded text-white font-bold md:hover:bg-blue-500 ease-in-out duration-200"
      >Clique aqui</button>
    </div>
  )
}

export default App