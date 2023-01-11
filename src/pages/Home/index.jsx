import { Container, NewNote, Section } from './styles'


import { FiPlus } from 'react-icons/fi'

import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { Card } from '../../components/Card'

export function Home() {

  return (
    <Container>
      <Header />

      <main>
        <div className='header'>
          <h1>Meus filmes</h1>

          <NewNote to='/createmovie'>
            <FiPlus/>
            Adicionar Filmes
          </NewNote>
        </div>

        <Section>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </Section>

      </main>
        
      
    </Container>
  ) 
}