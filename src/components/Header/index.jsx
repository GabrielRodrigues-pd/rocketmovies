import { Container, Profile } from './styles'
import { Link, useNavigate } from 'react-router-dom'
import {useAuth} from '../../hooks/auth'
import {api} from '../../services/api'

import avatarPlaceholder from '../../assets/avatar_placeholder.svg'

import {Input} from '../../components/Input'
import { ButtonOut } from '../ButtonOut'
import { useState } from 'react'

export function Header({ ...rest}) {
  const {signOut, user, handleSearch} = useAuth()
  const navigate = useNavigate()

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

  function handleBack() {
    navigate('/')
  }

  function handleSignOut() {
    const confirmSignOut =confirm("Deseja desconectar?")  
    if(confirmSignOut){
      signOut()
      handleBack()
    }
  }

  const [search, setSearch] = useState("")
  
  function leveSearch(){
    handleSearch(search)
  }


  function moveSearch(event) {
    if(event.key == 'Enter'){
      leveSearch()
    }
  }
  
  return(
    <Container {...rest}>

      <h2 onClick={handleBack}>RocketMovies</h2>
      <Input 
        placeholder="Pesquisar pelo título" 
        type="text"
        onChange={(e) => setSearch(e.target.value)}
        onKeyPress={(e) => moveSearch(e)}
      />
      <Profile >
        <div>
          <Link to="/profile" className='name'>{user.name}</Link>
          <ButtonOut title="Sair" onClick={handleSignOut}></ButtonOut>
        </div> 
        <Link to="/profile" className='linkImg'>
          <img 
            src={avatarUrl} 
            alt={user.name} 
          />
        </Link> 
        
        
      </Profile>
      
    </Container>
  )
}
