import { Post } from '../../types/Post'

type Props = {
  data: Post
  key: number
}

export const PostItem = ({ data }: Props) => {
  return (
    <div>
      <h3>Usuario: {data.userId}</h3>
      <h2>{data.title} #ID {data.id}</h2>
      <span>{data.body}</span>
    </div>
  )
}