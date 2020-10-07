import createReducer from '../create-reducer';

import { GET_MESSAGES, REMOVE_MESSAGE } from './actions';

import { IGetAction, IRemoveAction, State } from './types';

export default createReducer([], {
  [GET_MESSAGES]: (state: State, action: IGetAction) => {
    return action.payload;
  },

  [REMOVE_MESSAGE]: (state: State, action: IRemoveAction) => {
    return state.filter((message) => {
      return String(message._id) !== action.payload._id;
    });
  },
});