import { combineReducers } from 'redux'
import { filmReducer } from './filmReducer'
import { serialReducer } from './serialReducer'
import { userReducer } from './userReducer'
import { wordsReducer } from './wordsReducer'

export const rootReducer = combineReducers({
    // reducers
  films: filmReducer,
  serials: serialReducer,
  user: userReducer,
  words: wordsReducer
})
