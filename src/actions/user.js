import axios from 'axios';
import { API_URL } from '../config';
import { toast } from 'react-toastify';
import { setUser, stopUserEdit } from '../reducers/userReducer';

const errorNotify = (mess) =>
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

const successNotify = (mess) =>
  toast.success(`${mess}`, {
    position: 'top-center',
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'colored',
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
      errorNotify(error.response?.data?.error);
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
          errorNotify(`Пользователь ${message} уже зарегистрирован`);
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
  return async (dispatch) => {
    try {
      console.log(first_name, last_name, username, birth_date, email, token);
      await axios.put(
        `${API_URL}/users/profile/update/`,
        {
          first_name: first_name,
          last_name: last_name,
          username: username,
          birth_date: birth_date,
          email: email,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        },
      );
      dispatch(stopUserEdit());
      successNotify('Пользователь обновлен');
    } catch (error) {
      console.log(error);
    }
  };
};
