import styles from './phonePopupWIndow.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { hidePhonelPopup } from '../../reducers/appReducer';
import { productUnlike } from '../../actions/product';
import { logoutAction } from '../../actions/user';
import { unlikeCurrentProd } from '../../reducers/appReducer';

const PhonePopupWindow = () => {
  const dispatch = useDispatch();
  const popup = useSelector((state) => state.app.phonePopup);
  const user = useSelector((state) => state.user);
  const callbacks = {
    phone: () => dispatch(productUnlike(user.currentUser.access, popup.id)),
    sms: () => {
      dispatch(unlikeCurrentProd());
      dispatch(productUnlike(user.currentUser.access, popup.id));
    },
    password: () => {
      dispatch(logoutAction(user.currentUser.refresh, user.currentUser.access));
    },
  };

  return (
    <div className={styles.wrapper}>
      <div
        className={styles.background}
        onClick={(e) => {
          if (e.target.className.toString().includes('background')) {
            dispatch(hidePhonelPopup());
          }
        }}
      ></div>
      <div className={styles.window}>
        <div className={styles.text}>{popup.title}</div>
        <img className={styles.image} src={popup.img} />
        <div className={styles.description}>{popup.description}</div>
        <div className={styles.label}>{popup.label}</div>
        <input type="text" />
        <input type="text" />
        <div>Таймер повторного запроса</div>
        <button className={styles.textBtn} onClick={() => {}}>
          Отправить код еще раз
        </button>
        <div className={styles.error}>Ошибка</div>
        <button className={styles.nextBtn} onClick={() => {}}>
          Отмена
        </button>
      </div>
    </div>
  );
};

export default PhonePopupWindow;
