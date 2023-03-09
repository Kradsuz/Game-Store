import type { AllEffect, ForkEffect, TakeEffect } from 'redux-saga/effects';
import { all } from 'redux-saga/effects';
import type { GetWordsSagaActionType } from '../../types/wordsActionsType';
import wordsSagaWatcher from './wordsSaga';
import wsWatcher from './wsSaga';

export default function* rootSaga(): Generator {
  yield all([wordsSagaWatcher(), wsWatcher()]);
}
