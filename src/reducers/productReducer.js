const SET_PRODUCTS = 'SET_PRODUCTS';
const LIKE_PRODUCT = 'LIKE_PRODUCT';

const defaultState = {
  products: [],
};

export default function productReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    case LIKE_PRODUCT:
      return {
        ...state,
        products: {
          ...state.products,
          ...state.products.results.map((product) =>
            product.id === action.payload
              ? { ...product, liked_by_current_user: true }
              : { ...product },
          ),
        },
      };
    default:
      return state;
  }
}

export const setAllProducts = (products) => ({
  type: SET_PRODUCTS,
  payload: products,
});

export const likeProduct = (id) => ({ type: LIKE_PRODUCT, payload: id });
