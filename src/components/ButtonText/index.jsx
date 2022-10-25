import {Container} from './styles'

import {FiArrowLeft} from 'react-icons/fi'

export function ButtonText({title, isActive = false, ...rest}) {
  return(
    <Container
      type='button'
      isActive={isActive}
      {...rest}
    >
      <FiArrowLeft/>
      {title}
    </Container>
  )
}