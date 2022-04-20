import { combineReducers } from 'redux';
import { game_shop } from './gameShopReducer';
import search from './searchReducer';

export const rootReducers = combineReducers({ game_shop, search });
