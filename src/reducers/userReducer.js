const SET_USER = 'SET_USER';
const LOGOUT = 'LOGOUT';
const EDIT_USER = 'EDIT_USER';
const STOP_EDIT_USER = 'STOP_EDIT_USER';

const defaultState = {
  currentUser: {},
  isAuth: false,
  isEdit: false,
};

export default function userReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        currentUser: action.payload,
        isAuth: true,
      };
    case LOGOUT:
      return {
        ...state,
        currentUser: {},
        isAuth: false,
      };
    case EDIT_USER:
      return { ...state, isEdit: true };
    case STOP_EDIT_USER:
      return { ...state, isEdit: false };
    default:
      return state;
  }
}

export const setUser = (user) => ({ type: SET_USER, payload: user });

export const logout = () => ({ type: LOGOUT });
export const userEdit = (payload) => ({ type: EDIT_USER, payload });
export const stopUserEdit = (payload) => ({ type: STOP_EDIT_USER, payload });
