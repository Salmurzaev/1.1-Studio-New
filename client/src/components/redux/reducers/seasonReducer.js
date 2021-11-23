import { SET_SEASON } from '../types/types'

export const seasonReducer = (state = [], action) => {
    const { type, payload } = action
    switch (type) {
        case SET_SEASON:
            return payload

        default:
            return state
    }
}
