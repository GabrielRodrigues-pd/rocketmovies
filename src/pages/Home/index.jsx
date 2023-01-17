import { Container, NewNote, Section } from './styles'
import {useAuth} from '../../hooks/auth'
import { api } from '../../services/api'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


import { FiPlus } from 'react-icons/fi'

import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { Card } from '../../components/Card'

export function Home() {

  const {movieSearch, setMovieSearch} = useAuth()

  console.log(movieSearch);
  
  const navigate = useNavigate()

  function handlePreview(id) {
    navigate(`/preview/${id}`)
  }

  useEffect(() => {

    async function handlePreviMovies(){
      const response = await api.get(`/movies?title=`)
      setMovieSearch(response.data)
    }
    handlePreviMovies()
    
  }, [])


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
          {movieSearch.map((movie) => (
            <Card
              key={String(movie.id)}
              data={movie}
              onClick={() => handlePreview(movie.id)}
            />
          ))
          }
        </Section>

      </main>
        
      
    </Container>
  ) 
}