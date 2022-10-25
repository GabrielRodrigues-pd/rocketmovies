import React from 'react'
import ReactDOM from 'react-dom/client'

import { ThemeProvider } from 'styled-components'
import GlobalStyles from './styles/global'
import theme from './styles/theme'

import { SignIn } from './pages/SignIn'
import { Home } from './pages/Home'
import { CreateMovie } from './pages/Createmovie'
import { Preview } from './pages/Preview'

import {Routes} from './routes'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
        <Routes />
    </ThemeProvider>
  </React.StrictMode>
)
