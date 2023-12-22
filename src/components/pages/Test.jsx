import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './test.css';

import {
  addPhone,
  changePassword,
  forgotPassword,
  refreshTokens,
  logout,
  getMyProfile,
  updateUser,
  resetPassword,
  verifyPhone,
} from './../../actions/user';

import {
  getAllProducts,
  addProduct,
  getProduct,
  updateProduct,
  deleteProduct,
  productLike,
  productUnlike,
  getLikedProducts,
  getMyProducts,
} from './../../actions/product';

const Test = () => {
  const [files, setFiles] = useState([]);
  const user = useSelector((state) => state.user);
  const myProducts = useSelector((state) => state.product.myProducts);
  const likedProducts = useSelector((state) => state.product.liked);
  const dispatch = useDispatch();
  const helper = () => {
    console.log(
      dispatch(
        updateUser(
          'Test1111',
          'Test1111',
          'Test1111',
          '2000-10-10',
          'Test1111@test.com',
          files[0],
          user.currentUser.access,
        ),
      ),
    );
  };
  const getLiked = () => {
    dispatch(getLikedProducts(user.currentUser.access, 1));
    setTimeout(() => {
      console.log(likedProducts);
    }, 1000);
  };
  const getMyprod = () => {
    dispatch(getMyProducts(user.currentUser.access, 1));
    setTimeout(() => {
      console.log(myProducts);
    }, 1000);
  };
  return (
    <div className={styles.profile}>
      <div className={styles.profileContent}>
        Test page
        <div className="userData">
          <div>first_name {user.currentUser.first_name}</div>
          <div>last_name {user.currentUser.last_name}</div>
          <div>username {user.currentUser.username}</div>
          <div>birth_date {user.currentUser.birth_date}</div>
          <div>phone {user.currentUser.phone}</div>
          <div>email {user.currentUser.email}</div>
          <button onClick={getMyprod}>getMyProd</button>
          <button onClick={getLiked}>getLiked</button>
          {/* <button onClick={helper}>Test button </button>
          <input
            onChange={(event) => {
              setFiles([...event.target.files]);
              console.log(files[0].name);
            }}
            type="file"
            id="upload-input"
            className={styles.uploadInput}
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Test;
