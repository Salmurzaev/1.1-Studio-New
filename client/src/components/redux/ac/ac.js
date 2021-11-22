import axios from 'axios'
import { GET_WORDS, SET_CONTENT,  SIGNIN, SIGNOUT, SIGNUP } from '../types/types'

const setContent = (value) => {
  return {
      type: SET_CONTENT,
      payload: value,
  }
}

// const setSerials = (value) => {
//   return {
//       type: SET_SERIALS,
//       payload: value,
//   }
// }

export const getContent = () => async (dispatch) => {
  const content = await axios('/content')
  dispatch(setContent(content.data))
}

// export const getSerials = () => async (dispatch) => {
//   const allSerials = await axios('/serials')
//   dispatch(setSerials(allSerials.data))
// }


export const signUp = (value) => async (dispatch) => {
  const user = await axios.post('/user/signup', value)
  
  dispatch({ type: SIGNUP, payload: user.data.user })
}

export const signIn = (value, navigate) => async (dispatch) => {
  try {
      const user = await axios.post('/user/signin', value)
      if (user) {
          dispatch({ type: SIGNIN, payload: user.data.user })
          navigate('/')
      }
  } catch (err) {
      navigate('/user/signin')
  }
}

export const signOut = (value) => async (dispatch) => {
  const signOut = await axios('/user/signout')
  dispatch({ type: SIGNOUT, payload: signOut })
}

export const getWords = (value) => {
  return {
      type: GET_WORDS,
      payload: value
  }
}