import { ButtonContainer } from './style'

const Button = ({ column, label, onClick }) => {
  return (
    <ButtonContainer column={column} onClick={onClick}>
      {label}
    </ButtonContainer>
  )
}

export default Button
