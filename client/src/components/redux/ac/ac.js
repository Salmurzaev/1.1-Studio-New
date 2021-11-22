import axios from 'axios'
import {SET_SERIES, SET_WATCH_SERIES, GET_WORDS,SET_SEASON, SET_CONTENT,  SET_SERIALS,  SIGNIN, SIGNOUT, SIGNUP } from '../types/types'

const setContent = (value) => {
  return {
      type: SET_CONTENT,
      payload: value,
  }
}

const setSerials = (value) => {
  return {
    type: SET_SERIALS,
    payload: value
  }
}

const setSeason = (value) => {
  return {
    type: SET_SEASON,
    payload: value
  }
}
const setSeries = (value) => {
  return {
    type: SET_SERIES,
    payload: value
  }
}
const setWatchSeries = (value) => {
  return {
    type: SET_WATCH_SERIES,
    payload: value
  }
}

export const getContent = () => async (dispatch) => {
  const content = await axios('/content')
  dispatch(setContent(content.data))
}

export const getSerials = () => async (dispatch) => {
  const serials = await axios('/serials')
  dispatch(setSerials(serials.data))
}

export const getSeason = (serial_id) => async (dispatch) => {
  const seasons = await axios(`/serials/${serial_id}`)
  dispatch(setSeason(seasons.data))
}

export const getSeries = (serial_id, season_id) => async (dispatch) => {
  const series = await axios(`/serials/${serial_id}/${season_id}`)
  dispatch(setSeries(series.data))
}

export const getWatchSeries = (id) => async (dispatch) => {
  const seriya = await axios(`/content/${id}`)
  dispatch(setWatchSeries(seriya.data))
}




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