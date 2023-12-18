import axios from 'axios';
import { API_URL } from '../config';
import { toast } from 'react-toastify';
import { setUser, stopUserEdit } from '../reducers/userReducer';

const notify = (mess) =>
  toast.error(`${mess}`, {
    position: 'top-center',
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'colored',
    closeButton: false,
  });

export const auth = (username, password) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(`${API_URL}/users/login/`, {
        username: username,
        password: password,
      });
      dispatch(setUser(response.data));
    } catch (error) {
      notify(error.response?.data?.error);
      console.log(error.response?.data?.error);
    }
  };
};

export const checkUser = (username, email, setConfigurePass) => {
  return async () => {
    await axios
      .post(`${API_URL}/users/check-user/`, {
        username: username,
        email: email,
      })
      .then((response) => {
        const { username, email } = response.data;
        if (username || email) {
          const message = `${
            username && email
              ? 'с таким именем и почтой'
              : ` ${username ? 'с таким именем' : 'с такой почтой'}`
          }`;
          notify(`Пользователь ${message} уже зарегистрирован`);
        } else {
          setConfigurePass(true);
        }
      })
      .catch((err) => console.log(err.response?.data?.error));
  };
};

export const registration = (username, email, password, confirm_password) => {
  return async () => {
    await axios
      .post(`${API_URL}/users/register/`, {
        email: email,
        username: username,
        password: password,
        confirm_password: confirm_password,
      })
      .then((response) => console.log(response))
      .catch((err) => console.log(err.response?.data?.error));
  };
};

export const updateUser = (
  first_name,
  last_name,
  username,
  birth_date,
  email,
  token,
) => {
  console.log('test');
  return async (dispatch) => {
    try {
      console.log('test2');
      dispatch(stopUserEdit());
    } catch (error) {
      console.log(error);
    }
  };
};
