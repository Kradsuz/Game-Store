import { configureStore, combineReducers } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../features/sagas/rootSaga';
import userSlice from '../features/userSlice';
import wordsSlice from '../features/wordsSlice';
import wsSlice from '../features/wsSlice';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  words: wordsSlice,
  userData: userSlice,
  socketData: wsSlice
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);
export default store;
