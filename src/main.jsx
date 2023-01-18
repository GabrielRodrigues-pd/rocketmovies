import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyles from './styles/global'
import { ThemeProvider } from 'styled-components'
import { ToastContainer } from 'react-toastify';
import {AuthProvider} from './hooks/auth'
import 'react-toastify/dist/ReactToastify.min.css'

import {Routes} from './routes'

import theme from './styles/theme'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </ThemeProvider>
    <ToastContainer limit={3}/>
  </React.StrictMode>
)
