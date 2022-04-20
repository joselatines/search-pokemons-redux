export const BUY_POKEMON = 'BUY_POKEMON';
export const RETURN_POKEMON = 'RETURN_POKEMON';

export const buy_pokemon_action = amount => {
	return {
		type: BUY_POKEMON,
		payload: amount,
	};
};

export const return_pokemon_action = amount => {
	return {
		type: RETURN_POKEMON,
		payload: amount,
	};
};
