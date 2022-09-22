import { Link } from "react-router-dom"

export const Home = () => {
  return (
    <div>
      Pagina Home - <Link to={'/sobre'}>Pagina sobre</Link>
    </div>
  )
}