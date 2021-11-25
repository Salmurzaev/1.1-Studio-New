import { combineReducers } from 'redux'
import { contentReducer } from './contentReducer'
import { seasonReducer } from './seasonReducer'
import { serialReducer } from './serialReducer'
import { seriesReducer } from './seriesReducer'
import { userReducer } from './userReducer'
import { watchSeriesReducer } from './watchSeriesReducer'
import { wordsReducer } from './wordsReducer'
import { producerReducer } from './producerReducer'
import { jobReducer } from './jobReducer'


export const rootReducer = combineReducers({
    // reducers
    content: contentReducer,
    serials: serialReducer,
    season: seasonReducer,
    series: seriesReducer,
    watchSeries: watchSeriesReducer,
    user: userReducer,
    words: wordsReducer,
    producer: producerReducer,
    job: jobReducer
})

