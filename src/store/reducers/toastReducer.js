const initialState = {
  toast: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SHOW_TOAST":
      return {
        ...state,
        toast: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
