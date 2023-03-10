import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import type { GameType } from '../../types';

const getGamesThunkAction = createAsyncThunk (
  'games/fetch',
  async (search: string) =>
    axios.post<GameType[]>('/api/word', {search})
  .then(res => res.data)
  .catch(err => {
      console.error(err);
  })
)

export default getGamesThunkAction;
