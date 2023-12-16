import React, { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import authBackground from '../../../assets/auth background.png';
import passIcon from '../../../assets/password icon.svg';
import './auth.css';
import InputForm from '../../UI/InputForm';
import Input from '../../UI/Input';
import Button from '../../UI/Button';
import { checkUser } from '../../../actions/user';

function Registration() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [configurePass, setConfigurePass] = useState(false);
  return (
    <div>
      <div className="auth">
        <img src={authBackground} />
        <div className="auth-side">
          <div className="reg-header">
            <a className="reg-back" href="">
              Назад
            </a>
            <h3 className="reg-title">Регистрация</h3>
          </div>
          <div className="auth-form">
            {configurePass && (
              <div className="password-reminder">
                <img src={passIcon} />
              </div>
            )}
            <InputForm firstField={`username`} secondField={`password`} />
          </div>
          <ToastContainer className="toast" />
        </div>
      </div>
    </div>
  );
}

export default Registration;
