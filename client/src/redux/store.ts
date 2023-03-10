import { configureStore, combineReducers } from '@reduxjs/toolkit';
import gamesSlice from '../features/slices/gamesSlice';


const rootReducer = combineReducers({
  games: gamesSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
