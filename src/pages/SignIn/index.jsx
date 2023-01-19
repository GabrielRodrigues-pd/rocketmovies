import { Container, Form, Background } from "./styles"
import { FiMail, FiLock } from 'react-icons/fi'
import { useState } from "react"

import {useAuth} from '../../hooks/auth'

import { Link } from "react-router-dom"

import { Button } from "../../components/Button"
import { Input } from "../../components/Input"
import { toast } from "react-toastify"

export function SignIn(){

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const {signIn} = useAuth()
  
  function handleSignIn(){
    signIn({email, password})
  }




  return(
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir</p>
        <h2>Faça seu login</h2>

        <Input 
          placeholder='E-mail'
          type='text'
          icon={FiMail}
          onChange={e => setEmail(e.target.value)}
        />

        <Input 
          placeholder='Senha'
          type='password'
          icon={FiLock}
          onChange={e => setPassword(e.target.value)}
        />

        <Button 
          title='Entrar' 
          onClick={handleSignIn} 
          disabled={!email || !password}
        />

        <Link to="/register">
          Criar conta
        </Link>
      </Form>
      <Background/>
    </Container>
  )
}