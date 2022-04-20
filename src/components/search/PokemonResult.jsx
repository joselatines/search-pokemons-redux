import { useSelector } from 'react-redux';

const PokemonResult = () => {
	const search = useSelector(state => state.search);
	return (
		<div>
			{search.pokemon && <h3 className='text-white'>Result: </h3>}

			{search.loading && <div className='text-warning'>Searching...</div>}

			<div className='text-success'>
				<img
					src={search.pokemon?.sprites?.front_default}
					alt={search.pokemon?.name}
				/>
				<span className='h2'>{search.pokemon?.name}</span>
			</div>

			{search.error !== '' && (
				<span className='text-danger'>{search?.error}</span>
			)}
		</div>
	);
};

export default PokemonResult;
