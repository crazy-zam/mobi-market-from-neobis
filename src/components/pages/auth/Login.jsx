import { useState } from 'react';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import InputForm from '../../UI/InputForm';

import authBackground from '../../../assets/auth background.png';
import './auth.css';

function Login() {
  // const [user, setUser] = useState('');

  return (
    <div className="auth">
      <img src={authBackground} />
      <div className="auth-side">
        {/* <InputForm callback={dispatch(auth)} type="login" /> */}
        <InputForm type="login" />
        <a href="">Регистрация</a>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Login;
