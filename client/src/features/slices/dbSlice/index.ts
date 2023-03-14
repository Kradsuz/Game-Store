import { createSlice } from '@reduxjs/toolkit';
import type { DbGameType, DBOfferType } from '../../../types';
import {getDBGamesThunkAction, getOfferBySellerThunkAction, getOffersThunkAction} from '../../actions/dbThunkActions';

type InitialStateType = {
  gameOffers: DbGameType;
  dbGames: DbGameType[];
  sellerOffers: DBOfferType[];
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
    Offers: []},
    dbGames: [],
    sellerOffers: []
};

const dbSlice = createSlice({
  name: 'gamesSlice',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
    .addCase(
      getOffersThunkAction.fulfilled,
      (state, action) => {
        state.gameOffers = action.payload;
      },
    )
    .addCase(
      getDBGamesThunkAction.fulfilled,
      (state, action) => {
        state.dbGames = action.payload;
      },
    )
    .addCase(
      getOfferBySellerThunkAction.fulfilled,
      (state, action) => {
        state.sellerOffers = action.payload;
      },
    )
  },
});



export default dbSlice.reducer;
