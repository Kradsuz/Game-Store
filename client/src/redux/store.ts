import {
  configureStore,
  combineReducers
} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../features/sagas/rootSaga';
import gamesSlice from '../features/slices/gamesSlice';
import userSlice from '../features/slices/userSlice';
import wsSlice from '../features/slices/wsSlice';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  games: gamesSlice,
  userData: userSlice,
  socketData: wsSlice,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);
export default store;
