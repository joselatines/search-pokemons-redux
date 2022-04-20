import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import './App.css';
// REDUX
import { Provider } from 'react-redux';
import { store } from './redux/store';
// COMPONENTS
import BuyPokemon from './components/BuyPokemon';
import PokemonsAmount from './components/PokemonsAmount';
import SearchBar from './components/search/SearchBar';
import PokemonResult from './components/search/PokemonResult';

function App() {
	return (
		<Provider store={store}>
			<div className='container' style={{ maxHeight: '100vh' }}>
				<div className='row'>
					<div className='col-12'>
						<div className='card mt-5'>
							<div className='row no-gutters'>
								<div className='col-4'>
									<img
										className='card-img'
										src='https://as01.epimg.net/meristation/imagenes/2022/01/13/game_cover/705393781642075662.jpg'
										alt='pokemon game'
									/>
								</div>
								<div className='col-8'>
									<div className='card-body'>
										<div className='card-title h3 text-center'>
											<PokemonsAmount />
										</div>
										<BuyPokemon />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='row'>
					<div className='col-12 mt-4 border-top pt-3'>
						<SearchBar />
					</div>
					<div className='col-12'>
						<PokemonResult />
					</div>
				</div>
			</div>
		</Provider>
	);
}

export default App;
