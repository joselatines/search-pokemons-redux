import { useSelector } from 'react-redux';

const PokemonsAmount = () => {
	// Get state
	const game_shop = useSelector(state => state.game_shop);
	
	return <div>Pokemons units: {game_shop.pokemon}</div>;
};

export default PokemonsAmount;
