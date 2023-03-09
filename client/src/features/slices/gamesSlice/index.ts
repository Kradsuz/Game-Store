import { createSlice } from '@reduxjs/toolkit';
import type { GameType } from '../../../types';
import getGamesThunkAction from '../../actions/gameThunkActions';

const initialState: GameType[] = [];

const gamesSlice = createSlice({
  name: 'gamesSlice',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(
        getGamesThunkAction.fulfilled,
      (state, action) => action.payload,
    )
  },
});




export default gamesSlice.reducer;
