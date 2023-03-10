import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

type InitialState = {
  online: boolean;
  messages: string[];
};

const initialState: InitialState = {
  online: false,
  messages: [],
};

const wsSlice = createSlice({
  name: 'wordsSlice',
  initialState,
  reducers: {
    setOnline(state, action: PayloadAction<boolean>) {
      state.online = action.payload;
    },
    setMessage(state, action: PayloadAction<string>) {
      state.messages.push(action.payload)
    },
  },
});

export const { setOnline, setMessage } = wsSlice.actions;
export default wsSlice.reducer;
