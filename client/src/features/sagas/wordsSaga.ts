import type { AxiosPromise, AxiosResponse } from 'axios';
import axios from 'axios';
import type {
  CallEffect,
  ForkEffect,
  PutEffect,
  TakeEffect,
} from 'redux-saga/effects';
import { delay, call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import type { WordType } from '../../types';
import type { GetWordsSagaActionType } from '../../types/wordsActionsType';
import { GET_WORDS_SAGA } from '../../types/wordsActionsType';
import { putSagasWordsData } from '../wordsSlice';

const fetchWords = (word: string): AxiosPromise<WordType[]> =>
  axios.post<WordType[]>('/api/word', { word });

function* wordsSagaWorker(
  action: GetWordsSagaActionType,
): Generator<CallEffect | PutEffect, void, AxiosResponse<WordType[]>> {
  yield delay(3000);
  try {
    const resp = yield call(fetchWords, action.payload);
    yield put(putSagasWordsData(resp.data));
  } catch (e) {
    yield put(putSagasWordsData([{ id: 1, word: 'server not run' }]));
  }
}

function* wordsSagaWatcher(): Generator<
  TakeEffect | ForkEffect,
  void,
  GetWordsSagaActionType
> {
  yield takeEvery(GET_WORDS_SAGA, wordsSagaWorker);
}

export default wordsSagaWatcher;
