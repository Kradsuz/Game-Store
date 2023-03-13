import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { GameType } from '../../../types';
import getGamesThunkAction from '../../actions/gameThunkActions';

type InitialStateType = {
  games: GameType[];
  modal: false | GameType;
};

const initialState: InitialStateType = {
  games: [],
  modal: false,
};

const gamesSlice = createSlice({
  name: 'gamesSlice',
  initialState,
  reducers: {
    modalAction(state, action) {
      state.modal = action.payload as GameType;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      getGamesThunkAction.fulfilled,
      (state, action) => {
        state.games = action.payload;
      },
    );
  },
});


export const { modalAction } = gamesSlice.actions;
export default gamesSlice.reducer;
