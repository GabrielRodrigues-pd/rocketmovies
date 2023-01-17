import {Container} from './styles'
import { TbLoaderQuarter } from "react-icons/tb"


export function Button({ title, loading = false, ...rest}) {
  return(
    <Container 
      type='button'
      disabled={loading}
      {...rest}
    >
      {loading ? <TbLoaderQuarter size={40}/> : title}
    </Container>
  )
}