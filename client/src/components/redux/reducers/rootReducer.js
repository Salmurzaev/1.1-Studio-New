import { combineReducers } from 'redux'
import { contentReducer } from './contentReducer'
import { seasonReducer } from './seasonReducer'
import { serialReducer } from './serialReducer'
import { seriesReducer } from './seriesReducer'
import { userReducer } from './userReducer'
import { watchSeriesReducer } from './watchSeriesReducer'
import { wordsReducer } from './wordsReducer'
import { producerReducer } from './producerReducer'

export const rootReducer = combineReducers({
<<<<<<< HEAD
    // reducers

    content: contentReducer,
    serials: serialReducer,
    season: seasonReducer,
    series: seriesReducer,
    watchSeries: watchSeriesReducer ,
    user: userReducer,
    words: wordsReducer,
    
=======
  // reducers
  films: filmReducer,
  serials: serialReducer,
  user: userReducer,
  words: wordsReducer,
  producer: producerReducer
>>>>>>> b97edb6736f23f2ca85c6641f24cae890e01cf5f
})
