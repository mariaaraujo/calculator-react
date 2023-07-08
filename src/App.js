import Input from './components/Input'
import Button from './components/Button'
import { Container, Content } from './components/style'
import { useState } from 'react'

const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0')
  const handleOnClear = () => setCurrentNumber('0')

  const handleAddNumber = (number) => {
    setCurrentNumber((prev) => {
      console.log(prev)
      return `${prev === '0' ? '' : prev}${number}`
    })
  }

  const handleOperation = (currNum) => console.log(currNum)

  return (
    <Container>
      <Content>
        <Input column={4} value={currentNumber} />
        <Button column={3} label="AC" onClick={() => handleOnClear()} />
        <Button label="/" onClick={() => handleOnClear()} />

        <Button label="7" onClick={() => handleAddNumber('7')} />
        <Button label="8" onClick={() => handleAddNumber('8')} />
        <Button label="9" onClick={() => handleAddNumber('9')} />
        <Button label="*" onClick={() => handleAddNumber(' - ')} />

        <Button label="4" onClick={() => handleAddNumber('4')} />
        <Button label="5" onClick={() => handleAddNumber('5')} />
        <Button label="6" onClick={() => handleAddNumber('6')} />
        <Button label="-" onClick={() => handleAddNumber(' + ')} />

        <Button label="1" onClick={() => handleAddNumber('1')} />
        <Button label="2" onClick={() => handleAddNumber('2')} />
        <Button label="3" onClick={() => handleAddNumber('3')} />
        <Button label="+" onClick={() => handleOperation(currentNumber)} />

        <Button column={2} label="0" onClick={() => handleOnClear()} />
        <Button label="." onClick={() => handleOnClear()} />
        <Button label="=" onClick={() => handleOperation(currentNumber)} />
      </Content>
    </Container>
  )
}

export default App
