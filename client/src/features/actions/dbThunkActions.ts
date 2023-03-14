import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import type { DbGameType } from '../../types';

export const getOffersThunkAction = createAsyncThunk<DbGameType, number>(
  'sellers/fetch',
  async (id: number) => {
    try {
      const response = await axios.post<DbGameType>('/api/games/sellers', {
        id,
      });
      console.log(response.data);

      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
);

export const getDBGamesThunkAction = createAsyncThunk<DbGameType[]>(
    'gamesDB/fetch',
    async () => {
      try {
        const response = await axios.post<DbGameType[]>('/api/games');
        return response.data;
      } catch (error) {
        console.error(error);
        throw error;
      }
    },
  );

  export const getOfferBySellerThunkAction = createAsyncThunk<DbGameType[]>(
    'offers/fetch',
    async () => {
      try {
        const response = await axios.post<DbGameType[]>('/api/games/allOffersSeller');
        return response.data;
      } catch (error) {
        console.error(error);
        throw error;
      }
    },
  );
