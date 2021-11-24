import { createStore, applyMiddleware } from 'redux'
import { rootReducer } from './reducers/rootReducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'
import thunk from 'redux-thunk'
import { wordsSagaWatcher } from './sagas/wordsSaga'
import getInitState from './initState'
// import initState, { getInitState } from './initState'
const sagaMiddleware = createSagaMiddleware()

const store = createStore(
    rootReducer,
    // initState,
    getInitState(),
    composeWithDevTools(applyMiddleware(thunk, sagaMiddleware))
)
sagaMiddleware.run(wordsSagaWatcher)

store.subscribe(() => {
  window.localStorage.setItem("redux", JSON.stringify(store.getState()));
});
export default store
