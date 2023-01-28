import { useState, useEffect} from "react"
import { Container, Form, Background } from "./styles"

import {api} from '../../services/api'
import { toast } from "react-toastify"

import {FiUser, FiMail, FiLock, FiArrowLeft } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

export function SignUp() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [title, setTitle] = useState("Crie sua conta")
  const [loading, setLoading] = useState(false)

  function handleSignUp(){
    setLoading(true)
    if(!name || !email || !password){
      return toast.error('Informe corretamente o nome, email e senha')
    }


    api.post('/users', {name, email, password})
    .then(() => {
      toast.success('Usuário cadastrado com sucesso!', {
        position: toast.POSITION.TOP_CENTER
      })
      setLoading(false)
    })
    .catch(error => {
      if(error.response){
        toast.error(error.response.data.message, {
          position: toast.POSITION.TOP_CENTER
        })
        setLoading(false)
      }else{
        toast.error('Não foi possível cadastrar', {
          position: toast.POSITION.TOP_CENTER
        })
        setLoading(false)
      }
    })
  }

  useEffect(() => {
    if(!name){
      setTitle("Insira o nome")
    }else if(!email){
      setTitle("Insira o email")
    }else if(!password){
      setTitle("Insira a senha")
    }else{
      setTitle("Crie sua conta")
    }

  }, [name, email, password, setTitle])


  return (
    <Container>
      <Form>
        <h1>Rocket Notes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis</p>
        <h2>{title}</h2>

        <Input
          placeholder='Nome'
          type='text'
          icon={FiUser}
          onChange={e => setName(e.target.value)}
        />
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
          title="Cadastrar" 
          onClick={handleSignUp}
          loading={loading} 
          disabled={
            !email || !password || !name
          } 

        />
        
        <Link to='/'>
          <FiArrowLeft/>
          Voltar para o login
        </Link>
      </Form>
      <Background/>

    </Container>
  )
}