import type { GetWordsSagaActionType } from '../../../types/wordsActionsType';
import { GET_WORDS_SAGA } from '../../../types/wordsActionsType';

 const getWordsSagaAction = (
  payload: string,
): GetWordsSagaActionType => ({
  type: GET_WORDS_SAGA,
  payload,
});

export default getWordsSagaAction