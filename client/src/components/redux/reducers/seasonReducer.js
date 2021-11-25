import { DEL_SEASON, SET_SEASON } from '../types/types'

export const seasonReducer = (state = [], action) => {
  const { type, payload } = action
  switch (type) {
    case SET_SEASON:
      return payload
    case DEL_SEASON:
      return state.filter(el => el.id !== payload);
    default:
      return state
  }
}
