import React from 'react';
import arrow from './../../assets/profile arrow.svg';
import imgLiked from './../../assets/profile liked.svg';
import imgExit from './../../assets/profile exit.svg';
import imgMyProducts from './../../assets/profile my products.svg';
import { openLikedAction, openMyProductsAction } from '../../actions/app';
import { getLikedProducts, getMyProducts } from '../../actions/product';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { showSmallPopup } from '../../reducers/appReducer';
import { logout } from '../../reducers/userReducer';

const ProfileSidebarBtn = ({ type, text }) => {
  const token = useSelector((state) => state.user.currentUser.access);
  const dispatch = useDispatch();

  const types = {
    liked: [
      imgLiked,
      () => {
        console.log('liked');
        dispatch(openLikedAction());
        dispatch(getLikedProducts(token));
      },
    ],
    products: [
      imgMyProducts,
      () => {
        console.log('products');
        dispatch(openMyProductsAction());
        dispatch(getMyProducts(token));
      },
    ],
    exit: [
      imgExit,
      () =>
        dispatch(
          showSmallPopup({
            img: imgExit,
            title: 'Вы действительно хотите выйтис  аккаунта?',
            button: 'Выйти',
            type: 'logout',
          }),
        ),
    ],
  };

  return (
    <div
      onClick={types[type][1]}
      className="profile-sidebar-btn
    "
    >
      <div
        className="profile-sidebar-btn-group
    "
      >
        <img src={types[type][0]} />
        <div>{text}</div>
      </div>

      <img src={arrow} />
    </div>
  );
};

export default ProfileSidebarBtn;
