import { createStore, combineReducers, applyMiddleware } from 'redux';

import createHistory from 'history/createBrowserHistory';

import { routerReducer, routerMiddleware } from 'react-router-redux';

const history = createHistory();
const middleware = routerMiddleware(history);

const store = createStore(
  combineReducers({
    photos,
    router: routerReducer
  }),
  applyMiddleware(middleware)
)

// single reducer
function photos(state = [], action) {
  switch(action.type) {
    case 'LIKE_PHOTO':
      return [...state, { text: action.text, like: true }];
    default:
      return state;
  }
}

export { history, store };
