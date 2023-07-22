export const cartReducer = (state, action) => {
  switch (action.type) {
    case "add_product":
      return { ...state, products: action.payload };
      break;
    case "add_to_cart":
      return { ...state, cart: [...state.cart, action.payload] };
      break;

    case "remove_from_cart":
      const removedCart = state.cart.filter(
        (data) => data?.id !== action.payload
      );

      return { ...state, cart: [...removedCart] };
      break;
    case "add_qty":
      const findIndex = state.cart.findIndex(
        (data) => data?.id === action.payload
      );

      if (findIndex >= 0) {
        state.cart[findIndex].qty += 1;
        return { ...state };
      }
      break;
    case "dec_qty":
      const findId = state.cart.findIndex(
        (data) => data?.id === action.payload
      );

      if (findId >= 0) {
        state.cart[findId].qty -= 1;
        return { ...state };
      }
      break;

    default:
      return state;
  }
};
