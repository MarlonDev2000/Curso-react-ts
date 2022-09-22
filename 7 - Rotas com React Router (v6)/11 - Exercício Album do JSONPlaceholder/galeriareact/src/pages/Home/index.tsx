import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { api } from '../../Api'
import { Album } from '../../types/Album'
import './styles.css'

export const Home = () => {

  useEffect(()=>{
    loadAlbums()
  },[])

  const [albums, setAlbums] = useState<Album[]>([])

  const loadAlbums = async () => {
    let json = await api.getAllAlbums()
    setAlbums(json)
  }

  return (
    <div>
      {albums.map((item, index)=>(
        <div className='box' key={index}>
          <Link to={`/album/${item.id}`}  className='links'>
            <span>{item.title}</span>
          </Link>
        </div>
      ))}
    </div>
  )
}