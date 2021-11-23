import { SET_SERIES } from '../types/types'

export const seriesReducer = (state = [], action) => {
    const { type, payload } = action
    switch (type) {
        case SET_SERIES:
            return payload

        default:
            return state
    }
}
