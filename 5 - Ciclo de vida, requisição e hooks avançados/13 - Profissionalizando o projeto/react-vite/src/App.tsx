import { useState, useEffect } from 'react'
import { Post } from './types/Post'

import { PostForm } from './components/PostForm'
import { PostItem } from './components/PostItem'


const App = () => {

  const [loading, setLoading] = useState(false)
  const [posts, setPosts] = useState<Post[]>([])
  const [sendPost, setSendPost] = useState(false)

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

  const handleAddPost = async (title: string, body: string) => {
    try{
      let response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
          title: title,
          body: body,
          userId: 1
        }),
        headers: {
          'Content-type': 'application/json'
        }
      })
      let json = await response.json()
      console.log(json)
      setSendPost(true)
    }catch(e){
      alert('Ops, deu erro! tente novamente mais tarde!')
    }
  }

  return (
    <div>
      {loading && 
        <div>Carregando...</div>
      }

      <PostForm onAdd={handleAddPost} sendPost={sendPost}/>

      {!loading && posts.length > 0 &&
        <>
          <div>Total de Posts: {posts.length}</div>
          <div>
            {posts.map((item, index)=>(
              <PostItem data={item} key={index}/>
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