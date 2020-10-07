import { GET_MESSAGES, REMOVE_MESSAGE } from "./actions";
import { IGetAction, IRemoveAction } from "./types";


const apiUrl = process.env.REACT_APP_API_URL;

export const getMessages = (token: string) => async (
    dispatch: (action: IGetAction) => void
  ) => {
  const headers = {
    method: 'GET',
    headers: {
      'Authorization': `Chat ${token}`,
    },
  };

  const url = `${apiUrl}mensagens`;

  try {
    const req = await fetch(url, headers);
    const res = await req.json();

    if (res.messages)
      return dispatch({ type: GET_MESSAGES, payload: res.messages });
  } catch (err) {
    return console.log(err);
  }
};

export const removeMessage = (id: string, token: string) => async (
  dispatch: (action: IRemoveAction) => void
) => {
  const headers = {
    method: 'DELETE',
    headers: {
      'Authorization': `Chat ${token}`,
    },
  };

  const url = `${apiUrl}mensagens/${id}`;

  try {
    const req = await fetch(url, headers);
    const res = await req.json();

    if (res.deleted)
      return dispatch({ type: REMOVE_MESSAGE, payload: { _id: id } });
  } catch (err) {
    return console.log(err);
  }
};