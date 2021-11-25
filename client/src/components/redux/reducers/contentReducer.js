import { DEL_FILMS, SET_CONTENT } from '../types/types'

export const contentReducer = (state = [], action) => {
  const { type, payload } = action
  switch (type) {
    case SET_CONTENT:
      return payload
    case DEL_FILMS:
      return state.filter(el => el.id !== payload);
    default:
      return state
  }
}
