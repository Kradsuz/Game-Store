import { configureStore, combineReducers } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../features/sagas/rootSaga';
import gamesSlice from '../features/slices/gamesSlice';
import userSlice from '../features/slices/userSlice';
import wordsSlice from '../features/slices/wordsSlice';
import wsSlice from '../features/slices/wsSlice';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  words: wordsSlice,
  userData: userSlice,
  socketData: wsSlice,
  games: gamesSlice,
});

const store = configureStore({
  reducer: rootReducer,

});

export default store;
