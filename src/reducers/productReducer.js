const SET_PRODUCTS = 'SET_PRODUCTS';

const defaultState = {
  productList: [],
};

export default function productReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_PRODUCTS:
      return {
        ...state,
        productList: action.payload,
      };

    default:
      return state;
  }
}

export const setAllProducts = (products) => ({
  type: SET_PRODUCTS,
  payload: products,
});
