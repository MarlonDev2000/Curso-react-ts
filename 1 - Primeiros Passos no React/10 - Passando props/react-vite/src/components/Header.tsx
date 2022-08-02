type Props = {
  title?: string
}

export const Header = ({ title }: Props) => {
  return (
    <div>
      <h1>{title}</h1>
      <hr />
    </div>
  )
}