import {  DEL_SERVICE, NEW_SERVICE, SET_SERVICE } from '../types/types'

export const serviceReducer = (state = [], action) => {
    const { type, payload } = action
    switch (type) {
        case SET_SERVICE:
            return payload

        case NEW_SERVICE:
            return [...state, payload]

        case DEL_SERVICE:
            return state.filter(el=>el.id !== payload)
        default:
            return state
    }
}
