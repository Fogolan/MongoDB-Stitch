/**
 * Copyright 2015-present, Lights in the Sky (3273741 NS Ltd.)
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree. 
 * 
 * @providesModule reducers
 */

import { routerStateReducer } from 'redux-react-router';
import { combineReducers } from 'redux';

// Outlet reducers

import ReduxOutlet from '../outlets/ReduxOutlet';
import LocalReduxOutlet from '../outlets/LocalReduxOutlet';

// custom reducers

import app from './app';
import user from './user';

// initial demo app state

import initialState from './initialState';

// outlets

const boards = LocalReduxOutlet('board').makeReducer(initialState.boards);
const pins = LocalReduxOutlet('pin').makeReducer(initialState.pins);
const notes = LocalReduxOutlet('note').makeReducer(initialState.notes);
const messages = LocalReduxOutlet('messages').makeReducer(initialState.messages);
const emails = LocalReduxOutlet('emails').makeReducer(initialState.emails);

export default {
	router: routerStateReducer,
	app,
	boards,
	pins,
	notes,
	messages,
	emails,
	user
}