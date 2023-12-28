const OPEN_LIKED = 'OPEN_LIKED';
const OPEN_MY_PRODUCTS = 'OPEN_MY_PRODUCTS';
const OPEN_PROFILE = 'OPEN_PROFILE';
const SHOW_POPUP_PROD = 'SHOW_POPUP_PROD';
const HIDE_POPUP_PROD = 'HIDE_POPUP_PROD';
const SHOW_ADD_POPUP = 'SHOW_ADDPOPUP';
const HIDE_ADD_POPUP = 'HIDE_ADD_POPUP';
const SHOW_SMALLPOPUP = 'SHOW_SMALLPOPUP';
const HIDE_SMALLPOPUP = 'HIDE_SMALLPOPUP';
const LIKE_CURRENT_PROD = 'LIKE_CURRENT_PROD';
const UNLIKE_CURRENT_PROD = 'UNLIKE_CURRENT_PROD';

const defaultState = {
  currentPage: 'main',
  isPopupVisible: false,
  currentProd: {},
  isAddProdPopupVisible: false,
  smallPopup: {
    isVisible: false,
    img: '',
    title: '',
    button: '',
    id: '',
    type: '',
  },
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

    case SHOW_SMALLPOPUP:
      return {
        ...state,
        smallPopup: {
          isVisible: true,
          img: action.payload.img,
          title: action.payload.title,
          button: action.payload.button,
          id: action.payload.id,
          type: action.payload.type,
        },
      };
    case HIDE_SMALLPOPUP:
      return { ...state, smallPopup: defaultState.smallPopup };

    case LIKE_CURRENT_PROD:
      return {
        ...state,
        currentProd: {
          ...state.currentProd,
          liked_by_current_user: true,
          like_count: state.currentProd.like_count + 1,
        },
      };
    case UNLIKE_CURRENT_PROD:
      return {
        ...state,
        currentProd: {
          ...state.currentProd,
          liked_by_current_user: false,
          like_count: state.currentProd.like_count - 1,
        },
      };
    case SHOW_ADD_POPUP:
      return { ...state, isAddProdPopupVisible: true };
    case HIDE_ADD_POPUP:
      return { ...state, isAddProdPopupVisible: false };

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

export const showSmallPopup = (popup) => ({
  type: SHOW_SMALLPOPUP,
  payload: popup,
});
export const hideSmallPopup = () => ({
  type: HIDE_SMALLPOPUP,
});

export const likeCurrentProd = () => ({
  type: LIKE_CURRENT_PROD,
});
export const unlikeCurrentProd = () => ({
  type: UNLIKE_CURRENT_PROD,
});

export const showAddProdPopup = () => ({
  type: SHOW_ADD_POPUP,
});
export const hideAddProdPopup = () => ({
  type: HIDE_ADD_POPUP,
});
