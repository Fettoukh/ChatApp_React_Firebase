export const initialState = {
  user: null,
};

export const actionTypes = {
  LOG_IN: "LOG_IN",
  LOG_OUT: "LOG_OUT",
};

const reducer = (state, action) => {
  console.log(action);
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

    default:
      return state;
  }
};

export default reducer;
