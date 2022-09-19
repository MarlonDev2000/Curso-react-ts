import { useState, useEffect } from 'react'
import { Post } from './types/Post'
import { api } from './api'

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
      let json = await api.getAllPosts()
      setLoading(false)
      setPosts(json)
    }catch(error) {
      setPosts([])
      setLoading(false)
    }
  }

  const handleAddPost = async (title: string, body: string) => {
    try{
      let json = await api.addNewPost(title, body, 1)
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