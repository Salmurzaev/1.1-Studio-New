import { GET_PRODUCER } from '../types/types'

export const producerReducer = (state = [], action) => {
    const { type, payload } = action
    switch (type) {
        case GET_PRODUCER:
            return payload

        default:
            return state
    }
}