import { Container, Main, Section } from "./styles";

import {Header} from '../../components/Header'
import {ButtonText} from '../../components/ButtonText'
import {Button} from '../../components/Button'
import {Input} from '../../components/Input'
import {Textarea} from '../../components/Textarea'
import { Marker } from '../../components/Marker'


export function CreateMovie(){
  return (
    <Container>
      <Header/>
      <Main>

        {/* <ButtonText to='/' title="Voltar" /> */}
        <h1>Novo filme</h1>

        <div className="input">
          <Input placeholder='Título'/>
          <Input placeholder='Sua nota (de 0 a 5)'/>
        </div>
        <Textarea placeholder='Observações'/>

        <Section>
          <h2>Marcadores</h2>
          <div className="marcadores">
            <Marker value='React'/>

            <Marker value='Node'/> 
            <Marker value='JavaScript'/> 
            <Marker isNew placeholder='Novo marcador'/> 
          </div>
          <footer>
            <Button title="Excluir filme"/>
            <Button title="Salvar alterações"/>
          </footer>
        </Section>

      </Main>
    </Container>
  )
}