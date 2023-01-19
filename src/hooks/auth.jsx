import {createContext, useContext, useState, useEffect} from 'react'
import { toast } from 'react-toastify'

import { api } from '../services/api'

export const AuthContext = createContext({})

function AuthProvider({children}) {
  const [data, setData] = useState({})
  const [movieSearch, setMovieSearch] = useState([])


  async function signIn({email, password}){

    try {
      const response = await api.post("/sessions", {email, password})
      const {user, token} = response.data

      localStorage.setItem("@rocketmovies:user", JSON.stringify(user))
      localStorage.setItem("@rocketmovies:token", token)

      api.defaults.headers.common['Authorization'] = `Bearer ${token}`
      setData({user, token})
      toast.success(`Seja bem-vindo ${user.name}`, {
        position: toast.POSITION.TOP_CENTER,
        theme: 'colored'
      })

    } catch (error) {
      if(error.response){
        toast.error(error.response.data.message, {
          position: toast.POSITION.TOP_CENTER 
        })
      } else {
        toast.error("Não foi possível entrar.", {
          position: toast.POSITION.TOP_CENTER
        })
      }
    }
  }

  function signOut() {
    localStorage.removeItem('@rocketmovies:user')
    localStorage.removeItem('@rocketmovies:token')

    setData({})

  }

  async function updateProfile({user, avatarFile}) {
    try{

      if(avatarFile){
        const fileUploadForm = new FormData()
        fileUploadForm.append('avatar', avatarFile)

        const response = await api.patch('/users/avatar', fileUploadForm)

        user.avatar = response.data.avatar
      }

      await api.put("/users", user)
      localStorage.setItem("@rocketmovies:user", JSON.stringify(user))

      setData({
        user,
        token: data.token
      })
      toast.success("Perfil atualizado!", {
        position: toast.POSITION.TOP_CENTER
      })

    }catch (error) {
      if(error.response){
        alert(error.response.data.message)
      } else {
        toast.error("Não foi possível atualizar o perfil.")
      }
    }
  }

  async function handleSearch(search) {
    const response = await api.get(`/movies?title=${search}`)
      setMovieSearch(response.data)
  }

  useEffect(() => {
    const user = localStorage.getItem('@rocketmovies:user')
    const token = localStorage.getItem('@rocketmovies:token')

    if(token && user){
      
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`

      setData({
        token,
        user: JSON.parse(user)
      })
    }
  }, [])

  return (
    <AuthContext.Provider value={{
        signIn, 
        user: data.user,
        signOut,
        updateProfile,
        handleSearch,
        movieSearch,
        setMovieSearch
      }}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext)

  return context
}

export { AuthProvider, useAuth}