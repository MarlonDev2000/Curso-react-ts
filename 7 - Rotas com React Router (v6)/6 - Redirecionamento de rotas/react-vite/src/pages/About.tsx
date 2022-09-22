import { Link } from 'react-router-dom'

export const About = () => {
  return (
    <div>
      Pagina Sobre:
      <ul>
        <li><Link to={'/sobre/marlon'}>Marlon</Link></li>
        <li><Link to={'/sobre/heitor'}>Heitor</Link></li>
      </ul>
    </div>
  )
}