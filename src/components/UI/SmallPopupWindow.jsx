import React from 'react';

import styles from './smallPopupWindow.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { hideSmallPopup } from '../../reducers/appReducer';
import { productUnlike } from '../../actions/product';
import { logoutAction } from '../../actions/user';
import { unlikeCurrentProd } from '../../reducers/appReducer';

const SmallPopupWIndow = () => {
  const dispatch = useDispatch();
  const popup = useSelector((state) => state.app.smallPopup);
  const user = useSelector((state) => state.user);
  const callbacks = {
    unlike: () => dispatch(productUnlike(user.currentUser.access, popup.id)),
    unlikeCurrent: () => {
      dispatch(unlikeCurrentProd());
      dispatch(productUnlike(user.currentUser.access, popup.id));
    },
    logout: () => {
      dispatch(logoutAction(user.currentUser.refresh, user.currentUser.access));
    },
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.background}></div>
      <div className={styles.window}>
        <img className={styles.image} src={popup.img} />
        <div className={styles.text}>{popup.title}</div>
        <button
          className={styles.buttonAccept}
          onClick={() => {
            callbacks[popup.type]();
            dispatch(hideSmallPopup());
          }}
        >
          {popup.button}
        </button>
        <button
          className={styles.buttonDecline}
          onClick={() => dispatch(hideSmallPopup())}
        >
          Отмена
        </button>
      </div>
    </div>
  );
};

export default SmallPopupWIndow;
