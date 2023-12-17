import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import InputForm from '../../UI/InputForm';

import authBackground from '../../../assets/auth background.png';
import './auth.css';

function Login() {
  return (
    <div className="auth">
      <img src={authBackground} />
      <div className="auth-side">
        <InputForm type="login" />
        <a href="">Регистрация</a>
        <ToastContainer className="toast" />
      </div>
    </div>
  );
}

export default Login;
