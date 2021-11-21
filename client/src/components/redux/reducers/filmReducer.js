import { SET_FILMS } from '../types/types'

export const filmReducer = (state = [], action) => {
    const { type, payload } = action
    switch (type) {
        case SET_FILMS:
            return payload

        default:
            return state
    }
}
