import { createStore, applyMiddleware } from 'redux'
import welcomeReducer from '../reducers/welcome'
import createLogger from 'redux-logger'

const middlewares = []
if (process.env.NODE_ENV !== 'production') {
  middlewares.push(createLogger())
}

export default (preloadedState = {}) => {
  const store = createStore(
    welcomeReducer,
    preloadedState,
    applyMiddleware(...middlewares)
  )

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers/index');
      store.replaceReducer(welcomeReducer);
    });
  }
  return store
}
