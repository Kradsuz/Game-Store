import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import type { GameType } from '../../types';

const getGamesThunkAction = createAsyncThunk<GameType[], string>(
  'games/fetch',
  async (search: string) => {
    try {
      const response = await axios.post<GameType[]>('/api/word', { search });
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
);

export default getGamesThunkAction;