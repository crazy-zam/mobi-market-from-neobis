import React from 'react';
import defaultImg from './../../assets/productImg.png';
import likeRed from './../../assets/like red.svg';
import likeGrey from './../../assets/like grey.svg';
import styles from './productMini.module.css';
import { useDispatch } from 'react-redux';
import { productLike, productUnlike } from '../../actions/product';
import { useSelector } from 'react-redux';

const ProductMini = ({
  id,
  img = defaultImg,
  title = 'Title',
  price = '100$',
  likes = '200',
  liked = false,
}) => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.user.currentUser.access);
  return (
    <div className={styles.product}>
      <img className={styles.productImg} src={img} />
      <div className={styles.prodcutPrice}>{title}</div>
      <div className={styles.productTitle}>{price}</div>
      <div className={styles.likes}>
        <img
          className="like"
          src={liked ? likeRed : likeGrey}
          onClick={() => {
            liked
              ? dispatch(productUnlike(token, id))
              : dispatch(productLike(token, id));
          }}
        />
        <div className="productLikes">{likes}</div>
      </div>
    </div>
  );
};

export default ProductMini;
