import { createSlice } from '@reduxjs/toolkit';
import type { WordType } from '../../../types';
import getWordsThunkAction from '../../actions/wordsThunkActions';

const initialState: WordType[] = [];

const wordsSlice = createSlice({
  name: 'wordsSlice',
  initialState,
  reducers: {
    clearWordsStore() {
      return [];
    },
    putSagasWordsData(state, action) {
      return action.payload as WordType[]
    }
  },
  extraReducers: (builder) => {
    builder.addCase(
      getWordsThunkAction.fulfilled,
      (state, action) => action.payload,
    )
  },
});



export const { clearWordsStore, putSagasWordsData } = wordsSlice.actions;
export default wordsSlice.reducer;
