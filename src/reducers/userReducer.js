const SET_USER = 'SET_USER';
const LOGOUT = 'LOGOUT';
const EDIT_USER = 'EDIT_USER';
const STOP_EDIT_USER = 'STOP_EDIT_USER';
const SET_TOKENS = 'SET_TOKENS';
const SET_NEW_USER = 'SET_NEW_USER';

const defaultState = {
  currentUser: {},
  newUser: {},
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
    case SET_TOKENS:
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          access: action.payload.access,
          refresh: action.payload.refresh,
        },
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

    case SET_NEW_USER:
      return {
        ...state,
        newUser: {
          username: action.payload.username,
          email: action.payload.email,
        },
      };
    default:
      return state;
  }
}

export const setUser = (user) => ({ type: SET_USER, payload: user });
export const setTokens = (access, refresh) => ({
  type: SET_TOKENS,
  payload: { access, refresh },
});
export const logout = () => ({ type: LOGOUT });
export const userEdit = (payload) => ({ type: EDIT_USER, payload });
export const stopUserEdit = (payload) => ({ type: STOP_EDIT_USER, payload });
export const setNewUser = (username, email) => ({
  type: SET_NEW_USER,
  payload: { username, email },
});
