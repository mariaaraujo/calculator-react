import styled from 'styled-components'

export const InputContainer = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  font-family: 'Courier New', Courier, monospace;

  grid-column: span ${(props) => props.column};

  input {
    width: 100%;
    height: 60px;
    background-color: #00000087;
    border: 0;

    padding: 0 1rem;
    font-size: 3rem;
    font-family: 'Courier New', Courier, monospace;
    color: #ffffff;
  }
`
