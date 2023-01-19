import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.header`
  grid-area: header;
  height: 116px;
  width: 100%;
  display: flex;
  border-bottom: 1px solid ${({ theme }) => theme.COR.GRAY_100};
  justify-content: space-between;
  align-items: center;
  padding: 24px 123px;

  > h2 {
    font-size: 24px;
    margin-right: 64px;
    font-weight: 500;
    color: ${({ theme }) => theme.COR.PINK};
    cursor: pointer;
  }
`
export const Profile = styled.div`
  display: flex;
  align-items: flex-start;

  .linkImg {
    img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
      border: 3px solid ${({ theme }) => theme.COR.GRAY_100};
    }
  }

  > div {
    display: flex;
    flex-direction: column;
    margin-right: 16px;
    align-items: flex-end;
    text-align: right;
    width: 190px;

    .name {
      font-size: 14px;
      color: ${({ theme }) => theme.COR.WHITE};
    }
    a {
      font-size: 14px;
      color: ${({ theme }) => theme.COR.GRAY_300};
      margin-top: 8px;

      &:hover {
        color: ${({ theme }) => theme.COR.PINK};
      }
    }
  }
`
