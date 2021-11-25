import {  NEW_SERVICE, SET_SERVICE } from '../types/types'

export const serviceReducer = (state = [], action) => {
    const { type, payload } = action
    switch (type) {
        case SET_SERVICE:
            return payload

        case NEW_SERVICE:
            return [...state, payload]

        default:
            return state
    }
}
