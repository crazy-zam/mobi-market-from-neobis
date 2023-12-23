import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './test.css';
import ProductCard from '../UI/ProductCard';
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
  const product = useSelector((state) => state.product.products.results[0]);
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
      <div className={styles.profileContent}>Test page</div>
      <ProductCard
        id={product.id}
        img={product.images}
        liked={product.liked_by_current_user}
        likes={product.like_count}
        price={product.price}
        title={product.name}
        shortDescription={product.short_description}
        fullDescription={product.full_description}
      ></ProductCard>
    </div>
  );
};

export default Test;
