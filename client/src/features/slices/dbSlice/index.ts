import { createSlice } from '@reduxjs/toolkit';
import type { DbGameType } from '../../../types';
import {getOffersThunkAction} from '../../actions/dbThunkActions';

type InitialStateType = {
  gameOffers: DbGameType;

};

const initialState: InitialStateType = {
  gameOffers: {
    id:0,
    cover: '',
    date: '',
    genres: '',
    name: '',
    rating: 0,
    apiGameId: 0,
    summaru: '',
    Offers: []}
};

const dbSlice = createSlice({
  name: 'gamesSlice',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(
      getOffersThunkAction.fulfilled,
      (state, action) => {
        console.log(action.payload)
        state.gameOffers = action.payload;
      },
    );
  },
});



export default dbSlice.reducer;
