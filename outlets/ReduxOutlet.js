/**
 * Copyright 2015-present, Lights in the Sky (3273741 NS Ltd.)
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree. 
 * 
 * @providesModule ReduxOutlet 
 * 
 * ReduxOutlet is an abstracted mini-store that contains action creators, action consts and a reducer. It is instantiated with
 * a object type and initial state. The object type maps to a REST type.
 * 
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
				type: 'RECEIVE_'+schema.toUpperCase(),
				promise: request.get(`${SERVER_URL}/${schema}`,
				{
	    			headers: {
	    				'x-access-token': token
	    			},
	    			params : {
						where : where,
						populate: populate
					}
	    		})
			}
		},

		fetchOne : (token, id, where, populate = '') => {
			return {
				type: 'RECEIVE_ONE_'+schema.toUpperCase(),
				promise: request.get(`${SERVER_URL}/${schema}/${id}`,
				{
	    			headers: {
	    				'x-access-token': token
	    			},
	    			params : {
						where : where,
						populate: populate
					}    		
	    		})
			}
		},

		create : (token, item) => {
			return {
				type: 'NEW_'+schema.toUpperCase(),
				promise: request.post(`${SERVER_URL}/${schema}`, item,
				{
					headers: {
						'x-access-token': token
					}
				})
			}
		},
		update : (token, item) => {
			console.log('update called');
			return {
				type: 'UPDATE_'+schema.toUpperCase(),
				promise: request.put(`${SERVER_URL}/${schema}/${item._id}`, item,
				{
					headers: {
						'x-access-token': token
					}
				})
			}
		},
		delete : (token, item) => {
			return {
				type: 'DELETE_'+schema.toUpperCase(),
				promise: request.delete(`${SERVER_URL}/${schema}/${item._id}`,
				{
					headers: {
						'x-access-token': token
					}
				})
			}
		}
	},

	// reducer

	makeReducer : (initialState) => (state = initialState, action) => {
		switch (action.type) {
			case 'RECEIVE_' + schema.toUpperCase():
				return Object.assign({}, state, {fetchedList: true, list : action.res.data.items});
			case 'NEW_' + schema.toUpperCase():
				return Object.assign({}, state, {list : state.list.concat(action.res.data)});
			case 'UPDATE_' + schema.toUpperCase():
				return Object.assign({}, state, {item : action.res.data});
			case 'RECEIVE_ONE_' + schema.toUpperCase():
				return Object.assign({}, state, {
					item : action.res.data.items[0], 
					items : mergeitem(state.items, action.res.data.items[0])
				});
			case 'SET_SELECTED_' + schema.toUpperCase():
				return Object.assign({}, state, {
					item : state.items[action.id]
				});
			case 'DELETE_' + schema.toUpperCase():
				let deletedId = action.res.data.objId;
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
	return items.hasOwnProperty(id);
}

/* mutations */

function mergeitem(items, item) {
	return Object.assign({}, items, {[item._id] : item}); 
}
