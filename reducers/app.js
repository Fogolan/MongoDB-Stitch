/**
 * Copyright 2015-present, Lights in the Sky (3273741 NS Ltd.)
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree. 
 * 
 * @providesModule app
 */

import Cookies from 'cookies-js';
import Config from '../config';

import {
  USER_AUTH, USER_AUTH_REQUEST, USER_IS_AUTHENTICATED, USER_LOGOUT
} from '../actions';

const initialState = checkCookie();

function setCookie(expires_in, token) {
	var cookie_expiration_date = Date.now() + expires_in;
	Cookies.set(Config.TOKEN_COOKIE_KEY, token , { expires: cookie_expiration_date });
}

function checkCookie() {
	return {
		loggedIn:true, 
		token: 4423423432432423,
		selectedAppIndex: 0, 
		selectedSchemaIndex:0, 
		selectedBlockIndex: 0,
		createdApp : {}
	}
}

function destroyCookie() {
	Cookies.expire(Config.TOKEN_COOKIE_KEY);
}

export default function app(state = initialState, action) {
	switch (action.type) {
		case USER_IS_AUTHENTICATED:
			return Object.assign({}, state, checkCookie())
		case USER_AUTH_REQUEST:
			return state;
		case USER_AUTH:
			setCookie(action.res.data.expires, action.res.data.token);
			return Object.assign({}, state, {loggedIn:true, token: action.res.data.token});
		case USER_LOGOUT:
			destroyCookie();
			return Object.assign({}, state, {loggedIn:false, token : ''});
	default:
    	return state;
	}
}