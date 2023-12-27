import React from 'react';
import { Link } from 'react-router-dom';

import { showSmallPopup } from '../../reducers/appReducer';
import { useDispatch, useSelector } from 'react-redux';
import profileLogodefault from './../../assets/profile default.svg';

import styles from './profileSidebar.module.css';
import { openProfileAction } from '../../actions/app';
import arrow from './../../assets/profile arrow.svg';
import imgLiked from './../../assets/profile liked.svg';
import imgExit from './../../assets/profile exit.svg';
import imgMyProducts from './../../assets/profile my products.svg';
import { openLikedAction, openMyProductsAction } from '../../actions/app';
import { getLikedProducts, getMyProducts } from '../../actions/product';

const ProfileSidebar = () => {
  const user = useSelector((state) => state.user.currentUser);

  const dispatch = useDispatch();
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebarHead}>
        <img
          className={styles.photo}
          src={user.photo ? user.photo : profileLogodefault}
          onClick={() => dispatch(openProfileAction())}
        />
        <div>
          <div>{user.username}</div>
          <div>{user.first_name}</div>
        </div>
      </div>
      {/* <Link to="/test">Test</Link> */}

      <div
        onClick={() => {
          dispatch(openLikedAction());
          dispatch(getLikedProducts(user.access));
        }}
        className={styles.btn}
      >
        <div className={styles.btnGrp}>
          <img src={imgLiked} />
          <div>Понравившиеся</div>
        </div>

        <img src={arrow} />
      </div>

      <div
        onClick={() => {
          dispatch(openMyProductsAction());
          dispatch(getMyProducts(user.access));
        }}
        className={styles.btn}
      >
        <div className={styles.btnGrp}>
          <img src={imgMyProducts} />
          <div>Мои товары</div>
        </div>

        <img src={arrow} />
      </div>

      <div
        onClick={() => {
          dispatch(
            showSmallPopup({
              img: imgExit,
              title: 'Вы действительно хотите выйтис  аккаунта?',
              button: 'Выйти',
              type: 'logout',
            }),
          );
        }}
        className={styles.btnExit}
      >
        <div className={styles.btnGrp}>
          <img src={imgExit} />
          <div>Выйти</div>
        </div>

        <img src={arrow} />
      </div>
    </div>
  );
};

export default ProfileSidebar;
