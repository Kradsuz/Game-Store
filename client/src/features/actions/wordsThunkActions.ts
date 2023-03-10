import axios, { AxiosPromise } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import type { WordType } from '../../types';

const getWordsThunkAction = createAsyncThunk (
  'words/fetch',
  async (word: string) =>
    axios
      .post<WordType[]>('/api/word', { word })
      .then((res) => res.data)
      .catch((err) => console.log(err)),
);

export default getWordsThunkAction;
