import { SET_SERIALS } from '../types/types'

export const serialReducer = (state = [], action) => {
    const { type, payload } = action
    switch (type) {
        case SET_SERIALS:
            return payload

        default:
            return state
    }
}