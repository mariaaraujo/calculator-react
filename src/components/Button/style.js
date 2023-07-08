import styled from 'styled-components'

export const ButtonContainer = styled.button`
  background-color: #f0f0f0;
  font-size: 1.4rem;
  padding: 10px;

  flex: 1;

  border: 0.5px solid #888888;
  border-top: none;
  border-left: none;
  outline: none;

  grid-column: span ${(props) => props.column || 0};

  &:hover {
    opacity: 0.8;
  }
`
