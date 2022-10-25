import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;

  background-color: ${({ theme, isNew }) =>
    isNew ? 'transparent' : theme.COR.BACKGROUND_900};
  color: ${({ theme }) => theme.COR.WHITE};
  border: ${({ theme, isNew }) =>
    isNew ? `1px dashed ${theme.COR.GRAY_300}` : 'none'};

  border-radius: 10px;
  padding: 16px;

  > button {
    border: none;
    background: none;
  }

  .button-delete {
    color: ${({ theme }) => theme.COR.PINK};
  }

  .button-add {
    color: ${({ theme }) => theme.COR.PINK};
  }

  > input {
    color: ${({ theme }) => theme.COR.WHITE};
    background: transparent;
    border: none;

    &::placeholder {
      color: ${({ theme }) => theme.COR.GRAY_300};
    }
  }
`
