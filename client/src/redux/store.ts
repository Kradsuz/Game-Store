import { configureStore, combineReducers } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({

});

const store = configureStore({
  reducer: rootReducer,

});

export default store;
