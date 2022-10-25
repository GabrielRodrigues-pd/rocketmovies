import { Container, Profile } from './styles'
import { Link } from 'react-router-dom'

import {Input} from '../../components/Input'

export function Header() {
  return(
    <Container>

      <h2>RocketMovies</h2>
      <Input placeholder="Pesquisar pelo título" />
      <Profile >
        <div>
          <Link to="/profile" className='name'>Gabriel Rodrigues</Link>
          <Link to="/preview">Sair</Link> 
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