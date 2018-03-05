/**
 * Copyright 2015-present, Lights in the Sky (3273741 NS Ltd.)
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree. 
 * 
 * @providesModule configureStore(initialState)
 */

 /* https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd */

import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { routerReducer } from 'react-router-redux'

import promiseMiddleware from '../middleware/promiseMiddleware';
import loggerMiddleware from 'redux-logger';
import * as reducers from '../reducers/';

// create reducer from outlets, custom reducers and our router
const reducer = combineReducers({...reducers, routing:routerReducer});

// create the store with thunk and promise middleware
const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware,
  promiseMiddleware
)(createStore);

/**
 * Creates a preconfigured store for this example.
 */
export default function configureStore(initialState) {
	const store =  createStoreWithMiddleware(
                  reducer, 
                  initialState, 
                  window.devToolsExtension && window.devToolsExtension()
                );
	if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers/index');
      store.replaceReducer(nextRootReducer);
    });
  }
	return store;
}