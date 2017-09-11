import * as actionsTypes from '../actions/actionsTypes';

const initial = {
	session: null
};

export default (state = {...initial}, action) => {
	switch (action.type) {
		case actionsTypes.authLogin:
			return {...state,session:action.session}
		default:
			return state;
	}
}