import React from 'react';
import defaultImg from './../../assets/productImg.png';
import likeRed from './../../assets/like red.svg';
import likeGrey from './../../assets/like grey.svg';
import styles from './productMini.module.css';

const ProductMini = ({
  img = defaultImg,
  title = 'Title',
  price = '100$',
  likes = '200',
  liked = false,
}) => {
  return (
    <div className={styles.product}>
      <img className={styles.productImg} src={img} />
      <div className={styles.prodcutPrice}>{title}</div>
      <div className={styles.productTitle}>{price}</div>
      <div className={styles.likes}>
        <img className="like" src={liked ? likeRed : likeGrey} />
        <div className="productLikes">{likes}</div>
      </div>
    </div>
  );
};

export default ProductMini;
