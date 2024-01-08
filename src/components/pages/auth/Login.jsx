import { ToastContainer } from 'react-toastify';
import { Link } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import InputForm from '../../UI/InputForm';
import PhonePopupWindow from '../../UI/PhonePopupWindow';
import authBackground from '../../../assets/auth background.png';
import styles from './auth.module.css';
import { useSelector } from 'react-redux';

function Login() {
  const phonePopup = useSelector((state) => state.app.phonePopup.isVisible);
  return (
    <div className={styles.auth}>
      <img className={styles.sidebar} src={authBackground} />
      <div className={styles.authSide}>
        <InputForm type="login" />
        <Link to="/registration" className={styles.registrationBtn}>
          Зарегистрироваться
        </Link>
        {phonePopup && <PhonePopupWindow></PhonePopupWindow>}
        <ToastContainer className="toast" />
      </div>
    </div>
  );
}

export default Login;
