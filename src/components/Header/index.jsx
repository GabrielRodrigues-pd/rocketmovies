import { Container, Profile } from './styles'
import { Link } from 'react-router-dom'
import {useAuth} from '../../hooks/auth'


import {Input} from '../../components/Input'
import { ButtonOut } from '../ButtonOut'

export function Header() {
  const {signOut, user} = useAuth()

  function handleSigOut() {
    const confirmSignOut =confirm("Deseja desconectar?")  
    if(confirmSignOut){
      signOut()
    }
  }

  return(
    <Container>

      <h2>RocketMovies</h2>
      <Input placeholder="Pesquisar pelo título" />
      <Profile >
        <div>
          <Link to="/profile" className='name'>{user.name}</Link>
          <ButtonOut title="Sair" onClick={handleSigOut}></ButtonOut>
        </div> 
        <Link to="/profile" className='linkImg'>
          <img 
            src="https:/github.com/gabrielrodrigues-pd.png" 
            alt="Imagem do usuário" 
          />
        </Link> 
        
        
      </Profile>
      
    </Container>
  )
}