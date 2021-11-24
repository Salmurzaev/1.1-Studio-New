import { SET_WORDS, CLEAR_SEARCH } from '../types/types'

export const wordsReducer = (state = [], action) => {
    const { type, payload } = action
    switch (type) {
        case SET_WORDS:
            return payload
            case CLEAR_SEARCH:
                return []
        default:
            return state
    }
}