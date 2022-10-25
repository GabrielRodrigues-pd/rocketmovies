import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body{
    background-color: ${({ theme }) => theme.COR.BG};
    color: ${({ theme }) => theme.COR.WHITE};
  }

  
  
  body, input, button, textarea{
    font-family: 'Roboto Slab', serif;
    font-size: 16px;
    outline: none;
  }

  a{
    text-decoration: none;
  }
  button, a{
    cursor: pointer;
    transition: filter 0.2;
  }
  button:hover, a:hover{
    filter: brightness(0.9)
  }
`
