import { useState } from 'react';
import Input from '../../UI/Input';
import Button from '../../UI/Button';
import authBackground from '../../../assets/auth background.png';
import './auth.css';

import axios from 'axios';
import { API_URL } from '../../../config';

function Login() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  function auth(login, password) {
    return async () => {
      await axios
        .post(`${API_URL}/users/login/`, {
          username: login,
          password: password,
        })
        .then((response) => console.log(response))
        .catch((err) => console.log(err.response?.data?.error));
    };
  }

  return (
    <div className="auth">
      <img src={authBackground} />
      <div className="auth-side">
        <div className="auth-form">
          <Input
            value={login}
            setValue={setLogin}
            type="text"
            placeholder="Имя пользователя"
          />
          <Input
            value={password}
            setValue={setPassword}
            type="text"
            placeholder="Пароль"
          />

          <a href="">Забыли пароль</a>

          <Button callback={auth(login, password)}></Button>
        </div>
        <a href="">Регистрация</a>
      </div>
    </div>
  );
}

export default Login;
