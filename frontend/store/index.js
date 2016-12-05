import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers'
import createLogger from 'redux-logger'
import thunk from 'redux-thunk'

const middlewares = [thunk]
if (process.env.NODE_ENV !== 'production') {
  middlewares.push(createLogger())
}

export default (preloadedState = {}) => {
  return createStore(rootReducer, preloadedState, applyMiddleware(...middlewares))
}
