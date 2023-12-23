import axios from 'axios';
import { API_URL } from '../config';
import { toast } from 'react-toastify';
import { setUser, stopUserEdit, setTokens } from '../reducers/userReducer';

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

export const addPhone = (phone, token) => {
  return async (dispatch) => {
    try {
      const response = await axios.put(
        `${API_URL}/users/add-phone/`,
        {
          phone: phone,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        },
      );
      return response;
    } catch (error) {
      console.log(error.response?.data?.error);
    }
  };
};

export const changePassword = (password, confirmPassword, token) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        `${API_URL}/users/change-password/`,
        { password: password, confirm_password: confirmPassword },
        {
          headers: { Authorization: `Bearer ${token}` },
        },
      );
      return response;
    } catch (error) {
      console.log(error.response?.data?.error);
    }
  };
};

export const checkUser = (username, email, setConfigurePass) => {
  return async () => {
    try {
      const response = await axios.post(`${API_URL}/users/check-user/`, {
        username: username,
        email: email,
      });
      const { usernameResponse, emailResponse } = response.data;
      if (usernameResponse || emailResponse) {
        const message = `${
          usernameResponse && emailResponse
            ? 'с таким именем и почтой'
            : ` ${usernameResponse ? 'с таким именем' : 'с такой почтой'}`
        }`;
        errorNotify(`Пользователь ${message} уже зарегистрирован`);
      } else {
        setConfigurePass(true);
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const forgotPassword = (phone) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(`${API_URL}/users/forgot-password/`, {
        phone: phone,
      });
      return response;
    } catch (error) {
      console.log(error.response?.data?.error);
    }
  };
};

export const auth = () => {
  return async (dispatch) => {
    try {
      const access = await axios.post(`${API_URL}/users/login/refresh/`, {
        refresh: localStorage.getItem('refresh'),
      });
      const response = await axios.get(
        `${API_URL}/users/me/`,

        {
          headers: { Authorization: `Bearer ${access.data.access}` },
        },
      );

      dispatch(setUser(response.data));
      dispatch(
        setTokens(
          localStorage.getItem('access'),
          localStorage.getItem('refresh'),
        ),
      );
      localStorage.setItem('access', access.data.access);
    } catch (e) {
      console.log(e);
      localStorage.removeItem('access');
      localStorage.removeItem('refresh');
    }
  };
};

export const refreshTokens = (refresh, token) => {
  return async (dispatch) => {
    try {
      const access = await axios.post(`${API_URL}/users/login/refresh/`, {
        refresh: refresh,
      });
      return access;
    } catch (error) {
      console.log(error.response?.data?.error);
    }
  };
};

export const login = (username, password) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(`${API_URL}/users/login/`, {
        username: username,
        password: password,
      });
      dispatch(setUser(response.data));
      localStorage.setItem('access', response.data.access);
      localStorage.setItem('refresh', response.data.refresh);
    } catch (error) {
      errorNotify(error.response?.data?.error);
      console.log(error.response?.data?.error);
    }
  };
};

export const logout = (refresh, token) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        `${API_URL}/users/logout/`,
        { refresh_token: refresh },
        {
          headers: { Authorization: `Bearer ${token}` },
        },
      );
      return response;
    } catch (error) {
      console.log(error.response?.data?.error);
    }
  };
};

export const getMyProfile = (token) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `${API_URL}/users/me/`,

        {
          headers: { Authorization: `Bearer ${token}` },
        },
      );
      return response;
    } catch (error) {
      console.log(error.response?.data?.error);
    }
  };
};

export const updateUser = (
  first_name,
  last_name,
  username,
  birth_date,
  email,
  photo,
  token,
) => {
  return async (dispatch) => {
    try {
      const formData = new FormData();
      formData.append('first_name', first_name);
      formData.append('last_name', last_name);
      formData.append('username', username);
      formData.append('birth_date', birth_date);
      formData.append('email', email);
      formData.append('photo', photo, photo.name);

      const user = await axios.put(
        `${API_URL}/users/profile/update/`,
        formData,
        {
          headers: { Authorization: `Bearer ${token}` },
        },
      );
      dispatch(stopUserEdit());
      successNotify('Пользователь обновлен');
      return user;
    } catch (error) {
      console.log(error);
    }
  };
};

export const registration = (username, email, password, confirm_password) => {
  return async () => {
    try {
      const response = await axios.post(`${API_URL}/users/register/`, {
        email: email,
        username: username,
        password: password,
        confirm_password: confirm_password,
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  };
};

export const resetPassword = (user_id, code) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        `${API_URL}/users/reset-password/${user_id}/`,
        { code: code },
      );
      return response;
    } catch (error) {
      console.log(error.response?.data?.error);
    }
  };
};

export const verifyPhone = (code, token) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        `${API_URL}/users/verify-phone/`,
        { code: code },
        {
          headers: { Authorization: `Bearer ${token}` },
        },
      );
      return response;
    } catch (error) {
      console.log(error.response?.data?.error);
    }
  };
};
