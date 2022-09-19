import { useState, ChangeEvent } from 'react'

type Props = {
  onAdd: (title: string, body: string) => void,
  sendPost: boolean
}

export const PostForm = ({ onAdd, sendPost }: Props) => {

  const [addTitleText, setAddTitleText] = useState('')
  const [addBodyText, setAddBodyText] = useState('')


  const handleAddTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setAddTitleText(e.target.value)
  }

  const handleAddBody = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setAddBodyText(e.target.value)
  }

  const handleAddPost = async () => {
    if(addTitleText && addBodyText) {
      onAdd(addBodyText, addTitleText)
    } else {
      alert('Preencha todos os campos!')
    }
  }

  return (
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
  )
}