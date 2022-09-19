import { useState, useEffect } from 'react'
import { Post } from './types/Post'


const App = () => {

  const [loading, setLoading] = useState(false)
  const [posts, setPosts] = useState<Post[]>([])

  useEffect(()=>{
    loadPosts()
  }, [])


  const loadPosts = async () => {
    try {
      setLoading(true)
      let response = await fetch('https://jsonplaceholder.typicode.com/posts')
      let json = await response.json()
      setLoading(false)
      setPosts(json)
    }catch(error) {
      setPosts([])
      setLoading(false)
    }
  }

  return (
    <div>
      {loading && 
        <div>Carregando...</div>
      }

      {!loading && posts.length > 0 &&
        <>
          <div>Total de Posts: {posts.length}</div>
          <div>
            {posts.map((item, index)=>(
              <div key={index}>
                <h3>Usuario: {item.userId}</h3>
                <h2>{item.title} #ID {item.id}</h2>
                <span>{item.body}</span>
              </div>
            ))}
          </div>
        </>
      }

      {!loading && posts.length === 0 &&
        <div>Não há posts para serem exibidos</div>
      }
    </div>
  )
}

export default App