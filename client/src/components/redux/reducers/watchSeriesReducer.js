import { SET_WATCH_SERIES } from '../types/types'

export const watchSeriesReducer = (state = [], action) => {
    const { type, payload } = action
    switch (type) {
        case SET_WATCH_SERIES:
            return payload

        default:
            return state
    }
}