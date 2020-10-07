import { GET_USER, ERROR } from './actions';

import { IAction, IActionError } from './types';

const apiUrl = process.env.REACT_APP_API_URL;

export const handleLogin = (email: string, pass: string) => 
  async (dispatch: (action: IAction | IActionError) => void) => {

    const headers = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, pass}),
    };

    const url = `${apiUrl}usuarios/login`;

    try {
      const req = await fetch(url, headers);
      const res = await req.json();

      if (res.user)
        return dispatch({ type: GET_USER, payload: res.user });

      if (res.error)
        return dispatch({ type: ERROR, payload: { error: res.error } });

      return dispatch({ type: ERROR, payload: { error: 'Erro inesperado' }});
    } catch (err) {
      return dispatch({ type: ERROR, payload: { error: 'Erro inesperado.' }});
    } 
};

export const validateUser = (token: string) => 
  async (dispatch: (action: IAction | IActionError) => void) => {
    const headers = {
      method: 'GET',
      headers: {
        'Authorization': `Chat ${token}`,
      },
    };

    const url = `${apiUrl}usuarios`;

    try {
      const req = await fetch(url, headers);
      const res = await req.json();

      if (res.user)
        return dispatch({ type: GET_USER, payload: res.user });

      if (res.error)
        return dispatch({ type: ERROR, payload: { error: res.error } });

      return dispatch({ type: ERROR, payload: { error: 'Erro inesperado' }});
    } catch (err) {
      return dispatch({ type: ERROR, payload: { error: 'Erro inesperado' }});
    } 
};

export const handleRegister = (data: any) => 
  async (dispatch: (action: IAction | IActionError) => void) => {
    const headers = {
      method: 'POST',
      body: data,
    };

    const url = `${apiUrl}usuarios/register`;

    try {
      const req = await fetch(url, headers);
      const res = await req.json();

      if (res.user)
        return dispatch({ type: GET_USER, payload: res.user});

      return dispatch({ type: ERROR, payload: res?.error || 'Erro inesperado' });
    } catch (err) {
      console.log(err);
    }
};

export const handleUpdate = (data: any, token: string) => 
  async (dispatch: (action: IAction | IActionError) => void) => {
    const headers = {
      method: 'PUT',
      headers: {
        'Authorization': `Chat ${token}`,
      },
      body: data,
    };

    const url = `${apiUrl}usuarios`;

    try {
      const req = await fetch(url, headers);
      const res = await req.json();

      if (res.user)
        return dispatch({ type: GET_USER, payload: res.user});

      return dispatch({ type: ERROR, payload: res?.error || 'Erro inesperado' });
    } catch (err) {
      console.log(err);
    }
};