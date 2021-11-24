import { DEL_SERIAL, SET_SERIALS } from '../types/types'

export const serialReducer = (state = [], action) => {
  const { type, payload } = action
  switch (type) {
    case SET_SERIALS:
      return payload
    case DEL_SERIAL:
      return state.filter(el => el.id !== payload)
    default:
      return state
  }
}
