import { DEL_SERIE, SET_SERIES } from '../types/types'

export const seriesReducer = (state = [], action) => {
  const { type, payload } = action
  switch (type) {
    case SET_SERIES:
      return payload
    case DEL_SERIE:
      return state.filter(el => el.id !== payload);
    default:
      return state
  }
}
