import React from 'react';

import styles from './smallPopupWindow.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { hideSmallPopup } from '../../reducers/appReducer';
import { productUnlike } from '../../actions/product';
import { logoutAction } from '../../actions/user';

const SmallPopupWIndow = () => {
  const dispatch = useDispatch();
  const popup = useSelector((state) => state.app.smallPopup);
  const user = useSelector((state) => state.user);
  const callbacks = {
    unlike: () => dispatch(productUnlike(user.currentUser.access, popup.id)),
    logout: () => {
      dispatch(logoutAction(user.currentUser.refresh, user.currentUser.access));
    },
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.background}></div>
      <div className={styles.window}>
        <img src={popup.img} />
        <div>{popup.title}</div>
        <button
          onClick={() => {
            callbacks[popup.type]();
            dispatch(hideSmallPopup());
          }}
        >
          {popup.button}
        </button>
        <button onClick={() => dispatch(hideSmallPopup())}>Отмена</button>
      </div>
    </div>
  );
};

export default SmallPopupWIndow;
