import { createSlice } from '@reduxjs/toolkit';
import type { DbGameType } from '../../../types';
import {getOffersThunkAction} from '../../actions/dbThunkActions';

type InitialStateType = {
  games: DbGameType;

};

const initialState: InitialStateType = {
  games: {}
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
        state.games = action.payload;
      },
    );
  },
});



export default dbSlice.reducer;
