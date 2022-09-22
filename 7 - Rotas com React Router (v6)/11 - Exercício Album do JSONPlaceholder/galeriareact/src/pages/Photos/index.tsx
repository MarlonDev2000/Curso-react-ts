import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { api } from '../../Api'

export const Photos = () => {
  useEffect(()=>{
    loadPhoto()
  }, [])

  const params = useParams()
  const navigate = useNavigate()

  const [photo, setPhoto] = useState<any>({})

  const loadPhoto = async () => {
    let json = await api.getPhoto(params.id || '')
    setPhoto(json)
  }

  const handleBackButton = () => {
    navigate(-1)
  }

  return (
    <div>
      <button onClick={handleBackButton}>Voltar</button>
      <div>{photo.title}</div>
      <div>
        <img src={photo.url} alt="" />
      </div>
    </div>
  ) 
}