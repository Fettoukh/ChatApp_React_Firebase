export const initialState = {
  user: null,
  room: null,
};

export const actionTypes = {
  LOG_IN: "LOG_IN",
  LOG_OUT: "LOG_OUT",
  SET_ROOM: "SET_ROOM",
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.LOG_IN:
      return {
        ...state,
        user: action.user,
      };
    case actionTypes.LOG_OUT:
      return {
        ...state,
        user: null,
      };
    case actionTypes.SET_ROOM:
      return {
        ...state,
        room: action.room,
      };

    default:
      return state;
  }
};

export default reducer;
