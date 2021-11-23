import { combineReducers } from 'redux'
import { contentReducer } from './contentReducer'
import { filmReducer } from './filmReducer'
import { serialReducer } from './serialReducer'
import { userReducer } from './userReducer'
import { wordsReducer } from './wordsReducer'
import { producerReducer } from './producerReducer'

export const rootReducer = combineReducers({
  // reducers
  films: filmReducer,
  serials: serialReducer,
  user: userReducer,
  words: wordsReducer,
  producer: producerReducer
})
