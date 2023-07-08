import Input from './components/Input'
import Button from './components/Button'
import { Container, Content } from './components/style'
import { useState } from 'react'

const App = () => {
  const [operation, setOperation] = useState('')
  const [operator, setOperator] = useState('')
  const [number, setNumber] = useState('0')

  const handleOnClear = () => setOperation('')

  const handleAddNumber = (num) => {
    setNumber((prev) => {
      return `${prev === '0' ? '' : prev}${num}`
    })
  }

  const handleOperation = (currNum) => console.log(currNum)

  const handleAddOperation = () => {}

  return (
    <Container>
      <Content>
        <Input column={4} value={operation} />
        <Button column={3} label="AC" onClick={() => handleOnClear()} />
        <Button label="/" onClick={() => setOperator()} />

        <Button label="7" onClick={() => handleAddNumber('7')} />
        <Button label="8" onClick={() => handleAddNumber('8')} />
        <Button label="9" onClick={() => handleAddNumber('9')} />
        <Button label="*" onClick={() => setOperator('*')} />

        <Button label="4" onClick={() => handleAddNumber('4')} />
        <Button label="5" onClick={() => handleAddNumber('5')} />
        <Button label="6" onClick={() => handleAddNumber('6')} />
        <Button label="-" onClick={() => setOperator('+')} />

        <Button label="1" onClick={() => handleAddNumber('1')} />
        <Button label="2" onClick={() => handleAddNumber('2')} />
        <Button label="3" onClick={() => handleAddNumber('3')} />
        <Button label="+" onClick={() => setOperator('+')} />

        <Button column={2} label="0" onClick={() => handleOnClear()} />
        <Button label="." onClick={() => handleOnClear()} />
        <Button label="=" onClick={() => handleOperation(number)} />
      </Content>
    </Container>
  )
}

export default App
