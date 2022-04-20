import { useDispatch } from 'react-redux';
import { useState } from 'react';
import fetchPokemon from '../../redux/actions/searchAction';

const SearchBar = () => {
	const dispatch = useDispatch();

	const [value, setValue] = useState('mewtwo');

	return (
		<div className='form-group'>
			<label htmlFor='searchPokemon' className='text-white'>Search pokemon</label>
			<input
				type='text'
				className='form-control'
				id='searchPokemon'
				onChange={e => setValue(e.target.value)}
				value={value}
			/>
			<button
				className='btn btn-primary mt-3'
				onClick={() => dispatch(fetchPokemon(value))}
			>
				Search
			</button>
		</div>
	);
};

export default SearchBar;
