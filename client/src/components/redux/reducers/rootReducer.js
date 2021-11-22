import { combineReducers } from 'redux'
import { contentReducer } from './contentReducer'
import { filmReducer } from './filmReducer'
import { serialReducer } from './serialReducer'
import { userReducer } from './userReducer'
import { wordsReducer } from './wordsReducer'
import { producerReducer } from './producerReducer'

export const rootReducer = combineReducers({
<<<<<<< HEAD
    // reducers

    content: contentReducer,
    user: userReducer,
    words: wordsReducer,
=======
  // reducers
  films: filmReducer,
  serials: serialReducer,
  user: userReducer,
  words: wordsReducer,
  producer: producerReducer
>>>>>>> 968db7506b2b2271f0b3fc8a95b28352c14abcf7
})
