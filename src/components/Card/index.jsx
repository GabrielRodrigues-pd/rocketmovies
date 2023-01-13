import { Container, Preview } from "./styles"
import { Tag } from '../Tags'
import { Star } from '../Star'

export function Card({data, ...rest}) {
  return(
    <Container {...rest}>
      <Preview to="preview">
        <h1>{data.title}</h1>
        <span>Avaliação: {data.rating}</span>
        
        <p>{data.description}</p>

        {data.tags && (
          <div>
            {data.tags.map((tag) => (
              <Tag key={tag.id} name={tag.name}/>
            ))}
          </div>
          )}

      </Preview>

      
    </Container>
  )
}