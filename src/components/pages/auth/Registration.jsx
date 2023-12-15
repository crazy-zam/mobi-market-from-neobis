import React from 'react';
import authBackground from '../../../assets/auth background.png';
import './auth.css';

function Registration() {
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
            <input type="text" />
            <input type="text" />
            <a href="">Забыли пароль</a>
            <button>Войти </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registration;
