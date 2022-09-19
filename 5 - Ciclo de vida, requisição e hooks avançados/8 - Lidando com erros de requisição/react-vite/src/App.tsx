import { useState, useEffect } from 'react'
import { Movie } from './types/Movie'


const App = () => {

  const [movies, setMovies] = useState<Movie[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(()=>{
    handleLoadMovies()
  }, [])

  const handleLoadMovies = async () => {
    try{
      setLoading(true)
      let response = await fetch('https://api.b7web.com.br/cinema')
      let json = await response.json()
      
      setLoading(false)
      setMovies(json)
    }catch(error) {
      setLoading(false)
      setMovies([])
    }
  }

  return (
    <div>
      {loading && 
        <div>Carregado Filmes...</div>
      }

      {!loading && movies.length > 0 &&
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
      
      {!loading && movies.length === 0 &&
        <div>Ops, deu erro! tente novamente mais tarde</div>
      } 

    </div>
  )
}


export default App

// https://api.b7web.com.br/cinema/