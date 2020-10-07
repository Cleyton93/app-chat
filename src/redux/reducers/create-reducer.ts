export default (initialState: any,  handleActions: any) => {
  return (state = initialState, action: { type: string, payload: any }) => {
    if (handleActions.hasOwnProperty(action.type)) {
      return handleActions[action.type](state, action);
    }

    return state;
  }
};