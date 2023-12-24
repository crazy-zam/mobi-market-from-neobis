const OPEN_LIKED = 'OPEN_LIKED';
const OPEN_MY_PRODUCTS = 'OPEN_MY_PRODUCTS';
const OPEN_PROFILE = 'OPEN_PROFILE';
const SHOW_POPUP_PROD = 'SHOW_POPUP_PROD';
const HIDE_POPUP_PROD = 'HIDE_POPUP_PROD';

const defaultState = {
  currentPage: 'main',
  isPopupVisible: false,
  currentProd: {},
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
    case SHOW_POPUP_PROD:
      return { ...state, isPopupVisible: true, currentProd: action.payload };
    case HIDE_POPUP_PROD:
      return { ...state, isPopupVisible: false, currentProd: {} };

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
  payload: 'myProducts',
});
export const openProfile = () => ({
  type: OPEN_LIKED,
  payload: 'profile',
});
export const showPopupProd = (product) => ({
  type: SHOW_POPUP_PROD,
  payload: product,
});
export const hidePopupProd = () => ({
  type: HIDE_POPUP_PROD,
});
