import { BUY_POKEMON, RETURN_POKEMON } from '../actions/gameShopAction';

const default_state = {
	pokemon: 30, // const [pokemon, setPokemon] = useState(30)
};

// Reducer
export const game_shop = (state = default_state, action) => {
	switch (action.type) {
		case BUY_POKEMON: {
			return {
				...state,
				pokemon: state.pokemon + action.payload,
			};
		}

		case RETURN_POKEMON: {
			return {
				...state,
				pokemon: state.pokemon - action.payload,
			};
		}

		default:
			return state;
	}
};
