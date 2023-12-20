import { openLiked, openMyProducts, openProfile } from '../reducers/appReducer';

export function openLikedAction() {
  return async (dispatch) => {
    try {
      dispatch(openLiked());
    } catch (error) {
      console.log(error);
    }
  };
}

export function openMyProductsAction() {
  return async (dispatch) => {
    try {
      dispatch(openMyProducts());
    } catch (error) {
      console.log(error);
    }
  };
}

export function openProfileAction() {
  return async (dispatch) => {
    try {
      dispatch(openProfile());
    } catch (error) {
      console.log(error);
    }
  };
}
