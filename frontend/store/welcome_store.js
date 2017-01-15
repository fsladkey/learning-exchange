import { createStore, applyMiddleware } from 'redux'
import welcomeReducer from '../reducers/welcome'

const middlewares = []
if (process.env.NODE_ENV !== 'production') {
  middlewares.push(require('redux-logger')())
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
