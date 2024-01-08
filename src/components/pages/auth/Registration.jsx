import React, { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import { Link } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import authBackground from '../../../assets/auth background.png';
import passIcon from '../../../assets/password icon.svg';
import styles from './auth.module.css';
import InputForm from '../../UI/InputForm';

function Registration() {
  const [configurePass, setConfigurePass] = useState(false);
  return (
    <div>
      <div className={styles.auth}>
        <img src={authBackground} />
        <div className={styles.authSide}>
          <div className="reg-header">
            <Link to="/login">Назад</Link>

            <h3 className="reg-title">Регистрация</h3>
          </div>
          <div className="auth-form">
            {configurePass && (
              <div className="password-reminder">
                <img src={passIcon} />
              </div>
            )}
            <InputForm
              type={configurePass ? 'passwordConfirm' : 'register'}
              setConfigurePass={setConfigurePass}
            />
          </div>
          <ToastContainer className="toast" />
        </div>
      </div>
    </div>
  );
}

export default Registration;
