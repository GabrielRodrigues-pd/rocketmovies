import { Container, Form, Avatar } from "./styles"
import { useState } from "react"
import {useAuth} from '../../hooks/auth'
import { useNavigate } from "react-router-dom"
import { toast } from 'react-toastify';


import {api} from '../../services/api'
import avatarPlaceholder from '../../assets/avatar_placeholder.svg'

import {Input} from '../../components/Input'
import {Button} from '../../components/Button'
import {ButtonText} from '../../components/ButtonText'
import { FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi"


export function Profile() {
  const {user, updateProfile} = useAuth()

  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [passwordOld, setPasswordOld] = useState("")
  const [passwordNew, setPasswordNew] = useState("")
  const navigate = useNavigate()

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

  const [avatar, setAvatar] = useState(avatarUrl)
  const [avatarFile, setAvatarFile] = useState(null)
  const [loading, setLoading] = useState(false)

  async function handleUpdate(){
    if(!name) {
      return toast.error("Insira o nome para atualizar",{
        position: toast.POSITION.TOP_CENTER
      })
    }
    if(!email){
      return toast.error("Insira o e-mail para atualizar", {
        position: toast.POSITION.TOP_CENTER
      })
    }
    if(passwordNew > 0 && passwordOld > 0 && passwordNew === passwordOld){
      return toast.error("Verifique se inseriu a senha antiga corretamente e insira uma senha diferente da antiga", {
        position: toast.POSITION.TOP_CENTER
      })
    }

    const updated = {
      name,
      email,
      password: passwordNew,
      old_password: passwordOld
    }

    const userUpdated = Object.assign(user, updated)

    setLoading(true)

    await updateProfile({user: userUpdated, avatarFile})

    setLoading(false)
    
  }

  function handleChangeAvatar(event) {
    const file = event.target.files[0]
    setAvatarFile(file)

    const imagePreview = URL.createObjectURL(file)
    setAvatar(imagePreview)
  }

  function handleBack() {
    navigate(-1)
  }
  

  return(
    <Container>
      <header>
        <ButtonText onClick={handleBack} title='Voltar'/>
      </header>

      <Form>
        <Avatar>
          <img 
            src={avatar} 
            alt={user.name} 
          />

          <label htmlFor="avatar">
            <FiCamera/>
            <input 
              id="avatar" 
              type="file" 
              onChange={handleChangeAvatar}
            />
          </label>
        </Avatar>

        <Input 
          placeholder="Nome"
          type="text"
          icon={FiUser}
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <Input 
          placeholder="E-mail"
          type="text"
          icon={FiMail}
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <Input 
          placeholder="Senha atual"
          type="password"
          icon={FiLock}
          onChange={e => setPasswordOld(e.target.value)}
        />
        <Input 
          placeholder="Nova senha"
          type="password"
          icon={FiLock}
          onChange={e => setPasswordNew(e.target.value)}
        /> 

        <Button title='Salvar' onClick={handleUpdate} loading={loading} />
      </Form>
    </Container>
  )
}