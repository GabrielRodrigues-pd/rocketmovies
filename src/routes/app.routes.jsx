import {Routes, Route} from 'react-router-dom'

import { Home } from '../pages/Home'
import { Profile } from '../pages/Profile'
import { CreateMovie } from '../pages/Createmovie'
import { Preview } from '../pages/Preview'

export function AppRoutes(){
  return(
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/createmovie' element={<CreateMovie/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/preview' element={<Preview/>}/>
    </Routes>
  )
}