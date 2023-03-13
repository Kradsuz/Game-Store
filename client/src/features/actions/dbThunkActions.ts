import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import type { DbGameType, GameType } from '../../types';

export const getOffersThunkAction = createAsyncThunk<number>(
  'offers/fetch',
  async (id: number) => {
    try {
      const response = await axios.post<DbGameType>('/api/games/offers', {id});
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
);

// export const getDBGamesThunkAction = createAsyncThunk<GameType[], string>(
//     'games/fetch',
//     async () => {
//       try {
//         const response = await axios.post<GameType[]>('/api/games');
//         return response.data;
//       } catch (error) {
//         console.error(error);
//         throw error;
//       }
//     },
//   );
