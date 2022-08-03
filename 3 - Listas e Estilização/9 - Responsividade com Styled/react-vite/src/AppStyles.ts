import styled from 'styled-components'

type ContainerProps = {
  bgColor: string
}

export const Container = styled.div<ContainerProps>`
  max-width: 600px;
  margin: auto;
  background-color: ${props => props.bgColor};
  color: white;
  padding: 20px;
  border-radius: 6px;

  span {
    font-weight: bold;
    color: white;
    margin-left: 3px;
  }

  .link {
    color: white;
    font-weight: bold;
    font-size: 30px;

    &:hover {
      color: #00FF00;
    }
  }

  @media (max-width: 500px) {
    background-color: #00FF00;
    display: flex;
    flex-direction: column;
  }
  
`

type ButtonProps = {
  bg: string
  small?: boolean
}

export const Button = styled.button<ButtonProps>`
  font-size: ${(props) => props.small ? '15px' : '30px'};
  background-color: ${props => props.bg};
`