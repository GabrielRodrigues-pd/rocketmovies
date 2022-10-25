import { Container, Preview } from "./styles"
import { Tag } from '../Tags'
import { Star } from '../Star'

export function Card() {
  return(
    <Container>
      <Preview to="preview">
      <h1>Interestellar</h1>
      <div>
        <Star isActive/>
        <Star isActive/>
        <Star isActive/>
        <Star isActive/>
        <Star />
        
      </div>
      
      <p>
        Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se...
      </p>
      <div>
        <Tag title="Ficção Científica"/>
        <Tag title="Drama"/>
      </div>
      </Preview>

      
    </Container>
  )
}