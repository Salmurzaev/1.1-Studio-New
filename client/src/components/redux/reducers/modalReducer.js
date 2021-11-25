import { DEL_MODAL, SET_MODAL } from "../types/types";


export const modalReducer = (state = null, action) => {
  const { type, payload } = action
  switch (type) {
    case SET_MODAL:
      return payload
    case DEL_MODAL:
      return payload;
    default:
      return state
  }
}
