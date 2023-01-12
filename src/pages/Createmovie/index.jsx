import { Container, Main, Section } from "./styles";
import {useState} from 'react'

import {Header} from '../../components/Header'
import {ButtonText} from '../../components/ButtonText'
import {Button} from '../../components/Button'
import {Input} from '../../components/Input'
import {Textarea} from '../../components/Textarea'
import { Marker } from '../../components/Marker'

import { api } from "../../services/api";

export function CreateMovie(){
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [rating, setRating] = useState("")

  const [tags, setTags] = useState([])
  const [newTag, setNewTag] = useState("")

  function handleAddTag(){
    if(!newTag) {
      return alert('Por favor, adicione uma tag com nome')
    }
    setTags(prevState => [...prevState, newTag])
    setNewTag("")
  }

  function handleRemoveTag(deleted){
    setTags(prevState => prevState.filter(tag => tag !== deleted))
  }

  async function handleNewMovie(){
    if (!title) {
      return alert("Digite o título do filme")
    }

    if(!rating) {
      return alert('Digite a nota do filme')
    }

    if (newTag) {
      return alert("Você deixou uma tag no campo para adicionar, mas não clicou em adicionar. Clique para adicionar ou deixe o campo vazio")
    }

    await api.post('/movies', {
      title,
      description,
      rating,
      tags
    })

    console.log({
      title,
      description,
      rating,
      tags
    });

    alert('Nota criada com sucesso!')
  }

  return (
    <Container>
      <Header/>
      <Main>

        {/* <ButtonText to='/' title="Voltar" /> */}
        <h1>Novo filme</h1>

        <div className="input">
          <Input 
            placeholder='Título'
            onChange={e => setTitle(e.target.value)}
          />
          <Input 
            placeholder='Sua nota (de 0 a 5)'
            onChange={e => setRating(e.target.value)}
          />
        </div>
        <Textarea 
          placeholder='Observações'
          onChange={e => setDescription(e.target.value)}
        />

        <Section>
          <h2>Marcadores</h2>
          <div className="marcadores">
            {
              tags.map((tag, index) => (
                <Marker 
                  value={tag}
                  key={String(index)}
                  onClick={() => {handleRemoveTag(tag)}}
                />
              ))
               
            }

            <Marker 
              isNew 
              placeholder='Novo marcador'
              onChange={e => setNewTag(e.target.value)}
              value={newTag}
              onClick={handleAddTag}
            /> 
          </div>
          <footer>
            <Button title="Excluir filme"/>
            <Button title="Salvar alterações" onClick={handleNewMovie}/>
          </footer>
        </Section>

      </Main>
    </Container>
  )
}