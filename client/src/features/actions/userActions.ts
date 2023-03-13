import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import type { UserFromBackend, UserSubmitForm, UserLoginForm } from '../../types/userTypes';

export const checkUserActionThunk = createAsyncThunk<UserFromBackend>(
  'user/check',
  async () =>
    axios<UserFromBackend>('/api/auth/check')
      .then((res) => res.data)
      .catch(() => {
        throw new Error('err');
      }),
);

export const signUpUserActionThunk = createAsyncThunk<UserFromBackend, UserSubmitForm>(
    'user/signup',
    async(data) => 
     axios
     .post<UserFromBackend>('/api/auth/signup', data)
     .then(res => res.data)
     .catch(() => {
        throw new Error('err');
      }),
)

export const signInUserActionThunk = createAsyncThunk<UserFromBackend, UserLoginForm>(
    'user/signin',
    async(data) => 
     axios
     .post<UserFromBackend>('/api/auth/signin', data)
     .then(res => res.data)
     .catch(() => {
        throw new Error('err');
      }),
)

export const logoutUserActionThunk = createAsyncThunk(
  'user/logout',
  async () => 
   axios
    .post('/api/auth/logout')
    .then(() => null)
    .catch(() => {
      throw new Error('err');
    })
)
