import { InputContainer } from './style'
const Input = ({ column, value }) => {
  return (
    <InputContainer column={column}>
      <input disabled value={value} />
    </InputContainer>
  )
}

export default Input
