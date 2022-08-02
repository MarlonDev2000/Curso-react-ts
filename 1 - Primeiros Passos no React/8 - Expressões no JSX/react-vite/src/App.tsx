const App = () => {
  let numero1: number = 10
  let numero2: number = 3

  let nome: string = 'marlon'
  let sobrenome: string = 'braga'

  let link: string = 'https://google.com'

  function somar(numero1: number, numero2: number): number {
    return numero1 + numero2
  }

  return (
    <div>
      Soma: {somar(numero1, numero2) + numero2} <br />
      Meu nome é: {`${nome.toUpperCase()} ${sobrenome.toUpperCase()}`} <br />
      Link para o site: <br />
      <a href={link}>Clique aqui para acessar o Google</a>
    </div>
  )
}

export default App