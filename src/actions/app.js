import { openLiked } from '../reducers/appReducer';

export function openLikedAction() {
  return async (dispatch) => {
    try {
      dispatch(openLiked());
    } catch (error) {
      console.log(error);
    }
  };
}
