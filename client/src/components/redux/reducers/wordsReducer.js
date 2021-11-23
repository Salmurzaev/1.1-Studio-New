import { SET_WORDS } from '../types/types'

export const wordsReducer = (state = [], action) => {
    const { type, payload } = action
    switch (type) {
        case SET_WORDS:
            return payload

        default:
            return state
    }
}