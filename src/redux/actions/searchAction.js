import axios from 'axios';

export const FETCH_REQUEST = 'FETCH_REQUEST';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';

// Actions
export const fetchPokemonRequest = () => {
	return {
		type: FETCH_REQUEST,
	};
};

export const fetchPokemonSuccess = pokemon => {
	return {
		type: FETCH_SUCCESS,
		payload: pokemon,
	};
};

export const fetchPokemonFailure = err => {
	return {
		type: FETCH_FAILURE,
		payload: err,
	};
};
const fetchPokemon = pokemon => {
	return dispatch => {
		dispatch(fetchPokemonRequest());
		axios
			.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
			.then(res => {
				dispatch(fetchPokemonSuccess(res.data));
			})
			.catch(err => {
				dispatch(fetchPokemonFailure("Pokemon doesn't exist"));
			});
	};
};

export default fetchPokemon;
