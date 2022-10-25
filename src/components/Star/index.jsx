import { Container } from  "./styles";

import {AiFillStar, AiOutlineStar} from 'react-icons/ai'

export function Star({isActive, onClick, ...rest}) {
  return(
    <Container isNew={isActive}>
      <button
        onClick={onClick}
        type="button"
        {...rest}
      >
        {isActive ? <AiFillStar/> : <AiOutlineStar/>}
      </button>
    </Container>
  )
}