// const initialState = {
//   userDetails: null,
//   accessToken: null,
//   error: null,
// };

// const authReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case LOGIN_SUCCESS:
//       return {
//         ...state,
//         userDetails: action.payload.userDetails,
//         // accessToken: action.payload.accessToken,
//         error: null,
//       };
//     case SIGNUP_SUCCESS:
//       return {
//         ...state,
//         error: null,
//       };
//     case LOGIN_FAILURE:
//     case SIGNUP_FAILURE:
//       return {
//         ...state,
//         userDetails: null,
//         accessToken: null,
//         error: action.payload,
//       };
//     default:
//       return state;
//   }
// };

// export default authReducer;
