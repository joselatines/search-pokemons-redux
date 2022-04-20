import { connect, useDispatch } from 'react-redux';

import {
	buy_pokemon_action,
	return_pokemon_action,
} from '../redux/actions/gameShopAction';

function BuyPokemon() {
	// Set state
	const dispatch = useDispatch();

	return (
		<div>
			<button
				className='btn btn-dark m-2'
				onClick={() => dispatch(buy_pokemon_action(1))}
			>
				Buy Pokemon
			</button>
			<button
				className='btn btn-dark m-1'
				onClick={() => dispatch(return_pokemon_action(1))}
			>
				Return Pokemon
			</button>
		</div>
	);
}

const mapDispatchToProps = {
	buy_pokemon_action,
	return_pokemon_action,
};

export default connect(null, mapDispatchToProps)(BuyPokemon);
