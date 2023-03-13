import { createSlice } from '@reduxjs/toolkit';
import type { GameType } from '../../../types';
import {getOffersThunkAction} from '../../actions/dbThunkActions';

type InitialStateType = {
  games: GameType[];

};

const initialState: InitialStateType = {
  games: [],
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
        state.games = action.payload;
      },
    );
  },
});



export default dbSlice.reducer;
