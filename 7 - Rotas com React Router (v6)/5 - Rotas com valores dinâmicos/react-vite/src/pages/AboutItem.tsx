import { useParams } from 'react-router-dom'

export const AboutItem = () => {

  const params = useParams()

  return (
    <div>
      Pagina Sobre: {params.slug?.toUpperCase()} ({params.slug?.length} letras)
    </div>
  )
}