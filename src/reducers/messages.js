import * as actionsTypes from '../actions/actionsTypes';

export default (state = {message: '', history: []}, action) => {
	switch (action.type) {
		case actionsTypes.messageShow:
			return {...state, message: action.message};
		case actionsTypes.messageHide:
			return {
				history: [
					...state.history,
					{
						message: state.message,
						date: new Date()
					}
				], 
				message: ''
			};
		default:
			return state;
	}
}