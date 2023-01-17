import {Container} from './styles'

import {FiArrowLeft} from 'react-icons/fi'

export function ButtonText({isIcon, title, isActive = false, ...rest}) {
  return(
    <Container
      type='button'
      isActive={isActive}
      {...rest}
    >
      {isIcon ? <FiArrowLeft/> : null} 
      {title}
    </Container>
  )
}