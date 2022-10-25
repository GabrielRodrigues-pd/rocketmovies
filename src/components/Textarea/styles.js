import styled from 'styled-components'

export const Container = styled.textarea`
  width: 100%;
  height: 270px;
  background-color: ${({ theme }) => theme.COR.BACKGROUND_900};
  color: ${({ theme }) => theme.COR.WHITE};
  padding: 12px;
  border-radius: 10px;

  border: none;
  resize: none;
  margin: 40px 0;
`
