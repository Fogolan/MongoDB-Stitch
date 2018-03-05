/**
 * Copyright 2015-present, Lights in the Sky (3273741 NS Ltd.)
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree. 
 * 
 * @providesModule ReduxOutlet 
 * 
 * LocalReduxOutlet is an abstracted mini-store that contains actions, consts and a reducer. It is meant to act
 * as an example of how the Redux outlet works locally with no middleware or actual API calls.
 */

import request from 'axios'; /* for promise based requests */

const config = window.config;
const SERVER_URL = config.backend;
const APP_ID = config.appId;

let initialState = {
	item : {}, 			/* selected item */
	items : {},			/* hydrated items */
	list : [],			/* abridged list items (paged) */
	fetchedList :false,
	isFetching : false,
	didInvalidate: false,
	pageNumber : 0
}

export default (schema, appid = APP_ID) => ({
	
	["RECEIVE_"+schema.toUpperCase()] : 'RECEIVE_' + schema.toUpperCase(),
	["RECEIVE_ONE_"+schema.toUpperCase()] : 'RECEIVE_ONE_' + schema.toUpperCase(),
	["NEW_"+schema.toUpperCase()] : 'NEW_' + schema.toUpperCase(),
	["UPDATE_"+schema.toUpperCase()] : 'UPDATE_' + schema.toUpperCase(),
	["DELETE_"+schema.toUpperCase()] : 'DELETE_' + schema.toUpperCase(),
	["SET_SELECTED_"+schema.toUpperCase()] : 'SET_SELECTED_' + schema.toUpperCase(),

	actions : {

		/*  will fetch if data not present */
		fetchIfNeeded : (list) => {
			return (dispatch, getState) => {
				if (shouldFetch(getState(), list)) {
					return dispatch(fetch)
				}
			}
		},

		/* lets look for the id in items */
		fetchItemIfNeeded : (token, id, items, fetch, select) => {

			return (dispatch, getState) => {
				if (!contains(id, items)){
					return dispatch(fetch(token, {_id:id}));
				} else {
					return dispatch(select);
				}
			}
		},

		setSelected : (id) => {
			return {
				type: 'SET_SELECTED_'+schema.toUpperCase(),
				id : id
			}
		},

		fetch : (token, where = {}, populate = '') => {
			return {
				type: 'RECEIVE_'+schema.toUpperCase()
			}
		},

		fetchOne : (token, where, populate = '') => {
			return {
				type: 'RECEIVE_ONE_'+schema.toUpperCase()
			}
		},

		create : (token, item) => {
			return {
				type: 'NEW_'+schema.toUpperCase(),
				item : item
			}
		},
		update : (token, item) => {
			return {
				type: 'UPDATE_'+schema.toUpperCase(),
				item: item
			}
		},
		delete : (token, item) => {
			return {
				type: 'DELETE_'+schema.toUpperCase(),
				id: item.id
			}
		}
	},

	// reducer

	makeReducer : (initialState) => (state = initialState, action) => {
		switch (action.type) {
			case 'RECEIVE_' + schema.toUpperCase():
				return state;
			case 'NEW_' + schema.toUpperCase():
				return Object.assign({}, state, {list : state.list.concat(action.item)});
			case 'UPDATE_' + schema.toUpperCase():
				return Object.assign({}, state, {item : action.item});
			case 'RECEIVE_ONE_' + schema.toUpperCase():
				return Object.assign({}, state, {
					item : action.item, 
					items : mergeitem(state.items, action.item)
				});
			case 'SET_SELECTED_' + schema.toUpperCase():
				return Object.assign({}, state, {
					item : state.items[action.id]
				});
			case 'DELETE_' + schema.toUpperCase():
				let deletedId = action.id;
				return Object.assign({}, state, {list : state.list.filter(entry =>
			      entry._id !== deletedId
			    )});
			default:
		    	return state;
		}
	}
})

function shouldFetch(state, items) {
	if (items.length === 0) {
		return true;
	}
	if (items.isFetching) {
		return false;
	}
	return items.didInvalidate;
}



function contains(id, items) {
	console.log(id, items);
	return items.hasOwnProperty(id);
}

/* mutations */

function mergeitem(items, item) {
	return Object.assign({}, items, {[item._id] : item}); 
}
