import { SET_CONTENT } from '../types/types'

export const contentReducer = (state = [], action) => {
    const { type, payload } = action
    switch (type) {
        case SET_CONTENT:
            return payload

        default:
            return state
    }
}