import { createSlice } from '@reduxjs/toolkit';
import type { UserType } from '../../../types';
import { checkUserActionThunk, logoutUserActionThunk, signInUserActionThunk, signUpUserActionThunk } from '../../actions/userActions';

const initialState: UserType = {
  user: undefined,
  status: 'fetching',
};

// const userSuccess = (state, action) => {
//     state.status = 'logged';
//     state.user = action.payload;
//   
  
const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(checkUserActionThunk.fulfilled, (state, action) => {
        state.status = 'logged';
        state.user = action.payload;
      })
      .addCase(signInUserActionThunk.fulfilled, (state, action) => {
        state.status = 'logged';
        state.user = action.payload;
      })
      .addCase(signUpUserActionThunk.fulfilled, (state, action) => {
        state.status = 'logged';
        state.user = action.payload;
      })
      .addCase(signInUserActionThunk.rejected, (state) => {
        state.user = undefined;
        state.status = 'err';
      })
      .addCase(logoutUserActionThunk.fulfilled, (state) => {
        state.user = undefined;
        state.status = 'idle';
      })
      .addCase(signUpUserActionThunk.rejected, (state) => {
        state.user = undefined;
        state.status = 'err';
      })
      .addCase(checkUserActionThunk.rejected, (state) => {
        state.user = undefined;
        state.status = 'err';
      });
  },
});

export default userSlice.reducer;
