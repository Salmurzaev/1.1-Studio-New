import { DEL_JOB, NEW_JOB, SET_JOB } from '../types/types'

export const jobReducer = (state = [], action) => {
  const { type, payload } = action
  switch (type) {
    case SET_JOB:
      return payload

    case NEW_JOB:
      return [...state, payload]

    case DEL_JOB:
      return state.filter(el => el.id !== payload)
    default:
      return state
  }
}
