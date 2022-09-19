import { useState, useEffect } from 'react'
import { Movie } from './types/Movie'


const App = () => {

  const [movies, setMovies] = useState<Movie[]>([])

  useEffect(()=>{
    handleLoadMovies()
  }, [])

  const handleLoadMovies = () => {
    fetch('https://api.b7web.com.br/cinema/')
      .then((response)=>{
        return response.json()
      })
      .then((json)=>{
        setMovies(json)
      })
  }

  return (
    <div>
      <button onClick={handleLoadMovies}>Carregar Filmes</button>

      Total de filmes: {movies.length}
      <div>
        {movies.map((item, index)=>(
          <div key={index}>
            <img src={item.avatar} width={100}/>
            {item.titulo}
          </div>
        ))}
      </div>
    </div>
  )
}


export default App

// https://api.b7web.com.br/cinema/