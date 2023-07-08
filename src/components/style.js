import { styled } from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: -webkit-linear-gradient(left, #355c7d, #6c5b7b, #c06c84);
  background: linear-gradient(90deg, #355c7d, #6c5b7b, #c06c84);

  display: flex;
  align-items: center;
  justify-content: center;
`
export const Content = styled.div`
  border-radius: 0.5rem;
  box-shadow: 0 0 1rem #000006;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(5, 1fr);
`
