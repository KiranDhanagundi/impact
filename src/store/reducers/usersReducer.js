import * as actions from "../../pages/App/Users/actions";
const initialState = {
  userData: [],
  loading: false,
  error: null,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.FETCH_USER_REQUEST:
      return { ...state, loading: true, error: null };
    case actions.FETCH_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        userData: action.payload,
        error: null,
      };
    case actions.FETCH_USER_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default usersReducer;
