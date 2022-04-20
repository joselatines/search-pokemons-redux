import {
	FETCH_FAILURE,
	FETCH_REQUEST,
	FETCH_SUCCESS,
} from '../actions/searchAction';

const initialState = {
	loading: false,
	pokemon: null,
	error: '',
};

// Reducer
const search = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_REQUEST:
			return {
				...state,
				loading: true,
			};
		case FETCH_SUCCESS:
			return {
				...state,
				loading: false,
				pokemon: action.payload,
				error: '',
			};
		case FETCH_FAILURE:
			return {
				...state,
				loading: false,
				pokemon: [],
				error: action.payload,
			};

		default:
			return state;
	}
};

export default search;
