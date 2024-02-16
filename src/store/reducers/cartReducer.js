// cartReducer.js

const initialState = {
  items: [], // Array to store items in the cart
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        items: [...state.items, action.payload], // Add new item to cart
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload.id), // Remove item from cart
      };
    // Add more cases for other cart actions if needed
    default:
      return state;
  }
};

export default cartReducer;
