import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { DbGameType, DBOfferType } from '../../../types';
import {
  deleteOfferThunkAction,
  getDBGamesThunkAction,
  getOfferBySellerThunkAction,
  getOffersThunkAction,
} from '../../actions/dbThunkActions';

type InitialStateType = {
  gameOffers: DbGameType;
  dbGames: DbGameType[];
  sellerOffers: DBOfferType[];
  originalDbGames: DbGameType[]; // добавляем свойство для хранения исходного массива элементов
};

const initialState: InitialStateType = {
  gameOffers: {
    id: 0,
    cover: '',
    date: '',
    genres: '',
    name: '',
    rating: 0,
    apiGameId: 0,
    summaru: '',
    Offers: [],
  },
  dbGames: [],
  sellerOffers: [],
  originalDbGames: [], // инициализируем свойство пустым массивом
};

const dbSlice = createSlice({
  name: 'gamesSlice',
  initialState,
  reducers: {
    checkFeature(state, action: PayloadAction<string>) {
      if (!action.payload.trim()) {
        // если пустая строка, возвращаем исходный массив элементов
        state.dbGames = state.originalDbGames;
      } else {
        state.dbGames = state.originalDbGames.filter((el) =>
          el.name.toLowerCase().includes(action.payload.trim().toLowerCase()),
        );
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getOffersThunkAction.fulfilled, (state, action) => {
        state.gameOffers = action.payload;
      })
      .addCase(getDBGamesThunkAction.fulfilled, (state, action) => {
        state.dbGames = action.payload;
        state.originalDbGames = action.payload; // сохраняем исходный массив элементов
      })
      .addCase(getOfferBySellerThunkAction.fulfilled, (state, action) => {
        state.sellerOffers = action.payload;
      })
      .addCase(
        deleteOfferThunkAction.fulfilled,
        (state, action: PayloadAction<number>) => {
          state.sellerOffers = state.sellerOffers.filter(
            (el) => el.id !== action.payload,
          );
        },
      );
  },
});

export default dbSlice.reducer;
export const { checkFeature } = dbSlice.actions;
