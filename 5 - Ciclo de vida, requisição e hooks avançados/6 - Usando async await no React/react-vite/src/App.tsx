import { useState, useEffect } from 'react'
import { Movie } from './types/Movie'


const App = () => {

  const [movies, setMovies] = useState<Movie[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(()=>{
    handleLoadMovies()
  }, [])

  const handleLoadMovies = async () => {
    setLoading(true)
    let response = await fetch('https://api.b7web.com.br/cinema/')
    let json = await response.json()
    
    setLoading(false)
    setMovies(json)
  }

  return (
    <div>
      {loading && 
        <div>Carregado Filmes...</div>
      }
      {!loading && 
        <>
          <div>Total de filmes: {movies.length}</div>
          <div>
            {movies.map((item, index)=>(
              <div key={index}>
                <img src={item.avatar} width={100}/>
                {item.titulo}
              </div>
            ))}
          </div>
        </>
      }

    </div>
  )
}


export default App

// https://api.b7web.com.br/cinema/