const OPEN_LIKED = 'OPEN_LIKED';
const OPEN_MY_PRODUCTS = 'OPEN_MY_PRODUCTS';
const OPEN_PROFILE = 'OPEN_PROFILE';

const defaultState = {
  currentPage: 'profile',
};

export default function productReducer(state = defaultState, action) {
  switch (action.type) {
    case OPEN_LIKED:
      return {
        ...state,
        currentPage: action.payload,
      };
    case OPEN_MY_PRODUCTS:
      return {
        ...state,
        currentPage: action.payload,
      };
    case OPEN_PROFILE:
      return {
        ...state,
        currentPage: action.payload,
      };
    default:
      return state;
  }
}

export const openLiked = () => ({
  type: OPEN_LIKED,
  payload: 'liked',
});

export const openMyProducts = () => ({
  type: OPEN_MY_PRODUCTS,
  payload: 'my products',
});
export const openProfile = () => ({
  type: OPEN_LIKED,
  payload: 'profile',
});
