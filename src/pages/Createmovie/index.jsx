import { Container, Main, Section } from "./styles";
import {useEffect, useState} from 'react'

import {Header} from '../../components/Header'
import {ButtonText} from '../../components/ButtonText'
import {Button} from '../../components/Button'
import {Input} from '../../components/Input'
import {Textarea} from '../../components/Textarea'
import { Marker } from '../../components/Marker'

import { api } from "../../services/api";
import { toast } from "react-toastify";

export function CreateMovie(){
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [rating, setRating] = useState("")

  const [tags, setTags] = useState([])
  const [newTag, setNewTag] = useState("")
  const [titleMovie, setTitleMovie] = useState("Novo filme")
  const [loading, setLoading] = useState(false)

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
      return toast.error("Digite o título do filme", {
        position: toast.POSITION.TOP_CENTER
      })
    }

    if(!rating || Number(rating) > 5 || Number(rating < 0)) {
      return toast.error('Digite a nota do filme de 0 a 5', {
        position: toast.POSITION.TOP_CENTER
      })
    }

    if (!newTag) {
      return toast.error("Adicione uma tag ao seu filme", {
        position: toast.POSITION.TOP_CENTER
      })
    }

    setLoading(true)
    
    await api.post('/movies', {
      title,
      description,
      rating,
      tags
    })

    toast.success('Nota criada com sucesso!', {
      position: toast.POSITION.TOP_CENTER
    })

    setLoading(false)
  }

  function handleClearMovie(){
    setTitle("")
    setRating("")
    setDescription("")
    setTags([])
    setNewTag("")
  }

  useEffect(() => {
    if(Number(rating) > 5){
      toast.error("A avaliação do filme é de 0 a 5")
    }else{
      setTitleMovie("Novo filme")
    }
  }, [rating])

  return (
    <Container>
      <Header/>
      <Main>
        <h1>{titleMovie}</h1>

        <div className="input">
          <Input 
            placeholder='Título'
            onChange={e => setTitle(e.target.value)}
            value={title}
          />
          <Input 
            placeholder='Sua nota (de 0 a 5)'
            onChange={e => setRating(e.target.value)}
            value={rating}
          />
        </div>
        <Textarea 
          placeholder='Observações'
          onChange={e => setDescription(e.target.value)}
          value={description}
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
            <Button title="Excluir filme" onClick={handleClearMovie}/>
            <Button title="Criar filme" onClick={handleNewMovie} loading={loading}/>
          </footer>
        </Section>

      </Main>
    </Container>
  )
}