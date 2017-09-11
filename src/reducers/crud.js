import * as actionsTypes from '../actions/actionsTypes';

const initial = {};

export default (state = {...initial}, action) => {
	let store;
	switch (action.type) {
		case actionsTypes.crudCreate:
			store = state[action.store]||[];
			store.push(action.data);
			return {...state, [action.store]: store};
		case actionsTypes.crudUpdate:
			store = state[action.store]||[];
			store[action.row] = action.data;
			return {...state, [action.store]: store};
		case actionsTypes.crudRemove:
			store = state[action.store]||[];
			store.splice(action.row, 1);
			return {...state, [action.store]: store};
		default:
			return state;
	}
}