import { useState, useEffect, ChangeEvent } from 'react'
import { Post } from './types/Post'


const App = () => {

  const [loading, setLoading] = useState(false)
  const [posts, setPosts] = useState<Post[]>([])

  const [addTitleText, setAddTitleText] = useState('')
  const [addBodyText, setAddBodyText] = useState('')
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

  const handleAddTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setAddTitleText(e.target.value)
  }
  const handleAddBody = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setAddBodyText(e.target.value)
  }
  const handleAddPost = async () => {
    if(addBodyText && addTitleText) {
      try{
        let response = await fetch('https://jsonplaceholder.typicode.com/posts', {
          method: 'POST',
          body: JSON.stringify({
            title: addTitleText,
            body: addBodyText,
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
    } else {
      alert('Preencha todos os campos!')
    }
  }


  return (
    <div>
      {loading && 
        <div>Carregando...</div>
      }
      <fieldset>
        <legend>Adicionar Novo Post</legend>

        <input 
          type="text" 
          placeholder='Titulo do post' 
          value={addTitleText}
          onChange={handleAddTitle}
          />
        <textarea 
          cols={25} 
          rows={6} 
          style={{display: 'block'}}
          onChange={handleAddBody}
          value={addBodyText}
          />
        <button onClick={handleAddPost}>Adicionar</button>
        {sendPost && 
          <div>Post enviado com sucesso!</div>
        }
      </fieldset>

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