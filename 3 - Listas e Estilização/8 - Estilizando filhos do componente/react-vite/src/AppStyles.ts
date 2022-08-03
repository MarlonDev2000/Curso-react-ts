import styled from 'styled-components'

type ContainerProps = {
  bgColor: string
}
export const Container = styled.div<ContainerProps>`
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
  
`

type ButtonProps = {
  bg: string
  small?: boolean
}
export const Button = styled.button<ButtonProps>`
  font-size: ${(props) => props.small ? '15px' : '30px'};
  background-color: ${props => props.bg};
`