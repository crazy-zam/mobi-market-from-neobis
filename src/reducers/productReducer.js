const SET_PRODUCTS = 'SET_PRODUCTS';
const LIKE_PRODUCT = 'LIKE_PRODUCT';
const SET_LIKED = 'SET_LIKED';

const UNLIKE_PRODUCT = 'UNLIKE_PRODUCT';
const SET_MY_PRODUCTS = 'SET_MY_PRODUCTS';

const defaultState = {
  products: [],
  liked: [],
  myProducts: [],
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
          results: [
            ...state.products.results.map((product, ind) =>
              product.id === action.payload
                ? {
                    ...product,
                    liked_by_current_user: true,
                    like_count: state.products.results[ind].like_count + 1,
                  }
                : { ...product },
            ),
          ],
        },
      };
    case UNLIKE_PRODUCT:
      return {
        ...state,
        products: {
          ...state.products,
          results: [
            ...state.products.results.map((product, ind) =>
              product.id === action.payload
                ? {
                    ...product,
                    liked_by_current_user: false,
                    like_count: state.products.results[ind].like_count - 1,
                  }
                : { ...product },
            ),
          ],
        },
      };
    case SET_LIKED:
      return {
        ...state,
        liked: action.payload,
      };
    case SET_MY_PRODUCTS:
      return {
        ...state,
        myProducts: action.payload,
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
export const unlikeProduct = (id) => ({ type: UNLIKE_PRODUCT, payload: id });

export const setLikedProducts = (liked) => ({
  type: SET_LIKED,
  payload: liked,
});

export const setMyProducts = (liked) => ({
  type: SET_MY_PRODUCTS,
  payload: liked,
});
