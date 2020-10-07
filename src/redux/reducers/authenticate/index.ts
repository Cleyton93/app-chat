import createReducer from '../create-reducer';

import { GET_USER, ERROR } from './actions';

import { IAction, IState, IActionError } from './types';

const initialState = {
  isLogged: null,
  userData: null,
  error: false,
};

export default createReducer(initialState, {
  [GET_USER]: (state: IState, action: IAction) => {
    if (
        !action.payload || !action.payload.email || !action.payload.token || 
        !action.payload.name || !action.payload.id
        )
      return { isLogged: false, userData: null, error: 'Erro inesperado.' };

    const tokens = action.payload.token.split('.');

    window.localStorage.setItem('15BgHYT', tokens[0]);
    window.localStorage.setItem('3gbGbgx', tokens[1]);
    window.localStorage.setItem('JugtDRk', tokens[2]);

    return {
      isLogged: true,
      userData: action.payload,
      error: false,
    };
  },

  [ERROR]: (state: IState, action: IActionError) => {
    if (!action.payload)
      return { isLogged: false, userData: null, error: 'Erro inesperado.' };

    return {
      isLogged: false,
      userData: null,
      error: action.payload.error,
    };
  }
});