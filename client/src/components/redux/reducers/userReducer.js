import { SIGNUP, SIGNIN, SIGNOUT } from '../types/types'

export const userReducer = (state = null, action) => {
    const { type, payload } = action
    switch (type) {
        case SIGNUP:
            return payload
        case SIGNOUT:
            return (state = null)
        case SIGNIN:
            return payload

        default:
            return state
    }
}