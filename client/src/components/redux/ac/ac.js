import axios from 'axios'
import {
    SET_SERIES,
    SET_FILMS,
    DEL_FILMS,
    SET_WATCH_SERIES,
    GET_WORDS,
    SET_SEASON,
    SET_CONTENT,
    SET_SERIALS,
    SIGNIN,
    SIGNOUT,
    SIGNUP,
    GET_PRODUCER,
    CLEAR_SEARCH,
    DEL_SERIAL,
    DEL_SERIE,
    DEL_SEASON,
    NEW_JOB,
    SET_JOB,
    NEW_SERVICE,
    SET_SERVICE,
    DEL_JOB,
    CHANGE_RATING,
    DEL_SERVICE,
    SET_MODAL,
    DEL_MODAL,
} from '../types/types'

const setContent = (value) => {
    return {
        type: SET_CONTENT,
        payload: value,
    }
}

const setSerials = (value) => {
    return {
        type: SET_SERIALS,
        payload: value,
    }
}

const setJobs = (value) => {
    return {
        type: SET_JOB,
        payload: value,
    }
}

const setSeason = (value) => {
    return {
        type: SET_SEASON,
        payload: value,
    }
}
const setSeries = (value) => {
    return {
        type: SET_SERIES,
        payload: value,
    }
}
const setWatchSeries = (value) => {
    return {
        type: SET_WATCH_SERIES,
        payload: value,
    }
}

const deleteFilm = (id) => {
    return {
        type: DEL_FILMS,
        payload: id,
    }
}

const deleteSerial = (id) => {
    return {
        type: DEL_SERIAL,
        payload: id,
    }
}

const deleteSerie = (id) => {
    return {
        type: DEL_SERIE,
        payload: id
    }
}

const deleteSeason = (id) => {
    return {
        type: DEL_SEASON,
        payload: id
    }
}

const deleteJob = (id) => {
    return {
        type: DEL_JOB,
        payload: id
    }
}


export const delModal = (value) => {
    return {
        type: DEL_MODAL,
        payload: value
    }
}

export const setModal = (value) => {
    return {
        type: SET_MODAL,
        payload: value
    }
}

export const delSeason = (id) => async (dispatch) => {
    const response = await axios.delete(`/seasons/${id}`)

    dispatch(deleteSeason(id))
}



export const delSerie = (id) => async (dispatch) => {
    const response = await axios.delete(`/content/${id}`)

    dispatch(deleteSerie(id))
}

export const delSerial = (id) => async (dispatch) => {
    const response = await axios.delete(`/serials/${id}`)

    dispatch(deleteSerial(id))
}

export const delFilm = (id) => async (dispatch) => {
    const response = await axios.delete(`/content/${id}`)
    console.log(id)
    dispatch(deleteFilm(id))
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

export const setJob = () => async (dispatch) => {
    const jobs = await axios('/vacancies')
    dispatch({ type: SET_JOB, payload: jobs.data })
}

export const jobAdd = (value) => async (dispatch) => {
    const job = await axios.post('/vacancies', value)
    dispatch({ type: NEW_JOB, payload: job.data })
}

export const delJob = (id) => async (dispatch) => {
    const response = await axios.delete(`/vacancies/${id}`)

    dispatch(deleteJob(id))
}

export const setService = () => async (dispatch) => {
    const service = await axios('/services')
    dispatch({ type: SET_SERVICE, payload: service.data })
}

export const serviceAdd = (value) => async (dispatch) => {
    const service = await axios.post('/services', value)
    dispatch({ type: NEW_SERVICE, payload: service.data })
}

export const delSerice = (id) => async (dispatch) => {
    await axios.delete(`/services/${id}`)
    dispatch({ type: DEL_SERVICE, payload: id })
}

export const signIn = (value, navigate) => async (dispatch) => {
    try {
        const user = await axios.post('/user/signin', value)
        if (user) {
            dispatch({ type: SIGNIN, payload: user.data.user })
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
        payload: value,
    }
}

export const getProducer = () => async (dispatch) => {
    const allProducers = await axios.get('/team')
    dispatch({
        type: GET_PRODUCER,
        payload: allProducers.data,
    })
}

export const clearStateSearch = () => async (dispatch) => {
    dispatch({
        type: CLEAR_SEARCH,
    })
}

export const changeRating = (value) => async (dispatch) => {
    const changeRating = await axios.patch('/id/rating', value)
    dispatch({
        type: CHANGE_RATING,
        payload: changeRating.data,
    })
}