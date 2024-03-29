import { Container, Main, Infomovie, Content, SectionCont } from "./styles"; 
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import avatarPlaceholder from '../../assets/avatar_placeholder.svg'

import {Star} from '../../components/Star' 
import {Tag} from '../../components/Tags'
import {Header} from '../../components/Header'
import { Button } from "../../components/Button";
import {ButtonText} from '../../components/ButtonText'

import {MdOutlineWatchLater} from 'react-icons/md'
import { toast } from "react-toastify";

export function Preview(){
  const {user} = useAuth()

  const navigate = useNavigate()
  const [data, setData] = useState(null)
  
  const params = useParams()
  
  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;
  
  const [avatar, setAvatar] = useState(avatarUrl)

  function handleBack() {
    navigate(-1)
  }

  async function handleRemoveMovie(){
    await api.delete(`/movies/${params.id}`)
    toast.success("Filme excluído", {
      position: toast.POSITION.TOP_CENTER
    })
    handleBack() 
  }
  
  useEffect(() => {
    async function fetchMovie() {
      const response = await api.get(`/movies/${params.id}`)
      setData(response.data)
    }

    fetchMovie()
  }, [])

  return(
    <Container>
      <Header />
      {data && (
        <Main>
        <ButtonText onClick={handleBack} title='Voltar' isIcon={true}/>

        <SectionCont>
          
          <div>
            
            <h1>{data.title}</h1>
            <span>Avaliação: {data.rating}</span>
            
          </div>
          <ButtonText title="Excluir filme" onClick={handleRemoveMovie}/> 

          <Infomovie>
            <img src={avatar} />
            <p>Por {user.name}</p>
            <MdOutlineWatchLater className="watch"/>
            <p>{data.created_at}</p>
          </Infomovie>

          {data.tags && (
            <div className="tags">
              {data.tags.map((tag) => (
                <Tag name={tag.name} key={String(tag.id)}/>
              ))}
            </div>
          )}

          
          <Content>
            <p>
              {data.description}
            </p>
          </Content>

        </SectionCont>

        
      </Main>
      )}
      
    </Container>
  )
}