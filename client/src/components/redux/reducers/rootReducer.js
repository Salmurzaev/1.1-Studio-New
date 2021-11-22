import { combineReducers } from 'redux'
import { contentReducer } from './contentReducer'
import { filmReducer } from './filmReducer'
import { serialReducer } from './serialReducer'
import { userReducer } from './userReducer'
import { wordsReducer } from './wordsReducer'

export const rootReducer = combineReducers({
    // reducers

    content: contentReducer,
    user: userReducer,
    words: wordsReducer,
})
